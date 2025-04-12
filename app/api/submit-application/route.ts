import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import InternshipApplication from '@/models/InternshipApplication';
import { v2 as cloudinary } from 'cloudinary';
import nodemailer from 'nodemailer';

// Configure Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

interface IResume {
  url: string;
  public_id: string;
}

interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  education: string;
  program: string;
  graduationYear: string;
  github?: string;
  portfolio?: string;
  experience?: string;
  skills: string;
  whyJoin: string;
  availability: string;
  agreeTerms: boolean;
  resume: File | null;
}

async function sendNotificationEmail(applicationData: Omit<ApplicationFormData, 'resume'>, resumeUrl?: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@devixlab.com', // Your recipient email
    subject: `New Internship Application: ${applicationData.fullName}`,
    html: `
      <h2>New Internship Application Received</h2>
      <p><strong>Name:</strong> ${applicationData.fullName}</p>
      <p><strong>Email:</strong> ${applicationData.email}</p>
      <p><strong>Phone:</strong> ${applicationData.phone}</p>
      <p><strong>Education:</strong> ${applicationData.education}</p>
      <p><strong>Program:</strong> ${applicationData.program}</p>
      <p><strong>Graduation Year:</strong> ${applicationData.graduationYear}</p>
      <p><strong>Skills:</strong> ${applicationData.skills}</p>
      <p><strong>Why Join:</strong> ${applicationData.whyJoin}</p>
      ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${resumeUrl}">Download Resume</a></p>` : ''}
      <p><strong>Application Details:</strong></p>
      <pre>${JSON.stringify(applicationData, null, 2)}</pre>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const formData = await request.formData();
    
    // Extract all text fields
    const applicationData: Omit<ApplicationFormData, 'resume'> = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      education: formData.get('education') as string,
      program: formData.get('program') as string,
      graduationYear: formData.get('graduationYear') as string,
      github: formData.get('github') as string || undefined,
      portfolio: formData.get('portfolio') as string || undefined,
      experience: formData.get('experience') as string || undefined,
      skills: formData.get('skills') as string,
      whyJoin: formData.get('whyJoin') as string,
      availability: formData.get('availability') as string,
      agreeTerms: formData.get('agreeTerms') === 'true',
    };

    // Handle file upload to Cloudinary
    const resumeFile = formData.get('resume') as File | null;
    let resumeData: IResume | null = null;

    if (resumeFile) {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Convert buffer to base64 string for Cloudinary
      const base64String = `data:${resumeFile.type};base64,${buffer.toString('base64')}`;
      
      // Upload to Cloudinary
      const uploadResult = await new Promise<any>((resolve, reject) => {
        cloudinary.uploader.upload(
          base64String,
          {
            folder: 'internship-applications',
            resource_type: 'auto',
            allowed_formats: ['pdf', 'doc', 'docx'],
            format: 'pdf',
            access_mode: 'public',
            type: 'upload'
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
      });

      resumeData = {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id
      };
    }

    // Create new application in MongoDB
    const newApplication = new InternshipApplication({
      ...applicationData,
      resume: resumeData
    });

    await newApplication.save();

    // Send email notification (don't await to avoid delaying response)
    sendNotificationEmail(applicationData, resumeData?.url)
      .catch(error => console.error('Error sending email:', error));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully',
        resumeUrl: resumeData?.url 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error submitting application', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
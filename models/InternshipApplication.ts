import { Schema, model, models, Document } from 'mongoose';

interface IResume {
    url: string;
    public_id?: string;  
    access_mode: 'public'; // Cloudinary specific
  }
export interface IInternshipApplication extends Document {
  fullName: string;
  email: string;
  phone: string;
  education: string;
  program: string;
  graduationYear: string;
  resume: IResume;
  github?: string;
  portfolio?: string;
  experience?: string;
  skills: string;
  whyJoin: string;
  availability: string;
  agreeTerms: boolean;
  submittedAt: Date;
}

const applicationSchema = new Schema<IInternshipApplication>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  education: { type: String, required: true },
  program: { type: String, required: true },
  graduationYear: { type: String, required: true },
  resume: {
    url: { type: String, required: true },
    public_id: { type: String, required: true },
      },
  github: String,
  portfolio: String,
  experience: String,
  skills: { type: String, required: true },
  whyJoin: { type: String, required: true },
  availability: { type: String, required: true },
  agreeTerms: { type: Boolean, required: true },
  submittedAt: { type: Date, default: Date.now }
});

const InternshipApplication = models.InternshipApplication || 
  model<IInternshipApplication>('InternshipApplication', applicationSchema);

export default InternshipApplication;
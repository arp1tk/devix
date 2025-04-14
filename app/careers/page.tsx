"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowRight,
  Upload,
  Code,
  Server,
  BookOpen,
  Users,
  Briefcase,
  GraduationCap,
  FileText,
  Clock,
  CheckCircle,
  RefreshCw,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FormData = {
  fullName: string
  email: string
  phone: string
  education: string
  program: string
  graduationYear: string
  resume: File | null
  github: string
  portfolio: string
  experience: string
  skills: string
  whyJoin: string
  availability: string
  agreeTerms: boolean
}

export default function InternshipApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    program: "",
    graduationYear: "",
    resume: null,
    github: "",
    portfolio: "",
    experience: "",
    skills: "",
    whyJoin: "",
    availability: "",
    agreeTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [resumeFileName, setResumeFileName] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({
        ...formData,
        resume: file,
      })
      setResumeFileName(file.name)
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      agreeTerms: checked,
    })
  }

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      education: "",
      program: "",
      graduationYear: "",
      resume: null,
      github: "",
      portfolio: "",
      experience: "",
      skills: "",
      whyJoin: "",
      availability: "",
      agreeTerms: false,
    })
    setResumeFileName("")
    setError("")
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Create FormData object for the API request
      const apiFormData = new FormData()
      
      // Append all form fields to FormData
      Object.keys(formData).forEach(key => {
        const formKey = key as keyof FormData
        if (formKey === 'resume' && formData[formKey]) {
          apiFormData.append('resume', formData[formKey] as File)
        } else if (formKey === 'agreeTerms') {
          apiFormData.append(formKey, formData[formKey].toString())
        } else if (formData[formKey] !== null && formData[formKey] !== undefined) {
          apiFormData.append(formKey, formData[formKey] as string)
        }
      })

      // Send form data to API endpoint
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        body: apiFormData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit application')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while submitting the application')
      console.error('Submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-black z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,80,220,0.15),transparent_50%)]"></div>

        <Card className="w-full max-w-2xl mx-auto border border-slate-800 bg-black/80 backdrop-blur-sm z-10 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5"></div>

          <CardHeader className="text-center relative z-10">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(120,80,220,0.5)]">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Application Submitted!
            </CardTitle>
            <CardDescription className="text-slate-300 text-lg mt-4 max-w-md mx-auto">
              Thank you for applying to our internship program. We'll review your application and get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center pt-6 pb-8 relative z-10">
            <Button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 h-12 px-8 text-base shadow-[0_0_15px_rgba(120,80,220,0.5)]"
              onClick={() => (window.location.href = "/")}
            >
              Return to Home
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 bg-black py-12 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,80,220,0.12),transparent_50%)]"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-10 text-center">
            <h1 className="text-4xl text-white md:text-5xl font-bold leading-tight">
              Apply for our
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 ml-2">
                Internship Program
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Join our team to work in the exact environment as any other enterprises company. Let's connect and create
              wonders together.
            </p>
          </div>

          <Card className="border border-slate-800 bg-black/80 backdrop-blur-sm overflow-hidden relative mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5"></div>

            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-indigo-400" />
                <CardTitle className="text-white">Job Description</CardTitle>
              </div>
              <CardDescription>Expand to view the complete internship details</CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="job-description" className="border-b-0">
                  <AccordionTrigger className="py-4 text-lg font-medium text-slate-200 hover:text-indigo-400 transition-colors">
                    View Complete Job Description
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2 text-indigo-400">
                          <GraduationCap className="h-5 w-5" />
                          Qualifications
                        </h3>
                        <ul className="space-y-2 text-slate-300 ml-6 list-disc">
                          <li>Knowledge of Computer Science principles</li>
                          <li>Experience or coursework in Back-End, Front-End Web Development and Software Development</li>
                          <li>Skills in Node.js, Express.js, and related technologies</li>
                          <li>Strong analytical and problem-solving abilities</li>
                          <li>Ability to work independently and collaboratively in a remote setting</li>
                          <li>Effective communication and teamwork skills</li>
                          <li>Currently enrolled in or recent graduate of a Computer Science or related program</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2 text-purple-400">
                          <FileText className="h-5 w-5" />
                          Details
                        </h3>
                        <ul className="space-y-2 text-slate-300 ml-6 list-disc">
                          <li>
                            It is a <span className="font-semibold text-white">Paid</span> Internship (₹5000 stipend)
                          </li>
                          <li>Duration will be 1 Months (Extendable based on performance)</li>
                          <li>Shortlisted candidates will be Interviewed personally by the team</li>
                          <li>
                            Benefits include:
                            <ul className="ml-6 mt-2 space-y-1 list-circle">
                              <li>LOR (Letter of Recommendation)</li>
                              <li>Certificates</li>
                              <li>Stipend</li>
                            </ul>
                          </li>
                        
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border border-slate-800 bg-black/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5"></div>

            <CardHeader className="relative z-10">
              <CardTitle className="text-white">Application Form</CardTitle>
              <CardDescription>Please fill out all the required fields to submit your application</CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              {error && (
                <div className="mb-6 p-4 rounded-lg bg-red-950/50 border border-red-800/50 text-red-300">
                  <p className="font-medium">Error: {error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 pb-2 mb-4">
                    <div className="p-1.5 rounded-md bg-indigo-950/50 text-indigo-400">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-200">Personal Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-slate-200">
                        Full Name <span className="text-indigo-400">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-11 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-200">
                        Email <span className="text-indigo-400">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-11 text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-200">
                      Phone Number <span className="text-indigo-400">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-11 text-white"
                    />
                  </div>
                </div>

                {/* Education Section */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 pb-2 mb-4">
                    <div className="p-1.5 rounded-md bg-indigo-950/50 text-indigo-400">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-200">Education</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="education" className="text-slate-200">
                        Institution Name <span className="text-indigo-400">*</span>
                      </Label>
                      <Input
                        id="education"
                        name="education"
                        placeholder="University of Technology"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-11 text-white"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="program" className="text-slate-200">
                          Program <span className="text-indigo-400">*</span>
                        </Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("program", value)}
                          value={formData.program}
                        >
                          <SelectTrigger className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-11 text-white">
                            <SelectValue placeholder="Select program" className="text-white" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-slate-700 text-white">
                            <SelectItem value="computer_science">Computer Science</SelectItem>
                            <SelectItem value="software_engineering">Software Engineering</SelectItem>
                            <SelectItem value="information_technology">Information Technology</SelectItem>
                            <SelectItem value="computer_engineering">Computer Engineering</SelectItem>
                            <SelectItem value="other">Other Related Field</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="graduationYear" className="text-slate-200">
                          Graduation Year <span className="text-indigo-400">*</span>
                        </Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("graduationYear", value)}
                          value={formData.graduationYear}
                        >
                          <SelectTrigger className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-11 text-white">
                            <SelectValue placeholder="Select year" className="text-white" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-slate-700 text-white">
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                            <SelectItem value="2027">2027</SelectItem>
                            <SelectItem value="graduated">Already Graduated</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills & Experience Section */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 pb-2 mb-4">
                    <div className="p-1.5 rounded-md bg-indigo-950/50 text-indigo-400">
                      <Code className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-200">Skills & Experience</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="skills" className="text-slate-200">
                        Technical Skills <span className="text-indigo-400">*</span>
                      </Label>
                      <Textarea
                        id="skills"
                        name="skills"
                        placeholder="List your programming languages, frameworks, and tools (e.g., JavaScript, React, Node.js, Express.js, OOP, etc.)"
                        value={formData.skills}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 min-h-[100px] text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-slate-200">
                        Relevant Experience
                      </Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        placeholder="Describe any relevant projects, coursework, or previous experience in software development (e.g., Node.js backend development)"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 min-h-[100px] text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Links & Portfolio Section */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 pb-2 mb-4">
                    <div className="p-1.5 rounded-md bg-purple-950/50 text-purple-400">
                      <Server className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-200">Links & Portfolio</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="github" className="text-slate-200">
                          GitHub Profile
                        </Label>
                        <Input
                          id="github"
                          name="github"
                          placeholder="https://github.com/yourusername"
                          value={formData.github}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-11 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio" className="text-slate-200">
                          Portfolio Website
                        </Label>
                        <Input
                          id="portfolio"
                          name="portfolio"
                          placeholder="https://yourportfolio.com"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-11 text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resume" className="text-slate-200">
                        Resume/CV <span className="text-indigo-400">*</span>
                      </Label>
                      <div className="flex items-center">
                        <Label
                          htmlFor="resume-upload"
                          className="cursor-pointer flex items-center gap-3 w-full p-4 border border-dashed border-slate-700 rounded-md bg-slate-900/30 hover:bg-slate-800/50 transition-colors group"
                        >
                          <div className="p-2 rounded-full bg-indigo-950/50 text-indigo-400 group-hover:bg-indigo-900/50 transition-colors">
                            <Upload className="h-5 w-5" />
                          </div>
                          <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                            {resumeFileName || "Upload your resume (PDF, DOC, DOCX)"}
                          </span>
                        </Label>
                        <Input
                          id="resume-upload"
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                          className="hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 pb-2 mb-4">
                    <div className="p-1.5 rounded-md bg-purple-950/50 text-purple-400">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-200">Additional Information</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="whyJoin" className="text-slate-200">
                        Why do you want to join this internship? <span className="text-indigo-400">*</span>
                      </Label>
                      <Textarea
                        id="whyJoin"
                        name="whyJoin"
                        placeholder="Tell us why you're interested in this internship and what you hope to gain from it"
                        value={formData.whyJoin}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 min-h-[100px] text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability" className="text-slate-200">
                        Availability <span className="text-indigo-400">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("availability", value)}
                        value={formData.availability}
                      >
                        <SelectTrigger className="bg-slate-900/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-11 text-white">
                          <SelectValue placeholder="Select your availability" className="text-white" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-700 text-white">
                          <SelectItem value="immediate">Immediate</SelectItem>
                          <SelectItem value="two_weeks">Within 2 weeks</SelectItem>
                          <SelectItem value="one_month">Within 1 month</SelectItem>
                          <SelectItem value="custom">Other (specify in cover letter)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <CardFooter className="px-0 pt-6 flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 h-12 px-8 w-full sm:w-auto text-base shadow-[0_0_15px_rgba(120,80,220,0.5)]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-slate-700 text-slate-300 bg-slate-800/50 hover:bg-slate-700/50 hover:text-white h-12 px-8 w-full sm:w-auto"
                    onClick={resetForm}
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reset Form
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
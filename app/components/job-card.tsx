"use client"

import { useState } from "react"
import Link from "next/link"
import { Briefcase, Building, ChevronDown, ChevronUp, Globe, GraduationCap, ListChecks, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface JobCardProps {
  title: string
  company: string
  jobType: string
  qualifications: string[]
  responsibilities: string[]
  benefits: string[]
  formPath: string
}

export default function JobCard({
  title,
  company,
  jobType,
  qualifications,
  responsibilities,
  benefits,
  formPath,
}: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="border border-slate-800 bg-black/80 backdrop-blur-sm overflow-hidden relative transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5"></div>

      <CardHeader className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
            <div className="flex items-center mt-2 text-slate-300 space-x-4">
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-1 text-indigo-400" />
                <span>{company}</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1 text-indigo-400" />
                <span>{jobType}</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/30"
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium flex items-center gap-2 text-slate-200">
              <GraduationCap className="h-5 w-5 text-indigo-400" />
              Minimum Qualifications
            </h3>
            <ul className="mt-2 space-y-1 text-slate-300 ml-6 list-disc">
              {qualifications.slice(0, isExpanded ? qualifications.length : 2).map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
              {!isExpanded && qualifications.length > 2 && (
                <li className="text-indigo-400">+ {qualifications.length - 2} more</li>
              )}
            </ul>
          </div>

          {isExpanded && (
            <>
              <div>
                <h3 className="text-lg font-medium flex items-center gap-2 text-slate-200">
                  <ListChecks className="h-5 w-5 text-purple-400" />
                  Responsibilities
                </h3>
                <ul className="mt-2 space-y-1 text-slate-300 ml-6 list-disc">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium flex items-center gap-2 text-slate-200">
                  <Award className="h-5 w-5 text-purple-400" />
                  Benefits
                </h3>
                <ul className="mt-2 space-y-1 text-slate-300 ml-6 list-disc">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </CardContent>

      <CardFooter className="relative z-10 flex justify-between items-center">
        <Button
          variant="ghost"
          className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/30 px-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Learn more"}
        </Button>
        <Link href={formPath} target="_self">
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
            <Briefcase className="mr-2 h-4 w-4" />
            Apply Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

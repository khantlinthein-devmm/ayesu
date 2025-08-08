import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Users,
  Shield,
  Globe,
  Download,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-600/20 to-sky-600/20"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Photo Section */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src="images/ayesu.jpg"
                  alt="Aye Su Hlaing Pyae - Professional Photo"
                  className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/20 backdrop-blur-sm"
                />
                {/* <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 to-pink-600/30"></div> */}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-navy-600/20 to-sky-600/20 backdrop-blur-sm border border-white/10 rounded-full text-sky-400 font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                CONTENT MODERATOR
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
                AYE SU
                <br />
                HLAING PYAE
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Adaptable and detail-focused professional with over 2 years of
                combined experience in information processing and customer
                service. Skilled at reviewing content with accuracy, ensuring
                policy compliance, and communicating effectively across diverse
                cultural backgrounds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-navy-600 to-sky-600 hover:from-navy-700 hover:to-sky-700 text-white border-0"
                >
                  <a href="mailto:ayesuhlaingpyae.mm@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-black hover:bg-white/10 hover:text-white backdrop-blur-sm"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <a href="/resume.pdf" target="_blank">
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-400 to-sky-400 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-sky-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                With a strong foundation in English, business, and hospitality,
                I bring exceptional attention to detail and cultural sensitivity
                to content moderation roles. My experience in visa processing
                and customer service has honed my ability to review sensitive
                information accurately while maintaining strict confidentiality
                standards.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I am passionate about creating safe online environments and have
                a keen interest in social media trends and community guidelines,
                making me well-equipped to identify and address content
                violations effectively.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-navy-600 to-sky-600 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-medium">
                        ayesuhlaingpyae.mm@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-navy-600 to-sky-600 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-medium">0922975058</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-navy-600 to-sky-600 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white font-medium">
                        Bangkok, Thailand
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-400 to-sky-400 bg-clip-text text-transparent mb-4">
              Core Competencies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-sky-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-navy-900/50 to-sky-900/50 backdrop-blur-sm border-white/10 hover:border-navy-500/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Attention to Detail
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Proven ability to review and process information with
                  exceptional accuracy, ensuring compliance with policies and
                  guidelines.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-navy-900/50 to-sky-900/50 backdrop-blur-sm border-white/10 hover:border-navy-500/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Cross-Cultural Communication
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Experienced in communicating effectively with clients from
                  diverse cultural backgrounds with empathy and professionalism.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-navy-900/50 to-sky-900/50 backdrop-blur-sm border-white/10 hover:border-navy-500/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Digital Literacy
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Proficient in digital tools, social media platforms, and
                  online community guidelines with strong technical
                  adaptability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="px-4 py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-400 to-sky-400 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-sky-600 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "MS Office Suite",
              "Google Workspace",
              "Content Review",
              "Policy Compliance",
              "Social Media Platforms",
              "Community Guidelines",
              "Data Privacy",
              "Customer Service",
              "Multilingual Communication",
            ].map((skill, index) => (
              <Badge
                key={index}
                className="px-6 py-3 text-sm bg-gradient-to-r from-navy-600/20 to-sky-600/20 backdrop-blur-sm border-white/10 text-white hover:from-navy-600/30 hover:to-sky-600/30 transition-all duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-400 to-sky-400 bg-clip-text text-transparent mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-sky-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-white/10 hover:border-navy-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Visa Service Specialist
                    </h3>
                    <p className="text-white font-medium text-lg">
                      Freelance • Bangkok, Thailand
                    </p>
                  </div>
                  <span className="text-gray-400 font-medium bg-white/10 px-4 py-2 rounded-full mt-4 lg:mt-0">
                    2022 - 2024
                  </span>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    Assisted clients with visa application processes, ensuring
                    accurate and complete documentation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    Provided guidance on required forms, embassy requirements,
                    and travel regulations
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    Maintained client confidentiality and handled sensitive
                    information securely
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-white/10 hover:border-navy-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Customer Service Representative
                    </h3>
                    <p className="text-white font-medium text-lg">
                      Freelance • Bangkok, Thailand
                    </p>
                  </div>
                  <span className="text-gray-400 font-medium bg-white/10 px-4 py-2 rounded-full mt-4 lg:mt-0">
                    2022 - 2024
                  </span>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    Managed customer inquiries via phone, email, and in-person
                    interactions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    Resolved complaints efficiently while maintaining
                    professional and empathetic communication
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    Maintained detailed records of client interactions for
                    follow-up and service improvement
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-400 to-sky-400 bg-clip-text text-transparent mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-sky-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-white/10 hover:border-navy-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Hospitality & Tourism
                </h3>
                <p className="text-white font-medium text-lg mb-2">
                  Kasem Bundit University
                </p>
                <p className="text-gray-400">Bangkok, Thailand</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-white/10 hover:border-navy-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Business Studies
                  </h3>
                  <p className="text-white font-medium mb-2">
                    Strategy First
                  </p>
                  <p className="text-gray-400">Yangon, Myanmar</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-white/10 hover:border-navy-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2">
                    English Language
                  </h3>
                  <p className="text-white font-medium mb-2">
                    Wall Street English
                  </p>
                  <p className="text-gray-400">Yangon, Myanmar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-navy-900 via-sky-900 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-600/20 to-sky-600/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Contribute
          </h2>
          <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Let&#39;s discuss how my experience in information processing and
            cross-cultural communication can benefit your content moderation
            team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              <a href="mailto:ayesuhlaingpyae.mm@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

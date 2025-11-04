import { MessageCircle, Mail, Phone, Linkedin, Calendar } from "lucide-react"
import Link from "next/link"

export default function MentorsPage() {
  const mentors = [
    {
      name: "Sarah Chen",
      role: "Senior Student - Computer Science",
      expertise: ["Programming", "Career Advice", "Internships"],
      bio: "4th year CS student with internship experience at tech companies. Happy to help with coding projects and career planning.",
      email: "sarah.chen@ntu.edu.sg",
      linkedin: "linkedin.com/in/sarahchen",
      availability: "Weekday evenings",
      image: "/asian-female-student-smiling.jpg",
    },
    {
      name: "Marcus Tan",
      role: "Graduate Teaching Assistant",
      expertise: ["Mathematics", "Research", "Graduate School"],
      bio: "PhD candidate in Applied Mathematics. Can guide you through research opportunities and graduate school applications.",
      email: "marcus.tan@ntu.edu.sg",
      linkedin: "linkedin.com/in/marcustan",
      availability: "Tuesday & Thursday afternoons",
      image: "/asian-male-graduate-student.jpg",
    },
    {
      name: "Dr. Emily Wong",
      role: "Faculty Mentor - Business School",
      expertise: ["Entrepreneurship", "Business Strategy", "Networking"],
      bio: "Assistant Professor with industry experience. Passionate about helping students develop business acumen and leadership skills.",
      email: "emily.wong@ntu.edu.sg",
      phone: "+65 6790 1234",
      availability: "By appointment",
      image: "/asian-female-professor-professional.jpg",
    },
    {
      name: "Raj Patel",
      role: "International Student Ambassador",
      expertise: ["Cultural Integration", "Student Life", "Campus Navigation"],
      bio: "3rd year Engineering student from India. Here to help international students settle in and make the most of NTU life.",
      email: "raj.patel@ntu.edu.sg",
      linkedin: "linkedin.com/in/rajpatel",
      availability: "Flexible - weekends preferred",
      image: "/indian-male-student-friendly.jpg",
    },
    {
      name: "Jessica Lim",
      role: "Peer Counselor",
      expertise: ["Mental Health", "Stress Management", "Work-Life Balance"],
      bio: "Trained peer counselor and Psychology major. Offering a listening ear and support for students navigating university challenges.",
      email: "jessica.lim@ntu.edu.sg",
      availability: "Monday to Friday, 2-6 PM",
      image: "/asian-female-student-caring.jpg",
    },
    {
      name: "David Ng",
      role: "Career Services Advisor",
      expertise: ["Resume Review", "Interview Prep", "Job Search"],
      bio: "Former recruiter turned career advisor. Helping students land their dream jobs through personalized career coaching.",
      email: "david.ng@ntu.edu.sg",
      phone: "+65 6790 5678",
      availability: "Weekdays 9 AM - 5 PM",
      image: "/asian-male-professional-advisor.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[color:var(--color-off-white)] to-[color:var(--color-terracotta-light)]/20">
      {/* Header */}
      <header className="border-b border-[color:var(--color-warm-gray)]/10 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-[color:var(--color-sage)] hover:text-[color:var(--color-sage)]/80 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-[color:var(--color-warm-gray)] sm:text-3xl">Connect with Mentors</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[color:var(--color-warm-gray)]">Meet Your Mentors</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[color:var(--color-warm-gray)]/80">
            Connect with experienced students, faculty, and advisors who are here to support your journey at NTU. Reach
            out to schedule a chat!
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-xl"
            >
              {/* Profile Image */}
              <div className="mb-4 flex justify-center">
                <img
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  className="h-32 w-32 rounded-full object-cover ring-4 ring-[color:var(--color-sage-light)]"
                />
              </div>

              {/* Name & Role */}
              <div className="mb-3 text-center">
                <h3 className="text-xl font-bold text-[color:var(--color-warm-gray)]">{mentor.name}</h3>
                <p className="text-sm font-medium text-[color:var(--color-sage)]">{mentor.role}</p>
              </div>

              {/* Expertise Tags */}
              <div className="mb-4 flex flex-wrap justify-center gap-2">
                {mentor.expertise.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-[color:var(--color-terracotta-light)] px-3 py-1 text-xs font-semibold text-[color:var(--color-terracotta)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="mb-4 text-sm leading-relaxed text-[color:var(--color-warm-gray)]/70">{mentor.bio}</p>

              {/* Contact Info */}
              <div className="space-y-2 border-t border-[color:var(--color-warm-gray)]/10 pt-4">
                <div className="flex items-center gap-2 text-sm text-[color:var(--color-warm-gray)]">
                  <Mail className="h-4 w-4 text-[color:var(--color-sage)]" />
                  <a href={`mailto:${mentor.email}`} className="hover:text-[color:var(--color-sage)] transition-colors">
                    {mentor.email}
                  </a>
                </div>
                {mentor.phone && (
                  <div className="flex items-center gap-2 text-sm text-[color:var(--color-warm-gray)]">
                    <Phone className="h-4 w-4 text-[color:var(--color-sage)]" />
                    <a href={`tel:${mentor.phone}`} className="hover:text-[color:var(--color-sage)] transition-colors">
                      {mentor.phone}
                    </a>
                  </div>
                )}
                {mentor.linkedin && (
                  <div className="flex items-center gap-2 text-sm text-[color:var(--color-warm-gray)]">
                    <Linkedin className="h-4 w-4 text-[color:var(--color-sage)]" />
                    <a
                      href={`https://${mentor.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[color:var(--color-sage)] transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-[color:var(--color-warm-gray)]">
                  <Calendar className="h-4 w-4 text-[color:var(--color-sage)]" />
                  <span>{mentor.availability}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

import { Compass, BookOpen, GraduationCap, Heart, Briefcase, Users } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const resourceCategories = [
    {
      icon: GraduationCap,
      title: "Academic Support",
      description: "Study guides, tutoring services, and academic planning tools",
      resources: [
        { name: "Study Techniques Guide", type: "PDF" },
        { name: "Time Management Workshop", type: "Video" },
        { name: "Academic Calendar", type: "Tool" },
        { name: "Library Resources", type: "Link" },
      ],
    },
    {
      icon: Heart,
      title: "Mental Health & Wellness",
      description: "Counseling services, stress management, and self-care resources",
      resources: [
        { name: "Counseling Services", type: "Service" },
        { name: "Meditation & Mindfulness", type: "App" },
        { name: "Stress Management Tips", type: "Article" },
        { name: "Wellness Workshops", type: "Event" },
      ],
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Internship opportunities, resume building, and career guidance",
      resources: [
        { name: "Resume Templates", type: "Template" },
        { name: "Interview Preparation", type: "Guide" },
        { name: "Career Fair Calendar", type: "Event" },
        { name: "Networking Tips", type: "Article" },
      ],
    },
    {
      icon: Users,
      title: "Student Life",
      description: "Clubs, events, housing, and campus activities",
      resources: [
        { name: "Club Directory", type: "Directory" },
        { name: "Housing Guide", type: "Guide" },
        { name: "Campus Events", type: "Calendar" },
        { name: "Student Organizations", type: "List" },
      ],
    },
    {
      icon: BookOpen,
      title: "Financial Aid",
      description: "Scholarships, grants, and financial planning assistance",
      resources: [
        { name: "Scholarship Database", type: "Database" },
        { name: "Financial Aid Guide", type: "PDF" },
        { name: "Budgeting Tools", type: "Tool" },
        { name: "Work-Study Programs", type: "Program" },
      ],
    },
    {
      icon: Compass,
      title: "International Students",
      description: "Visa support, cultural integration, and language resources",
      resources: [
        { name: "Visa Information", type: "Guide" },
        { name: "Language Exchange", type: "Program" },
        { name: "Cultural Events", type: "Calendar" },
        { name: "International Office", type: "Service" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[color:var(--color-off-white)] to-[color:var(--color-sage-light)]/20">
      {/* Header */}
      <header className="border-b border-[color:var(--color-warm-gray)]/10 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-[color:var(--color-terracotta)] hover:text-[color:var(--color-terracotta)]/80 transition-colors"
            >
              <Compass className="h-5 w-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-[color:var(--color-warm-gray)] sm:text-3xl">Resource Library</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[color:var(--color-warm-gray)]">Find Your Path</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[color:var(--color-warm-gray)]/80">
            Explore our comprehensive library of resources designed to support your academic journey and personal growth
            at NTU.
          </p>
        </div>

        {/* Resource Categories Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-[color:var(--color-terracotta-light)] p-3">
                    <Icon className="h-6 w-6 text-[color:var(--color-terracotta)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--color-warm-gray)]">{category.title}</h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[color:var(--color-warm-gray)]/70">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.resources.map((resource, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between rounded-lg bg-[color:var(--color-off-white)] p-3 transition-colors hover:bg-[color:var(--color-sage-light)]/30"
                    >
                      <span className="text-sm font-medium text-[color:var(--color-warm-gray)]">{resource.name}</span>
                      <span className="rounded-full bg-[color:var(--color-sage)] px-2 py-1 text-xs font-semibold text-white">
                        {resource.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

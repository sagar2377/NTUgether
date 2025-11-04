import { BookOpen, Search, ChevronRight, GraduationCap, Users, Heart, Briefcase, Home, Globe } from "lucide-react"
import Link from "next/link"

export default function WisdomHubPage() {
  const categories = [
    {
      icon: GraduationCap,
      title: "Academics",
      articles: [
        "How to Choose Your Major",
        "Study Techniques That Actually Work",
        "Understanding the Credit System",
        "Academic Integrity and Plagiarism",
        "Making the Most of Office Hours",
      ],
    },
    {
      icon: Users,
      title: "Student Life",
      articles: [
        "Joining Clubs and Organizations",
        "Making Friends in University",
        "Campus Facilities Guide",
        "Student Government and Leadership",
        "Balancing Social Life and Studies",
      ],
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      articles: [
        "Dealing with Physical Stress in a New Environment",
        "Managing Stress During Exams",
        "Mental Health Resources on Campus",
        "Healthy Eating on a Student Budget",
        "Exercise and Fitness Facilities",
        "Sleep Hygiene for Students",
      ],
    },
    {
      icon: Briefcase,
      title: "Career & Internships",
      articles: [
        "Finding Your First Internship",
        "Building a Strong Resume",
        "Networking Tips for Students",
        "Interview Preparation Guide",
        "Exploring Career Paths",
      ],
    },
    {
      icon: Home,
      title: "Housing & Living",
      articles: [
        "On-Campus Housing Guide",
        "Off-Campus Apartment Hunting",
        "Roommate Compatibility Tips",
        "Budgeting for Living Expenses",
        "Transportation Options Around NTU",
      ],
    },
    {
      icon: Globe,
      title: "International Students",
      articles: [
        "Visa and Immigration Guide",
        "Cultural Adjustment Tips",
        "Language Support Services",
        "Banking and Financial Setup",
        "Exploring Singapore as a Student",
      ],
    },
  ]

  const featuredArticles = [
    {
      title: "Dealing with Physical Stress in a New Environment",
      excerpt:
        "Moving to university can trigger physical stress responses. Learn how to recognize symptoms like headaches, fatigue, and tension, and discover practical techniques to manage them.",
      readTime: "10 min read",
    },
    {
      title: "Surviving Finals Week: A Complete Guide",
      excerpt:
        "Learn proven strategies to manage your time, reduce stress, and ace your exams during the most challenging week of the semester.",
      readTime: "8 min read",
    },
    {
      title: "The Ultimate Guide to NTU Campus Life",
      excerpt:
        "Everything you need to know about navigating campus, from the best study spots to hidden gems and student favorites.",
      readTime: "12 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[color:var(--color-off-white)] to-[color:var(--color-sage-light)]/10">
      {/* Header */}
      <header className="border-b border-[color:var(--color-warm-gray)]/10 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-[color:var(--color-terracotta)] hover:text-[color:var(--color-terracotta)]/80 transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-[color:var(--color-warm-gray)] sm:text-3xl">Wisdom Hub</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[color:var(--color-warm-gray)]">Your Student Knowledge Base</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[color:var(--color-warm-gray)]/80">
            A comprehensive collection of guides, tips, and insights from students and faculty to help you thrive at
            NTU.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-12 max-w-2xl">
          <div className="relative flex items-center rounded-full bg-white shadow-lg">
            <Search className="absolute left-6 h-5 w-5 text-[color:var(--color-warm-gray)]/60" />
            <input
              type="text"
              placeholder="Search articles, guides, and tips..."
              className="w-full rounded-full bg-transparent py-4 pl-14 pr-6 text-base text-[color:var(--color-warm-gray)] placeholder:text-[color:var(--color-warm-gray)]/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-terracotta)]"
            />
          </div>
        </div>

        {/* Featured Articles */}
        <section className="mb-16">
          <h3 className="mb-6 text-2xl font-bold text-[color:var(--color-warm-gray)]">Featured Articles</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredArticles.map((article, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-2xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-[color:var(--color-terracotta-light)] px-3 py-1 text-xs font-semibold text-[color:var(--color-terracotta)]">
                    Featured
                  </span>
                  <span className="text-xs text-[color:var(--color-warm-gray)]/60">{article.readTime}</span>
                </div>
                <h4 className="mb-3 text-lg font-bold text-[color:var(--color-warm-gray)] group-hover:text-[color:var(--color-terracotta)] transition-colors">
                  {article.title}
                </h4>
                <p className="mb-4 text-sm leading-relaxed text-[color:var(--color-warm-gray)]/70">{article.excerpt}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-[color:var(--color-sage)] group-hover:gap-2 transition-all">
                  Read More <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Grid */}
        <section>
          <h3 className="mb-6 text-2xl font-bold text-[color:var(--color-warm-gray)]">Browse by Category</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-[color:var(--color-sage-light)] p-3">
                      <Icon className="h-6 w-6 text-[color:var(--color-sage)]" />
                    </div>
                    <h4 className="text-xl font-bold text-[color:var(--color-warm-gray)]">{category.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {category.articles.map((article, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="group flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-[color:var(--color-off-white)]"
                        >
                          <span className="text-sm font-medium text-[color:var(--color-warm-gray)] group-hover:text-[color:var(--color-terracotta)] transition-colors">
                            {article}
                          </span>
                          <ChevronRight className="h-4 w-4 text-[color:var(--color-warm-gray)]/40 group-hover:text-[color:var(--color-terracotta)] transition-colors" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[color:var(--color-warm-gray)]/10">
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm font-semibold text-[color:var(--color-sage)] hover:gap-2 transition-all"
                    >
                      View All Articles <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-[color:var(--color-terracotta-light)] to-[color:var(--color-sage-light)] p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-[color:var(--color-warm-gray)]">
            Can't Find What You're Looking For?
          </h3>
          <p className="mb-6 text-[color:var(--color-warm-gray)]/80">
            Our community is always growing. Submit a topic request and we'll create content to help you and other
            students.
          </p>
          <button className="rounded-full bg-[color:var(--color-terracotta)] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[color:var(--color-terracotta)]/90">
            Request a Topic
          </button>
        </section>
      </main>
    </div>
  )
}

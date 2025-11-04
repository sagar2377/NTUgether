"use client"

import type React from "react"

import { Search, Compass, MessageCircle, BookOpen } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/diverse-group-of-university-students-chatting-and-.jpg"
          alt="Students on campus"
          className="h-full w-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl space-y-8 text-center">
          {/* Logo/Brand */}
          <div className="mb-6">
            <h1 className="font-sans text-4xl font-bold tracking-tight text-[color:var(--color-off-white)] sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-balance">Navigate NTUgether with Confidence</span>
            </h1>
          </div>

          {/* Sub-headline */}
          <p className="mx-auto max-w-3xl text-pretty text-lg font-medium text-[color:var(--color-off-white)]/95 sm:text-xl md:text-2xl">
            Your student-led hub for honest advice, personalized resources, and real connections.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-12 w-full max-w-3xl">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative flex items-center rounded-full bg-[color:var(--color-off-white)] shadow-2xl transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <Search className="absolute left-6 h-6 w-6 text-[color:var(--color-warm-gray)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What's on your mind? e.g., 'surviving finals week'..."
                  className="w-full rounded-full bg-transparent py-5 pl-16 pr-6 text-base text-[color:var(--color-warm-gray)] placeholder:text-[color:var(--color-warm-gray)]/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-terracotta)] sm:text-lg"
                />
              </div>
            </form>
          </div>

          {/* Feature Grid */}
          <div className="mx-auto mt-16 grid w-full max-w-5xl gap-6 sm:grid-cols-3">
            {/* Column 1: Find Your Path */}
            <Link href="/resources" className="block">
              <div className="group rounded-2xl bg-[color:var(--color-off-white)]/95 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:bg-[color:var(--color-off-white)] hover:shadow-xl cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-[color:var(--color-terracotta-light)] p-4 transition-colors group-hover:bg-[color:var(--color-terracotta)]">
                    <Compass className="h-8 w-8 text-[color:var(--color-terracotta)] transition-colors group-hover:text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[color:var(--color-warm-gray)]">Find Your Path</h3>
                <p className="text-balance text-sm leading-relaxed text-[color:var(--color-warm-gray)]/80">
                  Get personalized resources for your academic and social needs.
                </p>
              </div>
            </Link>

            {/* Column 2: Connect with a Mentor */}
            <Link href="/mentors" className="block">
              <div className="group rounded-2xl bg-[color:var(--color-off-white)]/95 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:bg-[color:var(--color-off-white)] hover:shadow-xl cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-[color:var(--color-sage-light)] p-4 transition-colors group-hover:bg-[color:var(--color-sage)]">
                    <MessageCircle className="h-8 w-8 text-[color:var(--color-sage)] transition-colors group-hover:text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[color:var(--color-warm-gray)]">Connect with a Mentor</h3>
                <p className="text-balance text-sm leading-relaxed text-[color:var(--color-warm-gray)]/80">
                  Chat with a senior, a local, or a professor who gets it.
                </p>
              </div>
            </Link>

            {/* Column 3: Explore the Wisdom Hub */}
            <Link href="/wisdom-hub" className="block">
              <div className="group rounded-2xl bg-[color:var(--color-off-white)]/95 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:bg-[color:var(--color-off-white)] hover:shadow-xl cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-[color:var(--color-terracotta-light)] p-4 transition-colors group-hover:bg-[color:var(--color-terracotta)]">
                    <BookOpen className="h-8 w-8 text-[color:var(--color-terracotta)] transition-colors group-hover:text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[color:var(--color-warm-gray)]">Explore the Wisdom Hub</h3>
                <p className="text-balance text-sm leading-relaxed text-[color:var(--color-warm-gray)]/80">
                  Browse our library of tips, guides, and stories.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

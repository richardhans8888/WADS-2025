import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Star, Play, Award, Filter } from 'lucide-react';

const tutors = [
  {
    id: 1,
    name: "Dr. Alan Grant",
    subject: "Paleontology",
    specialties: ["Dinosaurs", "Fossils", "Evolutionary Biology"],
    rating: 4.9,
    reviews: 120,
    hourlyRate: 50,
    bio: "Experienced paleontologist with a passion for teaching about prehistoric life. I make learning about dinosaurs fun and engaging!",
    avatar: "AG",
    available: true
  },
  {
    id: 2,
    name: "Ellie Sattler",
    subject: "Botany",
    specialties: ["Paleobotany", "Plant Biology", "Ecology"],
    rating: 5.0,
    reviews: 95,
    hourlyRate: 45,
    bio: "Specializing in ancient plant life and ecosystems. Let's explore the world of plants together!",
    avatar: "ES",
    available: true
  },
  {
    id: 3,
    name: "Ian Malcolm",
    subject: "Mathematics",
    specialties: ["Chaos Theory", "Calculus", "Probability"],
    rating: 4.7,
    reviews: 200,
    hourlyRate: 60,
    bio: "Life finds a way, and so will you with your math problems. I specialize in complex systems and chaos theory.",
    avatar: "IM",
    available: false
  },
  {
    id: 4,
    name: "John Hammond",
    subject: "Business",
    specialties: ["Entrepreneurship", "Management", "Genetics"],
    rating: 4.5,
    reviews: 80,
    hourlyRate: 100,
    bio: "I spare no expense in providing top-tier business tutoring. Learn how to build an empire.",
    avatar: "JH",
    available: true
  }
];

const subjects = [
  "All Subjects",
  "Mathematics",
  "Science",
  "History",
  "Literature",
  "Languages",
  "Business",
  "Computer Science",
  "Art"
];

export default function TutorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Find a Tutor</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Connect with expert tutors for personalized learning.
        </p>
      </div>

      {/* Hero: Featured & Top Rated */}
      <section className="mb-10">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              <span className="text-gray-900 dark:text-white">Featured</span>{' '}
              <span className="text-blue-600">&amp; Top Rated</span>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Connect with our most impactful mentors and high-demand workshops.
            </p>
          </div>
          <div className="hidden md:flex gap-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Tutor Card */}
          <div className="relative rounded-2xl overflow-hidden border bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 shadow-md min-h-[360px] md:min-h-[420px]">
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(transparent,rgba(0,0,0,0.6))]" />
            <div className="relative p-6 md:p-10 text-gray-900 dark:text-white h-full flex flex-col justify-between">
              <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-yellow-500/90 text-black border border-yellow-400">
                <Award className="h-3 w-3" />
                Tutor of the Month
              </span>
              <div>
                <h3 className="text-2xl md:text-4xl font-extrabold mt-4">Sarah Jenkins</h3>
                <p className="text-gray-600 dark:text-white/80 text-sm md:text-base leading-relaxed mt-3 max-w-prose">
                Unlock the universe with visual learning. Sarah excels at breaking down complex topics with clarity.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <Link href="/profile">
                  <Button className="shadow">View Profile</Button>
                </Link>
                <Button variant="ghost" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Intro
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Workshop Card */}
          <div className="relative rounded-2xl overflow-hidden border bg-white dark:bg-slate-900 shadow-md min-h-[360px] md:min-h-[420px]">
            <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(to_top,rgba(0,0,0,0.5),transparent)]" />
            <div className="relative p-6 md:p-10 text-gray-900 dark:text-white">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl md:text-3xl font-extrabold">Python for Data Science</h3>
                <span className="text-xs font-bold bg-rose-500 text-white px-2 py-1 rounded-full">
                  3 Spots Left
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-amber-500">
                <Star className="h-4 w-4 fill-amber-400" />
                <span className="text-sm">4.9</span>
                <span className="text-xs text-gray-600 dark:text-white/70">(128 reviews)</span>
              </div>
              <p className="text-gray-600 dark:text-white/80 text-sm md:text-base leading-relaxed mt-2 max-w-prose">
                Interactive cohort designed to get you analyzing data quickly. Perfect for beginners transitioning to tech.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-gray-100 text-gray-700 border border-gray-200 dark:bg-white/10 dark:text-white dark:border-white/10 px-2.5 py-1 rounded-full">Live Coding</span>
                <span className="text-xs bg-gray-100 text-gray-700 border border-gray-200 dark:bgWhite/10 dark:text-white dark:border-white/10 px-2.5 py-1 rounded-full">Group Projects</span>
                <span className="text-xs bg-gray-100 text-gray-700 border border-gray-200 dark:bg-white/10 dark:text-white dark:border-white/10 px-2.5 py-1 rounded-full">Certificate</span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="text-xs text-gray-500 dark:text-white/60">Starts in</span>
                <Button variant="outline" className="bg-white text-slate-900 hover:bg-gray-100">
                  Reserve Spot
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
          <Button variant="outline" size="sm" className="whitespace-nowrap">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          {['All Subjects','Mathematics','Languages','Computer Science','Science','Arts'].map((c) => (
            <button
              key={c}
              className="text-xs md:text-sm rounded-full border px-3 py-1.5 text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-white/10"
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Modules Section (under hero) */}
      <section className="mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4">
          {['All Modules','Computer Science','Mathematics','Engineering','Humanities','Business'].map((c, idx) => (
            <button
              key={c}
              className={`text-xs md:text-sm rounded-full border px-3 py-1.5 ${
                idx === 0
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-white text-gray-900 dark:bg-gradient-to-r dark:from-indigo-900 dark:via-purple-900 dark:to-blue-900 dark:text-white border shadow-sm mb-8 min-h-[180px] flex items-center justify-between overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="font-extrabold text-xl md:text-2xl">Can’t find a tutor right now?</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-white/80 mt-1">
              Our AI Tutor specializes in many modules and answers in seconds.
            </p>
          </div>
          <Link href="/ai-tutor">
            <Button variant="outline" className="bg-white text-slate-900 hover:bg-gray-100">
              Try AI Assistant
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { code: 'CS-301', title: 'Data Structures & Algorithms', desc: 'Master trees, graphs, and sorting algorithms with expert guidance.', online: 5, tag: 'AI Ready', color: 'bg-blue-500/10 text-blue-500' },
            { code: 'MATH-202', title: 'Linear Algebra II', desc: 'Vector spaces, eigenvalues, and complex matrices explained simply.', online: 12, tag: 'AI Ready', color: 'bg-orange-500/10 text-orange-500' },
            { code: 'LIT-240', title: 'Modernist Poetry', desc: 'Exploring Eliot, Pound, and Woolf. Essay help available.', online: 1, tag: '1 Tutor Available', color: 'bg-pink-500/10 text-pink-500' },
            { code: 'PHYS-400', title: 'Quantum Mechanics I', desc: 'Wave functions and the Schrödinger equation.', online: 0, tag: 'Use AI Bot', color: 'bg-indigo-500/10 text-indigo-500' },
            { code: 'ECON-101', title: 'Microeconomics', desc: 'Supply, demand, and market equilibrium principles.', online: 3, tag: 'AI Ready', color: 'bg-emerald-500/10 text-emerald-500' },
            { code: 'PSY-200', title: 'Cognitive Psychology', desc: 'Memory, perception, and problem‑solving processes.', online: 7, tag: 'AI Ready', color: 'bg-rose-500/10 text-rose-500' },
          ].map((m, i) => (
            <div key={m.code} className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 flex flex-col justify-between h-full hover:bg-gray-50 dark:hover:bg-[#253045] transition-colors shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${m.color}`}>
                    {m.code}
                  </span>
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, idx) => (
                      <div key={idx} className="h-6 w-6 rounded-full border-2 border-white dark:border-[#1e293b] bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[10px] text-gray-500">
                        {/* Placeholder avatars */}
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-400 to-gray-600 opacity-50"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{m.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  {m.desc}
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-xs font-medium border-t border-gray-100 dark:border-gray-700/50 pt-4">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  {m.online} Tutors Online
                </div>
                {m.tag.includes('AI') && (
                  <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400">
                     <Award className="h-3 w-3" />
                     AI Ready
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

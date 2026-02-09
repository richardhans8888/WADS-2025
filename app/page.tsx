import { Search, TrendingUp, Star, Calendar, MessageSquare, Video, BookOpen, Award, Clock, Users, ArrowRight, Sparkles } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-violet-500/20 bg-slate-900/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/50 animate-pulse">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent" style={{ fontFamily: 'ui-serif, Georgia, Cambria, serif' }}>
                  MentorHub
                </h1>
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <button className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">
                Browse Mentors
              </button>
              <button className="text-sm font-medium text-slate-400 transition-colors hover:text-violet-400">
                My Sessions
              </button>
              <div className="h-9 w-9 overflow-hidden rounded-full bg-gradient-to-br from-orange-500 to-pink-500 ring-2 ring-violet-500/30 shadow-lg shadow-orange-500/30">
                <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-white">
                  JD
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative mx-auto max-w-7xl px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent" style={{ fontFamily: 'ui-serif, Georgia, Cambria, serif' }}>
            Welcome back, Jordan
          </h2>
          <p className="text-base text-slate-300">
            Continue your learning journey with the best mentors
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10 group">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-violet-400 transition-colors group-hover:text-cyan-400" />
            <input
              type="text"
              placeholder="Search for mentors, skills, or topics..."
              className="w-full rounded-2xl border border-violet-500/30 bg-slate-900/60 px-12 py-4 text-base text-white placeholder-slate-400 shadow-lg shadow-violet-500/10 backdrop-blur-xl transition-all focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/20 focus:shadow-violet-500/20"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <kbd className="rounded-lg border border-violet-500/30 bg-slate-800/80 px-2 py-1 text-xs font-medium text-violet-300">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            icon={<Clock className="h-5 w-5" />}
            label="Hours Learned"
            value="24.5"
            trend="+12% this month"
            color="from-cyan-500 via-blue-500 to-indigo-600"
            shadowColor="shadow-cyan-500/30"
          />
          <StatsCard
            icon={<Users className="h-5 w-5" />}
            label="Active Mentors"
            value="7"
            trend="3 new this week"
            color="from-violet-500 via-purple-500 to-fuchsia-600"
            shadowColor="shadow-violet-500/30"
          />
          <StatsCard
            icon={<Award className="h-5 w-5" />}
            label="Completed Sessions"
            value="18"
            trend="+3 this week"
            color="from-orange-500 via-amber-500 to-yellow-500"
            shadowColor="shadow-orange-500/30"
          />
          <StatsCard
            icon={<Star className="h-5 w-5" />}
            label="Avg Rating Given"
            value="4.8"
            trend="Excellent feedback"
            color="from-emerald-500 via-teal-500 to-cyan-500"
            shadowColor="shadow-emerald-500/30"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Upcoming & Recommended */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Sessions */}
            <section className="rounded-2xl border border-violet-500/20 bg-slate-900/60 backdrop-blur-xl p-6 shadow-lg shadow-violet-500/10">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">
                  Upcoming Sessions
                </h3>
                <button className="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                <SessionCard
                  mentorName="Sarah Chen"
                  topic="Advanced React Patterns"
                  time="Today, 3:00 PM"
                  duration="1 hour"
                  avatar="SC"
                  avatarColor="from-pink-500 via-rose-500 to-red-500"
                  isAI={false}
                />
                <SessionCard
                  mentorName="AI Mentor: CodeMaster"
                  topic="System Design Interview Prep"
                  time="Tomorrow, 10:00 AM"
                  duration="45 min"
                  avatar="AI"
                  avatarColor="from-violet-500 via-purple-500 to-fuchsia-500"
                  isAI={true}
                />
                <SessionCard
                  mentorName="Marcus Johnson"
                  topic="Career Growth Strategy"
                  time="Friday, 2:30 PM"
                  duration="1 hour"
                  avatar="MJ"
                  avatarColor="from-cyan-500 via-blue-500 to-indigo-500"
                  isAI={false}
                />
              </div>
            </section>

            {/* Recommended Mentors */}
            <section className="rounded-2xl border border-violet-500/20 bg-slate-900/60 backdrop-blur-xl p-6 shadow-lg shadow-violet-500/10">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Recommended for You
                  </h3>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-500/50">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>
                <button className="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300">
                  See More
                </button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <MentorCard
                  name="Dr. Emily Watson"
                  specialty="Machine Learning"
                  rating={4.9}
                  sessions={234}
                  rate={120}
                  avatar="EW"
                  skills={["Python", "TensorFlow", "PyTorch"]}
                />
                <MentorCard
                  name="AI Coach: DataWiz"
                  specialty="Data Science"
                  rating={4.8}
                  sessions={1523}
                  rate={0}
                  avatar="AI"
                  skills={["Statistics", "SQL", "Analytics"]}
                  isAI={true}
                />
              </div>
            </section>
          </div>

          {/* Right Column - Quick Actions & Activity */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <section className="rounded-2xl border border-violet-500/20 bg-slate-900/60 backdrop-blur-xl p-6 shadow-lg shadow-violet-500/10">
              <h3 className="mb-4 text-lg font-bold text-white">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <QuickActionButton icon={<Video />} label="Start AI Session" color="violet" />
                <QuickActionButton icon={<Calendar />} label="Book a Mentor" color="fuchsia" />
                <QuickActionButton icon={<MessageSquare />} label="Messages" badge={3} color="cyan" />
                <QuickActionButton icon={<BookOpen />} label="Learning Paths" color="emerald" />
              </div>
            </section>

            {/* Recent Activity */}
            <section className="rounded-2xl border border-violet-500/20 bg-slate-900/60 backdrop-blur-xl p-6 shadow-lg shadow-violet-500/10">
              <h3 className="mb-4 text-lg font-bold text-white">
                Recent Activity
              </h3>
              <div className="space-y-4">
                <ActivityItem
                  icon={<Star className="h-4 w-4 text-amber-400" />}
                  text="You rated Sarah Chen 5 stars"
                  time="2 hours ago"
                />
                <ActivityItem
                  icon={<MessageSquare className="h-4 w-4 text-cyan-400" />}
                  text="New message from Marcus"
                  time="5 hours ago"
                />
                <ActivityItem
                  icon={<Award className="h-4 w-4 text-fuchsia-400" />}
                  text="Completed React certification"
                  time="1 day ago"
                />
                <ActivityItem
                  icon={<TrendingUp className="h-4 w-4 text-emerald-400" />}
                  text="Learning streak: 7 days"
                  time="Today"
                />
              </div>
            </section>

            {/* AI Mentor CTA */}
            <section className="overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 p-6 text-white shadow-xl shadow-violet-500/30">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 animate-pulse" />
              </div>
              <h3 className="mb-2 text-lg font-bold">Try AI Mentors</h3>
              <p className="mb-4 text-sm text-violet-100">
                Get instant help 24/7 with our AI-powered mentors. Perfect for quick questions and practice.
              </p>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-violet-600 transition-all hover:scale-105 hover:shadow-lg">
                Start Free Session
                <ArrowRight className="h-4 w-4" />
              </button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

// Component: Stats Card
function StatsCard({ icon, label, value, trend, color, shadowColor }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  color: string;
  shadowColor: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-slate-900/60 backdrop-blur-xl p-5 shadow-lg transition-all hover:scale-105 hover:shadow-2xl hover:border-violet-500/40">
      <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg ${shadowColor} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
        {icon}
      </div>
      <div className="mb-1 text-sm font-medium text-slate-400">
        {label}
      </div>
      <div className="mb-1 text-3xl font-bold tracking-tight text-white">
        {value}
      </div>
      <div className="text-xs text-slate-500">
        {trend}
      </div>
      {/* Glow effect */}
      <div className={`absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${color} opacity-20 blur-3xl transition-opacity group-hover:opacity-30`}></div>
    </div>
  );
}

// Component: Session Card
function SessionCard({ mentorName, topic, time, duration, avatar, avatarColor, isAI }: {
  mentorName: string;
  topic: string;
  time: string;
  duration: string;
  avatar: string;
  avatarColor: string;
  isAI?: boolean;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-violet-500/20 bg-slate-800/40 backdrop-blur-sm p-4 transition-all hover:border-violet-400/40 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-violet-500/10">
      <div className={`relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${avatarColor} text-sm font-bold text-white shadow-lg transition-transform group-hover:scale-110`}>
        {avatar}
        {isAI && (
          <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 ring-2 ring-slate-900 shadow-lg shadow-cyan-500/50 animate-pulse">
            <Sparkles className="h-3 w-3 text-white" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="mb-1 font-semibold text-white">
          {topic}
        </div>
        <div className="text-sm text-slate-400">
          {mentorName}
        </div>
      </div>
      <div className="flex flex-col items-end gap-1 text-right">
        <div className="flex items-center gap-1.5 text-sm font-medium text-cyan-400">
          <Clock className="h-3.5 w-3.5" />
          {time}
        </div>
        <div className="text-xs text-slate-500">
          {duration}
        </div>
      </div>
    </div>
  );
}

// Component: Mentor Card
function MentorCard({ name, specialty, rating, sessions, rate, avatar, skills, isAI }: {
  name: string;
  specialty: string;
  rating: number;
  sessions: number;
  rate: number;
  avatar: string;
  skills: string[];
  isAI?: boolean;
}) {
  return (
    <div className="group overflow-hidden rounded-xl border border-violet-500/20 bg-slate-800/40 backdrop-blur-sm transition-all hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-500/20 hover:scale-105">
      <div className="p-4">
        <div className="mb-3 flex items-start justify-between">
          <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${isAI ? 'from-violet-500 via-purple-500 to-fuchsia-500' : 'from-emerald-500 via-teal-500 to-cyan-500'} text-sm font-bold text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
            {avatar}
            {isAI && (
              <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-pink-500 ring-2 ring-slate-900 shadow-lg shadow-orange-500/50 animate-pulse">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-1 ring-1 ring-amber-500/30">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-amber-300">
              {rating}
            </span>
          </div>
        </div>
        <div className="mb-1 font-bold text-white">
          {name}
        </div>
        <div className="mb-3 text-sm text-slate-400">
          {specialty}
        </div>
        <div className="mb-3 flex flex-wrap gap-1">
          {skills.map((skill, idx) => (
            <span key={idx} className="rounded-md bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-300 ring-1 ring-violet-500/30">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs text-slate-500">
            {sessions} sessions
          </div>
          <div className="text-sm font-bold text-cyan-400">
            {isAI ? 'Free' : `$${rate}/hr`}
          </div>
        </div>
      </div>
      <div className="border-t border-violet-500/20 bg-slate-800/60 px-4 py-2.5">
        <button className="w-full rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-2 text-sm font-semibold text-white transition-all hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-lg hover:shadow-violet-500/30">
          {isAI ? 'Start Chat' : 'Book Session'}
        </button>
      </div>
    </div>
  );
}

// Component: Quick Action Button
function QuickActionButton({ icon, label, color = 'slate', badge }: {
  icon: React.ReactNode;
  label: string;
  color?: string;
  badge?: number;
}) {
  const colorClasses = {
    violet: 'bg-violet-500/20 text-violet-300 ring-violet-500/30 group-hover:bg-violet-500/30',
    fuchsia: 'bg-fuchsia-500/20 text-fuchsia-300 ring-fuchsia-500/30 group-hover:bg-fuchsia-500/30',
    cyan: 'bg-cyan-500/20 text-cyan-300 ring-cyan-500/30 group-hover:bg-cyan-500/30',
    emerald: 'bg-emerald-500/20 text-emerald-300 ring-emerald-500/30 group-hover:bg-emerald-500/30',
    slate: 'bg-slate-700 text-slate-400 group-hover:bg-slate-600'
  };

  return (
    <button className="group relative flex w-full items-center gap-3 rounded-xl border border-violet-500/20 bg-slate-800/40 backdrop-blur-sm px-4 py-3 text-left transition-all hover:border-violet-400/40 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-violet-500/10 hover:scale-105">
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${colorClasses[color as keyof typeof colorClasses]} ring-1 transition-all`}>
        {icon}
      </div>
      <span className="flex-1 font-medium text-white">
        {label}
      </span>
      {badge && (
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 text-xs font-bold text-white shadow-lg shadow-fuchsia-500/50 animate-pulse">
          {badge}
        </div>
      )}
      <ArrowRight className="h-4 w-4 text-violet-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
    </button>
  );
}

// Component: Activity Item
function ActivityItem({ icon, text, time }: {
  icon: React.ReactNode;
  text: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-3 group">
      <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-slate-800/60 ring-1 ring-violet-500/20 transition-all group-hover:scale-110 group-hover:ring-violet-400/40">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-slate-200">
          {text}
        </div>
        <div className="text-xs text-slate-500">
          {time}
        </div> 
      </div>
    </div>
  );
}
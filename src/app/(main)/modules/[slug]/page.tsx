import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Users, BookOpen } from "lucide-react";

export default function ModuleDetailsPage({ params }: { params: { slug: string } }) {
  const title = params.slug.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
  const outcomes = [
    "Master core concepts with intuitive explanations",
    "Apply techniques to real problems",
    "Prepare for quizzes and exams with practice sets",
  ];
  const tutors = [
    { id: 1, name: "Dr. Sarah Jenkins", role: "Astrophysics", rate: 150 },
    { id: 2, name: "David Kim", role: "Senior Engineer", rate: 80 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0F172A] text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link href="/tutors">
          <Button variant="ghost" className="text-gray-500 dark:text-gray-400 hover:text-white hover:bg-white/10 -ml-2 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0F1117] p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-blue-600 text-white">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h1 className="text-2xl font-bold">{title}</h1>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Comprehensive module overview, curated lessons and practice sets designed to build mastery.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0F1117] p-6">
              <h2 className="text-lg font-semibold mb-3">What you will learn</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {outcomes.map((o, i) => <li key={i}>{o}</li>)}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0F1117] p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" /> Tutors Ready
              </h3>
              <div className="space-y-3">
                {tutors.map(t => (
                  <div key={t.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-[#0D1420] border border-gray-200 dark:border-gray-700">
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">${t.rate}/hr</span>
                      <Button size="sm" variant="outline">Book</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0F1117] p-6">
              <Button className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Book a session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

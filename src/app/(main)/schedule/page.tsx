import { Button } from "@/components/ui/Button";
import { Calendar, Clock, Plus } from "lucide-react";

const events = [
  { id: 1, title: "Calculus II Study", time: "Today • 4:00 PM", color: "bg-blue-500" },
  { id: 2, title: "Physics Review", time: "Tomorrow • 10:00 AM", color: "bg-emerald-500" },
  { id: 3, title: "Project Meeting", time: "Fri • 2:30 PM", color: "bg-purple-500" },
];

export default function MySchedulePage() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600 text-white">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">My Schedule</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Personal calendar overview</p>
            </div>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Event
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {days.map((d) => (
            <div key={d} className="text-xs text-center text-gray-500 dark:text-gray-400">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="h-24 rounded-xl bg-white dark:bg-[#0F1117] border border-gray-200 dark:border-gray-800 p-2" />
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Upcoming
          </h2>
          <div className="space-y-3">
            {events.map((e) => (
              <div key={e.id} className="flex items-center justify-between bg-white dark:bg-[#0F1117] border border-gray-200 dark:border-gray-800 rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-6 rounded ${e.color}`} />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{e.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{e.time}</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">Details</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

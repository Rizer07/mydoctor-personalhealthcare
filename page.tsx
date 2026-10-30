import React from "react";
import Link from "next/link";
import { 
  FileText, 
  Calendar, 
  ShoppingBag, 
  Clock, 
  MapPin, 
  User, 
  Bell, 
  Search,
  Plus
} from "lucide-react";

export default function PatientDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50/50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200/80 bg-white p-6 hidden md:flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
              +
            </div>
            <span className="font-bold text-slate-900 tracking-tight">My Doctor</span>
          </div>

          <nav className="space-y-1">
            <Link href="/patient" className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">
              <Calendar className="h-4 w-4" /> Appointments
            </Link>
            <Link href="/patient/reports" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <FileText className="h-4 w-4" /> Medical Reports
            </Link>
            <Link href="/patient/medicines" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <ShoppingBag className="h-4 w-4" /> Pharmacy
            </Link>
            <Link href="/patient/history" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <Clock className="h-4 w-4" /> Medical History
            </Link>
            <Link href="/map" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <MapPin className="h-4 w-4" /> Nearby Facilities
            </Link>
          </nav>
        </div>

        <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
            <User className="h-5 w-5" />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-slate-900">Patient Account</p>
            <p className="text-slate-500">patient@mydoctor.com</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 border-b border-slate-200/80 bg-white px-8 flex items-center justify-between">
          <div className="relative w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search doctors, tests, meds..." 
              className="w-full pl-9 pr-4 py-1.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
              <Bell className="h-4 w-4" />
            </button>
            <Link href="/patient/book" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-sm">
              <Plus className="h-3.5 w-3.5" /> Book Consultation
            </Link>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-8 space-y-8 flex-1">
          {/* Welcome Banner */}
          <div className="bg-white border border-slate-200/70 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-slate-900">Welcome Back</h1>
              <p className="text-sm text-slate-500 mt-1">
                You have 1 upcoming consultation scheduled today.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/patient/reports" className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50">
                Upload Reports
              </Link>
              <Link href="/patient/medicines" className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium hover:bg-blue-100">
                Order Medicines
              </Link>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200/70 p-5 rounded-xl">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Bookings</span>
              <p className="text-2xl font-bold text-slate-900 mt-2">1</p>
              <p className="text-xs text-blue-600 mt-1 font-medium">Dr. Rajesh Patel (Cardiology)</p>
            </div>
            <div className="bg-white border border-slate-200/70 p-5 rounded-xl">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Medical Reports</span>
              <p className="text-2xl font-bold text-slate-900 mt-2">4</p>
              <p className="text-xs text-slate-500 mt-1">Latest: Blood Profile (Oct 28)</p>
            </div>
            <div className="bg-white border border-slate-200/70 p-5 rounded-xl">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Prescriptions</span>
              <p className="text-2xl font-bold text-slate-900 mt-2">2</p>
              <p className="text-xs text-emerald-600 mt-1 font-medium">All fulfilled</p>
            </div>
          </div>

          {/* Upcoming Consultations */}
          <div className="bg-white border border-slate-200/70 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-slate-900">Upcoming Appointments</h2>
              <Link href="/patient/book" className="text-xs font-semibold text-blue-600 hover:underline">
                Find Doctor
              </Link>
            </div>

            <div className="border border-slate-100 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-slate-200 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-600">
                  DR
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Dr. Rajesh Patel</h3>
                  <p className="text-xs text-slate-500">Cardiology Specialist • Video Consultation</p>
                  <p className="text-xs font-medium text-slate-700 mt-1">Today at 4:30 PM (30 mins)</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link 
                  href="/video/room-101" 
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg flex items-center gap-2"
                >
                  Join Call
                </Link>
                <button className="px-3 py-2 border border-slate-200 text-xs font-medium rounded-lg hover:bg-slate-50 text-slate-600">
                  Reschedule
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

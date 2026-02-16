
"use client";

import { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Dashboard />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row relative overflow-hidden">
      {/* Left Panel - Logo */}
      <div className="flex-1 flex items-center justify-center p-10 lg:p-0">
         {/* Large ClassMate Logo */}
         <div className="relative w-64 h-64 lg:w-96 lg:h-96">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
               {/* Abstract C Logo */}
               <path d="M50 10 C20 10 10 35 10 50 C10 65 20 90 50 90 L80 90 L80 75 L50 75 C35 75 25 65 25 50 C25 35 35 25 50 25 L80 25 L80 10 L50 10 Z" />
            </svg>
         </div>
      </div>

      {/* Right Panel - Auth Content */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-10 z-10">
        <div className="max-w-md w-full mx-auto lg:mx-0">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-12 tracking-tight">Happening now</h1>
          
          <h2 className="text-3xl font-bold mb-8">Join ClassMate today.</h2>
          
          <div className="space-y-4 w-full max-w-xs">
            <Button 
              variant="outline" 
              className="w-full rounded-full bg-white text-black hover:bg-gray-100 border-none h-10 font-bold flex items-center justify-center gap-2"
              onClick={() => setIsLoggedIn(true)}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign up with Google
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full rounded-full bg-white text-black hover:bg-gray-100 border-none h-10 font-bold flex items-center justify-center gap-2"
              onClick={() => setIsLoggedIn(true)}
            >
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.64 3.4 1.63-3.12 1.88-2.6 5.79.43 7.1-.7 1.75-1.6 3.44-2.48 4.28zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
               </svg>
              Sign up with Apple
            </Button>

            <div className="flex items-center gap-2">
               <div className="h-px bg-gray-700 flex-1"></div>
               <span className="text-sm text-gray-500">or</span>
               <div className="h-px bg-gray-700 flex-1"></div>
            </div>

            <Button 
               className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none h-10 font-bold"
               onClick={() => setIsLoggedIn(true)}
            >
               Create account
            </Button>

            <p className="text-[10px] text-gray-500 leading-tight">
               By signing up, you agree to the <span className="text-blue-500 cursor-pointer">Terms of Service</span> and <span className="text-blue-500 cursor-pointer">Privacy Policy</span>, including <span className="text-blue-500 cursor-pointer">Cookie Use</span>.
            </p>

            <div className="pt-10">
               <h3 className="text-lg font-bold mb-4">Already have an account?</h3>
               <Button 
                  variant="outline" 
                  className="w-full rounded-full bg-transparent text-blue-500 border-gray-700 hover:bg-blue-900/10 h-10 font-bold"
                  onClick={() => setIsLoggedIn(true)}
               >
                  Sign in
               </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-[11px] text-gray-500 hidden lg:block">
         <div className="flex justify-center gap-4 flex-wrap px-4">
            <span className="hover:underline cursor-pointer">About</span>
            <span className="hover:underline cursor-pointer">Help Center</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Cookie Policy</span>
            <span className="hover:underline cursor-pointer">Accessibility</span>
            <span className="hover:underline cursor-pointer">Ads info</span>
            <span className="hover:underline cursor-pointer">Blog</span>
            <span className="hover:underline cursor-pointer">Careers</span>
            <span className="hover:underline cursor-pointer">Brand Resources</span>
            <span className="hover:underline cursor-pointer">Advertising</span>
            <span className="hover:underline cursor-pointer">Marketing</span>
            <span className="hover:underline cursor-pointer">Developers</span>
            <span className="hover:underline cursor-pointer">© 2026 ClassMate Corp.</span>
         </div>
      </footer>
    </div>
  );
}

"use client";
import { Boxes } from "../ui/background-boxes";
import { FloatingDockDemo } from "./floating-dock";

export function BackgroundBoxesDemo() {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-start rounded-lg">
      <div className="absolute inset-0 w-full h-full pointer-events-none" />
      <Boxes />

      <footer className="w-full z-50 mt-20 text-white py-12 px-4 md:px-8 flex flex-col items-center space-y-12 max-w-6xl mx-auto">

        {/* Branding & Newsletter */}
        <div className="text-center space-y-4 w-full">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white animate-pulse">
            Creddible
          </h2>

          <p className="text-zinc-300 text-sm md:text-base">
            Join our newsletter for the latest updates
          </p>

          {/* Input Row Responsive */}
          <div className="flex flex-col sm:flex-row w-full sm:justify-center items-center gap-4 max-w-md mx-auto mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border border-white  w-full sm:w-72 rounded-xl text-white"
            />

            <button className="px-6 py-3 w-full sm:w-auto hover:cursor-pointer rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links (FloatingDock) */}
        <div className="w-full flex justify-center text-sm md:text-base px-4">
          <FloatingDockDemo />
        </div>

        {/* Footer Note */}
        <div className="text-xs mt-10 text-zinc-500 text-center">
          © {new Date().getFullYear()} Creddible. All rights reserved.
        </div>

      </footer>
    </div>
  );
}

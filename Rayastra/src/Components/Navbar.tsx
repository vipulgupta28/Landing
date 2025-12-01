import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Demo", "Suggestions", "Offerings", "Coverage"];

  return (
    <>
      {/* Main Navbar */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center fixed top-6 z-50"
      >
        <div className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-2 bg-black rounded-full shadow-lg border border-gray-700 backdrop-blur-lg">

          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            Creddible
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const to = link.toLowerCase().replace(/\s+/g, "-");
              return (
                <motion.div key={link} className="relative group">
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-white font-medium hover:bg-zinc-800 px-3 py-2 rounded-xl hover:cursor-pointer"
                  >
                    {link}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-4">
          <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYoeFLsKRnMvUOFrjU5JlECDX-5F0ibJ65Fg2VyMdjugfdlg/viewform" 
              target="_blank"
               className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:bg-indigo-500 transition">
                Google Form <ArrowUpRight size={16} />
              </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-24 w-full flex justify-center z-40"
          >
            <div className="w-[90%] bg-black border border-gray-700 p-6 rounded-2xl text-white space-y-6">
              {links.map((link) => {
                const to = link.toLowerCase().replace(/\s+/g, "-");
                return (
                  <Link
                    key={link}
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium hover:bg-zinc-800 px-3 py-2 rounded-xl"
                  >
                    {link}
                  </Link>
                );
              })}

              <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYoeFLsKRnMvUOFrjU5JlECDX-5F0ibJ65Fg2VyMdjugfdlg/viewform" 
              target="_blank"
               className="w-full flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                Google Form <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

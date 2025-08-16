import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-900 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Khanik Goyal</h1>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden block"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
      )}
    </nav>
  );
}

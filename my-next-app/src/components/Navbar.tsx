"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const sections = ["start", "about"];
    const [currentSection, setCurrentSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let current = "";
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom > 100) {
                        current = id;
                    }
                }
            });
            setCurrentSection(current);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    });

  return (
    <header className="fixed w-full p-4 flex items-center justify-between z-50">
        <div className="absolute text-white font-bold">Terence Auyong</div>
        
        <nav className="flex justify-center gap-x-16 flex-1">
            {sections.map((section) => (
                <Link
                    key={section}
                    href={`#${section}`}
                    className={`text-white transition ${
                        currentSection === section ? "font-bold underline underline-offset-4" : ""}`}
                >
                    { section.charAt(0).toUpperCase() + section.slice(1) }
                </Link>
            ))}
            
            <Link 
                href="https://github.com/Tewensh03" 
                target="_blank"
                className="text-white">
                GitHub
            </Link>
        </nav>
    </header>
  );
}
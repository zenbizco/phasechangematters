"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";

export function HeaderNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      toast("Section coming soon!");
    }
  };

  return (
    <>
      <nav className="hidden md:flex items-center gap-6">
        <Button variant="link" onClick={() => scrollToSection('home')}>
          Home
        </Button>
        <Button variant="link" onClick={() => scrollToSection('industries')}>
          Industries
        </Button>
        <Button variant="link" onClick={() => scrollToSection('products')}>
          BioPCM® Technology
        </Button>
        <Button variant="link" onClick={() => scrollToSection('about')}>
          About Us
        </Button>
        <Button variant="link" onClick={() => scrollToSection('contact')}>
          Contact
        </Button>
      </nav>
      <Button 
        variant="outline" 
        className="md:hidden"
        onClick={() => toast("Mobile menu coming soon!")}
      >
        Menu
      </Button>
    </>
  );
}

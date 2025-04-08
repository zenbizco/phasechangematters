"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useRef } from "react";

export function HeaderNav() {
  const closeRef = useRef<HTMLButtonElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      toast("Section coming soon!");
    }
  };

  const handleMobileNavClick = (id: string) => {
    scrollToSection(id);
    // Close the sheet after navigation
    closeRef.current?.click();
  };

  return (
    <>
      <nav className="hidden md:flex items-center gap-6">
        <Button variant="link" onClick={() => scrollToSection('home')} className="text-black dark:text-white">
          Home
        </Button>
        <Button variant="link" onClick={() => scrollToSection('industries')} className="text-black dark:text-white">
          Industries
        </Button>
        <Button variant="link" onClick={() => scrollToSection('products')} className="text-black dark:text-white">
          BioPCM® Technology
        </Button>
        <Button variant="link" onClick={() => scrollToSection('about')} className="text-black dark:text-white">
          About Us
        </Button>
        <Button variant="link" onClick={() => scrollToSection('contact')} className="text-black dark:text-white">
          Contact
        </Button>
      </nav>
      
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px]">
          <SheetHeader>
            <SheetTitle className="text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                <span className="font-bold">Phase Change Matters</span>
              </div>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 py-4">
            <Button 
              variant="ghost" 
              className="justify-start text-black dark:text-white" 
              onClick={() => handleMobileNavClick('home')}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start text-black dark:text-white" 
              onClick={() => handleMobileNavClick('industries')}
            >
              Industries
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start text-black dark:text-white" 
              onClick={() => handleMobileNavClick('products')}
            >
              BioPCM® Technology
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start text-black dark:text-white" 
              onClick={() => handleMobileNavClick('about')}
            >
              About Us
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start text-black dark:text-white" 
              onClick={() => handleMobileNavClick('contact')}
            >
              Contact
            </Button>
          </div>
          {/* Hidden close button for programmatic access */}
          <SheetClose ref={closeRef} className="hidden" />
        </SheetContent>
      </Sheet>
    </>
  );
}

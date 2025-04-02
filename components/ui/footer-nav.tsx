"use client";

import { Button } from "@/components/ui/button";

export function FooterNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex flex-wrap justify-center gap-4">
      <Button variant="link" size="sm" onClick={() => scrollToSection('industries')}>
        Industries
      </Button>
      <Button variant="link" size="sm" onClick={() => scrollToSection('products')}>
        BioPCM® Technology
      </Button>
      <Button variant="link" size="sm" onClick={() => scrollToSection('about')}>
        About Us
      </Button>
      <Button variant="link" size="sm" onClick={() => scrollToSection('sustainability')}>
        Sustainability
      </Button>
      <Button variant="link" size="sm" onClick={() => scrollToSection('news')}>
        News
      </Button>
      <Button variant="link" size="sm" onClick={() => scrollToSection('contact')}>
        Contact
      </Button>
      <Button variant="link" size="sm" onClick={() => scrollToSection('privacy')}>
        Privacy
      </Button>
      <Button variant="link" size="sm" onClick={() => scrollToSection('terms')}>
        Terms
      </Button>
    </nav>
  );
}

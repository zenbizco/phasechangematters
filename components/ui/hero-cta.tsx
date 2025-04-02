"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        size="lg" 
        className="bg-red-600 hover:bg-red-700"
        onClick={() => toast.success("You're awesome!")}
      >
        Get Started
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        onClick={() => toast.info("Check out the documentation for more info!")}
      >
        Learn More
      </Button>
    </div>
  );
}

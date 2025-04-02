"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="quote">Request a Quote</SelectItem>
            <SelectItem value="information">Product Information</SelectItem>
            <SelectItem value="technical">Technical Specifications</SelectItem>
            <SelectItem value="custom">Custom Solution Inquiry</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <Textarea id="message" placeholder="Enter your message" rows={5} />
      </div>
      
      <Button 
        className="w-full bg-blue-600 hover:bg-blue-700" 
        onClick={(e) => {
          e.preventDefault();
          toast.success("Your request has been submitted! Our team will contact you shortly.");
        }}
      >
        Submit Request
      </Button>
    </form>
  );
}

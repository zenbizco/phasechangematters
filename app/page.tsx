import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { HeaderNav } from "@/components/ui/header-nav";
import { FeatureCard } from "@/components/ui/feature-card";
import { ContactForm } from "@/components/ui/contact-form";
import { FooterNav } from "@/components/ui/footer-nav";
import { Hero } from "@/components/ui/animated-hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b fixed top-0 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-600"></div>
          <h1 className="text-2xl font-bold">Crimson Fury</h1>
        </div>
        <HeaderNav />
      </header>

      {/* Hero Section - Now using Animated Hero */}
      <section id="home" className="pt-24">
        <Hero />
      </section>

      {/* Featured Industries Section */}
      <section id="industries" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Industries</h2>
        <p className="text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
          Customers across transportation of perishables and pharmaceuticals, buildings and structures, 
          telecom and data centers – use BioPCM® to maintain optimum temperatures, save energy, and reach their sustainable development goals (SDGs).
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard 
            title="Logistics & Cold Chain" 
            description="Temperature-controlled transport"
            content="Maintain optimal temperatures for perishables and pharmaceuticals during transport, reducing energy consumption and ensuring product quality."
            toastMessage="Learn more about Logistics & Cold Chain applications"
          />
          
          <FeatureCard 
            title="Buildings & Structures" 
            description="Energy-efficient climate control"
            content="Reduce HVAC energy usage while improving occupant comfort through passive temperature regulation in commercial and residential buildings."
            toastMessage="Learn more about Buildings & Structures applications"
          />
          
          <FeatureCard 
            title="Telecom & Data Centers" 
            description="Thermal management solutions"
            content="Stabilize temperatures in telecom shelters and data centers, reducing cooling costs and improving equipment reliability and lifespan."
            toastMessage="Learn more about Telecom & Data Center applications"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">15M</div>
              <p className="text-gray-600 dark:text-gray-400">sq.ft of BioPCM® products have been installed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">10K</div>
              <p className="text-gray-600 dark:text-gray-400">telecom sites and data centers installations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">10M</div>
              <p className="text-gray-600 dark:text-gray-400">cold chain packages have been shipped</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-red-100 rounded-lg shadow-lg p-8 flex items-center justify-center h-[400px]">
                <div className="text-center">
                  <svg className="w-24 h-24 text-red-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8,2A1,1 0 0,1 9,3A1,1 0 0,1 8,4A1,1 0 0,1 7,3A1,1 0 0,1 8,2M4.5,14.5L13,7L14.5,8.5L6,16L4.5,14.5M16.88,14.83C16.88,14.83 16.88,15.17 16.88,15.5C16.88,16.36 16.17,17.07 15.31,17.07C14.45,17.07 13.74,16.36 13.74,15.5L13.73,14.43L5.06,6.5H3V5H5.06C5.46,5 5.85,5.16 6.15,5.45L7.92,7.15C8.21,7.44 8.61,7.59 9,7.59C10.28,7.59 11.31,8.63 11.31,9.91C11.31,10.23 11.24,10.56 11.12,10.86L12.92,12.45C13.25,11.91 13.74,11.5 14.33,11.29C14.91,11.09 15.54,11.11 16.12,11.34C16.71,11.56 17.18,11.99 17.47,12.55C17.76,13.09 17.83,13.71 17.67,14.32C17.5,14.93 17.12,15.45 16.59,15.79C16.06,16.13 15.44,16.27 14.83,16.18C14.22,16.08 13.67,15.77 13.3,15.28L12.44,14.5L12.38,15.5C12.38,17.12 13.69,18.43 15.31,18.43C16.94,18.43 18.24,17.12 18.24,15.5C18.24,14.94 18.24,14.83 18.24,14.83L19.59,14.82V14.83C19.59,14.83 19.59,14.94 19.59,15.5C19.59,17.87 17.68,19.78 15.31,19.78C13.92,19.78 12.65,19.16 11.8,18.14L8.55,16.23C8.28,16.08 8,16 7.71,16C6.87,16 6.15,16.54 6.04,17.27L1.46,16.63L1.46,15.27L6.03,15.88C6.28,14.47 7.59,13.44 9.08,13.44C9.61,13.44 10.13,13.59 10.56,13.86L11.97,14.5L13.93,12.75C13.35,12.04 13,11.11 13,10.17L12.86,10.03C12.49,10.68 11.8,11.12 11.03,11.12C9.94,11.12 9.04,10.23 9.04,9.13C9.04,8.36 9.48,7.68 10.13,7.3L9.67,6.84H7.77C7.67,6.94 7.57,7.03 7.46,7.12L5.5,5.31L5.13,5.04C4.9,4.81 4.58,4.69 4.25,4.69H3V3.69C10.28,3.69 16.88,3.69 16.88,3.69H15.38L8.38,8.58C8.38,9.13 8.38,10.46 8.38,11.46C7.05,11.46 5.95,12.56 5.95,13.89L3.03,13.68C3.03,14.28 3.03,14.36 3.03,14.36H5.96C6.14,16.23 7.74,17.63 9.6,17.63L14.38,21.37H15.38L10.32,17.65C10.14,17.72 9.81,17.77 9.59,17.77C7.44,17.76 5.7,16.06 5.7,13.92C5.7,13.45 5.8,13 5.96,12.6L7.97,13.03C7.98,13.04 7.98,13.04 7.98,13.04C7.68,13.25 7.5,13.58 7.5,13.96C7.5,14.57 8,15.07 8.61,15.07C9.22,15.07 9.72,14.57 9.72,13.96C9.72,13.71 9.64,13.47 9.5,13.29C9.5,13.23 9.5,13.17 9.5,13.1C9.5,12.81 9.46,11.36 9.4,10.34C9.4,10.34 9.77,10.03 10.03,9.81C10.3,9.57 10.44,9.22 10.41,8.86C10.38,8.5 10.18,8.18 9.86,8L16.31,3.5L18.38,3.5L17.38,4.5C17.38,4.5 17.38,6.91 17.38,7.5L16.88,8L16.01,7.13C15.71,6.83 15.32,6.67 14.92,6.67L12.95,6.67L13.3,7.03C13.3,7.03 13.8,7.37 14.13,7.69C14.4,7.97 14.55,8.31 14.55,8.69L14.55,12.63L16.88,14.83Z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Future</h3>
                  <p className="text-gray-700">Smart materials for people and the planet</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Inspiring a Sustainable Future</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                At Crimson Fury, we believe in finding a sustainable way forward by introducing innovations 
                at the forefront of energy management and efficiency. Our dedicated team continues to find new applications 
                for our proprietary technology and the global OEM partners who use it, utilizing the only commercially 
                available bio-based gelled and solid-to-solid phase change materials.
              </p>
              <div className="flex items-center mt-8">
                <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md flex items-center gap-2">
                  Learn More <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BioPCM Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What are BioPCM® products?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Phase change materials (PCMs) are substances that absorb and release large amounts of thermal energy while melting and freezing. 
            Our BioPCM® products include a patented family of PCMs developed by Crimson Fury.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            As BioPCM® absorbs and releases heat, the material can transition phases between solid-to-gel and solid-to-solid, 
            which is a key differentiator from existing PCMs that transition between solid-to-liquid. BioPCM® can be designed to 
            store and release thermal energy at any precise temperature within the range of -75°C to 175°C, enabling maximum energy 
            performance with minimal impact on the environment.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us</CardTitle>
            <CardDescription>
              Have questions about BioPCM® solutions? Fill out the form below and we'll get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </section>

      {/* Privacy and Terms Sections (Hidden but available for scrolling) */}
      <div id="privacy" style={{ height: '1px', overflow: 'hidden' }}></div>
      <div id="terms" style={{ height: '1px', overflow: 'hidden' }}></div>

      {/* Footer */}
      <footer id="footer" className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-full bg-red-600"></div>
            <span className="font-bold">Crimson Fury</span>
          </div>
          <FooterNav />
          <p className="text-sm text-neutral-500 mt-4 md:mt-0">
            {new Date().getFullYear()} Crimson Fury. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

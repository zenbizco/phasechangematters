import { Toaster } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeaderNav } from "@/components/ui/header-nav";
import { ContactForm } from "@/components/ui/contact-form";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/ui/animated-hero";
import { FeatureCard } from "@/components/ui/feature-card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
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
              Have questions about BioPCM® solutions? Fill out the form below and we&apos;ll get back to you.
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
      <Footer />
    </div>
  );
}

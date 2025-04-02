import { Toaster } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeaderNav } from "@/components/ui/header-nav";
import { ContactForm } from "@/components/ui/contact-form";
import { Footer } from "@/components/ui/footer"; // Corrected import statement
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
        <h2 className="text-3xl font-bold text-center mb-4">Partner Opportunities</h2>
        <p className="text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
          Join our global network of partners and resellers across multiple industries. Crimson Fury offers exclusive territory rights, 
          competitive margins, and comprehensive support to help you succeed in high-demand markets.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard 
            title="Distribution Partners" 
            description="Expand your product portfolio"
            content="Become an authorized distributor of BioPCM® technology with exclusive territory rights, premium margins, and comprehensive marketing support to grow your business."
            toastMessage="Learn more about becoming a Distribution Partner"
          />
          
          <FeatureCard 
            title="Solution Providers" 
            description="Value-added reselling"
            content="Integrate BioPCM® into your existing solutions to create differentiated offerings, increase your revenue streams, and deliver more value to your customers."
            toastMessage="Learn more about becoming a Solution Provider"
          />
          
          <FeatureCard 
            title="Technology Partners" 
            description="Co-innovation opportunities"
            content="Collaborate with our R&D team to develop custom applications and industry-specific solutions. Gain early access to new products and technical expertise."
            toastMessage="Learn more about becoming a Technology Partner"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Partner Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">250+</div>
              <p className="text-gray-600 dark:text-gray-400">Global partners and resellers in our network</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">45%</div>
              <p className="text-gray-600 dark:text-gray-400">Average profit margin for BioPCM® solutions</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">24/7</div>
              <p className="text-gray-600 dark:text-gray-400">Dedicated support for our partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-red-100 rounded-lg shadow-lg p-8 flex items-center justify-center h-[400px]">
                <div className="text-center">
                  <svg className="w-24 h-24 text-red-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Growth Potential</h3>
                  <p className="text-gray-700">Unlock new revenue streams and expand your market reach</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Why Partner With Crimson Fury</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Joining our partner network gives you a competitive edge in the rapidly growing sustainable 
                technology market. As a Crimson Fury partner, you&apos;ll benefit from industry-leading margins, 
                exclusive territory rights, and comprehensive marketing and technical support to accelerate your 
                business growth.
              </p>
              <div className="flex items-center mt-8">
                <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md flex items-center gap-2">
                  Partner Benefits <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Advantage Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Market-Leading Technology</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            As a Crimson Fury partner, you&apos;ll gain exclusive access to our revolutionary BioPCM® technology, 
            offering your customers unmatched solutions for temperature control and energy efficiency.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            BioPCM® technology works across a temperature range from -75°C to 175°C, providing you with 
            opportunities to serve diverse markets including cold chain logistics, buildings, data centers, 
            and more. Our partners consistently report that BioPCM®&apos;s superior performance and sustainability 
            benefits create strong competitive advantages and higher profit margins.
          </p>
        </div>
      </section>

      {/* Partner Application Form */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Become a Partner</CardTitle>
            <CardDescription>
              Ready to grow your business with Crimson Fury? Fill out the form below to apply for our partner program.
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

import { Toaster } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeaderNav } from "@/components/ui/header-nav";
import { ContactForm } from "@/components/ui/contact-form";
import { Footer } from "@/components/ui/footer"; // Corrected import statement
import { Hero } from "@/components/ui/animated-hero";
import { FeatureCard } from "@/components/ui/feature-card";
// import Script from "next/script";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b fixed top-0 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600"></div>
          <h1 className="text-2xl font-bold">Phase Change Matters</h1>
        </div>
        <HeaderNav />
      </header>

      {/* Hero Section - Now using Animated Hero */}
      <section id="home" className="pt-24">
        <Hero />
      </section>

      {/* Applications Section */}
      <section id="industries" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900">
        <h2 className="text-3xl font-bold text-center mb-4">Applications</h2>
        <p className="text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
          BioPCM® is used across a broad spectrum of industries, enabling customers to maintain optimum temperatures, 
          save energy, and reach their sustainable development goals (SDGs).
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard 
            title="Cold Chain Logistics" 
            description="Temperature-sensitive shipping"
            content="BioPCM® enables the transportation of perishables and pharmaceuticals at the right temperature while consuming less energy. Our solid-to-gel transition technology provides superior temperature control for sensitive products."
            toastMessage="Learn more about Cold Chain Solutions"
          />
          
          <FeatureCard 
            title="Buildings & Structures" 
            description="Energy-efficient construction"
            content="BioPCM® reduces the stress on HVAC systems in buildings while increasing thermal comfort for occupants. Our phase change materials help stabilize indoor temperatures and significantly reduce energy consumption."
            toastMessage="Learn more about Building Applications"
          />
          
          <FeatureCard 
            title="Telecom & Data Centers" 
            description="Improved resilience"
            content="Our BioPCM® solutions improve resiliency in cell towers and data centers while reducing energy costs. The thermal buffer provided by our technology enables more efficient cooling operations and temperature stabilization."
            toastMessage="Learn more about Data Center Solutions"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">-75°C</div>
              <p className="text-gray-600 dark:text-gray-400">to 175°C customizable temperature range</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">Bio</div>
              <p className="text-gray-600 dark:text-gray-400">Based sustainable materials</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">S→S</div>
              <p className="text-gray-600 dark:text-gray-400">Unique solid-to-solid phase transition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-blue-100 rounded-lg shadow-lg p-8 flex items-center justify-center h-[400px]">
                <div className="text-center">
                  <svg className="w-24 h-24 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
                  <p className="text-gray-700">Reduce costs and environmental impact</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Save with Clean Technology</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Simply by adding our BioPCM solutions is one of the easiest ways to reduce your expenses. Our patented technology 
                is already being used by Fortune 100 companies to reduce their power consumption and control their quality of 
                products during transportation.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Phase Change Solutions is a global leader in temperature control and energy-efficient solutions. Our customers use 
                BioPCM® to maintain optimum temperatures, save energy, and reach their sustainable development goals (SDGs).
              </p>
              {/* <div className="flex items-center mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md flex items-center gap-2">
                  Product Specifications <span>→</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Advantage */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How BioPCM® Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Phase change materials (PCMs) absorb and release large amounts of thermal energy during phase transitions. 
            What makes BioPCM® unique is its ability to transition between solid-to-gel and solid-to-solid states, 
            unlike conventional PCMs that transition between solid-to-liquid.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            BioPCM® can be precisely tuned to any temperature between -75°C and 175°C, enabling maximum energy 
            performance with minimal environmental impact. This allows large amounts of heat to be absorbed or released 
            at specific transition points without a significant rise in temperature.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            At the heart of our innovation is sustainability. BioPCM® is the only commercially available bio-based gelled 
            and solid-to-solid phase change material, helping our customers achieve their sustainable development goals while reducing energy use.
          </p>
          <div className="mt-8">
            <a
              href="/pcm-whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md inline-block"
            >
              Download Technical Whitepaper
            </a>
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md inline-block">
              Download Technical Whitepaper
            </button> */}
          </div>
        </div>
      </section>

      {/* Sustainability Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sustainability Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-neutral-700">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-900/30">
                  <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7,17L10.2,10.2L17,7L13.8,13.8L7,17M12,11.67L10.33,10L12,8.33L13.67,10L12,11.67Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Plant-Based</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">We believe in making a low environmental impact using plant-based materials</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-neutral-700">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-900/30">
                  <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Local-for-Local</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">We believe in local-for-local manufacturing</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-neutral-700">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-900/30">
                  <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17,4H7V6H17V4M17,8H7V10H17V8M14,12H7V14H14V12M14,16H7V18H14V16" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Reduced Footprint</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Our products help lower power consumption, in turn, reducing emissions</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-neutral-700">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-900/30">
                  <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Application Specific</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Can be designed for a range of temperature set points between -75°C to 175°C</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-neutral-700">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-900/30">
                  <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,5L5.5,10L8,12.5L5.5,15L12,20L18.5,15L16,12.5L18.5,10L12,5M12,11.67L10.33,10L12,8.33L13.67,10L12,11.67Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Large Capacity</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Our products have a high thermal storage to weight ratio</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-neutral-700">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-900/30">
                  <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Longevity</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Our products have a long thermal performance lifetime</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Request Information Form */}
      <section id="contact" className="py-8 px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
        <Card className="shadow-md overflow-hidden">
          <CardHeader className="text-center pb-2 px-4 pt-4">
            <CardTitle className="text-xl mb-1">Request Information or Quote</CardTitle>
            <CardDescription className="text-sm">
              Interested in BioPCM® technology for your application? Fill out the form below to get detailed information or a customized quote.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 pt-0 pb-0">
            <ContactForm />
          </CardContent>
        </Card>
      </section>

      {/* Privacy and Terms Sections (Hidden but available for scrolling) */}
      <div id="privacy" style={{ height: '1px', overflow: 'hidden' }}></div>
      <div id="terms" style={{ height: '1px', overflow: 'hidden' }}></div>

      <Footer />
      
      {/* n8n Chat Widget */}
      <div id="n8n-chat" className="fixed bottom-4 right-4 z-50" />
        {/* <Script id="n8n-chat-css" strategy="beforeInteractive">
          {`
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
            document.head.appendChild(link);
          `}
        </Script>
        <Script id="n8n-chat-widget" type="module" strategy="afterInteractive">
          {`
            import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
            createChat({
              webhookUrl: 'https://n8n.zenbiz.ai/webhook/dec328cc-f47e-4727-b1c5-7370be86a958/chat',
              webhookConfig: { method: 'POST', headers: {} },
              target: '#n8n-chat',
              mode: 'window',
              chatInputKey: 'chatInput',
              chatSessionKey: 'sessionId',
              metadata: {},
              showWelcomeScreen: false,
              defaultLanguage: 'en',
              initialMessages: [
                'Hi there! 👋',
                'My name is Ashley, your PCM ambassdor. How may I help you today?'
              ],
              i18n: {
                en: {
                  title: 'Hi there! 👋',
                  subtitle: "Start a chat. We're here to help you 24/7.",
                  footer: '',
                  getStarted: 'New Conversation',
                  inputPlaceholder: 'Type your question..',
                },
              },
            });
          `}
        </Script> */}
      </div>
      
  );
}

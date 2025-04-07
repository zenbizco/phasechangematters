"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

type GHLFormProps = {
  formId: string;
  height?: number;
  formName?: string;
  className?: string;
};

/**
 * GHLForm Component - Client Component
 * 
 * Embeds a Go High Level form with proper Next.js integration
 * Uses the GHL JavaScript API for form embedding
 */
export function GHLForm({
  formId,
  height = 432,
  formName = "Form 0",
  className = "",
}: GHLFormProps) {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Generate unique ID for the iframe
  const iframeId = `inline-${formId}`;

  useEffect(() => {
    // Handle form loading state
    const handleFormLoaded = () => {
      setIsLoading(false);
    };

    // Setup form when component mounts
    if (formContainerRef.current) {
      // Clear any existing content
      formContainerRef.current.innerHTML = '';

      // Create the iframe element with exact GHL configuration from the provided code
      const embedCode = `
        <iframe
          src="https://api.zenbiz.co/widget/form/${formId}"
          style="width:100%;height:100%;border:none;border-radius:8px"
          id="${iframeId}" 
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="${formName}"
          data-height="${height}"
          data-layout-iframe-id="${iframeId}"
          data-form-id="${formId}"
          title="${formName}"
        >
        </iframe>
      `;

      // Insert the iframe
      formContainerRef.current.innerHTML = embedCode;

      // Setup event listener for iframe loading
      const iframe = document.getElementById(iframeId) as HTMLIFrameElement;
      if (iframe) {
        iframe.addEventListener('load', handleFormLoaded);
      }
    }

    // Cleanup function
    return () => {
      const iframe = document.getElementById(iframeId) as HTMLIFrameElement;
      if (iframe) {
        iframe.removeEventListener('load', handleFormLoaded);
      }
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, [formId, height, iframeId, formName]);

  return (
    <div className={`ghl-form-wrapper relative ${className}`}>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <h3 className="text-white font-medium text-lg">Get in Touch</h3>
          <p className="text-white/80 text-sm">We'll get back to you as soon as possible</p>
        </div>
        
        <div style={{ height: `${height}px` }} className="relative p-1">
          {isLoading && (
            <div 
              id={`${iframeId}-loading`}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 z-10 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Loading your form...</p>
            </div>
          )}
          
          <div 
            className="ghl-form-container w-full h-full mx-auto" 
            ref={formContainerRef} 
            aria-live="polite"
            aria-busy={isLoading}
          />
        </div>
      </div>
      
      {/* Load the GHL form script */}
      <Script 
        src="https://api.zenbiz.co/js/form_embed.js" 
        strategy="afterInteractive"
      />
    </div>
  );
}

/**
 * ContactForm Component - Wrapper with specific configuration
 * 
 * This component makes it easy to use the GHL form with your specific configuration
 */
export function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto my-6">
      <GHLForm
        formId="yj7USLPw6G6KyQLC9vZx"
        formName="Contact Form"
        height={480}
        className="max-w-full"
      />
    </div>
  );
}

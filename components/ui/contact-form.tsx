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
          style="width:100%;height:100%;border:none;border-radius:3px"
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
    <div className={`ghl-form-wrapper relative w-full ${className}`} style={{ height: `${height}px` }}>
      {isLoading && (
        <div 
          id={`${iframeId}-loading`}
          className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 z-10"
        >
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
            <p className="text-gray-600 dark:text-gray-300">Loading form...</p>
          </div>
        </div>
      )}
      
      <div 
        className="ghl-form-container w-full h-full mx-auto" 
        ref={formContainerRef} 
        aria-live="polite"
        aria-busy={isLoading}
      />
      
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
    <GHLForm
      formId="yj7USLPw6G6KyQLC9vZx"
      formName="Form 0"
      height={400}
      className="w-full"
    />
  );
}

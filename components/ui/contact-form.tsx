"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export function ContactForm() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This will run after the component mounts
    if (formContainerRef.current) {
      // Clear any existing content
      formContainerRef.current.innerHTML = '';

      // Add the GHL iframe with the exact configuration provided but with wider width
      const embedCode = `
        <iframe
          src="https://api.zenbiz.co/widget/form/yj7USLPw6G6KyQLC9vZx"
          style="width:100%;height:432px;border:none;border-radius:3px"
          id="inline-yj7USLPw6G6KyQLC9vZx" 
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form 0"
          data-height="432"
          data-layout-iframe-id="inline-yj7USLPw6G6KyQLC9vZx"
          data-form-id="yj7USLPw6G6KyQLC9vZx"
          title="Form 0"
        >
        </iframe>
      `;

      // Insert the embed code
      formContainerRef.current.innerHTML = embedCode;
    }

    // Cleanup function to handle component unmounting
    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div className="ghl-form-container w-full max-w-full mx-auto px-0" ref={formContainerRef} style={{ minWidth: '100%' }}>
        {/* The GHL form will be inserted here */}
        <p className="text-center text-gray-500">Loading form...</p>
      </div>
      {/* Load the GHL form embed script */}
      <Script src="https://api.zenbiz.co/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}

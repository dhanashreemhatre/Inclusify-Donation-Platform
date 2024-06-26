"use client"
import { useEffect } from 'react';
import Script from 'next/script';
import Main from '../../Components/Shared/Main/page';
import Navbar from '../../Components/ui/Navbar/page';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: any; // Adjust the type if you have specific type definitions for TranslateElement
      };
    };
  }
}

export default function Home() {
  useEffect(() => {
    // Function to be called when the Google Translate script is loaded
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    // Load Google Translate script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.defer = true; // Add defer attribute to ensure the script is fully loaded before execution
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      if (window.googleTranslateElementInit) {
        window.googleTranslateElementInit;
      }
    };
  }, []);

  return (
    <div className="main_wrapper">
      <Script id="google-translate-inline-script" strategy="beforeInteractive">
        {`
          function changeLanguage(lang) {
            window.google.translate.translate(
              document.getElementById('google_translate_element').innerText,
              'en',
              lang,
              function (result) {
                document.getElementById('google_translate_element').innerText = result.translation;
              }
            );
          }
        `}
      </Script>
      <div id="google_translate_element">Translate</div>
      <Navbar />
      <Main />
    </div>
  );
}

"use client"
import { useEffect } from 'react';
import Script from 'next/script';
import Main from '../../Components/Shared/Main/page';
import Navbar from '../../Components/ui/Navbar/page';
import Link from 'next/link';

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
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="main_wrapper">
      <Script key="google-translate-script">
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

import React, { useState } from 'react';

const Page = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Your page content goes here */}

      {showChatbot && (
        <div
          style={{
            position: 'fixed',
            right: '20px',
            bottom: '20px',
            width: '350px',
            height: '430px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: '9999',
          }}
        >
          {/* Close button inside the chatbot container */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              cursor: 'pointer',
              fontSize: '18px',
              color: 'white',
            }}
            onClick={toggleChatbot}
          >
            ✖
          </div>
          <iframe
            title="Dialogflow Chatbot"
            width="100%"
            height="100%"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/68c8476a-0584-4b43-9c48-013a3fe85f5e"
          ></iframe>
        </div>
      )}

      <div
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#4285f4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          color: 'white',
          fontSize: '20px',
        }}
        onClick={toggleChatbot}
      >
        💬
      </div>
    </div>
  );
};

export default Page;

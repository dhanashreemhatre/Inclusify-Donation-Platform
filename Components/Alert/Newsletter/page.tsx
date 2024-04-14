import React, { useState } from 'react';
import styles from './news.module.css';
import Image from 'next/image';
import welcome from './welcome.png';
import email from './email_726623.png';
import { FaPaperPlane } from 'react-icons/fa'; 

interface WelcomeProps {
  onNext: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  return (
    <div className={styles.popup_content}>
      <h1>Welcome to <span className={styles.logo}>INCLUSIFY</span>!</h1>
      <h2>We're thrilled to have you join our community!!</h2>
      <button onClick={onNext}>NEXT</button>
    </div>
  );
};

const Mission = ({ onMission }: { onMission: () => void }) => {
  return (
    <div className={styles.popup_content}>
      <h1>Empowering  <span className={styles.logo}>DIVERSITY</span>!</h1>
      <h2>At INCLUSIFY, we believe in the power of collective action to bring about positive change.</h2>
      <button onClick={onMission}>NEXT</button>
    </div>
  );
};

const News = () => {
  return (
    <div className={styles.popup_content1}>
      <Image
        src={email}
        alt='loading'
        priority
        height={60}
        width={60}
      />
      <h3>Subscribe Newsletter</h3>
      <p>Subscribe to our email and get emails right in your inbox</p>
      
      <div className={styles.inputContainer}>
        <input type="email" placeholder='Enter your email' className={styles.fill} />
        <div className={styles.icon}>
          <FaPaperPlane className={styles.icon2}/>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMission, setShowMission] = useState(false);

  const handleNext = () => {
    setShowWelcome(false);
    setShowMission(true);
  };

  const handleMission = () => {
    setShowMission(false);
  };

  return (
    <>
      <section>
        <div className={styles.popup_container}>
          <div className={styles.bg}>
            <Image
              src={welcome}
              alt='loading'
              priority
            />
            {showWelcome ? (
              <Welcome onNext={handleNext} />
            ) : showMission ? (
              <Mission onMission={handleMission} />
            ) : (
              <News />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

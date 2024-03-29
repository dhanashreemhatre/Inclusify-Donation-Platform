import React from 'react'
import styles from './news.module.css';
import Image from 'next/image';
import Welcome from './welcome.png'
const page = () => {
  return (
    <>
       <section>
        <div className={styles.popup_container}>
          <div className={styles.bg}>
            <Image
              src={Welcome}
              alt='loading'
            />
          </div>
          <div className="popup_content">
              
          </div>
        </div>
       </section>
    </>
  )
}

export default page

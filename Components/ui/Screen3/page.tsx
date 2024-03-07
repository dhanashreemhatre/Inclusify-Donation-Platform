import React from 'react'
import './screen3.css'
import Image from 'next/image'
import Image1 from './Image/pexels-denniz-futalan-1344275.jpg'
import Image2 from './Image/pexels-hitesh-choudhary-1739842.jpg'
import Image3 from './Image/pexels-timur-weber-9532305.jpg'
const page = () => {
  return (
    <>
        <div className="screen3">
            <div className="screen3-items">
               <Image
                  src={Image1}
                  alt='no-image'
                  priority
                  className='image1'
               />
               <Image
                  src={Image2}
                  alt='no-image'
                  priority
                  className='image1'
               />
               <Image
                  src={Image3}
                  alt='no-image'
                  priority
                  className='image1'
               />
            </div>
        </div>
    </>
  )
}

export default page

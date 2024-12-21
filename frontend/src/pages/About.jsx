import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from "../components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Forever is more than just a name—it’s a promise of enduring style and elegance. We believe fashion isn’t fleeting but a journey that empowers you to express your unique self. Our curated collection balances classic sophistication with modern trends, offering pieces that feel made just for you. Whether for a special occasion or everyday wear, Forever ensures every moment is stylishly unforgettable.</p>
            <p>We take pride in offering a seamless shopping experience paired with exceptional quality. From handpicked fabrics to flattering designs, every item reflects our commitment to celebrating individuality and inclusivity. With Forever, you’re not just shopping—you’re joining a community that values timeless fashion and lasting connections.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At Forever, our mission is to empower self-expression through timeless, inclusive fashion. We are dedicated to creating high-quality pieces that celebrate individuality, inspire confidence, and bring lasting value to your wardrobe. By blending style, sustainability, and craftsmanship, we aim to build a community where everyone feels celebrated and confident in their unique journey.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure every piece meets the highest standards of craftsmanship, offering you timeless style and lasting quality.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>      
          <p className='text-gray-600'>Enjoy a seamless shopping experience with thoughtfully designed services that make finding your perfect style effortless.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We are dedicated to providing personalized support, ensuring your journey with us is smooth, satisfying, and unforgettable.</p>
        </div>    
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About

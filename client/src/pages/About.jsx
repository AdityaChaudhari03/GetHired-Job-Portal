import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Welcome to GetHired, your premier destination for job and internship opportunities. At GetHired, we are dedicated to connecting talented individuals with top companies, facilitating meaningful career progressions, and helping businesses find the right candidates to drive their success.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
      <section className="about-us-section mb-8">
        <h2 className="about-us-subtitle text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="about-us-text text-gray-700 leading-relaxed">
          Our mission is to bridge the gap between job seekers and employers by providing a seamless and efficient platform that caters to the needs of both parties. We aim to simplify the job search and application process, making it easier for users to find their dream jobs and internships while offering employers a robust system to post job openings and find suitable candidates.
        </p>
      </section>

      <section className="about-us-section mb-8">
        <h2 className="about-us-subtitle text-2xl font-semibold mb-4">What We Offer</h2>
        <h3 className="about-us-subheading text-xl font-semibold mb-2">For Job Seekers:</h3>
        <ul className="about-us-list list-disc list-inside ml-4 mb-4 text-gray-700">
          <li>Extensive Job Listings: Explore a wide range of job opportunities across various industries and locations.</li>
          <li>Internship Opportunities: Find internships that offer valuable hands-on experience to kickstart your career.</li>
          <li>User-Friendly Interface: Our intuitive platform makes it easy to search, filter, and apply for positions.</li>
          <li>Career Resources: Access resources to help you with resume building, interview preparation, and career advice.</li>
        </ul>
        <h3 className="about-us-subheading text-xl font-semibold mb-2">For Employers:</h3>
        <ul className="about-us-list list-disc list-inside ml-4 text-gray-700">
          <li>Post Job Listings: Easily post and manage job openings to attract qualified candidates.</li>
          <li>Access to Talent: Browse through a diverse pool of applicants to find the perfect fit for your organization.</li>
          <li>Efficient Hiring Process: Streamline your hiring process with our platform’s advanced tools and features.</li>
          <li>Company Profile: Create a compelling company profile to attract potential candidates and showcase your brand.</li>
        </ul>
      </section>

      <section className="about-us-section mb-8">
        <h2 className="about-us-subtitle text-2xl font-semibold mb-4">Why Choose GetHired?</h2>
        <ul className="about-us-list list-disc list-inside ml-4 mb-4 text-gray-700">
          <li>Trusted Platform: We are committed to providing a secure and reliable platform for both job seekers and employers.</li>
          <li>Comprehensive Support: Our support team is always ready to assist you with any queries or issues.</li>
          <li>Innovative Features: Stay ahead with our continuously updated features designed to enhance your job search and hiring experience.</li>
          <li>Community Engagement: Join our community of professionals and employers to network, share knowledge, and grow together.</li>
        </ul>
        <p className="about-us-text text-gray-700 leading-relaxed">
          At GetHired, we believe that every individual deserves the opportunity to find a job they are passionate about, and every company deserves to find the right talent to achieve their goals. Join us today and take the next step towards a brighter future.
        </p>
      </section>

      <section className="about-us-section">
        <h2 className="about-us-subtitle text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="about-us-text text-gray-700 leading-relaxed">
          For any inquiries, please feel free to reach out to us at <a href="mailto:contact@gethired.com" className="text-blue-600 hover:underline">contact@gethired.com</a> or call us at <a href="tel:+123456789" className="text-blue-600 hover:underline">+123-456-789</a>. We look forward to helping you achieve your career goals with GetHired.
        </p>
      </section>
      </div>
    </div>
  );
};

export default About;

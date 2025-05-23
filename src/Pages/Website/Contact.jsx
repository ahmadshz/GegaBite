import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    order: '' // Changed from 'message' to 'order' to match your request
  });

  const contactInfo = [
    {
      icon: <FaPhone size={24} />,
      title: "Call Us",
      info: "+961 06 464 112",
      link: "tel:+96106464112",
      color: "bg-blue-100 dark:bg-blue-500"
    },
    {
      icon: <FaWhatsapp size={24} />,
      title: "WhatsApp",
      info: "+961 79 166 996",
      link: "https://wa.me/96179166996",
      color: "bg-green-100 dark:bg-green-500"
    },
    {
      icon: <FaInstagram size={24} />,
      title: "Instagram",
      info: "@gegabite.restocafe",
      link: "https://instagram.com/gegabite.restocafe",
      color: "bg-pink-100 dark:bg-pink-500"
    },
    {
      icon: <FaTiktok size={24} />,
      title: "TikTok",
      info: "@gegabite.restocafe",
      link: "https://www.tiktok.com/@gegabite.restocafe?_t=ZS-8wIFIqSgOJe&_r=1",
      color: "bg-black/10 dark:bg-white/10"
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    const { name, phone, order } = formData;
    const text = `Hello Gega Bite!%0A%0AMy name is ${name}.%0APhone: ${phone}%0A%0AMy Order:%0A${order}`;
    window.open(`https://wa.me/96179166996?text=${text}`, '_blank');
  };

  return (
    <div className='min-h-screen dark:text-white dark:bg-black'>
      <div className='container  pt-12 pb-[85px] md:pb-32'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 '>
            Get In Touch
          </h1>
          <p className='text-sm md:text-xl opacity-90 dark:text-gray-300 max-w-3xl mx-auto'>
            We'd love to hear from you! Message us directly on WhatsApp for quick responses about reservations, menu inquiries, or any questions.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16'>
          {contactInfo.map((item, index) => (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              key={index}
              className={`${item.color} p-6 rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-gray-700`}
            >
              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-full bg-white dark:bg-[#282828]'>
                  {React.cloneElement(item.icon, { className: "text-amber-600 dark:text-white" })}
                </div>
                <div>
                  <h3 className='font-semibold text-gray-700 dark:text-gray-200'>{item.title}</h3>
                  <p className='text-lg font-medium'>{item.info}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* WhatsApp Message Section */}
        <div className='max-w-4xl mx-auto bg-white dark:bg-[#282828] rounded-xl shadow-lg overflow-hidden '  >
          <div className='md:flex'>
            <div className='md:w-1/2 bg-[#FEC30D] p-8 md:p-12 flex flex-col justify-center'>
              <h2 className='text-2xl font-bold  mb-4'>Why WhatsApp?</h2>
              <ul className='space-y-3 '>
                <li className='flex items-start gap-2'>
                  <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                  </svg>
                  <span>Instant responses from our team</span>
                </li>
                <li className='flex items-start gap-2'>
                  <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                  </svg>
                  <span>Easy order tracking</span>
                </li>
                <li className='flex items-start gap-2'>
                  <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                  </svg>
                  <span>Quick reservation confirmations</span>
                </li>
                <li className='flex items-start gap-2'>
                  <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                  </svg>
                  <span>24/7 customer service</span>
                </li>
              </ul>
              <div className='mt-8'>
                <div className='flex items-center gap-3 bg-white/20 p-3 rounded-lg'>
                  <FaWhatsapp className='' size={24} />
                  <div>
                    <p className='text-sm '>Primary WhatsApp</p>
                    <p className=' font-medium'>+961 79 166 996</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 p-8 md:p-12'>
              <h2 className='text-2xl font-bold mb-6'>Place Your Order via WhatsApp</h2>
              <form onSubmit={sendWhatsAppMessage} className='space-y-4'>
                <div>
                  <label htmlFor='name' className='block mb-1 text-sm font-medium'>Your Name*</label>
                  <input 
                    type='text' 
                    id='name' 
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-[#282828] focus:outline-none focus:ring-2 focus:ring-amber-500'
                    placeholder='Your name'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='phone' className='block mb-1 text-sm font-medium'>Phone Number*</label>
                  <input 
                    type='tel' 
                    id='phone' 
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-[#282828] focus:outline-none focus:ring-2 focus:ring-amber-500'
                    placeholder='+961 79 166 996'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='order' className='block mb-1 text-sm font-medium'>Your Order*</label>
                  <textarea 
                    id='order' 
                    name='order'
                    value={formData.order}
                    onChange={handleChange}
                    rows={4}
                    className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-[#282828] focus:outline-none focus:ring-2 focus:ring-amber-500'
                    placeholder='Please describe your order here...'
                    required
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2'
                >
                  <FaWhatsapp size={20} />
                  Send Order via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react'
import MapComponent from '../../components/Pages/Location/MapComponent'
import { RxTimer } from 'react-icons/rx'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'

const Location = () => {
  const location = [
    {
      icon: <RxTimer size={22} />,
      desc: "12:00 PM - 1:00 AM",
      title: "Working Hours"
    },
    {
      icon: <FaLocationDot size={22} />,
      desc: "Tripoli - Minieh Hwy, North-Lebanon",
      title: "Event address"
    },
     {
      icon: <IoCall size={22} />,
      desc: "06 464 112 - 79 166 996",
      title: "Phone Number"
    },
  ]

  return (
    <div className=' min-h-screen lg:min-h-[80vh] dark:text-white dark:bg-black'>
      <div className='container px-4 sm:px-6'>
        {/* Header with adjusted padding for mobile */}
        <div className='text-center py-8 lg:py-10 lg:pb-12'>
          <h1 className='dark:text-white text-3xl md:text-4xl lg:text-[45px] font-bold pb-2 lg:pb-4'>
            Our Restaurants.<br/>
            Where to Find Us?
          </h1>
          <p className='text-sm md:text-xl opacity-90 dark:text-gray-300 max-w-3xl mx-auto'>
            Want to have a superb meal in an exceptional setting with family, friends or work colleagues, here are the addresses of our restaurants.
          </p>
        </div>

        {/* Grid layout adjusted for mobile */}
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 pb-12 mb-10 md:mb-0'>
          {/* Info section with better mobile spacing */}
          <div className='flex flex-col gap-6 md:gap-8 lg:gap-10 order-2 lg:order-1'>
            <h2 className='text-xl md:text-2xl lg:text-[28px] font-semibold'>
              Gega Bite Resto-Cafe
            </h2>

            {/* Location info items */}
            {location.map((item, idx) => (
              <div key={idx} className=''>
                <div className='flex gap-3 items-start'>
                  <span className='mt-0.5'>{item.icon}</span>
                  <div>
                    <h3 className='text-base md:text-lg lg:text-[18px] font-semibold leading-tight'>
                      {item.desc}
                    </h3>
                    <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1'>
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map component - full width on mobile */}
          <div className='h-64 sm:h-80 md:h-96 lg:h-[400px] w-full order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg'>
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
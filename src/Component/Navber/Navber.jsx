import React from 'react'
import Logo from '../../assets/website/coffee_logo.png'
import { FaCoffee } from 'react-icons/fa'


const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
]

const Navber = () => {
  return (
<div className=' shadow-lg '>
  <div className=' bg-gradient-to-r from-secondary to-secondary/90 text-white px-4'>
          <div className=' container mx-auto py-2 '>
              <div className=' flex justify-between '>
                  {/* logo---------------------------------------------- */}
                  <div 
                  // animation----
                  data-aos="fade-down" data-aos-once="true" >
                    <a className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider' href="#">
                      <img className='w-16 ' src={Logo} alt="" />
                      <span className='font-pacifico'>Coffee Cafe</span>
                    </a>
                  </div>

                  {/* links--------------------------------------------- */}
                  <div 
                  // animation----
                  data-aos="fade-down" data-aos-once="true" data-aos-delay="300"

                  className='flex justify-between items-center gap-4 uppercase'>
                    <ul className=' hidden sm:flex items-center gap-4 '>
                      {Menus.map((data, index) => (
                        <li key={index}>
                          <a className=' inline-block text-xl p-4 text-white/70 hover:text-white duration-200' href={data.link}>
                            {data.name}
                          </a>
                        </li>
                      ))}
                      <li></li>
                    </ul>
                    <button className=' bg-primary px-4 py-2 rounded-full hover:scale-105 duration-200 flex justify-center items-center gap-4 font-bold'>
                      Order
                      <FaCoffee className=' cursor-pointer' size={25}/>
                    </button>
                  </div>
              </div>
          </div>
    </div>
</div>
  )
}

export default Navber
import React from 'react'
import BannerImg from '../../assets/website/coffee-white.png'
import BgImg from '../../assets/website/coffee-texture.jpg'
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';


const bgImage = {
    backgroundImage: `url(${BgImg})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:"100%",
    width:"100%",
};

const Banner = () => {
  return (
    <>
        <div style={bgImage}>
            <div className="container min-h-[550px] mx-auto flex justify-center items-center py-12 sm:py-0 px-4">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {/* image section */}
                    <div data-aos="zoom-in">
                        <img src={BannerImg} alt=""
                        className='max-w-[430px] w-full mx-auto spin drop-shadow-xl' />
                    </div>


                    {/* text section */}
                    <div className='flex flex-col justify-center  gap-6 sm:pt-0'>
                        <h1 data-aos="fade-up" className='text-4xl font-pacifico sm:text-4xl font-bold' >Premium Blen Coffee</h1>
                        <p data-aos="fade-up"  className='text-gray-500 text-sm tracking-wide leading-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio
                        </p>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className=' space-y-5'>
                                <div data-aos="fade-up"   className='flex items-center gap-4 '>
                                    <GrSecure className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 '/>
                                    <p className='font-semibold'>Premium Coffee</p>
                                </div>

                                <div data-aos="fade-up"  data-aos-delay="200" className='flex items-center gap-4 '>
                                    <IoFastFood className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
                                    <p className='font-semibold'>Hot Coffee</p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="500" data-aos-offset ="0" className='flex items-center gap-4 '>
                                    <GiFoodTruck className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
                                    <p className='font-semibold'>Cold Coffee</p>
                                </div>
                            </div>

                            <div data-aos="slide-left"  data-aos-delay="300"
                            className=' space-y-3 border-l-4 border-primary/50 px-5'>
                                <h1 className='text-2xl font-pacifico font-bold'>Tea Lover</h1>
                                <p className='text-gray-500'>Much like writing code, brewing the perfect cup of tea requires patience, precision, and a dash of passion to create a comforting blend of flavors.</p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
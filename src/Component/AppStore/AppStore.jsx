import React from 'react'
import AppImg from '../../assets/website/coffee-beans-bg.png';
import AppStoreImg from '../../assets/website/app_store.png';
import PlayStoreImg from '../../assets/website//play_store.png';

const AppImgCover = {
    backgroundImage: `url(${AppImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:"100%",
    width:"100%",
};



const AppStore = () => {
  return (
    <>
        <div style={AppImgCover}>
            <div className='container mx-auto text-white py-14'>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                    <div className=' space-y-6 max-w-xl mx-auto'>
                        <h1 data-aos="fade-up"  data-aos-delay="300" className='text-4xl text-center sm:text-left sm:text-5xl font-bold pl-3 '>Coffee Cafe is available for Android and IOS</h1>
                        
                        <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                            <a data-aos="fade-up" data-aos-delay="400" href="#"><img src={AppStoreImg}  alt="" className='max-w-[150px] sm:max-w-[120px]
                            md:max-w-[200px]' /></a>
                            <a data-aos="fade-up"  data-aos-delay="500" href="#"><img src={PlayStoreImg}  alt="" className='max-w-[150px] sm:max-w-[120px]
                            md:max-w-[200px]' /></a>
                        </div>

                     </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AppStore
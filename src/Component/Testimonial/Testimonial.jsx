import React from 'react'
import Slider  from 'react-slick';


const TestimonialData = [

    {
        id: 1 ,
        name : "Dilshad",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2 ,
        name : "Sabir Ali",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3 ,
        name : "Dipankar Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 4 ,
        name : "Satya Narayan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104",
    },
]

const Testimonial = () => {
    const settings ={
        dots: true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite: true,
                }
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infiniteSlide:2,
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    
                }
            },
        ]
    }
  return (
    <div className='py-16'>
        <div className='container mx-auto px-4'>
            {/* header section */}
            <div className='pb-4'>
            <h1 data-aos="fade-up"  data-aos-delay="500" className='flex justify-center font-pacifico font-bold text-4xl text-black/80'>
                Testimonials</h1>
            </div>

            {/* Testimonials crad */}
            <div>
                <Slider {...settings}>
                    {TestimonialData.map((data,index) => {
                        return (
                            <div data-aos="zoom-in"  
                             className='my-6' key={data.id}>
                                <div className='flex flex-col gap-4 shadow-lg py-8 px-4 mx-4 rounded-xl bg-primary/10 relative  space-y-2'>
                                    {/* image section */}
                                    <div className=''>
                                    <img src={data.img} alt="" className=' rounded-full w-20 h-20'/>
                                    </div>

                                    <div className='flex flex-col items-center gap-4 '>
                                        <div className=' space-y-4'>
                                            <p className='text-gray-500'>{data.text}</p>
                                            <h1 className='text-2xl font-pacifico font-bold text-black/70'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                </div>

                            </div>
                        )

                    })}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
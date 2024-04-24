import Img1 from '../../assets/website/Espresso 3.png';
import Img2 from '../../assets/website/americano 1.png';
import Img3 from '../../assets/website/Cappuccino 2.png';


const ServicesData = [
    {
        id:1,
        img: Img1,
        name:"Espresso",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
        aosDelay:"100"
    },
    {
        id:2,
        img: Img2,
        name:"Americano",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
        aosDelay:"300"
    },
    {
        id:3,
        img: Img3,
        name:"Cappuccino",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
        aosDelay:"500"
    },
]

const Services = () => {
  return (
    <>
        <span id='services'></span>
        <div>
            <div className="container mx-auto py-12">
            <div data-aos="fade-up"  data-aos-delay="200">
            <h1 className='flex justify-center font-pacifico font-bold text-4xl text-black/80'>Best Coffee For You</h1>
            </div>

            {/* service card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                {           
                ServicesData.map((data, index) => {
                    return (
                        <div
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={index} 
                        className=' mt-16 rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative:' >
                            <div className='h-[122px]'>
                                <img className=' max-w-[200px] block mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300 '
                                src={data.img} alt="" />
                            </div>
                            {/* text content */}
                            <div className='p-5 text-center'>
                                <h1 className='text-xl font-bold'>{data.name}</h1>
                                <p className=' text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                            </div>

                        </div>
                    )
                })
                }
            </div>
            </div>
        </div>
    </>
  )
}

export default Services;
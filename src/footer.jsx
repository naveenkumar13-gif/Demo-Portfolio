 import Image from './chair/unsplash_2Xht5D22y0I.png'
 
 export default function Footer(){
  return(
    <div id='Contact' className=" px-16 py-16 max-md:px-8 max-md:py-8">
<h1 className="text-[#f7f197] text-7xl leading-[1.1] font-extrabold pb-10  max-md:text-center">Contact</h1>
    <div className='flex  gap-14 max-md:flex-col  max-xl:gap-8'>
      <div className='w-full h-full  max-md:1/2 max-md:m-auto'>
        <img  src={Image} alt='contact-Work' className='w-full h-full'/>
      </div>
      <div className='flex flex-col gap-4'>
        <p  className='w-4/5 text-2xl max-lg:text-lg max-md:text-base max-sm:w-full ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error laboriosam voluptates assumenda numquam? Sapiente, assumenda quas voluptates voluptatum cupiditate debitis illum vitae labore libero!</p>
        <div className='text-xl max-md:text-sm
        '>
        <p >johan@mail.com</p>
        <p>twitter.com</p>
        <p>LinkedIn.com</p>
        </div>
      </div>
    </div>
    </div>

  )
 }
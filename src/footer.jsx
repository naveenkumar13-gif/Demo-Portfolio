 import Image from './chair/unsplash_2Xht5D22y0I.png'
 
 export default function Footer(){
  return(
    <div className=" px-16 py-16 max-md:px-8 max-md:py-8">
<h1 className="text-[#f7f197] text-7xl leading-[1.1] font-extrabold pb-10 ">Contact</h1>
    <div className='flex  gap-16'>
      <div className='w-[80%] h-full'>
        <img  src={Image} alt='contact-Work' className='w-full h-full'/>
      </div>
      <div className='flex flex-col gap-4'>
        <p  className='w-3/4 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error laboriosam voluptates assumenda numquam? Sapiente, assumenda quas voluptates voluptatum cupiditate debitis illum vitae labore libero!</p>
        <div className='text-xl'>
        <p >johan@mail.com</p>
        <p>twitter.com</p>
        <p>LinkedIn.com</p>
        </div>
      </div>
    </div>
    </div>

  )
 }
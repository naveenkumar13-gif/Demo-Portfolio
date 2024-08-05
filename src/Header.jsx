

import Button from './Button';
import chair from  './chair/John Doe.png'

  
export default function Header() {
  return (
<div id='Home' className=' flex items-center justify-between px-16 py-16 max-md:px-8 max-md:py-8 max-sm:flex-row- max-sm:flex-col max-sm:gap-8  ' >
<div className=' flex flex-col max-sm:justify-center max-sm:items-center '>
<p  className=' text-3xl tracking-tight max-md:text-2xl'>Hello, I'm John,</p> 
<h1 className='w-1/2  text-8xl leading-[1.1] font-extrabold pb-4  max-md:text-6xl   max-sm:text-5xl  max-sm:text-center max-sm:w-3/4 max-sm:pb-2'>Product Designer</h1>
<p  className=' text-3xl pb-4   tracking-tight  max-md:text-2xl'>based in Netherland.</p>
  
{/* <Button bgcolor='#f7f197'
textcolor='#03045e'
text='Resume'/> */}
<Button/>

</div>
  <div className='w-[40%] h-[80%] max-lg:w-[50%]'>
<img src={chair} alt='Jhon' className='w-full h-full rounded-full' />
  </div>
  
</div>

    );
}

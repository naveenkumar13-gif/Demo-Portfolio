 export default function Nav(){

   return(
     <div className="px-16 py-4 max-lg:px-10 max-lg:py-2 max-md:px-8 ">
     <ul className='flex justify-between items-center py-4 px-2 max-md:px-0'>
       <li className='font-bold text-2xl text-[#03045e]  '> John Doe</li>
       <ul className='flex gap-12 max-md:gap:6 '>
       <li><a className="text-2xl ] max-md:hidden " href="#Home">Home</a></li>
       <li><a className="text-2xl ] max-md:hidden " href="#Work">Work</a></li>
       <li><a className="text-2xl ] max-md:hidden " href="#About">About</a></li>
       <li><a className="text-2xl ] max-md:hidden " href="#Contact">Contact</a></li>
       </ul>
       <ul className='flex gap-6'>
       <li className='font-bold text-2xl ] max-md:hidden '><ion-icon name="logo-twitter"></ion-icon></li>
       <li className='font-bold text-2xl ]  max-md:hidden'><ion-icon name="logo-linkedin"></ion-icon></li>
       </ul>
     <span className="hidden  text-2xl max-md:block"><ion-icon name="menu-outline"></ion-icon></span>
     </ul>
   </div>
   )
 }
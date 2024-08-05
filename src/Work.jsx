import chair from './chair/work-2.png'
import work from './chair/work-1.png' 

// const dataList=[
//   {
//     name: SomeCaseStudy,
//     para:Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi delectus neque non fugit dolore nam voluptatem, omnis assumenda sit vero! Laboriosam exercitationem eius quae.
//   Image:
  
//   }
// ]


export default function Work(){
  return(
    <div className=" px-16 py-16 max-md:px-8 max-md:py-8">
      <div className="pb-16 max-md:pb-8 max-md:flex max-md:flex-col max-md:items-center">
<h1 className="text-[#f7f197] text-7xl leading-[1.1] font-extrabold pb-4 ">Work</h1>
<p className="w-[45%] text-[#03045e] max-md:w-[90%] max-md:text-center max-lg:w-3/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, deleniti. Eligendi eaque quisquam ipsa unde sint consectetur ipsum aliquam necessitatibus minus molestias, vel voluptates quia deserunt velit eum explicabo distinctio!</p>
 </div>
 <div>
   <div className='flex gap-32  max-md:flex-col-reverse max-md:gap-16 '>
  <div className='max-md:flex max-md:flex-col max-sm:gap-4'>

    <div className='max-md:flex max-md:flex-col max-md:gap-3 '>
      <h3 className='text-xl font-bold max-md: text-center max-md:text-4xl'>Some Case Study</h3>
      <p className='text-lg leading-normal max-md:text-lg max-md:text-center  max-sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi delectus neque non fugit dolore nam voluptatem, omnis assumenda sit vero! Laboriosam exercitationem eius quae.</p>
    </div>
    <div >
      <img src={chair} alt='work-person'className='w-full h-full'/>
      <h5 className='text-sm italic p-3'>November 24, 2019</h5>
    </div>
  </div>
   <div>
   <div>
      <img src={work} alt='work-static'  className='w-full h-full'/>
      <h5 className='text-sm italic p-3'>November 24, 2019</h5>
    </div>
    <div className='max-md:flex max-md:flex-col max-md:gap-3 '>
      <h3 className='text-xl font-bold max-md: text-center max-md:text-4xl'>Some Case Study</h3>
      <p className='text-lg leading-normal max-md:text-lg max-md:text-center max-sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi delectus neque non fugit dolore nam voluptatem, omnis assumenda sit vero! Laboriosam exercitationem eius quae.</p>
    </div>
   </div>
   </div>
 </div>
    </div>
  )
}
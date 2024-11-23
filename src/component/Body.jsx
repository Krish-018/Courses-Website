import React from 'react'

const Body = () => {
  return (
    <div>
         {/* Main Text Section */}
      <div className="space-y-4 p-6 mt-20 md:ml-10">
        <div className="
          text-3xl 
          md:text-5xl 
          font-semibold 
          leading-snug 
          mt-6 
          ml-4 
          md:ml-9 
          mb-6
        ">
          Best way to revise for your next 
          <span className="block mt-2">coding interview</span>
        </div>

        {/* Subtitle */}
        <div className="text-base md:text-lg ml-4 md:ml-9">
          Get everything in a single guide: Data structures, algorithms, patterns,
          <br className="hidden md:block" /> 
          visualizers, questions, examples, solutions, explanations, and much more!
        </div>

        {/* Main Image */}
        <div className="flex justify-center md:justify-end">
          <img
            className="
              w-3/4 
              sm:w-2/3 
              md:w-1/2 
              lg:w-1/3 
              object-contain 
              -mt-20 
              md:-mt-80 
              md:mr-16
            "
            src="./assets/images/dsa-main.png"
            alt="DSA Main"
          />
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center md:justify-start ml-6 md:ml-24 mt-6 md:-mt-72">
        <button 
          className="
            bg-teal-500 
            text-white 
            px-16 
            md:px-60 
            py-4 
            rounded-full 
            hover:bg-teal-600 
            text-sm 
            md:text-base
          "
          aria-label="Buy Free Guide through Gumroad"
        >
          Buy FREE through GUMROAD
        </button>
      </div>

      {/* Quote Section */}
      <div 
        dir="ltr" 
        className="
          max-w-[90%] 
          md:w-[670px] 
          h-auto 
          bg-[#F6F8FC] 
          mt-8 
          md:mt-11 
          ml-6 
          md:ml-24 
          border-l-4 
          border-l-[#F5A782]
        "
      >
        <h3 className="
          p-4 
          md:p-6 
          italic 
          text-[#6C557D] 
          text-sm 
          md:text-base
        ">
          "Excellent revision tool, especially when you have an interview coming up in 15 days or so. It's so hard to find everything in one place."
        </h3>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center md:justify-start mt-8 ml-6 md:ml-[370px] space-x-2">
        <div className="w-3 h-3 bg-[#A5A8BE] rounded-full"></div>
        <div className="w-3 h-3 bg-[#A5A8BE] rounded-full"></div>
        <div className="w-3 h-3 bg-[#A5A8BE] rounded-full"></div>
      </div>


{/* Second-page */}

<div>

  <h1 className=' text-5xl 
          font-semibold 
          mt-[180px]
          ml-[620px]'>What's Included</h1>

<div className="flex justify-center items-start mt-[50px]">
  {/* <!-- Image Section --> */}
  <img src="./assets/images/dsa-2.png" alt="" className="h-[450px] w-[370px] mr-[50px]" />

  {/* <!-- Text Section --> */}
  <div className="ml-[20px] mt-[30px] ">
    <h2 className="flex items-center text-xl py-1 text-[#4C527D]">
      <span className="mr-2">✔️</span> 15+ algo patterns discussed
    </h2>
    <h2 className="flex items-center text-xl py-1 text-[#4C527D]">
      <span className="mr-2">✔️</span> Detailed solutions and explanations
    </h2>
    <h2 className="flex items-center text-xl py-1 text-[#4C527D]">
      <span className="mr-2">✔️</span> Awesome resources, articles, blogs
    </h2>
    <h2 className="flex items-center text-xl py-1 text-[#4C527D]">
      <span className="mr-2">✔️</span> Visualizers and animations included
    </h2>
    <h2 className="flex items-center text-xl py-1 text-[#4C527D]">
      <span className="mr-2">✔️</span> 100 pages of quality content
    </h2>
    <h2 className="flex items-center text-xl py-1 text-[#4C527D]">
      <span className="mr-2">✔️</span> Concepts explained for beginners
    </h2>
    <h2 className="flex items-center text-xl py-1 text-[#4C527D]">
      <span className="mr-2">✔️</span> All in one revision guide
    </h2>
  </div>
  <div className='flex absolute  mt-[320px] right-[450px]'>
    <button className='bg-[#E55713] h-[60px] w-[200px] rounded-full font-bold text-[#FFFFFF]'> Download for free</button>
  </div>
</div>
</div>



{/* Page-3 */}


<div className="flex flex-wrap justify-center mt-[210px]">
  <div className="h-[250px] w-[550px] rounded-lg m-[20px] border-solid border-2">
    <h3 className='p-[40px]'>"With Walling, we can structure our ideas and tasks visually, which makes teamwork more seamless and productive. The visual layout makes it easy to plan content and keep our projects and campaigns moving forward smoothly."</h3>
    <h3 className='ml-[120px] text-lg font-semibold'> Miss Odas</h3>
<h2 className='ml-[120px] text-sm'>Developer</h2>
   <img  className='h-[60px] w-[65px] rounded-full absolute object-fill left-[14vw] top-[118vw]'src="https://petapixel.com/assets/uploads/2019/02/download-2.jpeg" alt=""/>
  </div>
  <div className="h-[250px] w-[550px] rounded-lg m-[20px] border-solid border-2">
    <h3 className='p-[40px]'>"With Walling, we can structure our ideas and tasks visually, which makes teamwork more seamless and productive. The visual layout makes it easy to plan content and keep our projects and campaigns moving forward smoothly."</h3>
    <h3 className='ml-[120px] text-lg font-semibold'> Miss Ola</h3>
<h2 className='ml-[120px] text-sm'>Developer</h2>
   <img  className='h-[60px] w-[65px] rounded-full absolute object-fill left-[53vw] top-[118vw]'src="https://th.bing.com/th/id/OIP.jHxP2X1K3tZr-CLInnGxxgAAAA?w=283&h=283&rs=1&pid=ImgDetMain" alt=""/>
</div>
</div>
    </div>
  )
}

export default Body
 
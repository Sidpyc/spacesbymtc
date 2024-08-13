

const Contactus = () => {
  return (
    <>
        
<section id="contactus" className=" bg-[#202020]  h-lvh py-10 ">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <form action="#" className="space-y-8">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input type="name" id="name" className="rounded-none md:h-[42px] md:max-w-[478px] w-full bg-white pl-[14px] md:pl-[26px] text-[#7D7D7D] focus:outline-none text-base py-3 md:py-0 md:text-base font-light leading-[30px] bg-opacity-10 appearance-none" placeholder="Enter your name " required/>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="rounded-none md:h-[42px] md:max-w-[478px] w-full bg-white pl-[14px] md:pl-[26px] text-[#7D7D7D] focus:outline-none text-base py-3 md:py-0 md:text-base font-light leading-[30px] bg-opacity-10 appearance-none" placeholder="Enter your email" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Topic</label>
              <input type="text" id="subject" className="rounded-none md:h-[42px] md:max-w-[478px] w-full bg-white pl-[14px] md:pl-[26px] text-[#7D7D7D] focus:outline-none text-base py-3 md:py-0 md:text-base font-light leading-[30px] bg-opacity-10 appearance-none" placeholder="Let us know how we can help you" required/>
          </div>
          
          <button type="submit" className="inline-block border cursor-pointer text-white max-w-[478px] w-full focus:outline-none rounded-none md:h-[55px] text-base py-3 md:py-0 md:text-[20px] leading-[30px] border-none bg-keus-green transition-colors duration-300 ease-in-out">Send message</button>
      </form>
  </div>
</section>
    </>
  )
}

export default Contactus
import Image from "next/image";
export default function Hero() {
	return (
     
     <div>
      <section className="bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-7">
      <h1 className="font-bold lg:text-7xl md:text-7xl text-2xl  text-blue-900">
        Governor Sindh
     </h1>   
        <br className="hidden lg:inline-block" />
      <h2 className=" sm:text-4xl text-3xl text-blue-900">Kamran Khan Tessori</h2>

        <h1 className="font-bold lg:text-5xl md:text-5xl text-2xl  text-blue-400 mt-10">
        Certified Cloud
                <br className="hidden lg:inline-block" />

        Applied Generative AI
        <br className="hidden lg:inline-block" />

        Engineer (GenEng)
     </h1> 

           <h2 className="font-bold font-serif lg:text-2xl md:text-2xl text-lg text-blue-900 mt-10">Earn up to $5,000 / month</h2>

        <br className="hidden lg:inline-block" />
        <h2 className="font-bold font-serif lg:text-2xl md:text-2xl text-lg text-blue-900">Now admissions are open in Hyderabad
        </h2>
      <div className="flex justify-center mt-10">
        <button className="inline-flex font-bold text-white bg-blue-900 border-0 py-3 px-4 focus:outline-none rounded-lg text-lg font-serif">
          Apply_Now
        </button>
        <button className="ml-4 inline-flex text-blue-900  border-0 py-2 px-6 focus:outline-none  rounded lg:text-3xl md:text-3xl text-lg font-bold font-serif">
          562,143
        </button>

      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero_img"
        src={require("../../../img/hero.png")}
      />
    </div>
  </div>
</section>

     </div>

 );
}
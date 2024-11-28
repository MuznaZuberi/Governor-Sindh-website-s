import Image from "next/image";
export default function OurServices() {
	return (
     
     <div>
     	<section className="text-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
        <h1 className="lg:text-3xl md:text-3xl text-xl font-bold font-serif mb-4 text-blue-900">
                 𝑪𝒆𝒓𝒕𝒊𝒇𝒊𝒆𝒅 𝑪𝒍𝒐𝒖𝒅 𝑨𝒑𝒑𝒍𝒊𝒆𝒅 𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒊𝒗𝒆 𝑨𝑰 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓 (𝑮𝒆𝒏𝑬𝒏𝒈) 𝒂𝒏𝒅 𝑺𝒐𝒍𝒐𝒑𝒓𝒆𝒏𝒆𝒖𝒓 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒊𝒏𝒈 𝑩𝒊𝒍𝒍𝒊𝒐𝒏-𝑫𝒐𝒍𝒍𝒂𝒓 𝑽𝒂𝒍𝒖𝒆𝒅 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓𝒔 𝒂𝒏𝒅 𝑺𝒐𝒍𝒐𝒑𝒓𝒆𝒏𝒆𝒖𝒓𝒔      </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-justify">
                 The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>
        </div>
        </div>
        </section>
 

        <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="image"
            className="object-cover object-center h-full w-full"
            src={require("../../../img/s_01.jpg")}
        />
        </div>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="image"
            className="object-cover object-center h-full w-full"
            src={require("../../../img/s_02.jpg")}
        />
        </div>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="image"
            className="object-cover object-center h-full w-full"
            src={require("../../../img/s-3.jpg")}
        />
        </div>
        </div>
        </div>
        </div>
        </section>
     </div>
 );
}

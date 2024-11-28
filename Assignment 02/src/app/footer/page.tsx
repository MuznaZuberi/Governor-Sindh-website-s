import Link from "next/link";
export default function Footer() {
	return (
     
     <div>
     	<footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-sm lg:text-2xl md:text-2xl font-bold font-serif text-gray-700">Social Links</span>
        </a>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link href = "#" className="text-gray-500 mt-4">
        <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
          </Link>
          <Link href = "#" className="text-gray-500 mt-4 ml-4">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
          </Link>
          <Link href = "#" className="text-gray-500 mt-4 ml-4">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
          </Link>
          <Link href = "https://www.linkedin.com/in/muzna-amir-zubairi-280135264/" target = "blank" className="text-gray-500 mt-4 ml-4">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
          <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
          </Link>
          </span>
          <p className = "mt-3 font-bold font-serif">muznazuberi123@gmail.com</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
          <h2 className="font-serif font-bold text-gray-700 tracking-widest text-sm lg:text-xl md:text-xl mb-3">
                         Core Courses
          </h2>
          <nav className="list-none mb-10">
          <li>
          <a className="text-gray-800">Programming Fundamentals</a>
          </li>
          <br/>
          <li>
          <a className="text-gray-800">Web2 Using NextJS</a>
          </li>
          <br/>
          <li>
          <a className="text-gray-800">Earn as You Learn</a>
          </li>
          </nav>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
          <h2 className="font-serif font-bold text-gray-700 tracking-widest text-sm lg:text-xl md:text-xl mb-3">
                      AdvancedCourses
          </h2>
          <nav className="list-none mb-10">
          <li>
          <a className="text-gray-800">Web 3 and Metaverse</a>
          </li>
          <br/>
          <li>
          <a className="text-gray-800">Cloud-Native Computing</a>
          </li>
          <br/>
          <li>
          <a className="text-gray-800">Artificial Intelligence (AI) and Deep Learning</a>
          </li>
          <br/>
          <li>
          <a className="text-gray-800">Ambient Computing and IoT</a>
          </li>
          <br/>
          <li>
          <a className="text-gray-800">Genomics and Bioinformatics</a>
          </li>
          <br/>
          <li>
          <a className="text-gray-800">Network Programmability and Automation</a>
          </li>
          </nav>
          </div>
          </div>
          </div>
          </footer>
       </div>
 );
}

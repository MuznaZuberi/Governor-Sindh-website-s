import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
	return (
     
     <div>
       <header className="text-gray-600 body-font">
  <div className="nav-container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image
        src = {require("../../../img/logo.png")}
        width = "60"
        alt = "logo_img"
      />
    </a>
    <h1 className="mx-auto flex flex-wrap items-center text-base justify-center lg:text-xl md:text-xl font-bold font-serif text-sm">Tuition Free Education Program on Latest Technologies</h1>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg font-bold font-serif justify-center">
      <a className="mr-5">Home</a>
      <a className="mr-5">Apply</a>
      <a className="mr-5">Jobs</a>
      <a className="mr-5">Result</a>
      <DropdownMenu>
      <DropdownMenuTrigger>Courses</DropdownMenuTrigger><IoMdArrowDropdown className = "mt-2" />
      <DropdownMenuContent>
      <DropdownMenuLabel className = "text-xl p-4">Core Courses</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Programming Fundamentals</DropdownMenuItem>
      <DropdownMenuItem>Web2 Using NextJS</DropdownMenuItem>
      <DropdownMenuItem>Earn as You Learn</DropdownMenuItem>

       <DropdownMenuLabel className = "text-xl p-4">Advanced Courses</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Web 3 and Metaverse</DropdownMenuItem>
      <DropdownMenuItem>Cloud-Native Computing</DropdownMenuItem>
      <DropdownMenuItem>Artificial Intelligence (AI) and Deep Learning</DropdownMenuItem>
      <DropdownMenuItem>Ambient Computing and IoT</DropdownMenuItem>
      <DropdownMenuItem>Genomics and Bioinformatics</DropdownMenuItem>
      <DropdownMenuItem>Network Programmability and Automation</DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  </div>
</header>

     </div>

 );
}
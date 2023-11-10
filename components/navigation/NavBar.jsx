import Link from "next/link"
import {FaRecordVinyl} from "react-icons/fa" 
 function NavBar ( {children}){
    return (
        <nav className="py-4 px-4  ">
            <ul className="flex justify-between items-center">
                <li><Link className="text-rose-600 font-medium" href="/">
                          <figure className="flex items-center text-red-500 gap-1">
                            <figcaption className="text-lg">Record Shop</figcaption>
                            <FaRecordVinyl size={20}/>
                          </figure>
                    </Link></li>
                <li><Link className="text-red-500 font-large" href="/records">Records</Link></li>
                <li><Link className="text-red-500 font-large" href="/record">
                    </Link>Record</li>
            </ul>
        </nav>
    )
 }



 export {NavBar}
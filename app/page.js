import {PageHeader} from "../components/header/PageHeader"
import {NavBar} from "../components/navigation/NavBar"
export default function Home() {
  return (
    <>
    <NavBar/>
    <PageHeader title="Record Shop" tagline="home page for the site"/>
    <main className=" min-h-screen py-24">
  </main>
    </>
  )
}

//  function HomePage ({children}) {
//   return (
//     <>
//       <header className="text-center pt-28">
//         <h2 className="text-5xl text-slate-900">HomePage Page Component </h2>
//       </header>
//       <main className=" min-h-screen py-24">
//         {children}
//       </main>
  
     
//     </>
//   );
// }

// export default HomePage
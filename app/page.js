
import { PageHeader } from "../../components/header/PageHeader"
import { getRecords } from "@/lib/firebase/getEmployees";
 

// Link element to create a dynamic route.

 

 async function RecordsPage (  ) {
   const payload = await getRecords();
    const keys =  Object.keys(payload)
    const values = Object.values(payload)
    const entries = Object.entries(payload)
 

  

   return(
    <>
    <PageHeader title="All Records Display"/>
    <main className=" min-h-screen py-24">
       {
          values.map(item=> <Card  key={item.uid} {...item}/>)
       }
     </main>
    </>
   )
  
  
}


export default RecordsPage
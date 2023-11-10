import {db} from '@/lib/firebase/firebase-config'
async function GET (req, {params}) {
    const dbRef =  db.ref('/records')
    const dataSnapshot = await dbRef.once('value')
    const rtdData = dataSnapshot.val()
    console.log(records)
    return Response.json(rtdData)
}
 
export {GET}
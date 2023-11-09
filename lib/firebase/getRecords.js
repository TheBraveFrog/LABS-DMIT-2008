import {db} from './firebaseConfig'
export async function getRecords () {
    const dbRef =  db.ref('/records')
    const dataSnapshot = await dbRef.once('value')
     return  dataSnapshot.val()
}
// import { sleep } from "./utils"

// Firebase Setup
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiGmfQgTuRaBHDvk9LsNnem1cwq6kbAbM",
  authDomain: "vanlife-b339d.firebaseapp.com",
  projectId: "vanlife-b339d",
  storageBucket: "vanlife-b339d.appspot.com",
  messagingSenderId: "834274233175",
  appId: "1:834274233175:web:0c7638b068bbcda305cc12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

// export async function getVans() {
//     const querySnapshot = await getDocs(vansCollectionRef)
//     const dataArr = querySnapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id
//     }))
//     console.log(dataArr)
//     return dataArr
// }

export async function getVans(id) {
    // await sleep(2000)
    const url = id 
        ? `/api/vans/${id}`
        : `/api/vans`
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Error getting vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}
export async function getHostVans(id) {
    // await sleep(2000)
    const url = id 
        ? `/api/host/vans/${id}`
        : `/api/host/vans`
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Error getting vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: data.statusText,
            status: res.status
        }
    }

    return data
}
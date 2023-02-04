import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { serviceAccount } from "./secrets.js";

export default function authConnect (){
    if (!getApps().length){
        initializeApp({
            credential: cert(serviceAccount)
        })
    }
    return getAuth()
}
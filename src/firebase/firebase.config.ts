// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

interface ImportMetaEnv {
  VITE_PUBLIC_UPLOAD_PRESET(arg0: string, VITE_PUBLIC_UPLOAD_PRESET: any): unknown;
  VITE_PUBLIC_CLOUD_NAME: any;
  VITE_APIKEY: string;
  VITE_AUTHDOMAIN: string;
  VITE_PROJECTID: string;
  VITE_STORAGEBUCKET: string;
  VITE_MESSAGINGSENDERID: string;
  VITE_APPID: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

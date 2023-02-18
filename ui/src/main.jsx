import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzaGBDGooiO00RGZyLLYZp1jKJY7a-9gc",
  authDomain: "fir-auth-7976f.firebaseapp.com",
  projectId: "fir-auth-7976f",
  storageBucket: "fir-auth-7976f.appspot.com",
  messagingSenderId: "446327705990",
  appId: "1:446327705990:web:a448f41b9d8fb7197e5c07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

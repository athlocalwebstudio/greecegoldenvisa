"use client";


import {
useEffect,
useState
} from "react";


import LoadingScreen from "@/app/components/LoadingScreen/LoadingScreen";



export default function ClientLayout({
children
}){


const [loading,setLoading]=useState(true);



useEffect(()=>{


function finishLoading(){


setTimeout(()=>{


setLoading(false);


},700);


}



if(document.readyState === "complete"){


finishLoading();


}else{


window.addEventListener(
"load",
finishLoading
);


}



return ()=>{


window.removeEventListener(
"load",
finishLoading
);


};


},[]);



return (

<>


{
loading &&
<LoadingScreen/>
}


{children}


</>


);


}
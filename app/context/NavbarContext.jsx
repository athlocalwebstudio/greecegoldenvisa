"use client";

import {
  createContext,
  useContext,
  useState
} from "react";


const NavbarContext = createContext();


export function NavbarProvider({children}){

  const [cinematic,setCinematic] = useState(false);


  return (

    <NavbarContext.Provider
      value={{
        cinematic,
        setCinematic
      }}
    >

      {children}

    </NavbarContext.Provider>

  );

}



export function useNavbar(){

  return useContext(NavbarContext);

}
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const appContext = createContext()

export const useAppContext = () => useContext(appContext)


const Context = ({children}) => {

const [open, setOpen] = useState(false);

  return (
    <appContext.Provider value={{open, setOpen}}>
        {children}
    </appContext.Provider>
  )
}
export default Context;

import { createContext, useContext } from "react";

const context =  createContext();
const useHeader = ()=>{
    return useContext(context);
}
export default useHeader;
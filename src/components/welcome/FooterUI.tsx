import {
    Button,
} from "@material-tailwind/react";
import { useState } from "react";



export function FooterUI({ onSaveHandler,isDisable,setDisable }) {
    

    return <div color="" style={{marginTop: '300px', padding: '8px'}} className="w-full z-10 sticky bg-slate-600 bottom-0">
        <div className="container mx-auto flex items-center justify-end text-blue-gray-900 ">
            <Button onClick={()=>{setDisable(p => !p );onSaveHandler();}}>
                Save
            </Button>
        </div>
    </div>
}

export default FooterUI;

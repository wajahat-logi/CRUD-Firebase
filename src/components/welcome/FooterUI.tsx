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
// import React from "react";

// const footerHeight = 300;
// const footerEltMarginTop = 15;

// const div1Style = {
//   width: "100vw",
//   height: `${footerHeight + footerEltMarginTop}px`,
//   backgroundColor: "blue",
//   marginTop: "30px",
//   position: "absolute",
// };

// const div2Style = {
//   width: "100%",
//   position: "absolute",
//   color: "white",
//   height: `${footerHeight}px`,
//   marginTop: `${footerEltMarginTop}px`,
// };


// export default function Footer() {
//   return (
//     <div style={{width: "100%"}}>
//       <div style={div1Style}></div>
//       <div style={div2Style}>
//         <div>footer content</div>
//       </div>
//     </div>
//   );
// }
// "use client"
// import { useState } from "react";


// export default function QuantityModifier() {
//     const [value, setValue] = useState(0);
//     const handleClick = () => {

//     }
//     return (
//         <div className="border-slate-400 border-[1px] rounded-md w-40 h-12 pt-2 hover:cursor-pointer gap-5 pl-5 flex select-none">
// {/*  */}
//             <div className="text-2xl font-bold" onClick={() => { if (value > 0) { setValue(value - 1) } else { setValue(value) } }}>-</div>
//             <div className="text-xl">{value}</div>
//             <div className="text-2xl hover:cursor-pointer font-bold" onClick={() => { setValue(value + 1) }}>+</div>
//         </div>
//     );
// }
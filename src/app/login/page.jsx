import Image from "next/image";
import img1 from "../../../public/dogregister.jpg";
import Link from "next/link";

export default function Login(){
    return(
        <div className="bg-slate-200 tracking-wider">
            <div className="flex gap-32 bg-white mt-4">
                <div className="w-1/2">
                    <div className="pl-[15%] pt-[8%]">
                        <h1 className="text-2xl antialiased tracking-widest  font-semibold ">Welcome Back</h1>
                        <p className="text-slate-500 tracking-wide text-base">Please Login to your account</p>
                        
                        <h2 className="mt-7 text-lg">Mobile Number *</h2>
                        <input className="bg-slate-200 border-none h-[45px] w-full pl-5 rounded-md outline-none" type="tel" id="fname" name="fname" placeholder="Enter Your Mobile Number"></input>
                        <h2 className="mt-7 text-lg">Password *</h2>
                        <input className="bg-slate-200 border-none h-[45px] pl-5 rounded-md outline-none w-full" type="password" id="password" name="fname" placeholder="Enter Your Password"></input>
                        <div className="tracking-wide">
                            <input className="mt-7 text-lg" type="checkbox" id="scales" name="scales" />
                            <label htmlFor="scales" className="text-sm pl-2 font-normal">Remember me 
                            </label>
                        </div>
                        <input type="submit" value="Login" className="bg-blue rounded py-3 px-10 hover:cursor-pointer mt-3 text-white text-lg font-semibold tracking-widest w-full" />
                        <div className="flex gap-2 mt-3">
                        <p className="">Don't have an accont?</p>
                        <a href= "/register" className="text-blue">Register for free</a>
                        </div>
                        
                        
                    </div>
                    
                </div>
                <div className="">
                    <Image
                    src={img1}
                    alt="Dog photo"
                    width= {500}
                    height={500}
                    className=""
                    />
                </div>
            </div>
        </div>
        
    );
}
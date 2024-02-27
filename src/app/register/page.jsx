import Image from "next/image";
import img1 from "../../../public/dogregister.jpg";
import Link from "next/link";

export default function Register(){
    return(
        <div className="bg-slate-200 tracking-wider">
            <div className="flex gap-32 bg-white mt-4">
                <div className="w-1/2">
                    <div className="pl-[15%] pt-[8%]">
                        <h1 className="text-2xl antialiased tracking-widest  font-semibold ">Get Started</h1>
                        <p className="text-slate-500 tracking-wide text-base">Lets be part of our community</p>
                        <h2 className="mt-7 text-lg">Full Name *</h2>
                        <input className="bg-slate-200 border-none h-[45px] w-full pl-5 rounded-md outline-none" type="text" id="fname" name="fname" placeholder="Enter Your Full Name" required></input>
                        <h2 className="mt-7 text-lg">Mobile Number *</h2>
                        <input className="bg-slate-200 border-none h-[45px] w-full pl-5 rounded-md outline-none" type="tel" id="mnumber" name="fname" placeholder="Enter Your Mobile Number"></input>
                        <h2 className="mt-7 text-lg">Password *</h2>
                        <input className="bg-slate-200 border-none h-[45px] w-full pl-5 rounded-md outline-none" type="password" id="password" name="fname" placeholder="Enter Your Password"></input>
                        <h2 className="mt-7 text-lg">Confirm Password *</h2>
                        <input className="bg-slate-200 border-none h-[45px] w-full pl-5 rounded-md outline-none" type="password" id="cpassword" name="fname" placeholder="Re-enter Your Password"></input>
                        <div className="tracking-wider">
                            <input className="mt-5 h-5 w-5" type="checkbox" id="scales" name="scales" />
                            <label htmlFor="scales" className="pl-2 text-sm font-medium">I agree to
                            </label>
                            <a href="" className="text-blue text-base font-medium t"> terms and conditions</a>
                        </div>
                        <input type="submit" value="Register Now" className="bg-blue rounded py-3 px-10 hover:cursor-pointer mt-7 text-white text-lg font-semibold tracking-widest w-full" />
                        <div className="flex gap-2">
                        <p className="">Already have an accont?</p>
                        <a href= "/login" className="text-blue">Login</a>
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
            <Footer />
        </div>
        
    );
}
import PlayIcon from '../app/Playstore.png'
import Image from "next/image";
import Logo from '../../public/doghead.png'
import InstaLogo from "../app/instaLogo";
import WhatsappLogo from "../app/whatsappLogo";
import Link from "next/link";
import FbLogo from './fbLogo';
export default function Footer() {
    return(
        <div className="bg-green-100 h-[380px]">
            <div className="flex gap-20 px-28 border-b border-gray-400 h-[330px]">
                <div className="h-full">
                    <div className="pl-10 pt-10">
                        <Image
                        src={Logo}
                        alt="Logo"
                        height={100}
                        width={100}
                         />
                    </div>
                    <div className="">
                        <p className="text-slate-600 pl-3 pt-3 font-normal">+977-98412002</p>
                        <p className="font-normal">New Road, Kathmandu</p>
                    </div>
                    <div className="flex gap-5 mt-5 ml-5">
                    <Link href="https://www.facebook.com/dogsnepalpetstore?mibextid=ZbWKwL" target="_blank"><FbLogo color = "black" /></Link>
                    <Link href="https://www.instagram.com/dogsnepal/?hl=en" target="_blank"><InstaLogo color = "black" /></Link>
                    <Link href="https://api.whatsapp.com/send/?phone=9841000571&text&type=phone_number&app_absent=0" target="_blank"><WhatsappLogo /></Link>
                    </div>
                </div>
                <div className="h-full mt-14">
                    <h1 className="text-3xl font-poppins font-semibold">Quick Links</h1>
                    <ul className="mt-3 font-medium text-lg text-inherit flex flex-col gap-2 text-slate-600 hover:cursor-pointer">
                        <li >Search</li>
                        <li>Featured Products</li>
                        <li>New Products</li>
                        <li>Pets For Adoption</li>
                        <li>Pets For Grooming</li>
                        <li>Pets For Vaccination</li>
                    </ul>
                </div>
                <div className="h-full mt-14">
                    <h1 className="text-3xl font-poppins font-semibold">Information</h1>
                    <ul className="mt-3 font-medium text-lg text-inherit flex flex-col gap-2 text-slate-600 hover:cursor-pointer">
                        <li className="">Terms Of Service</li>
                        <li className="">Privacy Policy</li>
                        <li className="">Return Policy</li>
                        <li className="">Frequently Asked Questions</li>
                    </ul>
                </div>
                <div className="h-full mt-14">
                    <h1 className="text-3xl font-poppins font-semibold">Download</h1>
                    <Link href="https://play.google.com/store/apps/details?id=np.com.dogsnepal.dogsnepal.app" target='_blank'>
                        <div className="flex flex-col mt-5 pl-14">
                            <Image
                            src={PlayIcon}
                            alt="Playstore"
                            />
                        </div>
                    </Link>
                    <div className='mt-6 pl-14'>
                       <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M54.166,19.783c-0.258,0.162-6.401,3.571-6.401,11.13c0.29,8.621,7.752,11.644,7.88,11.644	c-0.128,0.162-1.127,4.119-4.085,8.267C49.213,54.398,46.607,58,42.65,58c-3.764,0-5.115-2.381-9.458-2.381	c-4.664,0-5.984,2.381-9.555,2.381c-3.957,0-6.756-3.795-9.232-7.335c-3.216-4.633-5.95-11.903-6.047-18.883	c-0.065-3.699,0.644-7.335,2.444-10.423c2.541-4.312,7.077-7.238,12.031-7.335c3.795-0.128,7.173,2.606,9.49,2.606	c2.22,0,6.37-2.606,11.065-2.606C45.415,14.026,50.82,14.636,54.166,19.783z M32.002,13.285c-0.676-3.378,1.19-6.756,2.927-8.911	C37.149,1.769,40.655,0,43.678,0c0.193,3.378-1.03,6.691-3.216,9.104C38.5,11.71,35.122,13.671,32.002,13.285z"/></svg>
                    </div>
                </div>
            </div>
            <p className='text-slate-600 text-lg ml-[20%] mt-2'>Copyright© Dogs Nepal Pet Shop |   All right reserved |Powered by: Reflex IT Solution</p>
        </div>
    );
}
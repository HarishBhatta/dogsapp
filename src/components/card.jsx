import Image from 'next/image';
import dispenser from '../components/card/dispenser.jpg'
export default function Card() {
    return(        
        <div className="bg-white h-[300px] w-[220px] ml-12 ">
            <div className="pt-3 pl-3">
                <Image 
                src={dispenser}
                alt = 'dispenser image'
                height={128}
                width={176}
                objectFit='cover'
                 />
            </div>
                <p className='text-xl font-normal pl-3'>Water Dispenser Basic</p>
                <div className='flex gap-7'>
                    <p className="text-xl font-bold pl-3 line-through decoration-2 decoration-black text-slate-400">Rs 1500
                    </p>
                    <p className='text-xl font-bold text-blue'>Rs 1350</p>
                </div>
            </div>
    );
}
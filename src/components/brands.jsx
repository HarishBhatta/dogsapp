import Image from 'next/image';
import FishImage from '@/app/brands/husky.png'
import Link from 'next/link';

export default function Brands({title}) {
    return(
        <>
          <div className='bg-slate-200 flex gap-[40%]'>            
            <div className='pt-20 pl-12'>
                <p className='text-blue font-semibold text-4xl'>{title}</p>
                <p className='font-medium text-xl mt-4'><Link href='/'>Home</Link></p>
            </div>
            <div className="">
                <Image
                src={FishImage}
                alt='image'
                height={450}
                width={450}
                />
            </div>
         </div>
        </>        
        );
    }
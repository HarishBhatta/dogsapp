import secondimage from '../../public/secondimage.png';
import Image from 'next/image';
import Button from './button';
const SecondSlide = () => {
      return (
        <div className="bg-neutral-300 h-[576px] w-full flex gap-20">
            <div className="ml-24 pt-24 w-[40%]">
                <h2 className='font-semibold text-xl text-blue'>Keep Your Pet Clean</h2>
                <h1 className='font-bold text-6xl pl-2 mt-5'>Pet Grooming</h1>
                <p className='font-mediun text-3xl pl-2 my-10'>Your Pet also cares about hyegine </p>
                <div className="pl-2"><Button button = "Get Appointment" /></div>
                
            </div>
            <div className="bg-grey-200 mt-40">
                <Image
                 src={secondimage}
                 alt='dog image'
                 height={350}
                 width={350}
                 />
            </div>
        </div>
      )
    }
export default SecondSlide;
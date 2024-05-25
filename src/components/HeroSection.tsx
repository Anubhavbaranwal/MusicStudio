import Link from 'next/link';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';
const HeroSection = () => {
  return (
    <div className="h-auto md:h-screen w-full rounded-md flex justify-center relative overflow-hidden items-center mx-auto py-10 flex-col  md:py-0 ">  
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className="my-24 md:mt-0 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Art of Music</h1>
            <p className="mt-4 font-normal text-base md:text-xl text-neutral-300 max-w-xl mx-auto">Div into our comprehensive music course and transform your musical journey today.whether you're a beginner or looking to refine your skills ,join us to unloakc your true potential</p>
            <div className="mt-4">
            <Link href={"/courses"}>
               <Button borderRadius="1.75rem"  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                 Explore Course
               </Button>
            </Link>
            </div>
        </div>
    </div>
    // <>hello</>
  )
}

export default HeroSection;
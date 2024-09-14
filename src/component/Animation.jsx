import React from 'react'
import Lottie from 'lottie-react'
import Car from '../assets/lottie/car.json'
import BackgroundLayer from '../assets/lottie/background-layer.json'
import 'animate.css';

const Animation = () => {
    return (
        <div className='relative'>
            <div className='absolute  w-full'>
                <Lottie animationData={BackgroundLayer} loop={true} speed={1.5} />
            </div>
            <div className='container max-w-[1440px] px-3 relative flex justify-center flex-col items-center'>
                <div className='w-full max-w-[400px]  top-[50%] left-[100%] animate__animated animate__flip'>
                    <Lottie animationData={Car} loop={true} speed={1.5} />
                </div>
                <p className='hlo text-5xl text-white'>Hello</p>
                <div className='flex flex-col text-center items-center justify-center'>
                    <h1 className='animate__animated animate__pulse animate__infinite font-black text-white text-[40px] max-w-[1000px]'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora praesentium suscipit ad eos est quo libero id neque, quaerat reiciendis cupiditate fuga iusto dolorum aut numquam. Saepe dolorum consequatur facilis!
                    </h1>
                    <div className='text-base text-red-500 font-semibold max-w-[900px] pt-5'>
                        <h4 className='animate__animated animate__bounceInDown animate__delay-2s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aliquam.</h4>
                        <h4 className='animate__animated animate__bounceInDown animate__delay-3s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aliquam.</h4>
                        <h4 className='animate__animated animate__bounceInDown animate__delay-4s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aliquam.</h4>
                        <h4 className='animate__animated animate__bounceInDown animate__delay-5s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aliquam.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animation
import React from 'react'
import { Tilt } from 'react-tilt'

const TiltAnimation = () => {
    const defaultOptions = {
        // reverse: false, 
        max: 55,
        perspective: 1000,   
        scale: 1,   
        speed: 1000,   
        transition: true,  
        axis: null,  
        reset: true,    
    }
  return (
      <div className='flex w-full min-h-screen justify-center py-[100px]'>
          <Tilt options={defaultOptions}>
              <div className="bg-blue-600 w-24 h-24 flex"></div>
          </Tilt>
          
      </div>
      
  )
}

export default TiltAnimation;
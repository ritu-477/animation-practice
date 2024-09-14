import React, { useLayoutEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const GsapAnimation = () => {
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".hlo", {
                x: -1000,
                delay: 2,
            })
        })
        return () => aot.revert();
    }, [])
    return (
        <></>
    )
}

export default GsapAnimation
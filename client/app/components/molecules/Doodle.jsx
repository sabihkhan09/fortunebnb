// "use client"
// import React, { useEffect, useRef } from 'react'
// import doodleimg from "../../../public/doodleone.png"
// import Image from 'next/image'

// const Doodle = () => {


//  const doodleRef = useRef(null)

//     useEffect(() => {
//   let t = 0

//   const tick = () => {
//     t += 0.04  // smaller = slower & smoother

//     const jitterX = Math.cos(t) * 3   // 3px amplitude
//     const jitterY = Math.sin(t) * 3

//     if (doodleRef.current) {
//       doodleRef.current.style.transform =
//         `translate(${jitterX}px,${jitterY}px) rotate(${Math.sin(t) * 6}deg)`
//     }

//     requestAnimationFrame(tick)
//   }
//   tick()
// }, [])


//   // arrow scroll
  
//   return (
//     <div> <div ref={doodleRef} className="pointer-events-none fixed top-100 left-0 z-20">
//         <Image
//           src={doodleimg}
//           alt="doodle"
//           width={220}
//           height={220}
//           draggable={false}
//           className="drop-shadow-[0_0_30px_rgba(255,255,255,.4)]"
//         />
//       </div>
//       </div>
//   )
// }

// export default Doodle


// "use client";
// import React, { useEffect, useRef } from "react";

// const Doodle = () => {
//   const doodleRef = useRef(null);

//   useEffect(() => {
//     let t = 0;

//     const tick = () => {
//       t += 0.04; // smoother

//       const jitterX = Math.cos(t) * 3;
//       const jitterY = Math.sin(t) * 3;

//       if (doodleRef.current) {
//         doodleRef.current.style.transform =
//           `translate(${jitterX}px, ${jitterY}px) rotate(${Math.sin(t) * 6}deg)`;
//       }

//       requestAnimationFrame(tick);
//     };
//     tick();
//   }, []);

//   return (
//     <div>
//       <div
//         ref={doodleRef}
//         className="pointer-events-none fixed top-[100px] left-0 z-20"
//       >
//         <video
//           src="/soraai-unscreen.mp4"   
//           width={220}
//           height={220}
//           autoPlay
//           loop
//           muted
//           playsInline
//           draggable={false}
//           className="drop-shadow-[0_0_30px_rgba(255,255,255,.4)] rounded-xl object-contain"
//         />
//       </div>
//     </div>
//   );
// };

// export default Doodle;

"use client";
import React, { useEffect, useRef } from "react";

const Doodle = () => {
  const doodleRef = useRef(null);

  useEffect(() => {
    let t = 0;

    const tick = () => {
      t += 0.02; // slower

      const jitterX = Math.cos(t * 6) * 2;
      const jitterY = Math.sin(t * 6) * 2;

      // main horizontal movement left -> right -> repeat
      const slideX = (Math.sin(t * 0.5) + 1) * 300; 
      // "300" is travel distance, you can increase it

      if (doodleRef.current) {
        doodleRef.current.style.transform =
          `translate(${slideX + jitterX}px, ${jitterY}px)`;
      }

      requestAnimationFrame(tick);
    };
    tick();
  }, []);

  return (
    <div>
      <div
        ref={doodleRef}
        className="pointer-events-none fixed bottom-[30px] left-0 z-20"
      >
        <img
          src="/soraai-unscreen.gif"
          width={220}
          height={220}
          draggable={false}
          className="drop-shadow-[0_0_30px_rgba(255,255,255,.4)] object-contain"
          alt="doodle"
        />
      </div>
    </div>
  );
};

export default Doodle;

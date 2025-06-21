import React from "react";
import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Button from "../components/Button.jsx";
import CanvasLoader from "../components/Loading.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import { CoolMan } from "../components/CoolMan.jsx";
import StarsCanvas from "../components/Stars.jsx";

import { words } from "../constants";

const Home = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full h-full absolute inset-0">
      <StarsCanvas />
        <Canvas className="w-full h-full -mt-10 -z-10">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <CoolMan
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
        
      </div>

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <div>
          <p className="header-text sm:text-5xl text-xl font-bold text-white font-generalsans">
            Hi, I'm Nikhil <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-xl text-neutral-200">
            Full Stack Developer
          </p>
          <p className="about text-neutral-200">
            I am a Full Stack Developer who loves building websites and
            applications that are easy to use and look great. I enjoy working on
            both the front-end and back-end to create complete solutions.
          </p>

          <div className="flex mt-3 gap-3 cursor-pointer">
            <a
              className="social-icon"
              href="https://github.com/nikhilkushawaha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/github.svg"
                alt="github"
                className="w-1/2 h-1/2"
              />
            </a>
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/nikhil-kushawaha-470071270"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/linkedin.svg"
                alt="linkedin"
                className="w-1/2 h-1/2"
              />
            </a>
            <a
              className="social-icon"
              href="https://x.com/NikhilKn402?t=Na4giMJ8d8M3_QVEZB0dQg&s=08 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/twitter.svg"
                alt="twitter"
                className="w-1/2 h-1/2"
              />
            </a>
            <a
              className="social-icon"
              href="https://www.instagram.com/nikhil.kushawaha_?igsh=MWp4bmxrdGQ1a3EwOQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/instagram.svg"
                alt="instagram"
                className="w-1/2 h-1/2"
              />
            </a>
          </div>

          <div className="flex gap-3 mt-2">
            <a href="#contact" className="w-fit z-50">
              <Button
                name="CONTACT ME"
                isBeam
                containerClass="sm:w-fit w-40 sm:min-w-40"
              />
            </a>

            <a href="https://drive.google.com/file/d/1Ir_uEGuxKNF-IpaXLgIlsBUeA1Qwavhl/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-fit z-50">
              <Button
                name="RESUME"
                isBeam
                containerClass="sm:w-fit w-40 sm:min-w-40"
              />
            </a>
          </div>
        </div>

        <div className="sliding-text text-[#ECEBDE]">
          <h1>
            From
            <span className="slide">
              <span className="wrapper">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="flex items-center md:gap-3 gap-1 pb-2"
                  >
                    <img
                      src={word.imgPath}
                      alt="person"
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-[#D5C7A3]"
                    />
                    <span className="text-[#D5C7A3]">{word.text}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <h1 className="xl:text-[40px]">Building End‑to‑End Solutions</h1>
        </div>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96 mx-auto"
          />
        </a>
      </div>

      <div className="absolute bottom-5 left-0 w-full h-72 overflow-hidden -z-50">
        <img
          src="/assets/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover rotate-120 origin-bottom"
        />
      </div>
      
    </section>
    
  );
};

export default Home;

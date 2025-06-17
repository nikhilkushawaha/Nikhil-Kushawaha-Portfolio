import { useState } from 'react';
import Globe from 'react-globe.gl';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import Button from '../components/Button.jsx';
import TechStack from '../components/TechStacks.jsx';
import GlowingGridCard from '../components/GlowingGridCard.jsx';
import Counter from '../components/Counter.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' nikhilkushawaha66@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 5000);
  };

  return (
    <section className="c-space my-10" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 xl:h-[800px] h-full">
        <div className="col-span-1 xl:row-span-3" data-aos="fade-down-right">
          <GlowingGridCard>
            <img src="assets/nikhil.jpg" alt="Nikhil-Kushawaha" className="w-full sm:h-[250px] h-fit object-contain -mt-2" />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Nikhil Kushawaha</p>
              <p className="grid-subtext">
                "Currently pursuing B.Tech (3rd Year), I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites."
              </p>
            </div>
          </GlowingGridCard>
        </div>

        <div className="xl:col-span-2 xl:row-span-3" data-aos="fade-down">
          <GlowingGridCard>
            <TechStack />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                webpages.
              </p>
            </div>
          </GlowingGridCard>
        </div>

        <div className="xl:col-span-2 xl:row-span-4 xl:row-start-4" data-aos="fade-up-right" id='myExperience'>
          <GlowingGridCard>
            <img src="assets/gridz.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

          <Counter/>
          </GlowingGridCard>
        </div>

        <div className="col-span-1 xl:col-start-3 xl:row-span-2 xl:row-start-4" data-aos="fade-down-left">
          <GlowingGridCard>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Ghaziabad, Uttar Pradesh and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-2" />
            </div>
          </GlowingGridCard>
        </div>

        <div className="xl:col-start-3 xl:row-span-2 xl:row-start-6 xl:-mt-12" data-aos="fade-up-left">
          <GlowingGridCard>
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">nikhilkushawaha66@gmail.com</p>
              </div>
            </div>
          </GlowingGridCard>
        </div>
      </div>
    </section>
  );
};

export default About;
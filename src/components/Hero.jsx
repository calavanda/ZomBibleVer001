import { curve, bg0, bg1, bg3 } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import YouTube from "react-youtube";

const Hero = () => {
  const parallaxRef = useRef(null);

  const videoId = "i0t33bsUp4M";

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1, // Reproducción automática
      mute: 1, // Silenciar el video
      loop: 1, // Repetir el video
      playlist: videoId, // Necesario para el loop
      controls: 0, // Ocultar controles
      modestbranding: 1, // Ocultar logo de YouTube
      rel: 1, // Evitar videos recomendados
    },
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Descubre los diversos&nbsp;Easter Eggs&nbsp;en CoD Zombies con {` `}
            <span className="inline-block relative">
              ZomBible{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Únete a nuestra comunidad y explora nuestra variedad guías que tenemos para ti
          </p>
          <Button href="/easter-eggs" white>
            Comenzemos
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[0.9rem]">
              <div className="h-0rem] bg-n-8 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-2xl overflow-hidden md:aspect-[688/490] lg:aspect-[1920/1080]">
                <YouTube videoId={videoId} opts={opts} className="w-full h-full" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Créditos: 
                    FPSPRODIGY"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[100%]">
            <img
              src={bg3}
              className="w-full"
              width={1920}
              height={1080}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
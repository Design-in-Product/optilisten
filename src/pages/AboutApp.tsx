import { FC, useEffect, useRef, useState } from "react";
import { BaseLayout } from "./BaseLayout";

import Fireworks from "../assets/images/Fireworks.png";
import LinkedIn from "../assets/images/LinkedIn.png";
import Facebook from "../assets/images/Facebook_light.png";
import MinusIcon from "../assets/images/minus.png";
import PlusIcon from "../assets/images/plus.png";
import { Grid, Hidden } from "@mui/material";
import { useParams } from "react-router-dom";

export const AboutAppPage: FC = () => {
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const whoRef = useRef(null);

  const params = useParams();
  const [menuOpen, setMenuOpen] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (!params || !params.section) return;
    if (params.section === "about" && aboutRef.current != null) {
      (aboutRef!.current as any).scrollIntoView();
    } else if (params.section === "who" && whoRef.current != null) {
      (whoRef?.current as any).scrollIntoView();
    } else if (params.section === "faq" && faqRef.current != null) {
      (faqRef?.current as any).scrollIntoView();
    }
  }, [params]);

  return (
    <BaseLayout>
      <Grid
        container
        justifyContent={"center"}
        className="bg-darkBlue p-10  h-[400px]"
      >
        <Grid item md={8} container>
          <Hidden mdDown>
            <Grid item xs={6}>
              <p
                className="text-white font-sfpro-bold text-3xl pb-6"
                ref={aboutRef}
              >
                About OptiListen
              </p>
              <p className="text-white font-sfpro-regular text-xl">
                OptiListen helps you get better at listening. Quickly set goals
                and track how much time you’re speaking on video and audio
                calls. Unlock the listener within.{" "}
              </p>
              <div className="flex mt-4">
                <a href="https://www.facebook.com/longskymedia/">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    width={40}
                    className="mr-4"
                  />
                </a>
                <a href="https://www.linkedin.com/company/long-sky-media/about/">
                  <img src={LinkedIn} alt="Linkedin" width={40} />
                </a>
              </div>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={12}>
              <div className="relative h-[270px]">
                <div className="flex justify-center absolute left-0 top-0 z-10">
                  <img
                    src={Fireworks}
                    alt="fireworks"
                    className="w-full z-10"
                  />
                </div>
                <div className="z-20 relative">
                  <p
                    className="text-white font-sfpro-bold text-3xl pb-6"
                    ref={aboutRef}
                  >
                    About OptiListen
                  </p>
                  <p className="text-white font-sfpro-regular text-xl">
                    OptiListen helps you get better at listening. Quickly set
                    goals and track how much time you’re speaking on video and
                    audio calls. Unlock the listener within.{" "}
                  </p>
                  <div className="flex mt-4">
                    <a href="https://www.facebook.com/longskymedia/">
                      <img
                        src={Facebook}
                        alt="Facebook"
                        width={40}
                        className="mr-4"
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/long-sky-media/about/">
                      <img src={LinkedIn} alt="LinkedIn" width={40} />
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item xs={6}>
              <div className="flex justify-center">
                <img src={Fireworks} alt="fireworks" className="w-3/4" />
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <div className="w-full h-4  bg-darkBlue curve-radius mt-[-1px] shadow-2xl" />

      <Grid
        container
        justifyContent={"center"}
        className="p-10 mt-10 z-20 relative"
      >
        <Grid item md={8} container>
          <p
            className="text-darkBlue font-sfpro-bold text-3xl pb-6"
            ref={whoRef}
          >
            Who We Are
          </p>
          <p className="text-midNight font-sfpro-regular text-xl pb-6">
            Long Sky Media publishes books, makes apps, and tries to bring a wee
            bit of trout music to the world. OptiListen was created by Dan
            Brodnitz and Christian Crumlish, who also fancy themselves its first
            customers. The app was designed by Elaine Phong and developed by
            Fractal Labs. The website was designed by Josh Eisenstat. Rebecca
            Bar provided design direction.
          </p>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} className="p-10 z-20 relative">
        <Grid item md={8} container>
          <p
            className="text-darkBlue font-sfpro-bold text-3xl pb-6"
            ref={faqRef}
          >
            Questions you may have
          </p>
          <div className="border-0 border-b-2 border-b-teal py-6 w-full">
            <div className="flex justify-between items-center pb-2">
              <p className="text-midNight font-sfpro-bold text-xl">
                Why did you all make this app?
              </p>
              <img
                src={menuOpen[0] ? MinusIcon : PlusIcon}
                width={32}
                alt="arrow"
                onClick={() => {
                  const newVal = [...menuOpen];
                  newVal[0] = !menuOpen[0];
                  setMenuOpen(newVal);
                }}
                className="cursor-pointer"
              />
            </div>
            {menuOpen[0] && (
              <p className="text-midNight font-sfpro-regular text-xl">
                We were working on our own listening skills, so we created 
                a hands-free app tod help us focus less on the buttons and 
                more on trying to be present.
              </p>
            )}
          </div>
          <div className="border-0 border-b-2 border-b-teal py-6 w-full">
            <div className="flex justify-between items-center pb-2">
              <p className="text-midNight font-sfpro-bold text-xl">
                Do I need to wear headphones for the app to work?
              </p>
              <img
                src={menuOpen[1] ? MinusIcon : PlusIcon}
                width={32}
                alt="arrow"
                onClick={() => {
                  const newVal = [...menuOpen];
                  newVal[1] = !menuOpen[1];
                  setMenuOpen(newVal);
                }}
                className="cursor-pointer"
              />
            </div>
            {menuOpen[1] && (
              <p className="text-midNight font-sfpro-regular text-xl">
                Yes &mdash; that way the app hears that you are talking 
                and doesn’t hear the other folks on the call. This lets 
                the app give you a real-time sense of how much you’re 
                talking and how much you’re listening. With this info,
                you’ll be better equipped to work on and improve your skills.
              </p>
            )}
          </div>
          <div className="border-0 border-b-2 border-b-teal py-6 w-full">
            <div className="flex justify-between items-center pb-2">
              <p className="text-midNight font-sfpro-bold text-xl">
                Does the app collect any personal data?
              </p>
              <img
                src={menuOpen[2] ? MinusIcon : PlusIcon}
                width={32}
                alt="arrow"
                onClick={() => {
                  const newVal = [...menuOpen];
                  newVal[2] = !menuOpen[2];
                  setMenuOpen(newVal);
                }}
                className="cursor-pointer"
              />
            </div>
            {menuOpen[2] && (
              <p className="text-midNight font-sfpro-regular text-xl">
                It doesn't &mdash; no login, no data. All data is kept on your phone.
              </p>
            )}
          </div>
          <div className="border-0 border-b-2 border-b-teal py-6 w-full">
            <div className="flex justify-between items-center pb-2">
              <p className="text-midNight font-sfpro-bold text-xl">
                Are you all better listeners now?
              </p>
              <img
                src={menuOpen[3] ? MinusIcon : PlusIcon}
                width={32}
                alt="arrow"
                onClick={() => {
                  const newVal = [...menuOpen];
                  newVal[3] = !menuOpen[3];
                  setMenuOpen(newVal);
                }}
                className="cursor-pointer"
              />
            </div>
            {menuOpen[3] && (
              <p className="text-midNight font-sfpro-regular text-xl">
                Hopefully? It's a journey! :-) But we’re happy to be on the path. 
                Be hear now, good people!
              </p>
            )}
          </div>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

import { Grid, Hidden } from "@mui/material";
import { FC } from "react";
import Logo from "../assets/images/logo.png";
import AppStore from "../assets/images/iosLight.png";
import LinkedIn from "../assets/images/LinkedInDark.png";
import FacebookDark from "../assets/images/Facebook_dark.png";
import { useNavigate } from "react-router-dom";
import {
  PATH_ABOUT_APP_PREFIX,
  PATH_FEEDBACK,
  PATH_PRIVACY,
  PATH_SETTINGS,
} from "../routes/paths";

interface Props {}

export const Bottom: FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <div className="p-8 shadow-2xl">
      <Grid container justifyContent={"center"}>
        <Hidden mdDown>
          <Grid item md={8} container rowSpacing={2}>
            <Grid item xs={12}>
              <div className="border-b-2">
                <div className="flex items-center mb-5">
                  <img src={Logo} alt="Logo" width={67} />
                  <h1 className="pl-2 font-dosis-bold text-darkBlue text-2xl tracking-widest">
                    OptiListen
                  </h1>
                </div>

                <img
                  src={AppStore}
                  alt="AppStore"
                  width={118}
                  className="cursor-pointer mb-5"
                />
              </div>
              <div className="flex mt-4">
                <a href="https://www.facebook.com/longskymedia/">
                  <img
                    src={FacebookDark}
                    alt="facebook"
                    width={40}
                    className="mr-4 fill-darkBlue cursor-pointer"
                  />
                </a>
                <a href="https://www.linkedin.com/company/long-sky-media/about/">
                  <img
                    src={LinkedIn}
                    alt="Linkedin"
                    width={40}
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </Grid>
            <Grid item xs={4}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(`${PATH_ABOUT_APP_PREFIX}/about`)}
              >
                About
              </p>
            </Grid>
            <Grid item xs={4}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(PATH_PRIVACY)}
              >
                Privacy Policy
              </p>
            </Grid>
            <Grid item xs={4}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(PATH_FEEDBACK)}
              >
                Feedback
              </p>
            </Grid>
            <Grid item xs={4}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(`${PATH_ABOUT_APP_PREFIX}/faq`)}
              >
                FAQ
              </p>
            </Grid>
            <Grid item xs={4}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(`${PATH_ABOUT_APP_PREFIX}/who`)}
              >
                Who We Are
              </p>
            </Grid>
            <Grid item xs={4}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(PATH_SETTINGS)}
              >
                Settings
              </p>
            </Grid>

            <Grid item xs={12}>
              <p className="text-gray-300  font-sfpro-regular text-md">
                © Copyright © 2022 Long Sky Media. All rights reserved.
              </p>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs={12} container rowSpacing={2}>
            <Grid item xs={12}>
              <div className="border-b-2">
                <div className="flex items-center mb-5">
                  <img src={Logo} alt="Logo" width={67} />
                  <h1 className="pl-2 font-dosis-bold text-darkBlue text-2xl tracking-widest">
                    OptiListen
                  </h1>
                </div>

                <img
                  src={AppStore}
                  alt="AppStore"
                  width={118}
                  className="cursor-pointer mb-5"
                />
              </div>
              <div className="flex mt-4">
                <a href="https://www.facebook.com/longskymedia/">
                  <img
                    src={FacebookDark}
                    alt="Facebook"
                    width={40}
                    className="mr-4 fill-darkBlue cursor-pointer"
                  />
                </a>
                <a href="https://www.linkedin.com/company/long-sky-media/about/">
                  <img
                    src={LinkedIn}
                    alt="Linkedin"
                    width={40}
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </Grid>
            <Grid item xs={6}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(`${PATH_ABOUT_APP_PREFIX}/about`)}
              >
                About
              </p>
            </Grid>
            <Grid item xs={6}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(PATH_FEEDBACK)}
              >
                Feedback
              </p>
            </Grid>
            <Grid item xs={6}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(PATH_PRIVACY)}
              >
                Privacy Policy
              </p>
            </Grid>
            <Grid item xs={6}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(`${PATH_ABOUT_APP_PREFIX}/who`)}
              >
                Who We Are
              </p>
            </Grid>
            <Grid item xs={6}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(`${PATH_ABOUT_APP_PREFIX}/faq`)}
              >
                FAQ
              </p>
            </Grid>
            <Grid item xs={6}>
              <p
                className="text-gray-500  font-sfpro-regular text-xl cursor-pointer"
                onClick={() => navigate(PATH_SETTINGS)}
              >
                Settings
              </p>
            </Grid>

            <Grid item xs={12}>
              <p className="text-gray-300  font-sfpro-regular text-md">
                © Copyright © 2022 Long Sky Media. All rights reserved.
              </p>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

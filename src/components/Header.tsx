import { Grid, Hidden } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { FC } from "react";

import Logo from "../assets/images/logo.png";
import AppStore from "../assets/images/ios.png";
import Hamburger from "../assets/images/hamburger.png";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PATH_ABOUT_APP_PREFIX,
  PATH_FEEDBACK,
  PATH_PRIVACY,
  PATH_ROOT,
} from "../routes/paths";

interface Props {
  toggleDrawer: (show: boolean) => void;
}

export const Header: FC<Props> = ({ toggleDrawer }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="px-20 py-8 relative shadow-lg bg-[#F8F8F8]">
      <Grid container>
        <Hidden mdUp>
          <Grid item xs={12} sm={12}>
            <div className="flex justify-center items-center">
              <div className="absolute left-8">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  onClick={() => toggleDrawer(true)}
                >
                  <img src={Hamburger} alt="Menu" width={32} />
                </IconButton>
              </div>
              <img src={Logo} alt="Logo" width={67} />
            </div>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item md={12} lg={12}>
            <div className="flex justify-between items-center">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => navigate(PATH_ROOT)}
              >
                <img src={Logo} alt="Logo" width={67} />
                <h1 className="pl-2 font-dosis-bold text-darkBlue text-2xl tracking-widest">
                  OptiListen
                </h1>
              </div>
              <div className="flex items-center">
                <p
                  className={`mr-6 text-xl font-sfpro-regular text-darkBlue ${
                    location.pathname.includes(PATH_ABOUT_APP_PREFIX)
                      ? "underline font-bold"
                      : ""
                  } underline-offset-4 cursor-pointer`}
                  onClick={() => {
                    navigate(`${PATH_ABOUT_APP_PREFIX}/about`);
                  }}
                >
                  About
                </p>
                <p
                  className={`mr-6 text-xl font-sfpro-regular text-darkBlue ${
                    location.pathname.includes(PATH_FEEDBACK)
                      ? "underline font-bold"
                      : ""
                  } underline-offset-4 cursor-pointer`}
                  onClick={() => {
                    navigate(PATH_FEEDBACK);
                  }}
                >
                  Feedback
                </p>
                <p
                  className={`mr-6 text-xl font-sfpro-regular text-darkBlue ${
                    location.pathname.includes(PATH_PRIVACY)
                      ? "underline font-bold"
                      : ""
                  } underline-offset-4 cursor-pointer`}
                  onClick={() => {
                    navigate(PATH_PRIVACY);
                  }}
                >
                  Legal
                </p>
                <a href="https://apps.apple.com/app/optilisten/id1593948410">
                  <img
                  src={AppStore}
                  alt="AppStore"
                  width={118}
                  className="cursor-pointer"
                    />
                </a>
              </div>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

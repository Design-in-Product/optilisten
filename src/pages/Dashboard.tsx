import { Button, Grid } from "@mui/material";
import { FC } from "react";
import { BaseLayout } from "./BaseLayout";
import Logo from "../assets/images/logo.png";
import Phones from "../assets/images/phones.png";

export const DashboardPage: FC = () => {
  return (
    <BaseLayout>
      <Grid
        container
        justifyContent={"center"}
        className="p-10 bg-gradient-to-b from-white via-white to-opacityBlue"
      >
        <Grid item md={8} container>
          <Grid item md={6} sm={12} xs={12}>
            <div className="flex justify-center items-center h-full">
              <div className="text-center w-full">
                <div className="flex items-center w-full justify-center">
                  <img src={Logo} alt="Logo" width={67} />
                  <h1 className="pl-2 font-dosis-bold text-darkBlue text-2xl tracking-widest">
                    OptiListen
                  </h1>
                </div>
                <p className="font-sfpro-regular mb-10 tracking-widest">
                  Listening Training In Your Pocket
                </p>

                <a href="https://apps.apple.com/app/optilisten/id1593948410"><Button
                  variant="contained"
                  color="info"
                  className="bg-gradient-to-r from-[#78C693] to-[#34A0A4]"
                  sx={{
                    borderRadius: 100,
                    fontSize: 18,
                    color: "white",
                    textTransform: "none",
                    paddingLeft: 8,
                    paddingRight: 8,
                  }}
                >
                  Try The Free App
                  </Button></a>
                <p className="font-sfpro-medium mt-2 tracking-widest">
                  Unlock the listener within
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <img
              src={Phones}
              alt="Phones"
              className="m-[-110px] mt-24 mx-auto"
            />
          </Grid>
        </Grid>
      </Grid>
      <div className="w-full h-4  bg-opacityBlue curve-radius shadow-2xl" />
      <Grid container justifyContent={"center"} className="p-10 my-24">
        <Grid item md={8} container>
          <Grid xs={12} item className="bg-white p-6 rounded-xl">
            <p className="text-midNight font-sfpro-regular text-xl ">
              OptiListen is an easy to use app, created by and for folks who
              would like to listen a little more.
            </p>
            <p className="text-midNight font-sfpro-regular text-xl mt-4">
              Put your headphones on, start a session, set a goal, and see how
              you do. With OptiListen, you can track your results over time, and
              build your listening skills, one audio or video call at a time.
            </p>

            <p className="text-midNight font-sfpro-regular text-xl mt-4 ">
              Note: We're launching OptiListen as a free app and all data is
              kept locally on your phone.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

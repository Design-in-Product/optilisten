import { FC, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { BaseLayout } from "./BaseLayout";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import Fireworks from "../assets/images/HappyFireworks.png";
import LinkedIn from "../assets/images/LinkedIn.png";
import Facebook from "../assets/images/Facebook_light.png";
import { Button, Grid, Hidden, TextField } from "@mui/material";

const GoogleFormPostURL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfyiJ6Ju-kvTPc4Af194PuGSCpypBuQco7FcOAhp9dK2LN5dQ/formResponse?pli=1&embedded=true";
const FeedbackTypeKey = "entry.881500903";
const DetailsKey = "entry.1459802871";
const EmailKey = "emailAddress";

export const FeedbackPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("Love It!");

  return (
    <BaseLayout>
      <form action={GoogleFormPostURL}>
        <Grid
          container
          justifyContent={"center"}
          className="bg-darkBlue p-10 h-[420px]"
        >
          <Grid item md={8} container>
            <Hidden mdDown>
              <Grid item xs={6}>
                <p className="text-white font-sfpro-bold text-3xl pb-6">
                  OptiListen Feedback
                </p>
                <p className="text-white font-sfpro-regular text-xl">
                  Wouldn’t it be ironic if we didn’t want to hear from you? But
                  we would - we would love to hear from you! Because we’re
                  trying to be better listeners! Please use the form below to
                  reach out.
                </p>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={12}>
                <div className="relative">
                  <div className="flex justify-center absolute left-0 top-0 z-10">
                    <img
                      src={Fireworks}
                      alt="fireworks"
                      className="w-full z-10"
                    />
                  </div>
                  <div className="z-20 relative">
                    <p className="text-white font-sfpro-bold text-3xl pb-6">
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
                          className="mr-4 cursor-pointer"
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
                  </div>
                </div>
              </Grid>
            </Hidden>
            <Hidden mdDown>
              <Grid item xs={6}>
                <div className="flex justify-center">
                  <img src={Fireworks} alt="fireworks" className="h-[480px]" />
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <div className="w-full h-4  bg-darkBlue curve-radius shadow-2xl" />

        <Grid
          container
          justifyContent={"center"}
          className="p-10 mt-10 z-20 relative"
        >
          <Grid item md={8} container>
            <div className="w-full">
              <p className="text-darkBlue font-sfpro-bold text-3xl pb-10">
                Feedback Form
              </p>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  type="text"
                  required
                  label="Email"
                  name={EmailKey}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {}}
                        onMouseDown={() => {}}
                        edge="end"
                      >
                        <EmailIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent={"center"}
          className="pb-10 pl-10 mt-4 z-20 relative"
        >
          <Grid item md={8} container>
            <p id={FeedbackTypeKey} className="mb-2 text-midNight w-full">
              Type of Feedback
            </p>
            <input hidden value={feedback} name={FeedbackTypeKey} />
            <RadioGroup
              aria-labelledby={FeedbackTypeKey}
              defaultValue="Love It!"
              onChange={(e) => {
                setFeedback(e.target.value);
              }}
            >
              <FormControlLabel
                value="Love It!"
                control={<Radio />}
                label="Love It!"
                className="text-midNight"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    letterSpacing: "0.025em",
                  },
                }}
              />
              <FormControlLabel
                value="Bug Report"
                control={<Radio />}
                label="Bug Report"
                className="text-midNight"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    letterSpacing: "0.025em",
                  },
                }}
              />
              <FormControlLabel
                value="Question"
                control={<Radio />}
                label="Question"
                className="text-midNight"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    letterSpacing: "0.025em",
                  },
                }}
              />
              <FormControlLabel
                value="Feedback"
                control={<Radio />}
                label="Feedback"
                className="text-midNight"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    letterSpacing: "0.025em",
                  },
                }}
              />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
                className="text-midNight"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    letterSpacing: "0.025em",
                  },
                }}
              />
            </RadioGroup>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent={"center"}
          className="pb-10 px-10  z-20 relative"
        >
          <Grid item md={8} container>
            <div className="w-full">
              <TextField
                id="standard-multiline-flexible"
                label="Details"
                name={DetailsKey}
                multiline
                rows={4}
                fullWidth
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                variant="outlined"
              />
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          className="p-10 pb-20 pt-0  z-20 relative"
        >
          <Grid item md={8} container>
            <div className="flex flex-nowrap w-full">
              <Button
                variant="outlined"
                color="info"
                sx={{
                  borderRadius: 30,
                  color: "#34A0A4",
                  textTransform: "none",
                  fontSize: 16,
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </Button>
              <div className="w-10" />
              <Button
                variant="contained"
                color="info"
                type="submit"
                className="bg-gradient-to-r from-[#78C693] to-[#34A0A4]"
                sx={{
                  borderRadius: 30,
                  color: "white",
                  fontSize: 16,
                  textTransform: "none",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                Submit
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </BaseLayout>
  );
};

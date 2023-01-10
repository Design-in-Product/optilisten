import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PolicyIcon from "@mui/icons-material/Policy";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import GavelIcon from "@mui/icons-material/Gavel";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import { FC, ReactNode } from "react";
import Logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import {
  PATH_ABOUT_APP_PREFIX,
  PATH_FEEDBACK,
  PATH_PRIVACY,
  PATH_TERMS,
} from "../routes/paths";

interface MenuItemInfo {
  text: string;
  icon: ReactNode;
  onClick: () => void;
}

interface Props {
  drawerOpened: boolean;
  toggleDrawer: (val: boolean) => void;
}
export const Drawer: FC<Props> = ({ drawerOpened, toggleDrawer }) => {
  const navigate = useNavigate();

  const MenuIcons: MenuItemInfo[] = [
    {
      text: "About",
      icon: <AppsIcon />,
      onClick: () => navigate(`${PATH_ABOUT_APP_PREFIX}/about`),
    },
    {
      text: "Feedback",
      icon: <FeedbackIcon />,
      onClick: () => navigate(PATH_FEEDBACK),
    },
    {
      text: "Privacy",
      icon: <PolicyIcon />,
      onClick: () => navigate(PATH_PRIVACY),
    },

    {
      text: "Who We Are",
      icon: <PeopleAltIcon />,
      onClick: () => navigate(`${PATH_ABOUT_APP_PREFIX}/who`),
    },
    {
      text: "FAQ",
      icon: <LiveHelpIcon />,
      onClick: () => navigate(`${PATH_ABOUT_APP_PREFIX}/faq`),
    },
    {
      text: "Terms Of Service",
      icon: <GavelIcon />,
      onClick: () => navigate(PATH_TERMS),
    },
  ];

  const Menus = () => {
    return (
      <Box
        sx={{ width: 250, paddingTop: 4 }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <div className="flex justify-center pb-4">
          <img src={Logo} alt="Logo" width={67} />
        </div>
        <List>
          {MenuIcons.map((menuIcon, index) => (
            <ListItem key={index} disablePadding onClick={menuIcon.onClick}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemIcon>{menuIcon.icon}</ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={menuIcon.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={drawerOpened}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
    >
      {Menus()}
    </SwipeableDrawer>
  );
};

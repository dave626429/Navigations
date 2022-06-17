import React, { useContext } from "react";
import {
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSearch,
  SSearchIcon,
  SSideBar,
  STheme,
  SThemeLabel,
  SThemeToggler,
  STooglerThumb,
} from "./styles";
import { logoSVG } from "../../assets/index";
import { SDivider } from "../Layout/styles";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineAnalytics, MdOutlineLogout } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { ThemeContext } from "../../App";

function SideBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <SSideBar>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SSearch>
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input placeholder="Search" />
      </SSearch>
      <SDivider />

      {linksArray.map(({ icon, label, to, notifications }) => (
        <SLinkContainer key={label}>
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
            {!!notifications && (
              <SLinkNotification>{notifications}</SLinkNotification>
            )}
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider />

      {secondaryLinksArray.map(({ label, icon, to }) => (
        <SLinkContainer key={label}>
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider />

      <STheme>
        <SThemeLabel>Dark Mode</SThemeLabel>
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() =>
            setTheme((preTheme) => (preTheme === "light" ? "dark" : "light"))
          }
        >
          <STooglerThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSideBar>
  );
}

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notifications: 0,
  },
  {
    label: "Statistics",
    icon: <MdOutlineAnalytics />,
    to: "/statistics",
    notifications: 2,
  },
  {
    label: "Customers",
    icon: <BsPeople />,
    to: "/customers",
    notifications: 5,
  },
  {
    label: "Diagrams",
    icon: <AiOutlineApartment />,
    to: "/diagrams",
    notifications: 0,
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
    to: "/settings",
  },
  {
    label: "LogOut",
    icon: <MdOutlineLogout />,
    to: "/logout",
  },
];

export default SideBar;

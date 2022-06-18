import React, { useContext, useRef, useState } from "react";
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
  SSideBarButton,
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
  AiOutlineLeft,
} from "react-icons/ai";
import { MdOutlineAnalytics, MdOutlineLogout } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

function SideBar() {
  const searchBarRef = useRef(null);

  const { theme, setTheme } = useContext(ThemeContext);
  const [sideBarOpen, setsideBarOpen] = useState(false);
  const { pathname } = useLocation();

  const searchBarHandler = () => {
    if (!sideBarOpen) {
      setsideBarOpen(true);
      searchBarRef.current.focus();
    } else {
    }
  };

  return (
    <SSideBar>
      <>
        <SSideBarButton
          isOpen={sideBarOpen}
          onClick={() => setsideBarOpen((preState) => !preState)}
        >
          <AiOutlineLeft />
        </SSideBarButton>
      </>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SSearch
        onClick={searchBarHandler}
        style={!sideBarOpen ? { width: "fit-content" } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          placeholder="Search"
          style={!sideBarOpen ? { width: "0", padding: "0" } : {}}
          ref={searchBarRef}
        />
      </SSearch>

      <SDivider />

      {linksArray.map(({ icon, label, to, notifications }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sideBarOpen ? { width: "fit-content" } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sideBarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {!!notifications && (
                  <SLinkNotification>{notifications}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider />

      {secondaryLinksArray.map(({ label, icon, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sideBarOpen ? { width: "fit-content" } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sideBarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider />

      <STheme>
        {sideBarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
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

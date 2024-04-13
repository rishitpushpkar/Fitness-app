import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Fab from "@mui/material/Fab";

import {
  HomeIcon,
  TrackingIcon,
  SearchIcon,
  CaptureIcon,
  ProfileIcon,
} from "../Resources/bottomNavIcons";
import { useState } from "react";
import HomePage from "./HomePage";
import TrackingPage from "./TrackingPage";
import SearchPage from "./SearchPage";
import ProfilePage from "./ProfilePage";
import CapturePage from "./CapturePage";

export default function MainScreen() {
  const pages = [
    <HomePage key="HomePage" />,
    <TrackingPage key="TrackingPage" />,
    <SearchPage key="SearchPage" />,
    <CapturePage key="CapturePage" />,
    <ProfilePage key="ProfilePage" />,
  ];

  const [pageIndex, setPageIndex] = useState(0);
  return (
    <>
      <div className="flex flex-col h-screen sm:w-full sm:max-w-md mx-auto ">
        {pages[pageIndex]}

        <BottomNavigation
          value={pageIndex}
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          onChange={(event, newValue) => {
            setPageIndex(newValue);
          }}
        >
          <BottomNavigationAction
            icon={<HomeIcon isActive={pageIndex == 0} />}
          />
          <BottomNavigationAction
            icon={<TrackingIcon isActive={pageIndex == 1} />}
          />
          <Fab
            aria-label="add"
            className="absolute bottom-5 bg-gradient-to-r from-[#DEE5FF] to-[#809AFF]"
          >
            <SearchIcon isActive={pageIndex == 2} />
          </Fab>

          <BottomNavigationAction
            icon={<CaptureIcon isActive={pageIndex == 3} />}
          />
          <BottomNavigationAction
            icon={<ProfileIcon isActive={pageIndex == 4} />}
          />
        </BottomNavigation>
      </div>
    </>
  );
}

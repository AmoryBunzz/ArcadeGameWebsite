import PlayedGames from "./PlayedGames/played-games";
import Records from "./PersonalRecord/personal-record";
import UserProfile from "./UserProfile/user-profile";

var routes = [
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/user-account",
  },
  {
    path: "/records",
    name: "Records",
    icon: "tim-icons icon-puzzle-10",
    component: Records,
    layout: "/user-account",
  },
  {
    path: "/played-games",
    name: "Played games",
    icon: "tim-icons icon-atom",
    component: PlayedGames,
    layout: "/user-account",
  },
];

export default routes;

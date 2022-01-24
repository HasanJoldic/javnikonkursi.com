import login from "./login";
import logout from "./logout";
import register from "./register";

export default {
  path: "/",
  routers: [login, logout, register],
};

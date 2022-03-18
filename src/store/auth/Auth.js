import login from "./login";
import logout from "./logout";
import checkRole from "./checkRole";
const Auth = {
  namespaced: true,
  modules: {
    login: login,
    logout: logout,
    checkRole: checkRole,
  },
};
export default Auth;
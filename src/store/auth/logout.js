const logout = {
  namespaced: true,
  mutations: {
    clearToken(context) {
      localStorage.removeItem("token");
    },
  },
  actions: {
    async logout(context) {
      const res = await fetch(process.env.VUE_APP_HOST_URL + "logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => response.json());
      context.commit("clearToken");
      return res;
    },
  },
};
export default logout;
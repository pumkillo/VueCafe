const login = {
  namespaced: true,
  mutations: {
    setToken(state, token) {
      localStorage.setItem("token", token);
    },
  },
  actions: {
    async fetchLogin(context, personData) {
      const res = await fetch(process.env.VUE_APP_HOST_URL + "login", {
        method: "POST",
        body: JSON.stringify(personData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
      if (res.data) {
        context.commit("setToken", res.data.user_token);
      }
      return res;
    },
  },
};
export default login;

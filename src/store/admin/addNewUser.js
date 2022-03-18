const addNewUser = {
  namespaced: true,
  actions: {
    async addNewUser(context, userData) {
      const res = await fetch(process.env.VUE_APP_HOST_URL + "user", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => response.json());
      return res;
    },
  },
};
export default addNewUser;

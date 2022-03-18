const getUsers = {
  namespaced: true,
  actions: {
    async fetchUsers(context, userId) {
      const res = await fetch(process.env.VUE_APP_HOST_URL + "user" + userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => response.json());
      return res;
    },
  },
};
export default getUsers;

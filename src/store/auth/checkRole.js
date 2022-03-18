const checkRole = {
  namespaced: true,
  actions: {
    async checkRole(context) {
      const resAdmin = await fetch(process.env.VUE_APP_HOST_URL + "user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => response.json());

      const resCook = await fetch(
        process.env.VUE_APP_HOST_URL + "order/taken/get",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then((response) => response.json());
      localStorage.setItem("role", "waiter");
      if (resAdmin.data) {
        localStorage.setItem("role", "admin");
      }
      if (resCook.data) {
        localStorage.setItem("role", "cook");
      }
      window.location.href = "/";
    },
  },
};
export default checkRole;

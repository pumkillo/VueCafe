const createNewOrder = {
  namespaced: true,
  actions: {
    async createNewOrder(context, body) {
      const res = await fetch(process.env.VUE_APP_HOST_URL + "order", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => response.json());
      return res;
    },
  },
};
export default createNewOrder;

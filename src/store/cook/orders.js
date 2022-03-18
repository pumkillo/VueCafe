const orders = {
  namespaced: true,
  actions: {
    async fetchOrders() {
      const res = await fetch(
        process.env.VUE_APP_HOST_URL + "order/taken/get",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then((response) => response.json());
      return res;
    },
  },
};
export default orders;

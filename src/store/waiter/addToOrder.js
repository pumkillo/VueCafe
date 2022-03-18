const addToOrder = {
  namespaced: true,
  actions: {
    async addToOrder(context, { orderId, body }) {
      const res = await fetch(
        process.env.VUE_APP_HOST_URL + "order/" + orderId + "/position",
        {
          method: "POST",
          body: JSON.stringify(body),
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
export default addToOrder;

const showOrder = {
  namespaced: true,
  actions: {
    async fetchOrder(context, shiftId) {
      const res = await fetch(
        process.env.VUE_APP_HOST_URL + "order/" + shiftId,
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
export default showOrder;

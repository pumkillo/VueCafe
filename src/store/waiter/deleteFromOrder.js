const deleteFromOrder = {
  namespaced: true,
  actions: {
    async deleteFromOrder(context, { orderId, positionId }) {
      const res = await fetch(
        process.env.VUE_APP_HOST_URL +
          "order/" +
          orderId +
          "/position/" +
          positionId,
        {
          method: "DELETE",
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
export default deleteFromOrder;

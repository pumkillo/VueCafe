const changeStatus = {
  namespaced: true,
  actions: {
    async changeStatus(context, { orderId, body }) {
      console.log(orderId);
      console.log(body);
      const res = await fetch(
        process.env.VUE_APP_HOST_URL + "order/" + orderId + "/change-status",
        {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then((response) => response.json());
      console.log(res);
      return res;
    },
  },
};
export default changeStatus;

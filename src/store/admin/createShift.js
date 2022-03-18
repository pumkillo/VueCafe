const createShift = {
  namespaced: true,
  actions: {
    async createShift(context, body) {
      const res = await fetch(process.env.VUE_APP_HOST_URL + "work-shift", {
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
export default createShift;

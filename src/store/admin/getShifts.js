const getShifts = {
  namespaced: true,
  actions: {
    async fetchShifts(context) {
      const res = await fetch(process.env.VUE_APP_HOST_URL + "work-shift", {
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
export default getShifts;

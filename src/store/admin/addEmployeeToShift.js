const addEmployeeToShift = {
  namespaced: true,
  actions: {
    async addEmployeeToShift(context, { shiftId, userId }) {
      const res = await fetch(
        process.env.VUE_APP_HOST_URL + "work-shift/" + shiftId + "/user",
        {
          method: "POST",
          body: JSON.stringify({ user_id: userId }),
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
export default addEmployeeToShift;

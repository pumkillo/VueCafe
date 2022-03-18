const deleteEmployeeFromShift = {
  namespaced: true,
  actions: {
    async deleteFromShift(context, { shiftId, userId }) {
      const res = await fetch(
        process.env.VUE_APP_HOST_URL +
          "work-shift/" +
          shiftId +
          "/user/" +
          userId,
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
export default deleteEmployeeFromShift;

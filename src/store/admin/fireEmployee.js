const fireEmployee = {
  namespaced: true,
  actions: {
    async fireEmployee(context, employeeId) {
      console.log("xdflksdkj");
      const res = await fetch(
        process.env.VUE_APP_HOST_URL + "user/" + employeeId + "/to-dismiss",
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
export default fireEmployee;

const closeShift = {
    namespaced: true,
    actions: {
      async closeShift(context, shiftId) {
        const res = await fetch(
          process.env.VUE_APP_HOST_URL + "work-shift/" + shiftId + "/close",
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
  export default closeShift;
  
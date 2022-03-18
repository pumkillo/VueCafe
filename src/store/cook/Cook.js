import changeStatus from "./changeStatus.js";
import orders from "./orders.js";
const Cook = {
  namespaced: true,
  modules: {
    changeStatus: changeStatus,
    orders: orders,
  },
};
export default Cook;

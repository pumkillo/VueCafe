import createNewOrder from "./createNewOrder";
import deleteFromOrder from "./deleteFromOrder";
import addToOrder from "./addToOrder";
import shiftOrders from "./shiftOrders";
import changeStatus from "./changeStatus";
import showOrder from "./showOrder";

const Waiter = {
  namespaced: true,
  modules: {
    createNewOrder: createNewOrder,
    deleteFromOrder: deleteFromOrder,
    addToOrder: addToOrder,
    shiftOrders: shiftOrders,
    showOrder: showOrder,
    changeStatus: changeStatus,
  },
};
export default Waiter;

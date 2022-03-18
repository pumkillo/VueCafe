import getUsers from "./getUsers";
import addNewUser from "./addNewUser";
import addEmployeeToShift from "./addEmployeeToShift";
import shiftOrders from "./shiftOrders";
import getShifts from "./getShifts.js";
import deleteEmployeeFromShift from "./deleteEmployeeFromShift";
import fireEmployee from "./fireEmployee";

const Admin = {
  namespaced: true,
  modules: {
    getUsers: getUsers,
    addNewUser: addNewUser,
    addEmployeeToShift: addEmployeeToShift,
    shiftOrders: shiftOrders,
    getShifts: getShifts,
    deleteEmployeeFromShift: deleteEmployeeFromShift,
    fireEmployee: fireEmployee,
  },
};
export default Admin;

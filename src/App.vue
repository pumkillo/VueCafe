<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'login' }">Log in</router-link>
      <router-link :to="{ name: 'logout' }">Log out</router-link>

      <router-link :to="{ name: 'users' }">All Users</router-link>
      <router-link :to="{ name: 'new_user' }">Add new employee</router-link>
      <router-link :to="{ name: 'EmployeeShift' }">EmployeeShift</router-link>
      <router-link :to="{ name: 'ShiftOrders' }">ShiftOrders</router-link>
      <router-link :to="{ name: 'activeShiftOrders' }">Active Shift Orders</router-link>
      <router-link :to="{ name: 'CreateOrder' }">Create Order</router-link>
      <router-link :to="{ name: 'orders' }">All Orders</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
a {
  padding: 3px 7px;
}
</style>

<template>
  <header
    class="d-flex flex-row justify-content-between align-items-center border-bottom"
  >
    <article>
      <a href="/" class="text-decoration-none"><h1>Toitotoro</h1></a>
    </article>

    <div v-if="role === 'admin'">
      <nav>
        <div class="dropdown text-end">
          <a
            style="margin-right: 100px"
            href="#"
            class="d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Admin
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li>
              <router-link class="dropdown-item" :to="{ name: 'users' }"
                >Employees</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'employeeShift' }"
                >Employees And Shifts</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'shifts' }"
                >Shifts</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'shiftOrders' }"
                >Shift Orders</router-link
              >
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'logout' }"
                >Log out</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div v-else-if="role === 'cook'">
      <nav>
        <div class="dropdown text-end">
          <a
            style="margin-right: 100px"
            href="#"
            class="d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Cook
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li>
              <router-link
                class="dropdown-item"
                :to="{ name: 'activeShiftOrders' }"
                >Orders</router-link
              >
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'logout' }"
                >Log out</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div v-else-if="role === 'waiter'">
      <nav>
        <div class="dropdown text-end">
          <a
            style="margin-right: 100px"
            href="#"
            class="d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Waiter
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li>
              <router-link class="dropdown-item" :to="{ name: 'orders' }"
                >Orders</router-link
              >
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'logout' }"
                >Log out</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div v-else>
      <nav>
        <router-link class="btn btn-primary btn-lg" :to="{ name: 'login' }"
          >Log in</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("auth/checkRole");
export default {
  name: "HeaderView",
  data() {
    return {
      role: "",
    };
  },
  methods: {
    ...mapActions(["checkRole"]),
  },
  async mounted() {
    this.role = localStorage.getItem("role");
  },
};
</script>

<style scoped></style>

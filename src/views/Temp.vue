<template>
  <b-row>
    <b-col cols="12">
      <br>
      <br>
      <br>
      <br>

      <h2>
        Current User Information
      </h2>
      <b-table striped hover :items="users" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";

export default {
  name: "Temp",
  data() {
    return {
      fields: {
        firstName: {
          label: "First Name",
          sortable: true,
          class: "text-center"
        },
        lastName: { label: "Last Name", sortable: true },
        email: { label: "Email", class: "text-center" },
        phone: { label: "Phone", sortable: true },
        birthday: { label: "Birthday", class: "text-center" },
        professionalTitles: { label: "Titles", sortable: true },
        yearsInPos: { label: "Years In Position", class: "text-center" },
        certification: { label: "Certification", sortable: true },
        biography: { label: "Biography", class: "text-center" }
      },
      users: [],
      errors: []
    };
  },
  created() {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    axios
      .get(`http://localhost:3000/api/auth/currentUser/`)
      .then(response => {
        this.users = response.data;
      })
      .catch(e => {
        this.errors.push(e);
        if (e.response.status === 401) {
          this.$router.push({
            name: "Login"
          });
        }
      });
  },
  methods: {
    details(user) {
      this.$router.push({
        name: "ShowUser",
        params: { id: user._id }
      });
    }
  }
};
</script>

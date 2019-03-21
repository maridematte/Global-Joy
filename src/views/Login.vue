<template>
  <b-container fluid class="ContainerLog">
    <b-row class="HeaderLogin" align-h="center">
      <span id="title">
        Global Joy
      </span>
    </b-row>
    <b-row align-h="center" id="centerBlock">
      <b-col md="2" />
      <b-col md="8">
        <b-row id="logBox">
          <b-col md="6">
            <span id="welcomeBack">
              Welcome back!
            </span>
            <br/>
            <br/>
            <span id="noAccount">
              Don't have an account?
              <br/>
              <a href="">Register here ></a>
            </span>
            <br/>
            <br/>
            <br/>
            <span class="contractStuff">
              Terms and Conditions
            </span>
            <span class="contractStuff" id="contract">
              Contact
            </span>
          </b-col>
          <b-col md="6" id="logForm">
            <b-form @submit="onSubmit">
              <b-row>
                <b-col>
                  <b-form-group id="fieldsetHorizontal">
                    <b-form-input id="email" :state="state" v-model.trim="login.email" placeholder="Email"/>
                  </b-form-group>

                  <b-form-group id="fieldsetHorizontal">
                    <b-form-input type="password" id="password" :state="state" v-model.trim="login.password" placeholder="Password"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div v-if="errors && errors.length">
                    <div v-for="error of errors">
                      <b-alert show>{{error.message}}</b-alert>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col align-h="end">
                  <span id="forgot">
                    Forgot Password?
                  </span>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button type="submit" id="loginButton">Login</b-button>
                  <b-button type="button" @click.stop="register()" id="cancelLogin">Cancel</b-button>
                </b-col>
              </b-row>
              <b-row id="mobileVer">
                <b-col>
                  <br/>
                  <span>
                    Don't have an account?
                    <br/>
                    <a href="">Register here ></a>
                  </span>
                  <br/>
                  <br/>
                  <br/>
                  <span class="contractStuffMobile">
                    Terms and Conditions
                  </span>
                  <span class="contractStuffMobile" id="contract">
                    Contact
                  </span>
                </b-col>
              </b-row>
            </b-form>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="2" />
    </b-row>
  </b-container>
</template>

<style slot-scope>
  .ContainerLog{
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #F4EEE9;

    text-align: left;
    height: 109vh;
  }

  .ContainerLog a {
    color: #FDBA31;
  }

  .ContainerLog a.active {
    border-bottom: 1.5px solid #FDBA31;
  }

  .HeaderLogin{
    background-image: url("../assets/photos/categories/mind.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    font-family: 'Poppins', sans-serif;
    font-weight: 1000;

    text-align: left;

    padding-top: 15%;
    padding-bottom: 10%;

    margin: 0;
  }

  #title {
    color: #FDBA31;
    font-size: 3em;
  }

  #nav {
    display:none;
  }

  #logBox {
    background-color: white;
    padding: 50px 50px 50px 50px;
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #welcomeBack {
    color: #FDBA31;
    font-size: 2em;
    font-weight: bold;
  }

  #centerBlock {
    margin: 0;
    padding-top: 100px;
  }

  #loginButton {
    background-color: #ED8A5F;
    border: none;
    color: white;

    text-align: center;
    text-decoration: none;
    font-size: 0.8em;
    font-weight: 700;

    border-radius: 12px;
    padding: 14px 20px;

    margin-right: 20px;
    margin-top: 20px;
  }

  #cancelLogin {
    background-color: white;
    border: 2px solid #ED8A5F;
    color: #ED8A5F;

    text-align: center;
    text-decoration: none;
    font-size: 0.8em;
    font-weight: 700;

    border-radius: 12px;
    padding: 12px 20px;

    margin-top: 20px;
  }

  #forgot {
    text-align: right;
    color: darkgrey;
    font-size: 0.8em;
  }

  .contractStuff {
    color: grey;
    font-size: 0.8em;
  }

  #contract {
    margin-left: 30px;
  }

  #mobileVer {
    display: none;
  }


  @media(max-width: 767px) {
    .ContainerLog{
      min-height: 100vh;
    }

    #mobileVer {
      margin-top: 20px;
      display: flex;
    }

    #logBox {
      background-color: #F4EEE9;
      box-shadow: none;
    }

    #centerBlock {
      padding: 0;
    }

    #noAccount {
      display: none;
    }

    .contractStuff{
      display: none;
    }

    .contractStuffMobile {
      color: grey;
      font-size: 0.8em;
    }

    .HeaderLogin{
      padding-top: 175px;
    }

  }

</style>

<script>
  import axios from "axios";

  export default {
    name: "Login",
    data() {
      return {
        login: {},
        errors: []
      };
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        axios
          .post(`http://localhost:3000/api/auth/login/`, this.login)
          .then(response => {
            localStorage.setItem("jwtToken", response.data.token);
            this.$router.push({
              name: "About"
            });
          })
          .catch(e => {
            console.log(e);
            this.errors.push(e);
          });
      },
      register() {
        this.$router.go(-1);
      }
    }
  };
</script>

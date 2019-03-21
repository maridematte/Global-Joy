<template>
  <b-container fluid class="Container">
    <b-row class="profileHeader" align-h="center">
      <span id="title">
        Create a Profile
      </span>
    </b-row>
    <b-row class="fillingForm">
      <b-col md="2" />
      <b-col md="8" align-h="center" id="formSpace">
        <b-row>
          <span id="formTitle">
            PROFESSIONAL PROFILE
          </span>
        </b-row>
        <b-row class="formBlock">
          <div v-if="errors && errors.length">
            <div v-for="error of errors">
              <b-alert show>{{error.message}}</b-alert>
            </div>
          </div>
          <b-col md="1" />
          <b-col md="10" id="theForm">
            <b-form @submit="onSubmit" class="fillForm">
              <b-row id="personalRow">
                <b-col>
                  <span class="formSubtitle" id="personalInfo">
                    PERSONAL INFO
                  </span>
                </b-col>
              </b-row>
              <b-row id="personalInfo">
                <b-col md="5">
                  <label for="fieldsetHorizontal">
                    Username
                  </label>
                  <b-form-group id="fieldsetHorizontal">
                    <b-form-input id="username" :state="state" v-model.trim="register.username"></b-form-input>
                    </b-form-group>

                    <label for="fieldsetHorizontal">
                      First Name
                    </label>
                    <b-form-group id="fieldsetHorizontal">
                      <b-form-input id="firstname" :state="state" v-model.trim="register.firstname"></b-form-input>
                    </b-form-group>

                    <label for="fieldsetHorizontal">
                      Email
                    </label>
                    <b-form-group id="fieldsetHorizontal">
                      <b-form-input id="email" :state="state" v-model.trim="register.email"></b-form-input>
                    </b-form-group>

                    <label for="fieldsetHorizontal">
                      Date of Birth
                    </label>
                    <b-form-group id="fieldsetHorizontal">
                    <b-form-input id="dob" :state="state" v-model.trim="register.dob"></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col md="2" />

                <b-col md="5">
                  <label for="fieldsetHorizontal">
                    Password
                  </label>
                  <b-form-group id="fieldsetHorizontal">
                    <b-form-input type="password" id="password" :state="state" v-model.trim="register.password"></b-form-input>
                  </b-form-group>

                  <label for="fieldsetHorizontal">
                    Last Name
                  </label>
                  <b-form-group id="fieldsetHorizontal">
                    <b-form-input id="lastname" :state="state" v-model.trim="register.lastname"></b-form-input>
                  </b-form-group>

                  <label for="fieldsetHorizontal">
                    Phone
                  </label>
                  <b-form-group id="fieldsetHorizontal">
                    <b-form-input id="phone" :state="state" v-model.trim="register.phone"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>


              <b-row id="professionalInfo">
                <b-col>
                  <span class="formSubtitle">
                    PROFESSIONAL INFO
                  </span>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="5">
                  <label for="fieldsetHorizontal">
                    Select you Professional Title
                  </label>

                  <b-form-group id="fieldsetHorizontal">
                    <b-form-select id="titles" :state="state" v-model.trim="register.titles" multiple>
                      <option value="life_coach">Life Coach</option>
                      <option value="spiritual_practitioner">Spiritual Practitioner</option>
                      <option value="strength_trainer">Strength Trainer</option>
                      <option value="performance_coach">Performance Coach</option>
                      <option value="meditation_coach">Meditation Coach</option>
                      <option value="massage_therapist">Massage Therapist</option>
                      <option value="rolfer">Rolfer</option>
                      <option value="leadership_coach">Leadership Coach</option>
                      <option value="career_coach">Career Coach</option>
                      <option value="nutritionist">Nutritionist</option>
                      <option value="behavioral_therapist">Behavioral Therapist</option>
                      <option value="personal_trainer">Personal Trainer</option>
                      <option value="health_coach">Health Coach</option>
                      <option value="high_performance_personal_trainer">High Performance Personal Trainer</option>
                      <option value="dietician">Dietician</option>
                    </b-form-select>
                  </b-form-group>
                </b-col>

                <b-col md= "1"/>
                <b-col md="5">
                  <label for="fieldsetHorizontal">
                    How long have you worked in this position?
                  </label>
                  <b-form-group id="fieldsetHorizontal">
                    <b-form-input id="yearsInPos" :state="state" v-model.trim="register.yearsInPos"></b-form-input>
                  </b-form-group>

                  <label for="fieldsetHorizontal">
                    Do you have a certification or license?
                  </label>
                  <b-form-group id="fieldsetHorizontal">
                    <b-form-radio-group id="certification" :state="state" v-model.trim="register.certification">
                      <b-form-radio value="yes">Yes</b-form-radio>
                      <b-form-radio value="no">No</b-form-radio>
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row id="biofield">
                <b-col>
                  <span class="formSubtitle">
                    BIO
                  </span>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="11">
                  <label for="fieldsetHorizontal">
                    Please provide a short professional bio
                  </label>
                  <b-form-group id="fieldsetHorizontal">
                    <b-form-input id="bio" :state="state" v-model.trim="register.bio"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row align-h="center">
                <b-button type="submit" id="subButton">Submit</b-button>
                <b-button type="button" id="cancelButton" @click="$router.go(-1)">Cancel</b-button>
              </b-row>
            </b-form>
          </b-col>
          <b-col md="1" />
        </b-row>
      </b-col>
      <b-col md="2" />
    </b-row>

    <Foot />
  </b-container>
</template>

<style slot-scope>
  .Container{
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #F4EEE9;

    text-align: left;
  }

  .profileHeader{
    background-image: url("../assets/photos/categories/mind.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    font-family: 'Poppins', sans-serif;
    font-weight: 1000;

    text-align: left;

    padding-top: 15%;
    padding-bottom: 15%;

    margin: 0;
  }

  #title {
    color: #FDBA31;
    font-size: 3em;
  }

  .fillingForm {
    width: 100%;
    margin: 0;
  }

  .formBlock{
    background-color: white;
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 100px;
  }

  #formTitle {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.3em;
  }

  #formSpace {
    margin-top: 90px;
  }

  #theForm {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  input[type=text]{
    border: none;
    border-bottom: 1px solid darkgrey;
    width: 100%;
    margin-bottom: 30px;
  }

  input[type=password]{
    border: none;
    border-bottom: 1px solid darkgrey;
    width: 100%;
    margin-bottom: 30px;
  }

  .formSubtitle {
    font-size: 1.2em;
    font-weight: bold;
  }

  #personalInfo {
    padding-bottom: 50px;
  }

  #professionalInfo {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  #biofield {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  #bio {
    border: 1px solid darkgrey;
    padding: 50px 0 50px 0;
  }

  #subButton {
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
  }

  #cancelButton {
    background-color: white;
    border: 2px solid #ED8A5F;
    color: #ED8A5F;

    text-align: center;
    text-decoration: none;
    font-size: 0.8em;
    font-weight: 700;

    border-radius: 12px;
    padding: 12px 20px;
  }

  @media (max-width: 767px) {
      #formTitle {
        display: none;
      }

      .formBlock {
        background-color: #F4EEE9;
        box-shadow: none;
      }

      #theForm {
        padding-top: 0;
      }

      input[type=text] {
        background-color: #F4EEE9;
      }

      input[type=password] {
        background-color: #F4EEE9;
      }

      #bio {
        background-color: white;
      }

      #personalRow {
        padding-bottom: 50px;
      }

      #personalInfo{
        padding-bottom: 0;
      }
  }


</style>

<script>
  import axios from "axios";
  import Foot from "../components/Foot.vue"

  export default {
    name: "NewProfileProfessional",
    components: {
      Foot
    },
    data() {
      return {
        register: {},
        errors: []
      };
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        axios
          .post(`http://localhost:3000/api/auth/register/`, this.register)
          .then(response => {
            alert("Registered successfully");
            this.$router.push({
              name: "Login"
            });
          })
          .catch(e => {
            console.log(e);
            this.errors.push(e);
          });
      }
    }
  };
</script>

<!-- <template>
  <div className="NewUserProf">
    <br>
    <br>
    <br>
    <br>
    <form action="">
      <fieldset>
        <legend>PERSONAL INFO</legend>
          First Name
          <input type="text" name="firstName" id="firstName"/>
          Last Name
          <input type="text" name="lastName" id="lastName"/>
          Email
          <input type="email" name="email" id="email"/>
          Phone
          <input type="tel" name="phone" id="phone"/>
          Date of Birth
          <input type="date" name="birth" id="date"/>
      </fieldset>

      <fieldset>
        <legend> PROFESSIONAL INFO </legend>
        <span> What is your professional title? (you can select more than one) </span>
          <input type="button" name="tagLifeCoach" id="tagLifeCoach" value="Life Coach" className="TagButtons"/>
          <input type="button" name="tagSpiritual" id="tagSpiritual" value="Spiritual Practitioner" className="TagButtons"/>
          <input type="button" name="tagStrength" id="tagStrength" value="Strength Trainer" className="TagButtons"/>
          <input type="button" name="tagPerformance" id="tagPerformance" value="Performance Coach" className="TagButtons"/>

          <input type="button" name="tagMeditation" id="tagMeditation" value="Meditation Coach" className="TagButtons"/>
          <input type="button" name="tagMessage" id="tagMessage" value="Massage Therapist" className="TagButtons"/>
          <input type="button" name="tagRolfer" id="tagRolfer" value="Rolfer" className="TagButtons"/>

          <input type="button" name="tagLeadership" id="tagLeadership" value="Leadership Coach" className="TagButtons"/>
          <input type="button" name="tagCareer" id="tagCareer" value="Career Coach" className="TagButtons"/>

          <input type="button" name="tagNutritionist" id="tagNutritionist" value="Nutritionist" className="TagButtons"/>
          <input type="button" name="tagBehavioral" id="tagBehavioral" value="Behavioral Therapist" className="TagButtons"/>
          <input type="button" name="tagPersonal" id="tagPersonal" value="Personal Trainer" className="TagButtons"/>

          <input type="button" name="tagHealth" id="tagHealth" value="Health Coach" className="TagButtons"/>
          <input type="button" name="tagHighPerformance" id="tagHighPerformance" value="High Performance Personal Trainer" className="TagButtons"/>
          <input type="button" name="tagDietician" id="tagDietician" value="Dietician" className="TagButtons"/>

        <br />
        <span> How long have you worked in this position? </span>
          <input type="text" name="experienceProf" id="experienceProf" />
          <br />
        <span> Do you have a certification or license? </span>
          <input type="radio" name="licenseProf" id="licenseProf" value="Yes"/>
          <label for="Yes">Yes</label>
        <br/>
          <input type="radio" name="licenseProf" id="licenseProf" value="No"/>
          <label for="No">No</label>

        <br />
        <span> If yes, upload documents here (optional) </span>
          <button name="certificationButton" id="certificationButton">
            Select File
          </button>
      </fieldset>

      </fieldset>
      <fieldset>
        <legend>PHOTO AND BIO</legend>
        Please provide a short professional bio (50 words or less)
        <input type="text" name="bio" />
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  </div>

</template>

<styled scoped>


</styled> -->

<template>
  <b-row class="justify-content-md-center">
    <b-col cols="6">
      <br>
      <br>
      <br>
      <br>
      <h2>Please Register</h2>
      <div v-if="errors && errors.length">
        <div v-for="error of errors">
          <b-alert show>{{error.message}}</b-alert>
        </div>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Username">
          <b-form-input id="username" :state="state" v-model.trim="register.username"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Password">
          <b-form-input type="password" id="password" :state="state" v-model.trim="register.password"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Firstname">
          <b-form-input id="firstname" :state="state" v-model.trim="register.firstname"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Lastname">
          <b-form-input id="lastname" :state="state" v-model.trim="register.lastname"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Email">
          <b-form-input id="email" :state="state" v-model.trim="register.email"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Phone">
          <b-form-input id="phone" :state="state" v-model.trim="register.phone"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Date of Birth">
          <b-form-input id="dob" :state="state" v-model.trim="register.dob"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Select your professional titles">
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
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="How long have you had the title?">
          <b-form-input id="yearsInPos" :state="state" v-model.trim="register.yearsInPos"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Do you have a certification or license?">
                  <b-form-radio-group id="certification" :state="state" v-model.trim="register.certification">
                    <b-form-radio value="yes">Yes</b-form-radio>
                    <b-form-radio value="no">No</b-form-radio>
                  </b-form-radio-group>
          <!-- <b-form-input id="certification" :state="state" v-model.trim="register.certification"></b-form-input> -->
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Provide a short bio">
          <b-form-input id="bio" :state="state" v-model.trim="register.bio"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Register</b-button>
        <b-button type="button" variant="success" @click="$router.go(-1)">Cancel</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";

export default {
  name: "NewProfileProfessional",
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

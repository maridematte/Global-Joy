<template>
  <div>
    <b-container fluid class="Container">
      <b-row>
        <!-- _____ Header image and text _____ -->
        <b-row id="headerText" class="header">
          <b-col xs="1" md="2" />
          <b-col xs="10" sm="6" md="4" lg="3">
            <span class="titleHeader"> Global Joy </span>
            <br/>
            <span class="descriptionHeader">
              Your journey to health and wellness starts here.
            </span>
            <div class="buttons">
              <a href="/">
                <button id="getStartedButton">
                  Get Started
                </button>
              </a>
              <a href="/">
                <button id="signUpButton">
                  Sign Up
                </button>
              </a>
            </div>
          </b-col>
        </b-row>

        <!-- _____ Get Started Section ______ -->
        <b-row id="getStarted">
          <b-col xs="1" md="2" lg="2" />
          <b-col xs="10" md="4" lg="3" class="textSection">
            <span class="subTitle">
              Get Started
            </span>
            <span class="descriptionGetStarted">
              Search for an interest or choose a category to find
              qualified health professionals in the area.
            </span>
            <br />
            <span id="catLearnMore"> <a href="">
              Learn more about the categories >
            </a> </span>
          </b-col>
          <b-col md="1"/>

          <!-- ____ Category Icons ____ -->
          <b-col xs="10" md="4" lg="4">
            <b-row class="iconBar">
              <b-col cols="6" sm="4">
                <a href="/">
                  <img class="CategoryIcons" src="../assets/icons/wholeness.svg" />
                </a>
              </b-col>
              <b-col cols="6"  sm="4">
                <a href="/">
                  <img class="CategoryIcons" src="../assets/icons/performance.svg" />
                </a>
              </b-col>
              <b-col cols="6" sm="4">
                <a href="/">
                  <img class="CategoryIcons" src="../assets/icons/body.svg" />
                </a>
              </b-col>
              <b-col cols="6" sm="4">
                <a href="/">
                  <img class="CategoryIcons" src="../assets/icons/mind.svg" />
                </a>
              </b-col>
              <b-col cols="6" sm="4">
                <a href="/">
                  <img class="CategoryIcons" src="../assets/icons/strength.svg" />
                </a>
              </b-col>
              <b-col cols="6" sm="4">
                <a href="/">
                  <img class="CategoryIcons" src="../assets/icons/serenity.svg" />
                </a>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="2"/>
        </b-row>

        <!-- ______Categories description_______ -->
        <b-row id="catDescriptionRow">
          <b-col md="2" />

          <b-col md="4" class="categoryText">
            <b-row>
              <span class="subTitle">
                Categories
              </span>
              <br />
              <span>
                Learn more about how we categorize out health professionals here
              </span>
            </b-row>
            <CatDescription
                title="WHOLENESS"
                icon="../assets/icons/wholeness-dot.svg"
                text="PUT TEXT"/>

            <CatDescription
                title="BODY"
                icon="../assets/icons/body-dot.svg"
                text="PUT TEXT"/>

            <CatDescription
                title="STRENGTH"
                icon="../assets/icons/strength-dot.svg"
                text="PUT TEXT"/>

          </b-col>
          <b-col md="4">
            <CatDescription
                title="PERFORMANCE"
                icon="../assets/icons/performance-dot.svg"
                text="PUT TEXT"/>

            <CatDescription
                title="MIND"
                icon="../assets/icons/mind-dot.svg"
                text="PUT TEXT"/>

            <CatDescription
                title="SERENITY"
                icon="../assets/icons/serenity-dot.svg"
                text="PUT TEXT"/>

          </b-col>
          <b-col md="2" />
        </b-row>

        <Foot />
      </b-row>
    </b-container>
  </div>
</template>


<style slot-scope>
  .Container {
      /* padding-right: 0;
      padding-left: 0;
      margin: 0; */
  }

  .header {
    background-image: url("../assets/photos/homepage.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    margin: 0;

    font-weight: 1000;

    /* padding: 0 0 0 0; */

    text-align: left;
  }

  .titleHeader {
    color: #FDBA31;
    font-size: 3em;
    margin: 0;
  }

  .buttons {
    margin-top: 3em;
  }

  .descriptionHeader {
    color: white;
    font-size: 1.5em;
  }

  #getStartedButton {
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

  #signUpButton {
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

  #headerText {
    margin: 0;

  }

  #getStarted {
    background-color: #F4EEE9;
    width: 100%;
    margin: 0;
    padding-top: 9%;
  }

  .subTitle {
    color: #ED8A5F;

    font-weight: 700;
    font-size: 2.5em;

    margin-bottom:0;

    text-align: left;
  }

  .textSection{
    text-align: left;
    /* padding: 0; */
  }

  .descriptionGetStarted {
    text-align: left;
    display: block;
    padding-top: 15px;
  }

  .CategoryIcons {
    max-width: 110px;
    height: auto;

    min-width: 95px;
  }

  #catLearnMore a {
    color: #ED8A5F;
  }

  #catDescriptionRow {
    background-color: #F4EEE9;
    width: 100%;
    margin: 0;

    padding-top: 9%;
  }

  #titleCard {
    text-align: left;
  }

  .categoryCard {
    border: none;
    display: inline-block;
  }

  .categoryText {
    text-align: left;
  }

  .catImage {
    height: 200px;
    width: auto;
    margin-top: 10%;
  }

  .divLine {
    border-right: 2px solid orange;
  }

  @media (min-width: 1300px) {
    #headerText {
      padding-top: 13%;
      padding-bottom: 13%;
    }
  }
</style>

<script>
  import CatDescription from "../components/CatDescription.vue"
  import Foot from "../components/Foot.vue"

  export default {
    name: 'homepage',
    components: {
      CatDescription,
      Foot
    }
  }
</script>

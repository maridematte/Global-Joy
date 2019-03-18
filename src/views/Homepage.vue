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
                <a href="#/wholeness">
                  <img class="CategoryIcons" src="../assets/icons/wholeness.svg" />
                </a>
              </b-col>
              <b-col cols="6"  sm="4">
                <a href="#/performance">
                  <img class="CategoryIcons" src="../assets/icons/performance.svg" />
                </a>
              </b-col>
              <b-col cols="6" sm="4">
                <a href="#/body">
                  <img class="CategoryIcons" src="../assets/icons/body.svg" />
                </a>
              </b-col>
              <b-col cols="6" sm="4">
                <a href="#/mind">
                  <img class="CategoryIcons" src="../assets/icons/mind.svg" />
                </a>
              </b-col>
              <b-col cols="6" sm="4">
                <a href="#/strength">
                  <img class="CategoryIcons" src="../assets/icons/strength.svg" />
                </a>
              </b-col>
              <b-col cols="6" sm="4">
                <a href="#/serenity">
                  <img class="CategoryIcons" src="../assets/icons/serenity.svg" />
                </a>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="2"/>
        </b-row>

        <!-- ______Categories description_______ -->
        <b-row id="catDescriptionRow">
          <b-col md="1" />

          <!-- ____First Column of categories____ -->
          <b-col md="5">
            <b-row class="categoryText">
              <span class="subTitle">
                Categories
              </span>
              <br />
              <span>
                Learn more about how we categorize out health professionals here
              </span>
            </b-row>
            <b-row class="catFullBlock">
              <b-col>
                <img src="../assets/icons/wholeness-dot.svg" class="catImage" />
                <b-row>
                  <b-col class="catBlock">
                    <span class="catTitle">
                      WHOLENESS
                    </span>
                    <br/>
                    <br/>
                    <span class="catText">
                      In old English, the word ‘health’ means wholeness, sound, or well. When focusing on wholeness, explore the benefits of working with a health coach, life coach, or a trainer to help get your health started. By practicing health routines daily, you’ll no longer feel like something is missing, you’ll feel whole, you’ll feel well, you’ll be happy.
                    </span>
                  </b-col>
                </b-row>
                <br/>
                <span class="catMore">
                  Learn More >
                </span>
              </b-col>
            </b-row>

            <b-row class="catFullBlock">
              <b-col>
                <img src="../assets/icons/body-dot.svg" class="catImage" />
                <b-row>
                  <b-col class="catBlock">
                    <span class="catTitle">
                      LOVE YOUR BODY
                    </span>
                    <br/>
                    <br/>
                    <span class="catText">
                      Loving your body means being happy with everything it does and doesn’t do. It means being out of judgment about how you look and how you feel. It means listening to it, fueling it correctly, and doing exactly what it needs to feel well. Find specialists that help you achieve this self-love so you can live well and the way you deserve.
                    </span>
                  </b-col>
                </b-row>
                <br/>
                <span class="catMore">
                  Learn More >
                </span>
              </b-col>
            </b-row>

            <b-row class="catFullBlock">
              <b-col>
                <img src="../assets/icons/strength-dot.svg" class="catImage" />
                <b-row>
                  <b-col class="catBlock">
                    <span class="catTitle">
                      PERSONAL STRENGTH & POWER
                    </span>
                    <br/>
                    <br/>
                    <span class="catText">
                      In work and play, our inner power can determine our successes, happiness, and the future of our relationships. The strength we display in character helps us master the rest of our lives, so if you’re looking to land a better job or be a stronger athlete, working with a career coach, or a strength trainer is going to take you to the next level. Don’t hide in the shadows, embrace your power.
                    </span>
                  </b-col>
                </b-row>
                <br/>
                <span class="catMore">
                  Learn More >
                </span>
              </b-col>
            </b-row>

          </b-col>

          <!-- ____Second column of categories____ -->
          <b-col md="4">
            <b-row class="catFullBlock">
              <b-col>
                <img src="../assets/icons/performance-dot.svg" class="catImage" />
                <b-row>
                  <b-col class="catBlock">
                    <span class="catTitle">
                      PERFORMANCE PERFECTION
                    </span>
                    <br/>
                    <br/>
                    <span class="catText">
                      Whether you’re training for a marathon or you merely want to be better at what you do, aiming for perfection is not easy to do alone. Find a high-performance personal trainer to enhance your performance, a nutritionist to hone your diet, or soft tissue manipulation to expedite recovery. Focus gets results.
                    </span>
                  </b-col>
                </b-row>
                <br/>
                <span class="catMore">
                  Learn More >
                </span>
              </b-col>
            </b-row>

            <b-row class="catFullBlock">
              <b-col>
                <img src="../assets/icons/mind-dot.svg" class="catImage" />
                <b-row>
                  <b-col class="catBlock">
                    <span class="catTitle">
                      A BEAUTIFUL MIND
                    </span>
                    <br/>
                    <br/>
                    <span class="catText">
                      Our minds are continually running, we’re constantly stimulated, and our attention spans are short. These specialists are here to help you gain the benefits of focus, determination, quitting bad habits, and start living the life where you’re in control. Let your mind rejuvenate, forgive yourself for the past and move beautifully into the future.
                    </span>
                  </b-col>
                </b-row>
                <br/>
                <span class="catMore">
                  Learn More >
                </span>
              </b-col>
            </b-row>

            <b-row class="catFullBlock">
              <b-col>
                <img src="../assets/icons/serenity-dot.svg" class="catImage" />
                <b-row>
                  <b-col class="catBlock">
                    <span class="catTitle">
                      SERENITY
                    </span>
                    <br/>
                    <br/>
                    <span class="catText">
                      Peace, stability, low-stress levels, normal blood pressure, a deep inhale and exhale, we are meant to be in this place of tranquility. With the amount of stimulation that we have from all angles in life, our bodies think we’re in a state of chronic stress. Stress is detrimental to our health. To get back to baseline, to be in a place of less stress, and to be more mindful, find your connection to the universe and breathe.
                    </span>
                  </b-col>
                </b-row>
                <br/>
                <span class="catMore">
                  Learn More >
                </span>
              </b-col>
            </b-row>

          </b-col>
          <b-col md="2" />
        </b-row>

        <Foot />
      </b-row>
    </b-container>
  </div>
</template>


<style slot-scope>

  .header {
    background-image: url("../assets/photos/homepage.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    margin: 0;

    font-weight: 1000;

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
    padding-top: 13%;
    padding-bottom: 13%;
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

    text-align: left;
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
    margin-bottom: 60px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .catImage {
    height: 260px;
    width: auto;
  }

  .catTitle {
    font-size: 1.3em;
    font-weight: bold;
    white-space: nowrap;
  }

  .catText {
    font-size: 0.8em;
    max-width: 350px;
    display: flex;
  }

  .catBlock {
    margin-top: -75px;
    margin-left: 144px;
    border-left: solid 1px #ED8A5F;
    max-width: 350px;
  }

  .catFullBlock {
    margin-bottom: 125px;
  }

  .catMore {
    color: #ED8A5F;
    font-size: 1.1em;
    font-weight: bold;

    margin-left: 128px;
  }

  @media (max-width: 767px) {
    #headerText {
      padding-top: 20%;
      padding-bottom: 20%;
    }

    .catBlock {
      margin-top: 10px;
      margin-left: 15px;
      border-left: solid 1px #ED8A5F;
    }

    .catFullBlock {
      margin-bottom: 90px;
    }

    .catMore {
      margin-left: 0;
    }

  }

  @media (max-width: 450px) {
    #headerText {
      padding-top: 28%;
      padding-bottom: 28%;
    }

  }
</style>

<script>
  import Foot from "../components/Foot.vue"

  export default {
    name: 'homepage',
    components: {
      Foot
    }
  }
</script>

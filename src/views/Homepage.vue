<template>
  <div>
    <b-container fluid class="Container">

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
      <b-row class="getStarted">
        <b-col xs="1" md="2" lg="2" />
        <b-col xs="10" md="4" lg="3" class="textSection">
          <span class="titleGetStarted">
            Get Started
          </span>
          <br />
          <span class="descriptionGetStarted">
            Search for an interest or choose a category to find
            qualified health professionals in the area.
          </span>

          <b-row style="width:80%;">
            <input type="text" placeholder="Nutrition, Personal Trainer..."
              class="searchGetStarted" />
          </b-row>
          <b-row>
            <input type="submit" name="searchCategories"
            value="Search" class="searchBarGetStarted"/>
          </b-row>
        </b-col>

        <!-- ____ Category Icons ____ -->
        <b-col xs="10" md="5" ls="4">
          <b-row class="iconBar">
            <b-col cols="6" xs="5" sm="4">
              <a href="/">
                <img class="CategoryIcons" src="../assets/icons/wholeness.svg" />
              </a>
            </b-col>
            <b-col cols="6" xs="1" sm="4">
              <a href="/">
                <img class="CategoryIcons" src="../assets/icons/performance.svg" />
              </a>
            </b-col>
            <b-col cols="6" xs="1" sm="4">
              <a href="/">
                <img class="CategoryIcons" src="../assets/icons/body.svg" />
              </a>
            </b-col>
            <b-col cols="6" xs="1" sm="4">
              <a href="/">
                <img class="CategoryIcons" src="../assets/icons/mind.svg" />
              </a>
            </b-col>
            <b-col cols="6" xs="1" sm="4">
              <a href="/">
                <img class="CategoryIcons" src="../assets/icons/strength.svg" />
              </a>
            </b-col>
            <b-col cols="6" xs="1" sm="4">
              <a href="/">
                <img class="CategoryIcons" src="../assets/icons/serenity.svg" />
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>


    </b-container>
  </div>
</template>


<style scoped>
.Container {
    padding: 0;
}

.header {
  background-image: url("../assets/photos/homepage.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  font-weight: 1000;

  padding: 0 0 0 0;

  text-align: left;
}

.titleHeader {
  color: #FDBA31;
  font-size: 3em;
  margin: 0;
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
  width: 100%;

  padding-top: 20%;
  padding-bottom: 20%;

  margin: 0;

}

.getStarted {
  background-color: #F4EEE9;
  width: 100%;
  margin: 0;
}

.titleGetStarted {
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
}

.searchGetStarted {
  width: 100%;
  margin-left: 6%;
}

.searchBarGetStarted {
  background-color: #ED8A5F;
  border: none;
  color: white;

  text-align: center;
  text-decoration: none;
  font-size: 0.8em;
  font-weight: 700;

  border-radius: 12px;
  padding: 14px 20px;

  margin-left: 4.5%;
}

.CategoryIcons {
  width: 110px;
  height: auto;
}


@media (min-width: 1300px) {
  #headerText {
    padding-top: 15%;
    padding-bottom: 15%;
  }
}

</style>

<script>
  export default {
    name: 'homepage',
  }
</script>

<template>
  <b-container fluid class="Container">
    <b-row class="headerPerformance" align-h="center">
        <span id="title">
          Performance
        </span>
    </b-row>
    <b-row id="InfoArea">
      <b-col md="2" xs="1" />
      <b-col md="8" xs="10">
        <b-row id="trainerList" />
      </b-col>
      <b-col />
    </b-row>
    <Foot />
  </b-container>
</template>

<style slot-scope>
  .Container{
    padding: 0;
    /* margin: 0; */
  }

  .headerPerformance{
    background-image: url("../assets/photos/categories/performance.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    font-family: 'Poppins', sans-serif;
    font-weight: 1000;

    text-align: center;

    padding-top: 15%;
    padding-bottom: 15%;

    margin: 0;

    /* @media (min-width: 1500px) {
      padding-top: 15%;
      padding-bottom: 15%;
    } */
  }

  .page{
    font-family: 'Poppins', sans-serif;
    background-color: #F4EEE9;
  }

  #title {
    color: #FDBA31;
    font-size: 3em;
  }

  #InfoArea {
    padding:0;
    width: 100%;
    margin: 0;

    background-color: #F4EEE9;
    height: 100%;

  }

  #trainerList {
    padding-top: 10%;
    padding-bottom: 10%;
  }

  /* Will be included automatically on page */
  .trainer {

  }

</style>

<script>
  import Foot from "../components/Foot.vue"

  export default {
    name: 'performance',
    components: {
      Foot
    }
  }
</script>

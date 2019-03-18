<template>
  <b-container fluid class="Container">
    <b-row class="header" align-h="center">
      <span id="headerTitle">
        About Us
      </span>
    </b-row>

    <!-- ___Who we are section___ -->
    <b-row id="whoWeAre">
      <b-col md="2" />
      <b-col md="4">
        <span class="title">
          Who We Are
        </span>
        <br/>
        <br/>
        <span class="short">
          One challenge in staying healthy is getting the appropriate help. We all know how to “be healthy,” but people attempt and fail numerous times and accept that as truth.

        </span>
        <br/>
        <br/>
        <span class="text">
          Health problems that cause chronic diseases are preventable. There are various approaches and solutions to prevent health issues, such as hiring a coach. Both men and women who are invested in their health, seeking and struggling to find wellness professionals of quality and expertise can access Global Joy, a community health platform, instead of individual research and networking that takes significant time and focus. Global Joy does the search, vetting, and connection for them, saving them time and energy to focus on what really matters — staying healthy!
        </span>
      </b-col>
      <b-col md="1" />
      <b-col md="5">
        <img src="../assets/photos/canue.png" id="whoImg"/>
        <span class="dot" id="red"/>
      </b-col>
    </b-row>

    <!-- ___Joia Section___ -->
    <b-row id="joia">
      <b-col md="2" />
      <b-col md="4">
        <img src="../assets/photos/joia.png" id="joiaImg" />
        <span class="dot" id="yellow"/>
      </b-col>
      <b-col md="1" />
      <b-col md="4">
        <span class="title">
          Hi! I'm Joia!
        </span>
        <br/>
        <br/>
        <span class="short">
          Global Joy emerged after many years of working in healthcare and recognizing that I no longer wanted to contribute to the system we have.

        </span>
        <br/>
        <br/>
        <span class="text">
          I created my own team of wellness professionals, and I was able to change my life. I became a certified health coach, a sponsored endurance athlete, was thriving at work, and that when I started to formulate the Global Joy brand. I wanted to know — how can I encourage other people to get the same type of wellness care that I did? How can I make it more accessible? How can it be something exciting for them, rather than tedious or taxing?
        </span>
        <br/>
        <br/>
        <span id="joiaIN">
          <a href="">Joia’s LinkedIn profile > </a>
        </span>
      </b-col>
      <b-col md="1" />
    </b-row>

    <b-row id="whatWe">
      <b-col md="2" />
      <b-col md="4">
        <span class="title">
          What We Do
        </span>
        <br/>
        <br/>
        <span class="short">
          The Global Joy solution allows clients to access a database of health and wellness professionals specifically designed to maximize results for clients.
        </span>
        <br/>
        <br/>
        <span class="text">
          The matching algorithms allow the best professional on the platform to be highlighted for each client. Additional data from social platforms and personal interests are included in matching. Additionally, the benefit to the client is described for each wellness service, the professionals are vetted and reviewed, and individuals can search with health issues to receive recommended specialists. The big vision is to advance into a one stop platform that allows clients to create health teams, pay in a package, and communicate safely and easily with their practitioner through our platform.
        </span>
        <br/>
        <br/>
        <span id="whatSign">
          <a href=""> Sign up > </a>
        </span>
      </b-col>
      <b-col md="1" />
      <b-col md="5">
        <img src="../assets/photos/mountains.png" id="whatImg"/>
        <span class="dot" id="blue"/>
      </b-col>
    </b-row>

    <Foot />
  </b-container>
</template>

<style slot-scope>
  .Container{
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #F4EEE9;
  }

  .header{
    background-image: url("../assets/photos/aboutHeader.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    font-weight: 1000;

    text-align: left;

    padding-top: 15%;
    padding-bottom: 15%;

    margin: 0;
  }

  #headerTitle {
    color: #FDBA31;
    font-size: 3em;
  }

  #whoWeAre {
    margin-top: 9%;
    margin-bottom: 150px;

    text-align: left;
  }

  .title {
    color: #ED8A5F;
    font-size: 2.2em;
    font-weight: bold;
  }

  .short {
    color: grey;
    font-size: 1.3em;
  }

  .text {
    font-size: 0.9em;
  }

  #whoImg {
    width:100%;
    height: auto;

    margin:auto;

    float:right;
    position: relative;
    z-index: 1;
  }

  #red {
    background-color: #f1d2c5;
  }

  #yellow {
    background-color: #f5e4b9;
  }

  #blue {
    background-color: #abb7b9;
  }

  .dot {
    height: 300px;
    width: 300px;

    border-radius: 50%;

    margin-left: -100px;
    margin-top: -150px;

    float:left;
    opacity: 0.99;

    position: relative;

  }

  #joia {
    text-align: left;
    margin-bottom: 150px;
  }

  #joia a {
    color: #ED8A5F;
    font-size: 0.9em;
  }

  #joiaImg {
    width:100%;
    height: auto;

    position: relative;
    z-index: 1;
  }

  #whatWe {
    text-align: left;
    margin-bottom: 150px;
  }

  #whatWe a {
    color: #ED8A5F;
    font-weight: bold;
    font-size: 1.2em;
  }

  #whatImg {
    width: 100%;
    height: auto;

    float: right;
    position: relative;
    z-index: 1;
  }

</style>

<script>
  import Foot from "../components/Foot.vue"

  export default {
    name: 'aboutUs',
    components: {
      Foot
    }
  }
</script>

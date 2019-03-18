<template>
  <b-row id="footerBg">
    <b-col md="2">
      <a href= "" class="icons">
        <i class="fab fa-facebook-square" />
      </a>
      <a href= "" class="icons">
        <i href="" class="fab fa-instagram" />
      </a>
      <a href= "" class="icons">
        <i href="" class="fab fa-linkedin" />
      </a>
    </b-col>
    <b-col md="5">
      <b-row>
        <b-col>
          <a href="" class="footerText">
            Contact Us
          </a>
        </b-col>
        <br />
        <b-col>
          <a href="" class="footerText">
            Tutorial
          </a>
        </b-col>
        <br />
        <b-col>
          <a href="" class="footerText">
            FAQs
          </a>
        </b-col>
        <br />
        <b-col>
          <a href="" class="footerText">
            Policy & Agreement
          </a>
        </b-col>
      </b-row>
    </b-col>
    <b-col md="3"/>
    <b-col md="1">
      <span id="trademark">
        <i class="far fa-copyright" />
        2019 Global Joy
      </span>
    </b-col>
    <b-col md='1' />
  </b-row>
</template>

<style scoped>
  #footerBg{
      background-color: #0E323D;
      color: white;
      font-weight: bold;
      white-space:nowrap;

      width: 100%;
      padding-top: 70px;
      padding-bottom: 70px;
      margin: 0;

  }

  .icons {
    font-size: 1.5em;
    margin-left: 20px;
  }

  #footerBg a {
    color: white;
  }

  #footerBg a.hover {
    color: white;
    border-bottom: 1px solid white;
  }

  #trademark {
    margin-top: 100px;
  }

</style>

<script>
  export default {
    name: 'foot',
    components: {},
  };
</script>

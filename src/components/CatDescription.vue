<template>
  <b-row>
    <img v-bind:src="icon" class="catImage" />
    <span class="catTitle">
      {{title}}
    </span>
    <br/>
    <span class="catText">
      {{text}}
    </span>
  </b-row>
</template>


<style scoped>
  .catImage {
    width: 100px;
    height: auto;
  }
</style>


<script>


  export default {
    name: "catDescription",
    components: {},
    props: {
      title: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  };
</script>

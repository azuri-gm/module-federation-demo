<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1 style="font-size: 50px">This is a banner example</h1>
      <p>Some text for the banner</p>
      <Button text="Click me"></Button>
    </div>
  </div>
</template>

<script>
  import Button from './components/Button.vue';
  export default {
    components: {
      Button,
    },
  };
</script>

<style>
  .hero-image {
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('photographer.jpg'); */
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: grey;
  }

  .hero-text button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #ddd;
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
  }

  .hero-text button:hover {
    background-color: #555;
    color: white;
  }
</style>

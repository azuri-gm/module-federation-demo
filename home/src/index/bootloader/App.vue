<template>
  <div class="container">
    <Header />
    <h1>This is a header</h1>
    <p>Some text for this micro application.</p>

    <Carousel />
    <CTA />
  </div>
</template>

<script>
  import Header from '../../shared/Header.vue';
  import Carousel from 'remote1/Carousel';
  import CTA from 'remote1/CTA';

  export default {
    components: {
      Header,
      Carousel,
      CTA,
    },
  };
</script>

<style>
  .container {
    width: 800px;
    margin: auto;
    padding: top 1rem;
    background-color: aquamarine;
    height: 100vh;
    max-height: 100vh;
    border-radius: 8px;
  }
  .carousel {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
  .carousel > img {
    width: 100%;
  }
</style>

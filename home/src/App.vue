<template>
  <div class="container">
    <Header />
    <h1>Great Dogs Deserve Great Homes!</h1>
    <p>
      We are an adoption agency committed to putting wonderful adoptable dogs
      into great permanent homes...
    </p>

    <h1>Adoptable Dogs</h1>
    <Carousel />
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Carousel from 'remote1/Carousel';

  export default {
    components: {
      Header,
      Carousel,
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

<template>
  <div class="container">
    <Header />

    <div class="detail">
      <img src="https://placedog.net/500/280?id=40" />
    </div>

    <hr />

    <h1>Here we load some images</h1>
    <Carousel />
    <Button text="separate button" />
  </div>
</template>

<script>
  import Header from 'home/Header';
  import Carousel from 'remote1/Carousel';
  import Button from 'remote1/Button';

  export default {
    components: {
      Header,
      Carousel,
      Button,
    },
  };
</script>

<style>
  .container {
    width: 800px;
    margin: auto;
    padding: 1rem;
  }
  .detail {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-column-gap: 1rem;
  }
  .detail img {
    width: 100%;
  }
</style>

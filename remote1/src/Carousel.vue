<template>
  <div class="carousel">
    <div>
      <img src="https://placedog.net/500/280?id=60" />
      <h1>Image 1</h1>
    </div>
    <div>
      <img src="https://placedog.net/500/280?id=61" />
      <h1>Image 2</h1>
    </div>
    <div>
      <img src="https://placedog.net/500/280?id=62" />
      <h1>Image 3</h1>
    </div>
  </div>
</template>

<style>
  .carousel {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
  .carousel img {
    width: 100%;
  }
  .carousel h1 {
    text-align: center;
    margin-top: 0;
  }
</style>

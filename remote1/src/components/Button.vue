<template>
  <div>
    <button>{{ text }}</button>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: 'default text',
      },
    },
  };
</script>

<style>
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #ddd;
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 5000ms linear;
  }

  button:hover {
    background-color: red;
  }
</style>

<template>
  <div class="about">
    <h1>このページはPokemonページ</h1>
    {{ username }}
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    username() {
      return console.log(this.$route)
    }
  }
};
</script>

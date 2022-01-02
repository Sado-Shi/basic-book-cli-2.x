<template>
  <div>
    <h1>このページはポケモン一覧</h1>
    <ul>
      <li v-for="{id, name} in list" :key="id">
        <router-link :to="`/pokemon/${id}`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import pokemons from '@/api/pokemon.js'
  export default {
    computed: {
      list: () => pokemons.fetch()
    }
  }
</script>

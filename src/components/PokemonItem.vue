<template>
  <div v-if="item" key="pokemon">
    <h1>{{ pokemonMessage }}</h1>
    <dl>
      <dt>ポケモン名</dt>
      <dd>{{ item.name }}</dd>
      <dt>体力</dt>
      <dd>{{ item.hp }}</dd>
      <dt>タイプ</dt>
      <dd>{{ item.type }}</dd>
    </dl>
  </div>
  <div v-else key="loading">ポケモン情報を読み込んでいます・・・</div>
</template>

<script>
import pokemons from '@/api/pokemon.js'
export default {
  name: "PokemonItem",
  props: {
    pokemonMessage: String,
    id: Number,
  },

  data() {
    return {
      item: null
    }
  },

  watch: {
    id: {
      handler() {
        pokemons.asyncFind(this.id, item => {
          this.item = item
        })
      }, immediate: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

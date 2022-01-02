<template>
  <div>
    <PokemonItem pokemonMessage="ポケモンの詳細情報" />
  </div>
</template>

<script>
import PokemonItem from "@/components/PokemonItem.vue";

export default {
  name: 'Pokemon',
  components: {
    PokemonItem
  },
}
</script>

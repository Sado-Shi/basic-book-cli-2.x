<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
  },
};

const array = [1, 2, 3];
// const newArray = array.map(el => {
//   return el * 2
// })
const newArray = array.map(el => el * 2);
console.log(newArray);
// array.push(6, 7);
// console.log(array);
// array.length = [0];vue
// console.log(array);
// const insert = "insert";
// const text = "string" + insert + 1;
// console.log(text);

// const ata = "省略";
// const bta = "記法";
// const newObject = { ata, bta };
// console.log(newObject);

// const [test, dayo] = [4, 6];
// console.log(test, dayo);

// const { id } = { id: 1, name: "りんご" };
// console.log(id);

// function testFunc({ id, name }) {
//   console.log(id);
//   console.log(name);
// }
// testFunc({ id: 1, name: 'apple' });
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

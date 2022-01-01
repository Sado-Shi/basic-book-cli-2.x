<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/pokemon">Pokemon</router-link>
      <!-- {{ username }} -->
    </div>
    <router-view/>
  </div>
</template>

<script>

// export default {
//   name: "App",
//   computed: {
//     username() {
//       return console.log(this.$route)
//     }
//   }
// };

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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

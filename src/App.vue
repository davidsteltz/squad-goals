<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/counter">Counter</router-link> |
      <router-link to="/timer">Timer</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body, #app {
  height: 100vh;
  margin: 0;
  background:#2c3e50 !important;
  color: #eeeeee;
}
#nav a {
  color: #fff;
}
button {
    font-size: 18px;
    margin: 5px;
    border: 2px solid #333333;
    padding: 10px 20px;
    border-radius: 300px;
    background: #eeeeee;
    color: #333333;
    transition: .4s;
}
button:hover {
  background: #dddddd;
  color: #000000;
  transition: .2s;
  cursor: pointer;
}
</style>

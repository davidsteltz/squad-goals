<template><div id="app"><div id="nav"><router-link to="/">Home</router-link>| <router-link to="/about">About</router-link>| <router-link to="/counter">Counter</router-link>| <router-link to="/timer">Timer</router-link></div><router-view/></div></template>
<style lang="scss">

//Color Variables
$primary-color: #2c3e50;
$secondary-color: #42b983;
$text-color: #fff;
//App
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  margin: 0;
  background: $primary-color;
  color: $text-color;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $text-color;

    &.router-link-exact-active {
      color: $secondary-color;
    }
  }
}

button {
  font-size: 18px;
  margin: 20px 5px;
  border: 2px solid  rgba(255, 255, 255, .5);
  padding: 10px 20px;
  border-radius: 300px;
  background: rgba(0, 0, 0, .5);
  color: rgba(255, 255, 255, .9);
  transition: .4s;
}

button:hover {
  border-color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
  transition: .2s;
  cursor: pointer;
}

button:focus {
  outline: none;
}

</style>

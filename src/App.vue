<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> Fade transition</router-link> |
      <router-link to="/tranGroup">Transition-group</router-link>  |
      <router-link to="/animation">Fade Animation</router-link> |
       <router-link to="/aniAndtransi">Animation With Transition</router-link> |
      <router-link to="/multipleElement">Transitioning Between Multiple Elements (Displaying One At A Time)</router-link>
    </div>
    <router-view />
  </div>
</template>

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

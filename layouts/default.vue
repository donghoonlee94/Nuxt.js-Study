<template>
  <div>
    <div class="header">
      <NuxtLink to="/">홈</NuxtLink>
      <NuxtLink to="/users">/users</NuxtLink>
      <NuxtLink to="/users/1234">/users/1234</NuxtLink>
    </div>
    <Nuxt class="body" />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: white;
}

.header {
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
}

.body {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
}
</style>

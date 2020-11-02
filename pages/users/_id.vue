<template>
  <div style="background-color: green">
    <h2>usersId Component</h2>
    <p>API Data</p>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  validate({ params }) {
    // Must be a number
    console.log(params)
    return /^\d+$/.test(params.id)
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/1`
    )
    return { data }
  },
  mounted() {
    console.log('mounted')
  },
  head: () => ({
    title: 'usersID Components',
    meta: [
      {
        hid: 'description',
        name: 'og:description',
        content: 'UsersID Components',
      },
    ],
  }),
}
</script>

<style></style>

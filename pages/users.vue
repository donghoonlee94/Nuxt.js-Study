<template>
  <div>
    users parents
    <p>data</p>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
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
    title: 'usersParent',
    meta: [
      {
        hid: 'description',
        name: 'og:description',
        content: 'Users Pages',
      },
    ],
  }),
}
</script>

<style></style>

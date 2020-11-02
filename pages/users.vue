<template>
  <div>
    <h2 style="background-color: blue">users parents(nested)</h2>

    <nuxt-child />
  </div>
</template>

<script>
export default {
  head: () => ({
    title: 'usersParent',
    meta: [
      {
        hid: 'description',
        name: 'og:description',
        content: 'usersParent Pages',
      },
    ],
  }),
}
</script>

<style></style>

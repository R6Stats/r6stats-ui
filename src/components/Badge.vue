<template>
  <span class="badge">
    <slot/>
  </span>
</template>

<script>
  export default {
    name: 'badge',

    props: {
      state: {
        type: String,
        default: 'default' 
      }
    }
  }
</script>
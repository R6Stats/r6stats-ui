<template>
  <div class="widget">
    <header v-if="hasTitle">
      {{ title }}
    </header>
  </div>
</template>

<script>
  export default {
    name: 'widget',

    props: {
      hasTitle: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        required: false
      }
    }
  }
</script>

<style>
  :root {
    --test: #ff0000;
  }
 
  .widget {
    background: var(--test);

    header {
      border-left: 5px solid 
    }
  }
</style>
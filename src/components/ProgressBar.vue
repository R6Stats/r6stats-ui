<template>
  <div class="progress-bar">
    <div class="progress" :style="progressWidth"></div>
  </div>
</template>

<script>
  export default {
    name: 'progress-bar',

    props: {
      percent: {
        type: Number,
        default: 0
      }
    },

    computed: {
      progressWidth () {
        return {
          width: this.percent + '%'
        }
      }
    }
  }
</script>
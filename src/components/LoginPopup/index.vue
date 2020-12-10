<template>
  <button @click="handleClick" v-if="show">按钮</button>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleClick () {
      console.log('component $router', this.$router)
    }
  }
}
</script>

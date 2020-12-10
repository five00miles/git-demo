<template>
  <button class="home" @click="handleClick">首页</button>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    handleClick () {
      this.$loginPopup.show()
    }
  }
}
</script>

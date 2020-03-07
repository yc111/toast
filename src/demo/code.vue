<template>
  <div class="code-box" v-highlight>
    <pre class='pre-reset'>
      <code class='code-reset'>
this.$toast({
  type: 'success',
  msg: 'Bravo!',
  duration: 3,
  position: 'top-left',
  fullWidth: false
});
      </code>
    </pre>
  </div>
</template>

<style scoped>
.code-box {
  width: 400px;
  font-size: 14px;
}
.pre-reset {
    height: 196px;
    margin: -16px 0;
}
.code-reset {
    padding: 10px 20px;
}
</style>

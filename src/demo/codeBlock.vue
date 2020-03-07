<template>
  <div class="code-box" v-highlight>
    <pre class='pre-reset'>
      <code class='code-reset' ref='codeTank'></code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'codeBlock',
  methods: {
    codeHtml(options) {
      return (
        `
this.$toast({
  type: '${options.type}',
  msg: '${options.msg}',
  duration: ${options.duration},
  position: '${options.position}',
  fullWidth: ${options.fullWidth}
});
      `
      );
    },
  },
  mounted() {
    this.$refs.codeTank.innerHTML = this.codeHtml({
      type: 'success',
      msg: 'Bravo!',
      duration: 3,
      position: 'top-left',
      fullWidth: false,
    });
    this.$forceUpdate();
    this.$bus.$on('change', (options) => {
      this.$refs.codeTank.innerHTML = this.codeHtml(options);
      this.$forceUpdate();
    });
  },
};
</script>

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

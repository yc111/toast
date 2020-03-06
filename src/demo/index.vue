<template>
  <div>
    <button @click='handleClick("success")'>success</button>
    <button @click='handleClick("warning")'>warning</button>
    <button @click='handleClick("danger")'>danger</button>
    <button @click='handleClick("loading")'>loading</button>
  </div>
</template>

<script>
const msgs = {
  success: '成功',
  warning: '警告',
  danger: '失败',
  loading: 'loading',
};

export default {
  name: 'demo',
  methods: {
    handleClick(value) {
      this.$toast({
        type: value,
        msg: msgs[value],
      });
    },
  },
};
</script>

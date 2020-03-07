<template>
  <div class='demo-container'>
    <div class='props-item'>
      <label class='toast-label'>Toast Icon</label>
      <input type="text" v-model='type'>
    </div>
    <div class='props-item'>
      <label class='toast-label'>Toast message</label>
      <input type="text" v-model='msg'>
    </div>
    <div class='props-item'>
      <label class='toast-label'>Duration</label>
      <input type="text" v-model.number='duration'>
    </div>
    <div class='props-item'>
      <label class='toast-label'>position</label>
      <label class='position-label' v-for="(item, index) in positionList" :key='index'>
        <input type="radio" :value="item" v-model='position'>
        {{item}}
      </label>
    </div>
    <div class='props-item'>
      <button @click='handleClick(type, msg, duration, position)'>View Toast</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'demo',
  data() {
    return {
      type: 'success',
      msg: '成功',
      duration: 3,
      position: 'top-left',
      positionList: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'center-center',
      ],
    };
  },
  methods: {
    handleClick(type, msg, duration, position) {
      this.$toast({
        type,
        msg,
        duration,
        position,
      });
    },
  },
};
</script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.props-item {
  margin: 10px;
}
.toast-label {
  display: block;
  font-size: 12px;
}
.position-label {
  font-size: 12px;
}
</style>

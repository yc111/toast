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
      <label class='toast-label'>Position</label>
      <label class='position-label' v-for="(item, index) in positionList" :key='index'>
        <input type="radio" :value="item" v-model='position'>
        {{item}}
      </label>
    </div>
    <div class='props-item'>
      <label class='toast-label'>Full Width</label>
      <label class='position-label' v-for="(item) in booleanList" :key='item.label'>
        <input type="radio" :value="item.value" v-model='fullWidth'>
        {{item.label}}
      </label>
    </div>
    <div class='props-item'>
      <button @click='handleClick(type, msg, duration, position, fullWidth)'>View Toast</button>
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
      fullWidth: false,
      positionList: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'center-center',
      ],
      booleanList: [
        { label: 'off', value: false },
        { label: 'on', value: true },
      ],
    };
  },
  methods: {
    handleClick(type, msg, duration, position, fullWidth) {
      this.$toast({
        type,
        msg,
        duration,
        position,
        fullWidth,
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
  max-width: 200px;
  margin: 10px;
}
.toast-label {
  display: block;
  font-weight: 800;
  font-size: 12px;
}
.position-label {
  font-size: 12px;
}
</style>

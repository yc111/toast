<template>
  <transition name='fade'>
    <div class='uco-toast' v-if='isShow'>
      <span :class='iconStyle'></span>
      <span>{{msg}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      type: 'success',
      msg: 'Bravo!',
      duration: 3,
    };
  },
  computed: {
    iconStyle() {
      return `tfont icon-${this.type} toast-icon`;
    },
    realDuration() {
      const isNumber = Number.isInteger(this.duration);
      return isNumber && this.duration > 0 ? this.duration * 1000 : 'INFINITY';
    },
  },
  mounted() {
    this.isShow = true;
    if (this.realDuration !== 'INFINITY') {
      setTimeout(() => {
        this.isShow = false;
      }, this.realDuration);
    }
  },
};
</script>

<style lang='less' scoped>
.uco-toast {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    margin: 5px;
    font-size: 14px;
    font-weight: 200;
    color: #fff;
    text-align: center;
    background-color: rgba(0,0,0,0.8);
    border-radius: 2px;
    z-index: 99999;

    .toast-icon {
        margin-right: 5px;
        font-size: 14px;
        color: #fff;
    }
}

.fade-enter-active,
.fade-leave-active{
  transition: all .3s cubic-bezier(.08, .82, .17, 1);
}
.fade-enter {
  opacity: 0;
  transform: translateY(100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>

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
      msg: '成功',
      duration: 1,
    };
  },
  computed: {
    iconStyle() {
      return `tfont icon-${this.type} toast-icon`;
    },
  },
  mounted() {
    this.isShow = true;
    setTimeout(() => {
      this.isShow = false;
    }, this.duration * 1000);
  },
};
</script>

<style lang='less' scoped>
.uco-toast {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:40%;
    left: 50%;
    margin-left: -15vw;
    padding: 2vw;
    width: 30vw;
    font-size: 4vw;
    color: #fff;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
    border-radius: 5vw;
    z-index: 99;

    .toast-icon {
        margin-right: 1vw;
        font-size: 4vw;
        color: #fff;
    }
}

.fade-enter-active,
.fade-leave-active{
  transition: all .3s ease;
}
.fade-enter {
  opacity: 0;
  transform: scale(1.2);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>

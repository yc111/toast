<template>
    <div class='position-container'>
        <div class='position-cell'
         v-for='(item) in positionList'
         :key='item.value'
         :class='item.disabled ? "disable" : (item.value === value ? "active" : "")'
         @click='changePosition(item)'
         :title='item.disabled ? "" : item.value'
         >
         </div>
    </div>
</template>

<script>
export default {
  name: 'position',
  data() {
    return {
      value: 'top-left',
      positionList: [
        { value: 'top-left' },
        { value: 'top-center' },
        { value: 'top-right' },
        { value: 'center-left', disabled: true },
        { value: 'center-center' },
        { value: 'center-right', disabled: true },
        { value: 'bottom-left' },
        { value: 'bottom-center' },
        { value: 'bottom-right' },
      ],
    };
  },
  methods: {
    changePosition(item) {
      this.value = item.value;
    },
  },
};
</script>

<style lang='less' scoped>
.position-container {
    width: 99px;
    overflow: hidden;
}

.position-cell {
   float: left;
   box-sizing: border-box;
   width: 30%;
   height: 30px;
   margin: 1px;
   background-color: #ededed;
   border: solid 1px #ccc;
   cursor: pointer;

   &:hover {
       background-color: rgb(200, 224, 255);
       border-color: rgb(113, 161, 223);
   }

   &.active {
       background-color: rgb(145, 202, 255);
       border-color: rgb(57, 136, 226);
   }

   &.disable {
       background-color: transparent;
       border-color: transparent;
       cursor: default;
   }
}

</style>

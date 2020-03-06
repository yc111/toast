# A Simple Popup Tip Component for Vue.js

## Installation
```
npm i -S @champyin/toast
```

## Usage
In `main.js` of a Vue Project:
```javascript
import toast from '@champyin/toast';
Vue.use(toast);
```

In any Vue component, you can simply use `this.$toast()` to popup a tip:
```javascript
<script>
export default {
  mounted() {
    this.$toast({
      type: 'success',
      msg: '成功'
    });
  }
}
</script>
```

## Options and Defaults
### type
*string*  
Default value is 'success'.  
Type of toast, could be one of these values: `success` | `warning` | `danger` | `loading`.

### msg
*string*  
The info you want to show on the toast. (should be short)

### duration
*number*  
Default value is 3.  
How  many seconds he toast should be shown, after that it could disapear automaticly.

## Example
```javascript
this.$toast({
  type: 'warning',
  msg: '请注意',
  duration: 6
});
```

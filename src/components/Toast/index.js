import Vue from 'vue';
import Toast from './index.vue';
import './theme.less';

const ToastConstructor = Vue.extend(Toast);

const defaultPosition = 'top-center';
const toast = function (options = {}) {
  const {
    type, msg, duration, position,
  } = options;
  if (!type && !msg) {
    return null;
  }
  const toastInstance = new ToastConstructor({
    data: {
      type,
      msg,
      duration: duration || -1,
    },
  }).$mount();
  let container = document.querySelector('.uco-toast-container');
  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }
  container.className = position
    ? `uco-toast-container ${position}`
    : `uco-toast-container ${defaultPosition}`;
  container.appendChild(toastInstance.$el);
  return toastInstance;
};

export default toast;

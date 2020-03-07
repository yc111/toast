import Vue from 'vue';
import Toast from './index.vue';
import './theme.less';

const ToastConstructor = Vue.extend(Toast);
const defaultPosition = 'top-center';

const toast = function (options = {}) {
  const {
    type, msg, duration, position, fullWidth,
  } = options;

  if (!type && !msg) {
    return null;
  }

  const toastInstance = new ToastConstructor({
    data: {
      type,
      msg,
      duration: duration || 3,
    },
  }).$mount();

  let container = document.querySelector('.uco-toast-container');
  let containerClass = 'uco-toast-container';

  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }

  containerClass += position ? ` ${position}` : ` ${defaultPosition}`;
  containerClass += fullWidth ? ' full-width' : '';
  container.className = containerClass;

  container.appendChild(toastInstance.$el);
  return toastInstance;
};

export default toast;

import Vue from 'vue';
import Toast from './index.vue';

const ToastConstructor = Vue.extend(Toast);

const toast = function(options = {}) {
    const toastInstance = new ToastConstructor({
        data: options
    }).$mount();
    document.body.appendChild(toastInstance.$el);
    return toastInstance;
};

export default toast;

import Vue from 'vue';
import Toast from './index.vue';

const ToastConstructor = Vue.extend(Toast);

const toast = function(options = {}) {
    const toastInstance = new ToastConstructor({
        data: options
    }).$mount();
    let container = document.querySelector('.uco-toast-container');
    if(!container) {
        container = document.createElement('div');
        container.className = 'uco-toast-container';
        document.body.appendChild(container);
    }
    container.appendChild(toastInstance.$el);
    return toastInstance;
};

export default toast;

import Vue from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/gruvbox-light.css';

Vue.directive('highlight', (el) => {
  const blocks = el.querySelectorAll('code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});

import Vue from 'vue';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/gruvbox-light.css';

hljs.registerLanguage('javascript', javascript);

Vue.directive('highlight', (el) => {
  const blocks = el.querySelectorAll('code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});

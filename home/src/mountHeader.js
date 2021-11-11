import { createApp } from 'vue';
import Header from './shared/Header.vue';

export default (selector) => {
  createApp(Header).mount(selector);
};

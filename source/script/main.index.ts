import { createApp } from 'vue';

import '../style/index.scss';
import '../content/contrib/favicon.png';
import components from './components.index';

import test from './test';

const app = createApp({
    template: '<sg-frame></sg-frame>',
});

components.forEach(c => app.component(c.name, c));

app.mount('#main');


test();

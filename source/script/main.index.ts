import { createApp, Component } from 'vue';

import '../style/index.scss';
import components from './components.index';

const app = createApp({
    template: '<sg-frame></sg-frame>',
});

app.component('sg-frame', components[0]!);

app.mount('#main');

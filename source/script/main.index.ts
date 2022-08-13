import { createApp, Component } from 'vue';

import components from './components.index';

const app = createApp({
    template: '<sg-frame></sg-frame>',
});

app.component('sg-frame', components[0]!);

app.mount('#main');

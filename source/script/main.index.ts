import { createApp, Component } from 'vue';
// import SgFrame from './ui/sg-frame.vue';

import components from './ui';

const cArray: Array<Component> = components;

const app = createApp({
    template: '<sg-frame></sg-frame>',
});

app.component('sg-frame', cArray[0]!);

app.mount('#main');

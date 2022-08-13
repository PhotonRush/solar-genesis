import { createApp } from 'vue';

import '../style/index.scss';
import components from './components.index';

const app = createApp({
    template: '<sg-frame></sg-frame>',
});

if (components.length > 0 && components[0] != null) {
    app.component('sg-frame', components[0]);
}



app.mount('#main');

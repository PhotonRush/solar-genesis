<template>
<div class="container">
    <sg-main-menu></sg-main-menu>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'sg-frame',
    data() {
        return {
            greeting: 'Hello World!'
        }
    }
});
</script>

<style>
.container {
    min-width: 640px;
    max-width: 1920px;
    /* padding-top: 2em;
    width: 1920px;
    margin: 0 auto;
    border: solid thin gray; */
}
</style>
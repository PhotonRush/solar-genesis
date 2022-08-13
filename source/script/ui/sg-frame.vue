<template>
<div class="container">
    <h1>Hello Worlds</h1>
    <p>Bottom Text</p>
    <sg-button></sg-button>
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
/* .container {
    padding-top: 2em;
    width: 1920px;
    margin: 0 auto;
    border: solid thin gray;
} */
</style>
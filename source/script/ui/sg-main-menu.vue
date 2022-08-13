<template>
    <h1>Hello</h1>
    <p class="greeting">{{ greeting }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'sg-main-menu',
    data() {
        return {
            greeting: 'Hello World!'
        }
    }
});
</script>

<style>
.greeting {
    color: red;
    font-weight: bold;
}
</style>
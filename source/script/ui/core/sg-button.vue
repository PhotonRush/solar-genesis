<template>
    <button class="sg-button">Test</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'sg-button',
    data() {
        return {
            greeting: 'Hello World!'
        }
    }
});
</script>

<style lang="scss">
@use '../variables.scss';

button.sg-button {
    color: variables.$foreground-base;
    background-color: variables.$blue;
    border: outset;
    cursor: pointer;
}

</style>
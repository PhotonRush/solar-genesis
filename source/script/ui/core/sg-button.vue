<template>
    <button class="sg-button">{{ text }}</button>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineProps({
  text: String,
});


</script>

<script lang="ts">


export default defineComponent({
    name: 'sg-button',
    props: {
        text: String,
    }
});
</script>

<style lang="scss">
@use '../variables.scss';

button.sg-button {
    color: variables.$foreground-base;
    background-color: variables.$green;
    border: outset;
    cursor: pointer;
    width: 100%;
}

</style>
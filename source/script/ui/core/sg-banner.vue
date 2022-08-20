<template>
    <div class="sg-banner">
        <p class="banner-text">{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineProps({
  text: String,
});


</script>

<script lang="ts">


export default defineComponent({
    name: 'sg-banner',
    props: {
        text: String,
    }
});
</script>

<style lang="scss">
@use "sass:color";
@use '../variables.scss';

.sg-banner {
    background: variables.$warning-header;
    padding: .5em 0;
    border: outset;


    p.banner-text {
        max-width: 50%;
        text-align: center;
        margin: 0 auto;
        padding: .25em;
        color: variables.$foreground-bright;
        background-color: rgba(color.red(variables.$background-base), color.green(variables.$background-base), color.blue(variables.$background-base), .5);
        background-color: variables.$background-base;
        border: inset;
        font-size: .75em;
    }
}

</style>
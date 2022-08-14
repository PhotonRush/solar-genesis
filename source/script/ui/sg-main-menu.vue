<template>
    <div class="sg-main-menu">
        <h1>Solar Genesis</h1>
        <div class="menu-panel">
            <sg-button text="Load Game"></sg-button>
            <sg-button text="New Game"></sg-button>
            <sg-button text="Credits"></sg-button>
            <sg-button text="Quit"></sg-button>
        </div>

    </div>
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

<style lang="scss">
.sg-main-menu {
    h1 {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
    }
    .menu-panel {
        display: flex;
        flex-direction: column;
        width: 25%;
        margin: 0 auto;

        .sg-button {
            margin-top: .25em;
        }
    }


}
</style>
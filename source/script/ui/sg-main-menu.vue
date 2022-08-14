<template>
    <div class="sg-main-menu">
        <h1>Solar Genesis</h1>

        <sg-banner text="Warning: Ontological failure imminent!"></sg-banner>
        <div class="menu-panel">
            <sg-button text="Load Game"></sg-button>
            <sg-button text="New Game"></sg-button>
            <sg-button text="Options"></sg-button>
            <sg-button text="Credits"></sg-button>
            <sg-button text="Quit"></sg-button>
        </div>

        <p class="footer-text">a game by Aaron Willows &copy; 2022</p>

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
        margin: 0;
    }

    .sg-banner {
        margin: .5em 0;
    }

    p.footer-text {
        font-size: .5em;
        text-align: center;
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
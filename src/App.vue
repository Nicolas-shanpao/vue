<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

export default {
    name: 'app'
}
</script>

<style>
    #app {
        font-family: PingFang SC, 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
        font-size: 0.16rem;
    }

    html, body {
        margin: 0;
        height: 100%;
    }

    * {
        font-family: PingFang SC;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none
    }

    a {
        color: inherit;
        text-decoration: none;
    }

</style>

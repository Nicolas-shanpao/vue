<template>
    <div>
        <tool></tool>
        <div id="cesiumContainer">
        </div>
        <router-view/>
    </div>
</template>

<script>
    import tool from './tool'
    import Cesium from 'cesium/Cesium'
    export default {
        name: "cesium",
        data() {
            return {
                viewer: ''
            }
        },
        mounted() {
            this.viewer = new Cesium.Viewer('cesiumContainer');
            this.$store.commit('SET_VIEWER', this.viewer)
            console.log(this.$store.state.cesium.viewer);
        },
        components: {
            tool
        }
    }
</script>

<style lang="scss">
    #cesiumContainer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        .cesium-viewer {
            .cesium-viewer-bottom, .cesium-viewer-animationContainer, .cesium-viewer-timelineContainer, .cesium-viewer-fullscreenContainer {
                display: none !important;
            }
        }
    }
</style>

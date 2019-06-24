<template>
    <div class="left-toolbar">
        <router-link to="/cesium/fengxian">
            <el-button type="primary" icon="el-icon-s-opportunity">风险</el-button>
        </router-link>
        <el-button type="info" icon="el-icon-message" @click="showlabel('哈哈哈')">showlabel</el-button>
        <el-button type="info" icon="el-icon-question" @click="showlabel('哈哈哈')"></el-button>
        <el-button type="info" icon="el-icon-question" @click="showlabel('哈哈哈')"></el-button>
        <el-button type="info" icon="el-icon-question" @click="showlabel('哈哈哈')"></el-button>
    </div>
</template>

<script>
    import Cesium from 'cesium/Cesium'

    export default {
        name: "tool",
        mounted() {
            this.$nextTick(() => {
                this.viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(-75.1641667, 39.9522222),
                    label: {
                        text: 'msg'
                    }
                });
            })
        },
        methods: {
            showlabel(msg) {
                this.viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(-75.1641667, 39.9522222),
                    label: {
                        text: msg
                    }
                });
            }
        },
        computed: {
            viewer() {
                return this.$store.state.cesium.viewer
            }
        }
    }
</script>

<style scoped lang="scss">
    .left-toolbar {
        position: fixed;
        left: 10px;
        top: 50%;
        display: flex;
        flex-direction: column;
        height: 250px;
        z-index: 1;
        .el-button + .el-button {
            margin-left: 0;
        }

        .el-button {
            margin-bottom: 10px;
        }
    }
</style>

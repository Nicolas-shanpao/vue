<template>
    <div class="fengxian">
        风险
        <el-button @click="showfengxian(hutong,true)">show</el-button>
    </div>
</template>

<script>
    import hutong from './hutong.json'
    import Cesium from 'cesium/Cesium'

    export default {
        name: "fengxian",
        data() {
            return {
                hutong: hutong,
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.viewer.flyTo(this.viewer.entities, {duration: 3})
            })
        },
        methods: {
            showfengxian(arr, iscenter) {
                let that = this
                let image=''
                that.hutong.Data.forEach((data, index, array) => {
                    console.log(data, index, array);
                    let jd = Number(data.x)
                    let wd = Number(data.y)
                    let gd = Number(data.z) + 80
                    that.viewer.entities.add({
                        name: data.name,
                        position: Cesium.Cartesian3.fromDegrees(jd, wd, gd),
                        point: {
                            color: new Cesium.Color.fromCssColorString("#ffffff"),
                            pixelSize: 36,
                            outlineColor: new Cesium.Color.fromCssColorString("#ffffff"),
                            outlineWidth: 2,
                            // heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,     //贴地
                            scaleByDistance: new Cesium.NearFarScalar(1000, 1, 100000, 0.1)
                        },
                        billboard: {
                            image: image
                        },
                        label: {
                            text: data.name,
                            font: '36px 楷体',
                            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                            fillColor: Cesium.Color.AZURE,
                            outlineColor: Cesium.Color.BLACK,
                            outlineWidth: 2,
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            pixelOffset: new Cesium.Cartesian2(0, -10),   //偏移量  
                            heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND, //是地形上方的高度
                            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 30000),
                            scaleByDistance: new Cesium.NearFarScalar(1000, 1, 30000, 0.1)
                        },
                        _isQyPoint: true, //标识下，事件中判断
                        data: data,
                        click: function (entity) {
                            console.log(entity);
                        },
                    })
                });
                if (iscenter)
                    that.viewer.flyTo(that.viewer.entities, {duration: 3})
                return arr
            }
        },
        computed: {
            viewer() {
                return this.$store.state.cesium.viewer
            },
            dataSource() {
                return new Cesium.CustomDataSource()
            }
        }
    }
</script>

<style scoped>
    .fengxian {
        position: fixed;
        left: 10px;
        top: 100px;
    }
</style>

<template>
    <div :id="id" :style="this.styles"></div>
</template>

<script>
import echarts from 'echarts'
import {debounce} from '@/utils'
export default {
    name: 'echarts',
    props: {
        id: String,
        styles: {
            type: Object,
            default: function () {
                return {width: '3rem', height: '3rem'}
            }
        },
        option: {
            type: Object,
            default: function () {
                return {}
            }
        },
        others: {
            type: Object,
            default: function () {
                return {}
            }
        },
        autoResize: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            charts: null
        }
    },
    mounted () {
        this.drawChart(this.id, this.option)
        if (this.autoResize) {
            this.__resizeHanlder = debounce(() => {
                if (this.chart) {
                    this.chart.resize()
                }
            }, 100)
            window.addEventListener('resize', this.__resizeHanlder)
        }
    },
    watch: {
        option: {
            handler (n, o) {
                this.drawChart(this.id, n)
            },
            deep: true
        }
    },
    methods: {
        drawChart (id, data) {
            const that = this
            that.charts = echarts.init(document.getElementById(id))
            that.charts.setOption(data)
        }
    },
    beforeDestroy () {
        if (!this.chart) {
            return
        }
        if (this.autoResize) {
            window.removeEventListener('resize', this.__resizeHanlder)
        }
        this.chart.dispose()
        this.chart = null
    }
}
</script>

<style scoped>
    .huanjing-title {
        font-size: 14px;
        color: #fff;
        text-align: center;
    }
</style>

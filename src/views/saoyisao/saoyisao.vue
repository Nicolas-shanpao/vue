<template>
    <div>
        sadasdasdasdasdasdasd
    </div>
</template>

<script>
    export default {
        name: 'saoyisao',
        data () {
            return {}
        },
        computed: {},
        mounted () {
            this.test()
            this.takeLongTime().then(v => {
                console.log("got", v);
            });
        },
        methods: {
            getSomething () {
                return 'something'
            },
            async testAsync () {
                return Promise.resolve('hello async')
            },
            async test () {
                const v1 = await this.getSomething();
                const v2 = await this.testAsync();
                console.log(v1+'----------'+ v2);
            },
            takeLongTime() {
                return new Promise(resolve => {
                    setTimeout(() => resolve("long_time_value"), 1000);
                });
            }
        }
    }
</script>

<style scoped>
</style>

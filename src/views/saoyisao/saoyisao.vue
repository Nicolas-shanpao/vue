<template>
    <div>
        sadasdasdasdasdasdasd
    </div>
</template>

<script>
    export default {
        name: 'saoyisao',
        data() {
            return {}
        },
        computed: {},
        mounted() {
            console.log(['a', 'b', 'c'].includes('a'))      //true

        },
        methods: {
            getSomething() {
                return 'something'
            },
            async testAsync() {
                return Promise.resolve('hello async')
            },
            async test() {
                const v1 = await this.getSomething();
                const v2 = await this.testAsync();
                console.log(v1 + '----------' + v2);
            },
            takeLongTime(n) {
                return new Promise(resolve => {
                    setTimeout(() => resolve(n + 200), n);
                });
            },
            step1(n) {
                console.log(`step1 with ${n}`);
                return this.takeLongTime(n);
            },
            step2(m, n) {
                console.log(`step1 with ${m} and ${n}`);
                return this.takeLongTime(m + n);
            },
            step3(k, m, n) {
                console.log(`step1 with ${k},${m} and ${n}`);
                return this.takeLongTime(k + m + n);
            },
            async doIt() {
                console.time("doIt");
                const time1 = 300;
                const time2 = await this.step1(time1);
                const time3 = await this.step2(time1, time2);
                const result = await this.step3(time1, time2, time3);
                console.log(`result is ${result}`);
                console.timeEnd("doIt");
            }
        }
    }
</script>

<style scoped>
</style>

<template>
    <div class="login-bg">
        <div class="login-form">
            <div class="login-title">WELCOME</div>
            <div class="login-avatar">
                <img src="@/assets/default-avatar.jpg" alt="" width="100%" height="100%">
            </div>
            <el-form :model="userInfo" status-icon :rules="userInfoRules" ref="userInfo" label-width="40px"
                     class="demo-ruleForm">
                <el-form-item label="账号" prop="username">
                    <el-input type="text" v-model="userInfo.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="userInfo.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100%;" @click="submitForm('userInfo')">
                        <div style="width: 100px;margin: 0 auto;text-align-last: justify;">登录</div>
                    </el-button>
                </el-form-item>
            </el-form>
            <div class="login-foot">
                <div class="login-foot-min">注册账号</div>
                <span>|</span>
                <div class="login-foot-min">忘记密码</div>
            </div>
            <div class="login-foot">
                <div class="login-foot-min">纬度：{{jinwei.lat}}</div>
                <span>|</span>
                <div class="login-foot-min">经度：{{jinwei.lag}}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Login',
        data () {
            var validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'))
                } else {
                    callback()
                }
            }
            var validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    callback()
                }
            }
            return {
                userInfo: {
                    username: '',
                    password: ''
                },
                userInfoRules: {
                    username: [
                        {validator: validateUsername, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePassword, trigger: 'blur'}
                    ]
                },
                loading: false,
                jinwei: {
                    lat: 0,
                    lag: 0
                }
            }
        },
        mounted () {
            let that = this
            setInterval(function () {
                that.getLocation()
            }, 1000)
        },
        methods: {
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        this.$store.dispatch('LoginByUsername', this.userInfo).then(() => {
                            this.loading = false
                            this.$router.push({path: '/'})
                        }).catch(() => {
                            this.loading = false
                        })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            getLocation () {
                var that = this
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(that.showPosition, that.showError)
                } else {
                    alert('浏览器不支持地理定位。')
                }
            },
            showError (error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.log('定位失败,用户拒绝请求地理定位')
                        break
                    case error.POSITION_UNAVAILABLE:
                        console.log('定位失败,位置信息是不可用')
                        break
                    case error.TIMEOUT:
                        console.log('定位失败,请求获取用户位置超时')
                        break
                    case error.UNKNOWN_ERROR:
                        console.log('定位失败,定位系统失效')
                        break
                }
            },
            showPosition (position) {
                let that = this
                var lat = position.coords.latitude // 纬度
                var lag = position.coords.longitude // 经度
                let latlag = {
                    lat: lat,
                    lag: lag
                }
                that.jinwei = latlag
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-bg {
        width: 100%;
        height: 100vh;
        background-image: url("../../assets/loginbg.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;

        .login-form {
            width: 300px;
            height: 400px;
            background: rgba(255, 255, 255, 0.31);
            position: absolute;
            top: 30vh;
            left: 0;
            right: 0;
            margin: auto;
            border-radius: 10px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            padding: 0 30px;

            .login-title {
                text-align: center;
                font-size: 30px;
                color: rgba(255, 255, 255, .9);
                line-height: 100px;
                font-weight: lighter;
            }

            .login-avatar {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: #000;
                margin: 0 auto 20px;
                overflow: hidden;
            }
        }
    }

    .login-foot {
        width: 60%;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;

        .login-foot-min {
            cursor: pointer;
            font-size: 16px;
        }
    }

    .el-form demo-ruleForm > .el-form-item > .el-form-item__label {
        color: #fff;
    }
</style>

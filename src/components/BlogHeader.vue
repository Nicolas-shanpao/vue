<template>
    <div class="blog-header">
        <div class="blog-title">{{$t('title')}}</div>
        <el-menu
            :default-active="activeIndex"
            class="blog-menu"
            mode="horizontal"
            @select="handleSelect"
            background-color="#1389D3"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/">{{$t('desk')}}</el-menu-item>
            <el-menu-item index="/learn">{{$t('learn')}}</el-menu-item>
            <el-menu-item index="/notes">{{$t('notes')}}</el-menu-item>
            <el-menu-item index="/msg">{{$t('leaveword')}}</el-menu-item>
            <el-menu-item index="/person">{{$t('personalProfile')}}</el-menu-item>
            <el-menu-item index="/saoyisao">{{$t('saoyisao')}}</el-menu-item>
        </el-menu>
        <div class="blog-set">
            <el-dropdown trigger="click">
            <span class="el-dropdown-link">
            {{$t('lang')}}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="toggleLang('cn')" :disabled="$i18n.locale === 'cn'">中文
                    </el-dropdown-item>
                    <el-dropdown-item @click.native="toggleLang('en')" :disabled="$i18n.locale === 'en'">English
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blogheader',
    data () {
        return {
            activeIndex: this.$route.path
        }
    },
    mounted () {
        console.log(this.$route.path)
    },
    methods: {
        handleSelect (key, keyPath) {
            this.$router.push({path: key})
        },
        toggleLang (lang) {
            if (lang === 'cn') {
                localStorage.setItem('locale', 'cn')
                this.$i18n.locale = localStorage.getItem('locale')
                this.$message({
                    message: '切换为中文！',
                    type: 'success'
                })
            } else if (lang === 'en') {
                localStorage.setItem('locale', 'en')
                this.$i18n.locale = localStorage.getItem('locale')
                this.$message({
                    message: 'Switch to English!',
                    type: 'success'
                })
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .blog-header {
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: #1389D3;
        padding: 0 20px;
        position: fixed;
        top: 0;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .17)
    }

    .blog-title {
        display: inline-block;
    }

    .blog-set {
        width: 200px;
        min-width: 200px;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #fff;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>

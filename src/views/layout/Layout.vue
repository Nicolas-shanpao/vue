<template>
    <div class="layout">
        <blog-header></blog-header>
        <router-view></router-view>
    </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'
export default {
    name: 'Index',
    components: { BlogHeader }
}
</script>

<style scoped>
    .layout {
        padding-top: 60px;
    }
</style>

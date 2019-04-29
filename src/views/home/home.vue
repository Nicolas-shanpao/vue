<template>
    <div>
        <el-upload
            class="upload-demo"
            drag
            action="/"
            :http-request="uploadSectionFile"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>

    </div>
</template>

<script>export default {
    name: 'home',
    methods: {
        uploadSectionFile (param) {
            let fileObj = param.file
            let form = new FormData()
            form.append('file', fileObj)
            console.log(fileObj)
            return this.$store.dispatch('UploadSectionFile', form).then(() => {

            }).catch(() => {

            })
        }
    }
}
</script>

<style scoped>

</style>

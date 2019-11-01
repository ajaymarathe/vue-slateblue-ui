<template>
    <input :type="type" class="form-control" :placeholder="placeholder">
</template>

<script>
    export default {
        name: 'slateblueInputs',
        props:{
            type:String,
            id: String,
            placeholder:String,
        }
    }
</script>

<style scoped>

</style>

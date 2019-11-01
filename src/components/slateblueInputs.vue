<template>
    <input class="form-control" :type="type" :value="value" :placeholder="placeholder" v-on:input="$emit('input', $event.target.value)">
</template>

<script>
    export default {
        name: 'slateblueInputs',
        props:['value','type','placeholder'],
    }
</script>

<style scoped>

</style>

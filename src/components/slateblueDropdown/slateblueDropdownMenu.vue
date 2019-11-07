<template>
    <div :class="'dropdown-menu dropdown-menu-'+align" >
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'slateblueDropdownMenu',
        props: {
            target: String,
            align: String,
        }
    }
</script>

<style scoped>

</style>

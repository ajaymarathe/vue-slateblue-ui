<template>
    <div :class="[colorClass]" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'slateblueAlert',
        props: {
            color: String,
        },
        data(){
            return {
                colorClass: "alert alert-" + this.color,
                dismissibleMethod: false
            }
        }
    }
</script>

<style scoped>

</style>

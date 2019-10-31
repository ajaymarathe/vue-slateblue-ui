<template>
    <button :class="[classObject.color,classObject.size,classObject.display]">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'slateblueButton',
        props: {
            color: String,
            size: String,
            display: String,
        },
        data(){
            return {
                classObject: {
                    color: "btn btn-" + this.color,
                    size: "btn-" + this.size,
                    display: "btn-"+this.display
                }
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <button v-if="this.type" :class="[TypeObject.color,TypeObject.size,TypeObject.display,TypeObject.type]" >
        <slot></slot>
    </button>
    <button v-else :class="[classObject.color,classObject.size,classObject.display]">
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
            type: String,
            target: String
        },
        data(){
            return {
                classObject: {
                    color: "btn btn-" + this.color,
                    size: "btn-" + this.size,
                    display: "btn-"+this.display,
                    type: "btn btn-"+ this.type +'-'+ this.color,
                },
                TypeObject: {
                    size: "btn-" + this.size,
                    display: "btn-"+this.display,
                    type: "btn btn-"+ this.type +'-'+ this.color,
                }
            }
        },
    }
</script>

<style scoped>

</style>

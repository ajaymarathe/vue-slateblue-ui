<template>
    <button v-if="this.type" :class="[TypeObject.color,TypeObject.size,TypeObject.display,TypeObject.type]"
           >
        <slot></slot>
    </button>
    <button v-else :class="[classObject.color,classObject.size,classObject.display]">
        <slot></slot>
    </button>
</template>

<script>
    import JQuery from 'jquery';
    export default {
        name: 'slateblueButton',
        props: {
            color: String,
            size: String,
            display: String,
            type: String,
            target: String,
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
        mounted() {
            let $ = JQuery;
            $('.btn').tooltip('show')
        }
    }
</script>

<style scoped>

</style>

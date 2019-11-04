<template>
    <div  class="progress" style="height: 1rem;">
        <div :class="'progress-bar bg-'+color +' progress-bar-'+type +' progress-bar-'+animation" role="progressbar" :style="styleObject" ></div>
    </div>
</template>

<script>
    export default {
        name: 'slateblueProgress',
        props:{
            width: String,
            color:String,
            type:String,
            animation: String,
        },
        data(){
            return{
                styleObject: {
                    width: this.width+'%',
                }
            }
        },
    }
</script>

<style scoped>

</style>

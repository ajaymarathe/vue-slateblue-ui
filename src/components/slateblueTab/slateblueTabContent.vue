<template>
    <div class="tab-pane fade show " :id="section" role="tabpanel" aria-labelledby="home-tab">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "slateblueTabContent",
        props: {
            section:String,
            tab: String
        },
        mounted() {
            console.log(this.id)
        }
    }
</script>

<style scoped>

</style>

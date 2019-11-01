<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>
    import slateblueCardHeader from "./slateblueCardHeader";
    import slateblueCardBody from "./slateblueCardBody";
    import slateblueCardFooter from "./slateblueCardFooter";
    export default {
        name: 'slateblueCard',
        componenets:{
            slateblueCardHeader,
            slateblueCardBody,
            slateblueCardFooter
        }

    }
</script>

<style scoped>

</style>

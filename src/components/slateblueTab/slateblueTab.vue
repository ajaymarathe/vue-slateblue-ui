<template>
    <div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <slot name="tab-item"></slot>
        </ul>
        <div class="tab-content" id="myTabContent">
            <slot name="tab-content">
<!--                fsdfds-->
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slateblueTab",
    }
</script>

<style scoped>

</style>

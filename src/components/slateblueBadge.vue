<template>
    <span :class="[badge,badgeSize]">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'slateblueBadge',
        props:{
            color:String,
            type: String
        },
        data(){
            return {
                badge: "badge badge-" + this.color,
                badgeSize: 'rounded-'+this.type
            }
        }
    }
</script>

<style scoped>

</style>

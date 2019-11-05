<template>
    <div class="carousel-item active">
        <img :src="img" class="d-block w-100" alt="...">
        {{img}}
    </div>
</template>

<script>
    export default {
        name: 'slateblueSlide',
        props: ['path'],
        data(){
          return {
              img: this.path,
          }
        },
        mounted() {
            console.log(this.path);
        }
    }
</script>

<style scoped>

</style>

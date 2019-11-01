<template>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <slateblue-slide img="../../assets/img/kajal4.png"></slateblue-slide>
            <div class="carousel-item">
                <img src="../../assets/img/kajal4.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../../assets/img/kajal4.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "slateblueCarousel",
        props:{

        }
    }
</script>

<style scoped>

</style>

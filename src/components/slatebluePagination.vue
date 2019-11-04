<template>
    <nav aria-label="Page navigation example">
        <ul :class="'pagination pagination-'+size">
            <li class="page-item" >
                <a class="page-link" @click="Previous()" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item" >
                <a class="page-link" @click="Next()" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'slatebluePagination',
        props:['pageCount','size'],
        methods: {
            Previous(){
                console.log('paginatio previous clicked!');
            },
            Next(){
                console.log('pagination next clicked');
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-transparent">
        <a class="navbar-brand" href="#">
            <vue-fontawesome class="mr-2" icon="paper-plane" size="1.2"></vue-fontawesome>
            SlateBlue</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Components</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Examples</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto d-md-flex align-items-md-center">
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        <a  class="btn btn-light d-flex align-items-center text-primary">
                            <vue-fontawesome class="mr-2" icon="cloud-download" size=".8" color="#5C46EA"></vue-fontawesome>
                            download</a>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navbar",

    }
</script>

<style scoped>

</style>

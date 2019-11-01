<template>
    <div>
        <!-- navbar section -->
        <navbar></navbar>
        <!--end navbar section-->
        <div class="intro-section">
            <div class="container" >
                <div class="row justify-content-center align-items-center" style="height: 100vh;">
                    <div class="heading text-center">
                       <div class="d-flex justify-content-center align-items-center">
                           <vue-fontawesome class="mr-3" icon="paper-plane" size="2"></vue-fontawesome>
                           <h1>SlateBlue</h1>
                       </div>
                        <p class="lead">A beautiful Design System for Vue Lovers based on bootstrap 4.3. It's Free and Open Source.</p>
                        <div>
                            <button class="btn btn-primary mr-2">components</button>
                            <button class="btn btn-light">download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- section #2-->
        <div class="section-two">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="mb-5">Basic Elements</h3>
                        <h4 class="text-primary mb-4 text-uppercase">Alerts</h4>
                        <div class="mb-5">
                            <slateblue-alert color="primary" >
                                <vue-fontawesome icon="paper-plane" class="mr-2"></vue-fontawesome>
                                A simple primary alert—check it out!
                            </slateblue-alert>
                            <slateblue-alert color="secondary" >
                                <vue-fontawesome icon="life-ring" class="mr-2"></vue-fontawesome>
                                A simple secondary alert—check it out!
                            </slateblue-alert>
                            <slateblue-alert color="danger" >
                                A simple danger alert—check it out!
                            </slateblue-alert>
                            <slateblue-alert color="warning">
                                A simple warning alert—check it out!
                            </slateblue-alert>
                            <slateblue-alert color="info" >
                                A simple info alert—check it out!
                            </slateblue-alert>
                            <slateblue-alert color="success" >
                                <h4 class="alert-heading">Well done!</h4>
                                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                <hr>
                                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                            </slateblue-alert>
                        </div>
<!--                        badges-->
                        <h4 class="mb-4 text-uppercase">Badge</h4>
                        <div class="mb-5">
                            <slateblue-badge class="mr-2" color="primary" type="pill">
                                primary
                            </slateblue-badge>
                            <slateblue-badge class="mr-2" color="danger" type="rounded">
                                danger
                            </slateblue-badge>
                            <slateblue-badge class="mr-2" color="info" type="rounded"> info</slateblue-badge>
                            <slateblue-badge class="mr-2" color="warning" > warning</slateblue-badge>
                            <slateblue-badge class="mr-2" color="light" > light</slateblue-badge>
                            <slateblue-badge class="mr-2" color="success" type="pill"> success</slateblue-badge>
                        </div>
<!--                        Buttons-->
                        <h4 class="mb-4 text-uppercase">Buttons</h4>
                        <div class="mb-5">
                            <slateblue-button class="mr-2" color="primary">Button</slateblue-button>
                            <slateblue-button class="mr-2" color="danger">
                                <vue-fontawesome icon="send"></vue-fontawesome>
                            </slateblue-button>
                            <slateblue-button class="mr-2" color="warning">
                                <vue-fontawesome icon="github"></vue-fontawesome>
                            </slateblue-button>
                        </div>
                        <h5 class="mb-4 text-uppercase">Choose your size</h5>
                        <div class="mb-5">
                            <slateblue-button class="mr-2" color="secondary" size="sm">small</slateblue-button>
                            <slateblue-button class="mr-2" color="dark" >default</slateblue-button>
                            <slateblue-button class="mr-2" color="info" size="lg">large</slateblue-button>
                        </div>
                        <h5 class="mb-4 text-uppercase">Pick your color</h5>
                        <div class="mb-5">
                            <slateblue-button class="mr-2" color="primary">primary</slateblue-button>
                            <slateblue-button class="mr-2" color="info">info</slateblue-button>
                            <slateblue-button class="mr-2" color="secondary">secondary</slateblue-button>
                            <slateblue-button class="mr-2" color="success">success</slateblue-button>
                            <slateblue-button class="mr-2" color="danger">danger</slateblue-button>
                            <slateblue-button class="mr-2" color="warning">warning</slateblue-button>
                            <slateblue-button class="mr-2" color="light">light</slateblue-button>
                        </div>
                        <h5 class="mb-4 text-uppercase">Block level</h5>
                        <div class="mb-5">
                            <slateblue-button class="mr-2 mt-2" color="primary" size="lg" display="block">primary</slateblue-button>
                        </div>
                        <h5 class="mb-4 text-uppercase">Outline</h5>
                        <div class="mb-5">
                            <slateblue-button class="mr-2" color="primary" type="outline">primary</slateblue-button>
                            <slateblue-button class="mr-2" color="info" type="outline">info</slateblue-button>
                            <slateblue-button class="mr-2" color="success" type="outline">success</slateblue-button>
                            <slateblue-button class="mr-2" color="danger" type="outline">danger</slateblue-button>
                            <slateblue-button class="mr-2" color="warning" type="outline">warning</slateblue-button>
                        </div>
<!--                        cards-->
                        <h5 class="mb-4 text-uppercase">Cards</h5>
                        <div class="mb-5">
                            <div class="row mb-4">
                                <div class="col-md-4">
                                    <slateblue-card>
                                        <img class="card-img-top" src="../assets/img/kajal3.png" alt="">
                                        <slateblue-card-body>
                                            <h5>Kajal Aggarwal</h5>
                                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <slateblue-button color="primary">Go somewhere</slateblue-button>
                                        </slateblue-card-body>
                                    </slateblue-card>
                                </div>
                                <div class="col-md-4">
                                    <slateblue-card>
                                        <img class="card-img-top" src="../assets/img/kajal3.png" alt="">
                                        <slateblue-card-body>
                                            <h5>Kajal Aggarwal</h5>
                                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <slateblue-button color="primary">Go somewhere</slateblue-button>
                                        </slateblue-card-body>
                                    </slateblue-card>
                                </div>
                                <div class="col-md-4">
                                    <slateblue-card>
                                        <img class="card-img-top" src="../assets/img/kajal3.png" alt="">
                                        <slateblue-card-body>
                                            <h5>Kajal Aggarwal</h5>
                                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <slateblue-button color="primary">Go somewhere</slateblue-button>
                                        </slateblue-card-body>
                                    </slateblue-card>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <slateblue-card class="border-success">
                                        <slateblue-card-header class="border-bottom border-success bg-transparent">
                                            slateblue-card-header
                                        </slateblue-card-header>
                                        <slateblue-card-body>
                                            <h5 class="card-title">Success card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </slateblue-card-body>
                                        <slateblue-card-footer class="border-success">
                                            slateblue-card-footer
                                        </slateblue-card-footer>
                                    </slateblue-card>
                                </div>
                                <div class="col-md-4">
                                    <slateblue-card class="bg-primary text-white">
                                        <slateblue-card-header>slateblue-card-header</slateblue-card-header>
                                        <slateblue-card-body>
                                            <h5 class="card-title text-white">Primary card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </slateblue-card-body>
                                        <slateblue-card-footer>slateblue-card-footer</slateblue-card-footer>
                                    </slateblue-card>
                                </div>
                                <div class="col-md-4">
                                    <slateblue-card>
                                        <img class="card-img-top" style="height: 240px;" src="../assets/img/kajal4.png" alt="">
                                        <slateblue-card-overlay>
                                            <h5 class="text-white">kajal aggaral</h5>
                                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ea eaque iure.</p>
                                        </slateblue-card-overlay>
                                    </slateblue-card>
                                </div>
                            </div>
                        </div>
<!--                        carousel-->
                        <h5 class="mb-4 text-uppercase">Carousel</h5>
                        <div class="mb-5">
                            <slateblue-carousel></slateblue-carousel>
                        </div>
                        <h5 class="mb-4">Forms</h5>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-4">
                                    <slateblue-inputs v-model="searchText"  placeholder="enter your email"></slateblue-inputs>
                                </div>
                                <div class="col-md-4">
                                    <slateblue-inputs ></slateblue-inputs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return {
                searchText: "",
            }
        }
    }
</script>

<style scoped>
.btn{
    text-transform: uppercase;
    margin-bottom: .5rem;
}
</style>

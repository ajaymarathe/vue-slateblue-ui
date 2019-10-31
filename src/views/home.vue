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
                        <h4 class="text-primary mb-4">Alerts</h4>
                        <div class="mb-4">
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
                        <h4 class="mb-4">Badge</h4>
                        <div class="mb-4">
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
                        <h4 class="mb-4">Buttons</h4>
                        <div class="mb-4">
                            <slateblue-button class="mr-2" color="primary">primary</slateblue-button>
                            <slateblue-button class="mr-2" color="danger">danger</slateblue-button>
                            <slateblue-button class="mr-2" color="warning">warning</slateblue-button>
                        </div>
                        <h5 class="mb-4">Choose your size</h5>
                        <div class="mb-4">
                            <slateblue-button class="mr-2" color="secondary" size="sm">secondary</slateblue-button>
                            <slateblue-button class="mr-2" color="dark" >dark</slateblue-button>
                            <slateblue-button class="mr-2" color="info" size="lg">info</slateblue-button>
                        </div>
                        <h5 class="mb-4">Block level</h5>
                        <div class="mb-4">
                            <slateblue-button class="mr-2 mt-2" color="success" size="lg" display="block">success</slateblue-button>
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
                home: "home"
            }
        }
    }
</script>

<style scoped>

</style>

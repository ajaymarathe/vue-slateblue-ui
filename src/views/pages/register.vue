<template>
    <div class="login-screen d-flex align-items-center ">
      <div class="container">
          <div class="row justify-content-around">
              <div class="col-md-6 col">
                  <h3 class="text-uppercase">Slateblue-Ui</h3>
                  <hr>
                  <form>
                      <div class="form-group">
                          <label class="text-uppercase">User Name</label>
                          <slateblue-inputs type="text" class="form-control"   placeholder="Enter username"></slateblue-inputs>
                      </div>
                      <div class="form-group">
                          <label class="text-uppercase">Email address</label>
                          <slateblue-inputs type="email" class="form-control" placeholder="Enter email"></slateblue-inputs>
                          <small  class="form-text text-muted text-uppercase">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group">
                          <label class="text-uppercase">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                      </div>
                      <div class="form-group form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1">
                          <label class="form-check-label text-uppercase" for="exampleCheck1">Agree to privacy policy</label>
                      </div>
                      <slateblue-button  class="btn btn-primary text-uppercase">
                          <vue-fontawesome icon="lock"></vue-fontawesome>
                          Register
                      </slateblue-button>
                  </form>

              </div>
          </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: 'register',
    }
</script>

<style scoped>

</style>

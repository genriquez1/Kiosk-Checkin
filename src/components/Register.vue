<template>
    <div class="container">
      <form action="/users" method="post" >
      <div class="form-group">
        <input type="text" class="form-control" name="displayName" placeholder="Name" v-model="displayName">
      </div>

      <div class="form-group">
      <input type="text" v-validate="email" data-rules="required|email" class="form-control" name="email" placeholder="Email" v-model="email">
      </div>

      <div class="form-group">
        <input type="text" class="form-control" name="telephone" placeholder="Telephone" v-model="telephone">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" name="company" placeholder="Company" v-model="company">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" name="displayName" placeholder="Name" v-model="displayName">
      </div>


      <!-- ***Commenting out the previous Toronet Stuff***
      <div class="form-group">
        <input type="text" class="form-control" name="username" placeholder="Username" v-model="username">
      </div>
      <div class="form-group"> -->
        <!-- <label      class="control-label" for="email">Email</label> -->
        <!--
       <input type="text" v-validate="email" data-rules="required|email" class="form-control" name="email" placeholder="Email" v-model="email">

      </div>
      <div class="form-group">
        <input type="password" class="form-control" name="password" placeholder="Password" v-model="password">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" name="passwordConf" placeholder="Confirm password" v-model="passwordConf">
      </div>
    -->
<div>
    <ul class="object administrator-checkbox-list">
        <li v-for="module in modules">
            <label v-bind:for="module.id">
                <input type="checkbox" v-model="form.modules" v-bind:value="module.id" v-bind:id="module.id">
                <span> Enter Info here </span>
            </label>
        </li>
    </ul>
</div>
      <button class="btn btn-success" type="submit" >Submit! </button>
      </form>
    </div>


</template>

<style>
.container form{

    witdth:200px;



}



</style>

<script>
export default {
  name: 'Register',
  data() {
    return {
      displayName: '',
      username: '',
      email: '',
      password: '',
      passwordConf: ''
    }
  },
  methods: {
    registerUser() {
      const newUser = {
        displayName: this.displayName,
        username: this.username,
        email: this.email,
        password: this.password,
        passwordConf: this.passwordConf,
      }
      this.$store.dispatch('register', newUser)
    }
  }
}
</script>

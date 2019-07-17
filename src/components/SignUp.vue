<template>
  <div class="auth-container">
    <h5 class="title">
      Sign Up For Activise
    </h5>
    <div class="card-panel">
    <img class="logo-image" src="../assets/ladderlogo.png" alt="A step ladder logo with a blue background">
      <form name="contact">
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input class="form-field" name="name" id="name" v-model="name"/>
            <label class="form-label" for="name">
            Name:
            </label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">mail_outline</i>
            <input class="form-field" name="email" id="email" v-model="email"/>
            <label class="form-label" for="email">
            Email:
            </label>
        </div>
        <div class="input-field col s6">
            <i class="material-icons prefix">lock</i>
            <input class="form-field" name="password" id="password" type="password" v-model="password"/>
            <label class="form-label" for="password">
            Password:
            </label>
        </div>
        <div class="input-field col s6">
            <i class="material-icons prefix">lock</i>
            <input class="form-field" name="confirmpassword" id="confirmpassword" type="password" v-model="confirmpassword"/>
            <label class="form-label" for="confirmpassword">
            Confirm Password:
            </label>
        </div>
        <div class="input-field col s6">
            <input type="checkbox" class="form-field" name="ageconcent" id="ageconcent" v-model="ageconsent"/>
            <label class="form-label" for="confirmpassword">
            Over 13 years of age?:
            </label>
        </div>
        <div class="col s6">
            Already have an account? <a @click="toggleSignIn()">Login</a>
        </div>
        <div>
            <input class="form-button" type="submit" value="Create Account" />
            </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    ageconsent: false
  }
};
</script>

<style scoped lang="scss">
.auth-container {
  width: 80%;
  height: 100%;
}

.logo-image {
  border-radius: 50%;
  width: 30%;
}
</style>
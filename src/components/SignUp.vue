<template>
  <div class="auth-container">
    <h5 class="title">
      Sign Up For Activise
    </h5>
    <div class="card-panel">
    <img class="logo-image" src="../assets/activyselogo.png" alt="A step ladder logo">
      <form name="sign-up">
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input class="form-field validate" name="name" id="name" type="text" v-model="name" required/>
            <label class="form-label" for="name">
            Name:
            </label>
        </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">mail_outline</i>
            <input class="form-field validate" name="email" id="email" v-model="email" type="text" required/>
            <label class="form-label" for="email">
            Email:
            </label>
        </div>
        <div class="input-field col s6">
            <i class="material-icons prefix">lock</i>
            <input class="form-field validate" name="password" id="password" type="password" v-model="password" required/>
            <label class="form-label" for="password">
            Password:
            </label>
        </div>
        <div class="input-field col s6">
            <i class="material-icons prefix">lock</i>
            <input class="form-field validate" name="confirmPassword" id="confirmPassword" type="password" v-model="confirmPassword" password/>
            <label class="form-label" for="confirmPassword">
            Confirm Password:
            </label>
        </div>
        <div class="input-field col s6">
            <label>
                <input id="indeterminate-checkbox" type="checkbox" v-model="ageConsent"/>
                <span>Over 13 Years Of Age?</span>
            </label>
        </div>

        <div class="submit">
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
            </button>
        </div>

      </form>
      <div class="">
            Already have an account? <a id="sign-in-link" v-on:click="toggleSignUp">Login</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  // Components should have names, so it can be used as a locator in tests
  name: 'SignUpComponent',
  props: {
    toggleSignUp: { type: Function }
  },

  data: () => ({
    valid: true,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    ageConsent: false
  })
};
</script>

<style scoped lang="scss">
.auth-container {
  width: 80%;
  height: 100%;
}

.title {
  margin: 30px 0 30px 0;
}

.logo-image {
  width: 25%;
  margin-top: -40px;
  @media (max-width: 750px) {
    width: 150px;
  }
}

.submit {
  margin: 70px 0 30px 0;
}
</style>

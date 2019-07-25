<template>
  <div class="auth-container">
    <h5 class="title">
      Welcome To Activise
    </h5>
    <div class="card-panel">
    <img class="logo-image" src="../assets/activyselogo.png" alt="A step ladder logo">
      <form name="sign-in">
          <div class="input-field col s6">
            <i class="material-icons prefix">mail_outline</i>
            <input class="form-field" name="email" id="email" v-model="email" type="text" required/>
            <label class="form-label" for="email">
            Email:
            </label>
        </div>
        <div class="input-field col s6">
            <i class="material-icons prefix">lock</i>
            <input class="form-field" name="password" id="password" type="password" v-model="password" required/>
            <label class="form-label" for="password">
            Password:
            </label>
        </div>

        <div class="submit">
            <button class="btn waves-effect waves-light" type="submit" name="action">Sign In
                <i class="material-icons right">send</i>
            </button>
        </div>

      </form>
      <div class="">
            New here? <a @click="toggleSignIn()">Sign Up For An Account</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    ageConsent: false
  })
}
</script>

<style scoped lang="scss">
.auth-container {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin: 30px 0 30px 0;
}
</style>

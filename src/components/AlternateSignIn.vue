<template>
  <div class="auth-container">
    <h5 class="title">
      Welcome To Activise
    </h5>
    <div class="card-panel">
    <img class="logo-image" src="../assets/activyselogo.png" alt="A step ladder logo">
      <form name="sign-in">
        <label for="email">Email</label>
        <div class="input-field col s6">
          <input placeholder="Recieve a Log In Link" id="email" type="text" class="validate" required>
          <button class="btn waves-effect waves-light submit" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
            </button>
        </div>
        <div class="row">
            <a class="waves-effect waves-light btn col s12 social facebook">
            <i class="fa fa-facebook"></i> Sign in with facebook</a>
        </div>
        <div class="row">
            <a class="waves-effect waves-light btn col s12 social twitter">
            <i class="fa fa-twitter"></i> Sign in with twitter</a>
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
    email: '',
    password: ''
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

label {
    float: left;
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
    margin-top: 20px;
}

.row {
  margin: 30px 0 20px 0;
}
</style>

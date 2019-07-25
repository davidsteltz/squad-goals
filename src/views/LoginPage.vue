<template>
  <div class="auth-page">

    <!-- <SignIn/> -->
    <!-- <SignUp/> -->
    <AlternateSignIn/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import AlternateSignIn from '../components/AlternateSignIn'

export default {
  name: 'home',
  components: {
    AlternateSignIn,
    SignIn,
    SignUp
  }
}
</script>
<style>
.auth-page {
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #8fe3d9 0%, #3a1f70 100%);
  height: 100vh;
}
</style>

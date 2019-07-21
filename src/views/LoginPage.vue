<template>
  <div class="auth-page">

    <!-- <SignIn/> -->
    <SignUp/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default {
  name: "home",
  components: {
    SignIn,
    SignUp
  }
};
</script>
<style>
.auth-page {
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #8fe3d9 0%, #3a1f70 100%);
  height: 100vh;
}
</style>
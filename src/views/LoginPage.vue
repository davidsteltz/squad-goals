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
  background: linear-gradient(180deg, rgb(255, 255, 255) 0%, #8fe3d9 100%);
}
</style>
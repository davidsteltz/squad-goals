<template>
  <div class="home">

    <SignIn/>
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
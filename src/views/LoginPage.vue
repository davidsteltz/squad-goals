<template>
  <div class="home">

    <AuthCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthCard from "../components/AuthCard";

export default {
  name: "home",
  components: {
    AuthCard
  }
};
</script>
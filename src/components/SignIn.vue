<template>
  <div class="signin-container">
    <h1 class="title">
      Sign In
    </h1>
    <div class="content">
      <form name="contact">
        <label class="form-label" for="email">
          Email:
        </label>
        <input class="form-field" name="password" id="password" />
        <label class="form-label" for="password">
          Password:
        </label>
        <input class="form-field" name="email" id="email" />
        <input class="form-button" type="submit" value="Sign In" />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.signin-container {
  display: flex;
  flex-direction: column;
  width: 40%;

  form {
    display: flex;
    flex-direction: column;
  }

  .form-button {
    margin: 10px;
  }
}
</style>
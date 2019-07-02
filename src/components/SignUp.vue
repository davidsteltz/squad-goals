<template>
  <div class="signin-container">
    <h1 class="title">
      Sign Up
    </h1>
    <div class="content">
      <form name="contact">
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" />
        <label class="form-label" for="email">
          Email:
        </label>
        <input class="form-field" name="email" id="email" />
        <label class="form-label" for="password">
          Password:
        </label>
        <input class="form-field" name="password" id="password" />
        <label class="form-label" for="confirmpassword">
          Confirm Password:
        </label>
        <input class="form-field" name="confirmpassword" id="confirmpassword" />
        <label class="form-label" for="confirmpassword">
          Over 13 years of age?:
        </label>
        <input type="checkbox" class="form-field" name="confirmpassword" id="confirmpassword" />
        <input class="form-button" type="submit" value="Create Account" />
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
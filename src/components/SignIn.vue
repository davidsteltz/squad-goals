<template>
  <div class="signin-container">
    <h1 class="title">
      Sign In
    </h1>
    <div class="content">
      <form name="contact">
        <div class="input-container">
            <label class="form-label" for="email">
            Email:
            </label>
            <i class="fa fa-envelope-open icon"></i>
            <input class="form-field" name="email" id="email" v-model="name"/>
        </div>
        <div class="input-container">
            <label class="form-label" for="password">
            Password:
            </label>
            <i class="fa fa-unlock icon"></i>
            <input class="form-field" name="password" id="password" type="password" v-model="password"/>
        </div>
        <div class="toggle-form-container">
        Don't have an account? <a @click="toggleSignIn()">Create a new account</a>
        </div>
        <input class="form-button" type="submit" value="Sign In" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: {
    name: "",
    email: ""
  }
};
</script>

<style scoped lang="scss">
.signin-container {
  display: flex;
  flex-direction: column;
  width: 40%;
  box-shadow: 5px 5px 15px 5px #c4c4c4;
  border-radius: 5px;

  form {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    input {
      border: 1px solid rgb(177, 177, 177);
      border-radius: 5px;
      height: 20px;
      margin: 5px;
    }
    a {
      color: rgb(90, 90, 90);
    }

    .toggle-form-container {
      font-size: 10px;
    }
  }

  .form-label {
    position: relative;
  }

  .icon {
    position: absolute;
    margin-left: 10px;
    margin-top: 8px;
  }

  .form-button {
    margin: 10px;
    background-color: gray;
    color: white;
    padding: 5px;
  }
}
</style>
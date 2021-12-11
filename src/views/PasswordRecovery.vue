<template>
  <div class="wrapper login">
    <img src="../assets/logo.jpg" alt="Logo" class="logo">
    <form action="#" class="form">
        <input type="password" placeholder="Password" name="password" class="field" id="pass" required>
        <div id="eye">
            <a class="eye_element_change" id="show"></a>
            <a class="eye_line_change" id="hide"></a>
        </div>
        <input type="password" placeholder="Confirm password" name="password" id="pass" class="field" required>
        <div id="eye">
            <a class="eye_element_change_confirm" id="show"></a>
            <a class="eye_line_change_сonfirm" id="hide"></a>
        </div>
        <input type="submit" value="change password">
        <router-link to="/login">Sign in</router-link>
    </form>
</div>
</template>

<script>
export default {
  name: "PasswordRecovery",
  methods: {
    onSubmit: (e) => {
      e.preventDefault();
      console.log("password");
    }
  }
}
</script>
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
        <input type="submit" value="change password" class="recovery-input">
        <router-link to="/login">Sign in</router-link>
    </form>
</div>
</template>

<style>
.recovery-input{
    background: linear-gradient(102.06deg, #6E87E0 -13.79%, rgba(17, 43, 133, 0.85) 107.74%);
    border-radius: 12px;
    outline: 0;
    border: 0;
    letter-spacing: 0.05em;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    height: 78px;
    margin-top: 22px;
    color: #FFFFFF;
    cursor: pointer;
}
</style>

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
<template>
    <div class="wrapper login">
    <img src="../assets/logo.jpg" alt="Logo" class="logo" style="margin-top: 114px;">
    <form action="#" class="form">
        <input type="email" placeholder="Email" name="email" class="field" required>
        <input type="text" placeholder="Fullname" name="fullname" class="field" required>
        <input type="password" placeholder="Password" name="password" class="field" id="pass" required>
        <div id="eye">
            <a class="eye_element_reg" id="show"></a>
            <a class="eye_line_reg" id="hide"></a>
        </div>
        <input type="password" placeholder="Confirm password" name="password" id="pass" class="field" required>
        <div id="eye">
            <a class="eye_element_confirm" id="show"></a>
            <a class="eye_line_confirm" id="hide"></a>
        </div>
        <input type="submit" value="sign in">
    </form>
    <label>Don't have an account?&nbsp;<router-link to="/login">Sign in</router-link></label>
</div>
</template>

<script>
export default {
    name: "Registration",
    methods: {
        onSubmit: (e) => {
            e.preventDefault();
            
        }
    }
}
</script>
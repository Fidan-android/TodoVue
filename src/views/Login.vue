<template>
    <div class="wrapper login">
        <img src="../assets/logo.jpg" alt="Logo" class="logo">
        <form class="form" @submit="onSubmit">
            <input type="email" placeholder="Email" name="email" class="field" required>
            <input type="password" placeholder="Password" name="password" class="field" id="pass" required>
            <div id="eye">
                <a href="#" class="eye_element" id="show"></a>
                <a href="#" class="eye_line" id="hide"></a>
            </div>

            <router-link to="/password-recovery" class="ret-but">Forgot Password?</router-link>
            <input type="submit" value="sign in">
        </form>
        <label>Don't have an account?&nbsp;<router-link to="/registration">Sign up</router-link></label>
    </div>
</template>

<script>
    import { login } from '../helpers/fetch';
    export default {
        name: "Login",
        methods: {
            onSubmit: function(e) {
                e.preventDefault();
                login(e.target)
                console.log("hello");
            }
        }
}
</script>
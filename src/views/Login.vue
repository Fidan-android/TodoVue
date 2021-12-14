<template>
    <div class="wrapper login">
        <img src="../assets/logo.jpg" alt="Logo" class="logo">
        <form class="form" @submit="onSubmit">
            <input type="email" placeholder="Email" name="login" class="field" required>
            <input type="password" placeholder="Password" name="password" class="field" id="pass" required>
            <div id="eye">
                <a href="#" class="eye_element" id="show"></a>
                <a href="#" class="eye_line" id="hide"></a>
            </div>

            <router-link to="/password-recovery" class="ret-but">Forgot Password?</router-link>
            <input type="submit" value="sign in">
            <label id="message" style="display: none;"></label>
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
                login(e.target).then(data => {
                    switch(data['code']) {
                        case "200": {
                            localStorage.setItem("token", data['token']);
                            this.$router.push("/").catch(() => {});
                            break;
                        }

                        case "67": {
                            var message = document.getElementById("message");
                            message.style.color = "red";
                            message.style.display = "block";
                            message.innerHTML = data['message'];
                            setTimeout(() => {
                                message.style.display = "none";
                            }, 3000);
                            break;
                        }

                        case "401": {
                            var message = document.getElementById("message");
                            message.style.color = "red";
                            message.style.display = "block";
                            message.innerHTML = data['message'];
                            setTimeout(() => {
                                message.style.display = "none";
                            }, 3000);
                            break;
                        }

                        case "89": {
                            var message = document.getElementById("message");
                            message.style.color = "red";
                            message.style.display = "block";
                            message.innerHTML = data['message'];
                            setTimeout(() => {
                                message.style.display = "none";
                            }, 3000);
                            break;
                        }

                        default: {
                            console.log(data['message']);
                            break;
                        }
                    }
                });
            }
        }
}
</script>
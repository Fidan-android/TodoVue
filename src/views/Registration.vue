<template>
    <div class="wrapper login">
    <img src="../assets/logo.jpg" alt="Logo" class="logo" style="margin-top: 114px;">
    <form action="#" class="form" @submit="onSubmit">
        <input type="email" placeholder="Email" name="login" class="field" required>
        <input type="text" placeholder="Fullname" name="fullname" class="field" required>
        <input type="password" placeholder="Password" name="password" class="field" id="pass" required>
        <div id="eye" @click="showPassword">
            <a class="eye_element_reg" id="show"></a>
            <a class="eye_line_reg" id="hide" style="display: none;"></a>
        </div>
        <input type="password" placeholder="Confirm password" name="confirm_password" id="confirm_pass" class="field" required>
        <div id="eye_confirm" @click="showConfirmPassword">
            <a class="eye_element_confirm" id="show_confirm"></a>
            <a class="eye_line_confirm" id="hide_confirm" style="display: none;"></a>
        </div>
        <input type="submit" value="sign in" class="registration-input">
        <label id="message" style="display: none;"></label>
    </form>
    <label>Don't have an account?&nbsp;<router-link to="/login">Sign in</router-link></label>
</div>
</template>

<style>
.registration-input{
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
    import { registration} from '../helpers/fetch';

    export default {
        name: "Registration",
        methods: {
            onSubmit(e) {
                e.preventDefault();
                var route = this.$router;
                if (e.target.password.value === e.target.confirm_password.value) {
                    registration(e.target).then(data => {
                        switch(data['code']) {
                            case "200": {
                                var message = document.getElementById("message");
                                message.style.color = "green";
                                message.style.display = "block";
                                message.innerHTML = "Аккаунт успешно создан";
                                setTimeout(() => {
                                    message.style.display = "none";
                                    route.push({path: "/login"}).catch(() => {})
                                }, 3000);
                                break;
                            }
                            default:{
                                break;
                            }
                        }
                    });
                } else {
                    var message = document.getElementById("message");
                    message.style.color = "red";
                    message.style.display = "block";
                    message.innerHTML = "Пароли должны совпадать";
                    setTimeout(() => {
                        message.style.display = "none";
                    }, 3000);
                }
            },

            showPassword() {
                var hide = document.getElementById("hide");
                if (hide.style.display == 'none') {
                    hide.style.display = "block";
                    (document.getElementById("pass")).type = "text";
                } else {
                    hide.style.display = "none";
                    (document.getElementById("pass")).type = "password";
                }
            },

            showConfirmPassword() {
                var hide = document.getElementById("hide_confirm");
                if (hide.style.display == 'none') {
                    hide.style.display = "block";
                    (document.getElementById("confirm_pass")).type = "text";
                } else {
                    hide.style.display = "none";
                    (document.getElementById("confirm_pass")).type = "password";
                }
            }
        }
}
</script>
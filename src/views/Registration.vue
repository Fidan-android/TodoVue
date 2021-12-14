<template>
    <div class="wrapper login">
    <img src="../assets/logo.jpg" alt="Logo" class="logo" style="margin-top: 114px;">
    <form action="#" class="form" @submit="onSubmit">
        <input type="email" placeholder="Email" name="login" class="field" required>
        <input type="text" placeholder="Fullname" name="fullname" class="field" required>
        <input type="password" placeholder="Password" name="password" class="field" id="pass" required>
        <div id="eye">
            <a class="eye_element_reg" id="show"></a>
            <a class="eye_line_reg" id="hide"></a>
        </div>
        <input type="password" placeholder="Confirm password" name="confirm_password" id="confirm_pass" class="field" required>
        <div id="eye">
            <a class="eye_element_confirm" id="show"></a>
            <a class="eye_line_confirm" id="hide"></a>
        </div>
        <input type="submit" value="sign in">
        <label id="message" style="display: none;"></label>
    </form>
    <label>Don't have an account?&nbsp;<router-link to="/login">Sign in</router-link></label>
</div>
</template>

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
            }
        }
}
</script>
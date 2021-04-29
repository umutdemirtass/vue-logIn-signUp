<script>
export default {
    
}
</script>

<template>
    <div class="vue">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg">
            </div>

            <div class="form-group">
                <label>Email Name</label>
                <input type="email" class="form-control form-control-lg">
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg">
            </div>

            <button class="btn btn-lg btn-dark btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered
                <router-link to="/">Sign in</router-link>
            </p>
        </form>

    </div>
</template>
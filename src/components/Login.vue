<script>
export default {
    
}
</script>

<template>
    <div class="vue">
        <form>
            <h3>Sign In</h3>
            <div class="form-group">
                <label>Email Adress</label>
                <input type="email" class="form-control form-control-lg">
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg">
            </div>

            <button class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot Password</router-link>
            </p>

            <div class="social-icons">
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=rett04rBM-o&ab_channel=gereksizsesler"><i class="fa fa-google"></i></a></li>
                    <li><a href="https://www.youtube.com/watch?v=rett04rBM-o&ab_channel=gereksizsesler"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.youtube.com/watch?v=rett04rBM-o&ab_channel=gereksizsesler"><i class="fa fa-youtube"></i></a></li>
                </ul>
            </div>
        </form>
    </div>
</template>
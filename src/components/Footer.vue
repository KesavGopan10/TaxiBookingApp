<template>
    <footer class="MainFooter">
        <div class="footer">
            <div class="firstsection">
                <div class="logo">RideRight</div>
                <p class="content">RideRight is a premier taxi booking service committed to providing safe, reliable, and comfortable rides to our customers.</p>
                <div class="socials">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>

            <div class="secondsection">
                <div class="contact">Contact Us</div>
                <div class="contactinfo">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quo assumenda vel ducimus corporis ex ut.</p>
                    <p class="location"><i class="fa-solid fa-location-dot"></i> 123 Main Street, Anytown USA</p>
                    <p class="phone"><i class="fa-solid fa-phone"></i> 123-456-7890</p>
                    <p class="mail"><i class="fa-solid fa-envelope"></i> <a href="mailto:8gW2t@example.com">8gW2t@example.com</a></p>
                </div>
            </div>

            <div class="thirdsection">
                <div class="signup">Sign Up To Our Newsletter</div>
                <div class="email">
                    <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        v-model="input"
                        @keyup.enter="subscribe"
                    />
                    <button @click="subscribe">Subscribe</button>
                </div>
                <p v-if="message" :class="{'success': success, 'error': !success}">{{ message }}</p>
            </div>
        </div>
        <hr class="line">
        <div class="copyright">
            <p>Copyright © 2024. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const input = ref('');
const message = ref('');
const success = ref(true);

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function subscribe() {
    if (!validateEmail(input.value)) {
        message.value = 'Please enter a valid email address.';
        success.value = false;
        return;
    }

    // Simulate an API request
    setTimeout(() => {
        // Here you would typically make an API call to subscribe the email
        console.log(`Subscribed with email: ${input.value}`);
        
        // Simulating success
        message.value = 'Thank you for subscribing!';
        success.value = true;
        input.value = '';  // Clear input value
    }, 1000);
}
</script>

<style scoped>
p, h1, h2, h3, h4, h5, h6, div {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
    color: white;
}
footer {
    background-color: rgb(27, 31, 113);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
}
.footer {
    background-color: rgb(27, 31, 113);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    max-width: 1100px;
    margin: 20px auto;
    padding: 0 20px;
    flex-wrap: wrap;
    box-sizing: border-box;
}
.firstsection {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 20px 0;
    gap: 10px;
    text-align: left;
    align-self: self-start;
}
.logo {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgb(246, 247, 252);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.content {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: rgb(238, 238, 238);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.socials {
    display: flex;
    gap: 20px;
    font-size: 1.5rem;
    color: white;
}
.socials i {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid white;
    border-radius: 60%;
    padding: 10px;
}
.socials i:hover {
    color: tomato;
    border: 1px solid tomato;
}
.secondsection {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
    margin: 20px 0;
    gap: 10px;
    text-align: left;
    align-self: self-start;
}
.contact {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgb(246, 247, 252);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: left;
}
.contactinfo {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1rem;
    color: rgb(238, 238, 238);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
p.location, p.phone, p.mail {
    line-height: 25px;
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font: 1em sans-serif;
}
p.location:hover, p.phone:hover, p.mail:hover {
    color: tomato;
}
.thirdsection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 40%;
    align-self: self-start;
    text-align: left;
    margin: 20px 0;
}
.signup {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgb(246, 247, 252);
    display: flex;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.email {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    padding: 10px;
    flex-direction: column;
    gap: 10px;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: rgb(238, 238, 238);
    flex-wrap: wrap;
}
input {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: rgb(2, 2, 2);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: 5px;
    border: none;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    outline: none;
    background-color: rgb(215, 213, 213);
}
button {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: rgb(246, 247, 252);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: 5px;
    border: 1px solid tomato;
    padding: 10px;
    width: 100%;
    max-width: 200px;
    outline: none;
    background-color: tomato;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: self-start;
}
button:hover {
    background-color: transparent;
    color: tomato;
}
.line {
    width: 100%;
    max-width: 1110px;
    height: 0.1px;
    background-color: rgb(238, 238, 238);
}
.copyright {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: rgb(238, 238, 238);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    max-width: 1110px;
    padding: 20px 0;
}
.success {
    color: green;
}
.error {
    color: red;
}
@media screen and (max-width: 768px) {
    .footer {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .firstsection, .secondsection, .thirdsection {
        width: 90%;
        align-self: center;
        align-items: center;
    }
    button{
        align-self: center;
    }
}
</style>

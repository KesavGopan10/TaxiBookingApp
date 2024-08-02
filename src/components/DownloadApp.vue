<template>
    <div class="main">
        <div class="content">
            <div class="contentPortion">
                <div class="heading">
                    <h1>Download Our App</h1>
                </div>
                <div class="para">
                    <p>Discover a world of convenience at your fingertips with our groundbreaking app. Seamlessly navigate through a plethora of features designed to simplify your life. From effortless task management to personalized recommendations, our app is your ultimate companion. Experience the future of technology today – download now and unlock a new level of efficiency and enjoyment.</p>
                </div>
                <div class="links">
                    <img src="https://html.design/demo/elaxi/images/app_store.png" alt="App Store">
                    <img src="https://html.design/demo/elaxi/images/google_play.png" alt="Google Play">
                </div>
            </div>
            <div class="image">
                <img src="https://html.design/demo/elaxi/images/app-img.png" alt="App Illustration">
            </div>
        </div>
    </div>
</template>

<style scoped>
h1, p {
    color: azure;
    margin: 0;
    padding: 0;
}

.main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 30px auto;
    gap: 30px;
    text-align: justify;
    background-color: rgb(27, 31, 113);
    min-height: 650px;
    flex-wrap: wrap;
    
}

.content {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1110px;
    margin: 0 auto;
    gap: 30px;
    padding: 0 20px;
}

.contentPortion {
    display: flex;
    flex-direction: column;
    width: 50%;
    color: azure;
    gap: 10px;
}

.heading h1 {
    font-size: 2rem;
    font-family: cursive;
    font-weight: 600;
    letter-spacing: 1px;
}

.para {
    font-size: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
}

.links {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 1110px;
    gap: 20px;
}

.links img {
    border-radius: 20px;
    cursor: pointer;
    height: auto; /* Adjusted for responsiveness */
    max-height: 60px; /* Ensure images don’t get too large */
    object-fit: cover;
    transition: transform 0.5s, filter 0.5s;
}

.links img:hover {
    transform: scale(1.03);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.image {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    max-width: 550px;
    max-height: 550px;
    text-align: center;
    gap: 20px;
    background-color: rgb(27, 31, 113);
    padding: 20px;
    border-radius: 10px;
    color: #fff;
    margin-top: 80px;
}

.image img {
    width: 100%;
    height: auto; /* Ensure image maintains aspect ratio */
}
@media screen and (max-width: 768px) {
    .main {
        flex-direction: column;
        gap: 20px; 
    } 

    .content {
        flex-direction: column;
        gap: 20px;
    }

    .contentPortion {
        width: 100%;
    }

    .image {
       display: none;
    }

    .links {
        width: 50%;
        gap: 20px;
    }
    img{
        width: 100%;
    }
}
</style>

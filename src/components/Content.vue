<template>
    <div class="content">
        <div class="text">
            <h1 class="title"> Welcome To RideRight</h1>
            <p class="subtitle">RideRight is a premier taxi booking service committed to providing safe, reliable, and comfortable rides to our customers. Our mission is to make transportation convenient and hassle-free for everyoneCommodi, nemo! Quibusdam sapiente ducimus repudiandae veritatis praesentium.</p>
            <button class="btn">Get Started</button>
        </div>

        <div class="image">
                <img src="https://html.design/demo/elaxi/images/slider-img.png" alt="Illustration">
        </div>
    </div>
</template>

<style scoped>
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    align-content: center;
    margin-bottom: 160px;
}

.text {
    width: 50%; 
   

}

.title {
    font-size: 64px;
    font-family: cursive;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgb(245, 245, 247);
}

.subtitle {
    font-size: 18px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    letter-spacing: 1px;   
    color: rgb(255, 255, 255); 
   
}

.btn {
    font-weight: 600;
    font-size: 18px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: none;
    background-color:tomato;
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    letter-spacing: 1px;
    border: 1px solid tomato;
    margin-bottom: 20px;
    

}
.btn:hover {
    background-color: transparent;
    color: tomato;
}
.image {
    width: 50%;
}
img {
    width: 100%;
    height: 100%;
}
</style>
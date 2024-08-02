<template>
<div class="aboutSection">
    <div class="image">
        <img src="https://html.design/demo/elaxi/images/about-img.png" alt="Illustration">
    </div>

    <div class="text">
        <h1 class="title">About Us</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters

</p>
<button class="btn">Read More</button>
</div>
</div>

</template>

<style scoped>
h1{
    margin: 0;
    padding: 0;
}
.aboutSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1110px;
    margin: 10px auto;
    align-content: center;
    gap: 30px;
    text-align: justify;
    

}

.image {
    width: 50%;
}

.image img {
    width: 100%;
}

.text {
    width: 50%;     
    text-align: justify;
    


}

.title {
    font-size: 32px;
    font-family:cursive;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgb(4, 4, 4);
}

.btn {
    font-weight: 600;
    font-size: 18px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: none;
    background-color:rgb(27, 31, 113);
    color: white;
    padding: 6px 12px;
    border-radius: 6px; 
    text-align: center;
    text-decoration: none;
    cursor: pointer;
}
@media screen and (max-width: 768px) {
    .aboutSection {
        flex-direction: column;
        gap: 30px;
    }
    
}


</style>
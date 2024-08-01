<template>
    <div class="choose">
        <div class="heading">
            <h1>Why Choose Us</h1>
        </div>

        <div class="cards">
            <div class="card">  
                <div class="icon">
                    <img src="https://html.design/demo/elaxi/images/w1.png" alt="Icon">
                </div>
                <h2>Best Price Guarantee</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
            <div class="card">
                <div class="icon">
                    <img src="https://html.design/demo/elaxi/images/w3.png" alt="Icon">
                </div>
                <h2>Fast & Easy Booking</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>  
            <div class="card">
                <div class="icon">
                    <img src="https://html.design/demo/elaxi/images/w2.png" alt="Icon">
                </div>
                <h2> Trusted Drivers</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
        </div>
    </div>
    
</template>

<style scoped>  

    .choose {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        width: 100%;            
        max-width: 1110px;
        margin: 0 auto;
        align-content: center;
        gap: 30px;
        text-align: justify;
        padding: 50px 0;
        
    }

    .heading {
        width: 100%;
        text-align: center;
    }

    .heading h1 {
        font-size: 32px;
        font-family:cursive;
        font-weight: 600;
        letter-spacing: 1px;
        color: rgb(4, 4, 4);
        margin-bottom: 80px;
    }

    .cards {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1110px;
        margin: 0 auto;
        align-content: center;
        gap: 30px;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;    
        max-width: 350px;
        text-align: center;
        gap: 20px;
        background-color: rgb(27, 31, 113);
        justify-content: center;
        padding: 20px;
        border-radius: 10px;
        color: #fff;
        padding: 25px 25px 45px 25px;
        box-shadow: 6px 30px 10px rgba(99, 90, 90, 0.1);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        font-family: cursive;
    }
    .card:hover
    {
        
        transition: 0.5s ease-out;
        transform: scale(1.01);
    }
     .card:nth-child(2){
        position: relative;
        bottom: 40px;
     }
    .icon {
        width: 100%;
        max-width: 100px;
        height: 100%;
        max-height: 100px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 50%;
        background-color: #fff; 
    }
    .card h2 {
        font-size: 1.25rem;
        font-weight: 600;
    }

    .card p {
        font-size: 1rem;
        font-weight: 600;
    }

    .icon img {
        width: 100%;
        height: 100%;
    }

</style>

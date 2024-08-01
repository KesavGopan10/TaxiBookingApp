<template>
    <div class="blog">
        <div class="heading">
            <h1>Latest From Our Blog</h1>
        </div>
        <div class="cards">
            <div class="card">
                <div class="image">
                    <img src="https://html.design/demo/elaxi/images/b1.jpg" alt="Image">
                </div>
                <div class="content">
                    <h6>21 July, 2024</h6>
                    <h2>Why Do We Use It?</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout.</p>
                    <button>Read More</button>
                </div>
            </div>
            <div class="card">
                <div class="image">
                    <img src="https://html.design/demo/elaxi/images/b2.jpg" alt="Image">
                </div>
                <div class="content">
                    <h6>30 January, 2024</h6>
                    <h2>Happy Users, Happy Customers</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1, h6, h2, p {
    margin: 0;
    padding: 0;
}

.blog {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 50px auto;
    gap: 30px;
}

.heading {
    width: 100%;
    text-align: center;
}

.heading h1 {
    font-size: 2rem; /* Fixed the font-size unit */
    font-family: cursive;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgb(4, 4, 4);
}

.cards {
    display: flex;
    flex-wrap: wrap; /* Allows cards to wrap on smaller screens */
    justify-content: center;
    align-items: flex-start; /* Aligns items to the top */
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    gap: 30px; /* Added some space between cards */
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px; /* Ensures cards don’t get too wide */
    border: 1px solid rgb(234, 232, 232);
    padding: 10px;
    gap: 10px;
    justify-content: space-between;
    height: 500px;
    box-shadow: 0px 0px 5px rgb(232, 217, 217);
    border-radius: 10px; /* Rounded corners */
    background-color: #fff; /* White background for readability */
    overflow: hidden; /* Ensures no overflow of content */
}

.image {
    width: 100%;
    height: 250px; /* Height for images */
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures images cover the div */
    object-position: center;
}

.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    gap: 10px;
}

.content h6 {
    font-size: 1rem;
    font-family: cursive;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgb(83, 116, 247);
}

.content h2 {
    font-size: 1.5rem;
    font-family: cursive;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgb(4, 4, 4);
}

.content p {
    font-size: 1rem;
    font-family: cursive;
    font-weight: 400; /* Regular text weight */
    letter-spacing: 1px;
    color: rgb(4, 4, 4);
}

.content button {
    background-color: tomato;
    color: #fff;
    border: 1px solid tomato;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    font-family: cursive;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition */
    max-width: 150px; /* Ensures button doesn’t get too wide */
}

.content button:hover {
    background-color: #fff;
    color: tomato;
}
</style>

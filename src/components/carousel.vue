<template>
    <div class="carousel-container">
      <h1>What Our Customers Say</h1>
  
      <div class="thumbnails">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.thumbnail"
          :alt="image.alt"
          @click="setCurrentIndex(index)"
          :class="{ active: index === currentIndex }"
        />
      </div>
  
      <!-- Add transition wrapper here -->
      <transition name="scroll" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div class="main-container" :key="currentIndex">
          <h4>{{ content[currentIndex].username }}</h4>
          <h5>{{ content[currentIndex].designation }}</h5>
          <div class="para">
            <i :class="content[currentIndex].icons.left" aria-hidden="true" id="left"></i>
            <p>{{ content[currentIndex].review }}</p>
            <i :class="content[currentIndex].icons.right" aria-hidden="true" id="right"></i>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        images: [
          { src: 'https://html.design/demo/elaxi/images/c1.jpg', thumbnail: 'https://html.design/demo/elaxi/images/c1.jpg', alt: 'Image 1' },
          { src: 'https://html.design/demo/elaxi/images/c2.jpg', thumbnail: 'https://html.design/demo/elaxi/images/c2.jpg', alt: 'Image 2' },
          { src: 'https://html.design/demo/elaxi/images/c3.jpg', thumbnail: 'https://html.design/demo/elaxi/images/c3.jpg', alt: 'Image 3' },
        ],
        content: [
          {
            username: "SatisfiedCustomer123",
            designation: "Frequent Rider",
            review: "Rideright has been a lifesaver! Always found a cab quickly, and the drivers are friendly and professional. The app is easy to use and the fares are reasonable. Highly recommend! Rideright has revolutionized my commuting experience. The app is intuitive, the drivers are reliable, and the fares are competitive. I'm a satisfied customer!",
            icons: {
              left: "fa fa-quote-left",
              right: "fa fa-quote-right"
            }
          },
          {
            username: "LoyalRider456",
            designation: "Regular User",
            review: "I've been using Rideright for over a year now and have never had a bad experience. The drivers are always on time and the cars are clean. The app is user-friendly and I love the option to track my ride. I've used several ride-sharing apps, but Rideright stands out. The customer support is excellent, and they always go the extra mile to resolve any issues. Highly satisfied",
            icons: {
              left: "fa fa-quote-left",
              right: "fa fa-quote-right"
            }
          },
          {
            username: "HappyRider789",
            designation: "New User",
            review: "Impressed with Rideright's service! The booking process is smooth, and I've never had to wait long for a cab. The drivers are courteous and knowledgeable. Great app, keep up the good work! Rideright has revolutionized my commuting experience. The app is intuitive, the drivers are reliable, and the fares are competitive. I'm a satisfied customer!",
            icons: {
              left: "fa fa-quote-left",
              right: "fa fa-quote-right"
            }
          }
        ],
        isAutoplay: true,
        autoChangeInterval: 5000,
      };
    },
    methods: {
      setCurrentIndex(index) {
        this.currentIndex = index;
        if (this.isAutoplay) {
          clearInterval(this.autoChange);
          this.autoChange = setInterval(this.nextImage, this.autoChangeInterval);
        }
      },
      nextImage() {
        if (this.isAutoplay) {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
      },
      beforeEnter(el) {
        el.style.transform = 'translateX(100%)';
      },
      enter(el, done) {
        el.offsetWidth; // trigger reflow
        el.style.transition = 'transform 0.5s ease-in-out';
        el.style.transform = 'translateX(0)';
        done();
      },
      leave(el, done) {
        el.style.transition = 'transform 0.5s ease-in-out';
        el.style.transform = 'translateX(-100%)';
        done();
      },
    },
    created() {
      if (this.isAutoplay) {
        this.autoChange = setInterval(this.nextImage, this.autoChangeInterval);
      }
    },
    beforeDestroy() {
      clearInterval(this.autoChange);
    }
  };
  </script>
  
  <style scoped>
  /* Existing styles... */
  
  h1, h4, h5, p, i {
    margin: 0;
    padding: 0;
  }
  
  .carousel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;     
    gap: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  
  .carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
  }
  
  .carousel-container h1 {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: rgb(4, 4, 4);
    font-family: cursive;
  }
  
  .thumbnails {
    display: flex;
    margin-top: 10px;
  }
  
  .thumbnails img {
    width: 80px;
    height: 80px;
    cursor: pointer;
    opacity: 0.3;
    margin: 0 5px;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }
  
  .thumbnails img.active {
    opacity: 1;
  }
  
  .thumbnails img:hover {
    opacity: 0.8;
  }
  
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    text-align: center;
    gap: 10px;
  }
  
  .main-container h4 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: rgb(4, 4, 4);
    font-family: cursive;
  }
  
  .main-container h5 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: rgb(4, 4, 4);
    font-family: cursive;
  }
  
  .para {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1000px;
    max-height: 600px;
    margin: 0 auto;
    text-align: center;
    position: relative; /* Ensure positioning of icons and text */
  }
  
  .para p {
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    max-width: 1000px;
    text-align: center;
    max-height: 600px;
    letter-spacing: 1.5px;
    color: rgb(4, 4, 4);
    line-height: 1.5;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .para i#left {
    font-size: 3rem;
    color: rgb(167, 174, 212);
    opacity: 0.3;
    position: absolute; /* Positioning to avoid layout shift */
    top:  20%;
    left: 0px;
    transform: translateY(-50%);
    z-index: -1;
  }
  
  .para i#right {
    font-size: 3rem;
    color: rgb(167, 174, 212);
    opacity: 0.3;
    position: absolute; /* Positioning to avoid layout shift */
    bottom: 20%;
    right: 20px;
    transform: translateY(50%);
    z-index: -1;
  }
  
  /* Add these new styles for scroll animation */
  .scroll-enter-active, .scroll-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .scroll-enter, .scroll-leave-to {
    transform: translateX(360%);
  }
  .scroll-leave-to {
    transform: translateX(100%);
  }
  </style>
  
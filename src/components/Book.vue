<template>
  <div class="form">
    <h1>Book Now</h1>
    <p>Fill in the form below to get started</p>
    <form @submit.prevent="submitForm">
      <div class="input-group" v-for="field in formFields" :key="field.name">
        <svg xmlns="http://www.w3.org/2000/svg" :viewBox="field.iconViewBox" width="20" height="20">
          <path :d="field.iconPath"/>
        </svg>
        <input 
          :type="field.type" 
          :placeholder="field.placeholder" 
          v-model="formData[field.name]"
        >
        <span v-if="formErrors[field.name]" class="error-message">
          {{ formErrors[field.name] }}
        </span>
      </div>
      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Submitting...' : 'Book Now' }}
      </button>
    </form>
    <div v-if="notification" :class="['notification', notification.type]">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        fullName: '',
        phoneNumber: '',
        pickupLocation: '',
        destination: ''
      },
      formFields: [
        {
          name: 'fullName',
          type: 'text',
          placeholder: 'Full Name',
          iconViewBox: '0 0 448 512',
          iconPath: 'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'
        },
        {
          name: 'phoneNumber',
          type: 'tel',
          placeholder: 'Phone Number',
          iconViewBox: '0 0 512 512',
          iconPath: 'M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'
        },
        {
          name: 'pickupLocation',
          type: 'text',
          placeholder: 'Pickup Location',
          iconViewBox: '0 0 384 512',
          iconPath: 'M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'
        },
        {
          name: 'destination',
          type: 'text',
          placeholder: 'Destination',
          iconViewBox: '0 0 496 512',
          iconPath: 'M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z'
        }
      ],
      formErrors: {},
      isLoading: false,
      notification: null
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      const errors = {};

      // Validate Full Name
      if (!this.formData.fullName.trim()) {
        errors.fullName = 'Full Name is required';
        isValid = false;
      }

      // Validate Phone Number
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      if (!phoneRegex.test(this.formData.phoneNumber)) {
        errors.phoneNumber = 'Please enter a valid phone number';
        isValid = false;
      }

      // Validate Pickup Location
      if (!this.formData.pickupLocation.trim()) {
        errors.pickupLocation = 'Pickup Location is required';
        isValid = false;
      }

      // Validate Destination
      if (!this.formData.destination.trim()) {
        errors.destination = 'Destination is required';
        isValid = false;
      }

      this.formErrors = errors;
      return isValid;
    },

    async submitForm() {
      if (this.validateForm()) {
        try {
          // Show loading indicator
          this.isLoading = true;

          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1500));

        

          // Clear form after successful submission
          this.formData = {
            fullName: '',
            phoneNumber: '',
            pickupLocation: '',
            destination: ''
          };

          // Show success message
          this.showNotification('Booking submitted successfully!', 'success');
        } catch (error) {
          // Handle error
          console.error('Form submission error:', error);
          this.showNotification('An error occurred. Please try again.', 'error');
        } finally {
          // Hide loading indicator
          this.isLoading = false;
        }
      } else {
        this.showNotification('Please correct the errors in the form.', 'error');
      }
    },

    showNotification(message, type) {
      this.notification = { message, type };
      setTimeout(() => {
        this.notification = null;
      }, 3000);
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
  font-family: cursive;
}

.form p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
  font-family: cursive;

}

form {
  width: 100%;
  max-width: 1210px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.input-group {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #282525;
  position: relative;
  
}

.input-group input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  border: none;
  outline: none;
}

button {
  width: 100%;
  max-width: 200px;
  padding: 12px;
  margin: 0 100px;
  border: 1px solid tomato;
  background-color: tomato;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  
}

button:hover {
  background-color: transparent;
  color: tomato;
}

.input-group svg {
  width: 20px;
  height: 20px;
  fill: #fbf7f7;
  background-color: rgb(27, 31, 113);
  border-radius: 5px;
  padding: 12px;
  margin-right: 10px;
  position: relative;
  left: -10px;
}

.error-message {
  color: red;
  font-size: 12px;
  position: absolute;
  bottom: -15px;
  left: 0;
  z-index: 1;
}

.notification {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.notification.success {
  background-color: #d4edda;
  color: #155724;
}

.notification.error {
  background-color: #f8d7da;
  color: #721c24;
 
}

</style>
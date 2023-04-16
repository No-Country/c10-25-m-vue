import axios from 'axios';
import { defineComponent } from 'vue';
// import { useStore } from 'pinia';

interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  profileImageUrl: string;
}

export default defineComponent({
  setup() {
    // const store = useStore();
    const user: User = {
      name: '',
      surname: '',
      email: '',
      password: '',
      profileImageUrl: ''
    };

    const registerUser = async () => {
      const formData = new FormData();
      formData.append('name', user.name);
      formData.append('surname', user.surname);
      formData.append('email', user.email);
      formData.append('password', user.password);
      formData.append('profileImageUrl', user.profileImageUrl);

      try {
        const response = await axios.post(
          'http://localhost:3001/api/v1/auth/signup',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        // handle successful response
        // store.commit('setUser', response.data.user);
      } catch (error) {
        // handle error
        console.error(error);
      }
    };

    return { user, registerUser };
  }
});
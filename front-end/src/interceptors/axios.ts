import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/';

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401 && !refresh) {
        console.log('Response status 401 is triggered')

        refresh = true;

        const {data, status} = await axios.post('refresh', {}, {withCredentials: true})

        console.log(data, status)

        if (status === 200) {

            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

						return axios(error.config);
        }
    }

    refresh = false;

    throw error;
});

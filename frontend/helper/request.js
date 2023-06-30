import Axios from 'axios';

const request = Axios.create({ baseURL: process.env.BASE_URL });

request.interceptors.request.use((oldConfig) => {
	const newConfig = { ...oldConfig };

	return {
		...newConfig,
	};
});

export { request };

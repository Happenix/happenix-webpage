import { backendUrl } from '../constants/urls';
export const sendEmail = async (data) => {
	const response = await fetch(`${backendUrl}/sendEmail`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	const json = await response.json();
	return json;
};

import base64 from 'base-64';
const btoa = value => {
	if (!value) return value;
	return base64.encode(value);
};

const atob = value => {
	if (!value) return value;
	return base64.decode(value);
};

export { btoa, atob };

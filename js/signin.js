const baseApi = 'https://more-recipes.herokuapp.com/api/v1/';

function signin(e) {
	e.preventDefault();
	const form = document.forms.signin;
	const email = form.email.value;
	const password = form.password.value;

	fetch(`${baseApi}users/signin`, {
		method: 'POST',
		body: JSON.stringify({
			email,
			password
		}),
		headers: { 'Content-Type': 'application/json' }
	})
	.then(response => response.json()
		.then((user) => {
			localStorage.token = user.token;
			console.log(user.token);
			setTimeout(() => {
        window.location.replace('recipes.html');
      }, 5000);
		}))
	.catch(err => Alert('Error', err));
}

document.onsubmit = signin;
const baseApi = 'https://more-recipes.herokuapp.com/api/v1/';


function signup(e) {
	e.preventDefault();
	const form = document.forms.Signup;
	const fullname = form.fullname.value;
	const email = form.email.value
	const password = form.password.value;
	const rePassword = form.confirmPassword.value;

	if (password !== rePassword) {
		alert('passwords donet match');
	} else {
		const user = {
			fullname,
			email,
			password
		};

		fetch(`${baseApi}users/signup`, {
			method: 'POST',
			body: JSON.stringify({
				user
			}),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(response => response.json()
				.then((newUser) => {
					localStorage.token = newUser.token;
					console.log(newUser.token);
					setTimeout(() => {
	            window.location.replace('recipes.html');
	          }, 5000);				
				}))
			.catch(err => Alert('Error', err));
	}	
}

document.onsubmit = signup;
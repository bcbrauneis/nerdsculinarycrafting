const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    
    const username = document.querySelector('#username-signup').value.trim();
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // const confirm = document.querySelector('#confirm-signup').value.trim();

      // Add console log to see input values
  console.log('First Name:', firstname);
  console.log('Username:', username);
  console.log('Password:', password);
  // console.log('Confirm:', confirm);
  
    if (firstname && username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, firstname, password }),
        headers: { 'Content-Type': 'application/json' },
      })
      .catch((err) => {console.log(err)});
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  
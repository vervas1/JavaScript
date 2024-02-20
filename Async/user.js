const fetchUser = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/10'
    );
    console.log(response);

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const user = await response.json();

    console.log(user);

    // print user info to the DOM
    const container = document.getElementById('container');

    const name = document.createElement('h1');
    const email = document.createElement('p');
    const phone = document.createElement('p');
    const website = document.createElement('a');

    name.textContent = user.name;
    email.textContent = user.email;
    phone.textContent = user.phone;
    website.textContent = user.website;
    website.href = user.website;
    website.target = '_blank';

    container.appendChild(name);
    container.appendChild(email);
    container.appendChild(phone);
    container.appendChild(website);
  } catch (error) {
    console.log(error);
    document.write(error);
  }
};

fetchUser();

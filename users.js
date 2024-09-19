async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.error("Error fetching users;", error);
  }
}
fetchUsers();

const renderUsers = (users) => {
  const cardContainer = document.getElementById("card-container");
  const userCards = users.map((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    const basicInformation = document.createElement("div");

    basicInformation.classList.add("basic-information");
    basicInformation.innerHTML = `
    
 <p>${user.id}</p>
    <p>${user.username}</p>
    <p>${user.name}</p>
    
    `;
    const addressSection = document.createElement("div");
    addressSection.classList.add("addressSection");
    addressSection.innerHTML = ` 
 <p>${user.address.street}</p>
    <p>${user.address.suite}</p>
    <p>${user.address.city}</p>
     <p>${user.address.zipcode}</p>
`;
    const companySection = document.createElement("div");
    companySection.classList.add("companySection");
    companySection.innerHTML = `
<p>${user.company.name}</p>
    <p>${user.company.catchPhrase}</p>
    <p>${user.company.bs}</p>
`;
    const contactInformation = document.createElement("div");
    contactInformation.classList.add("contactInformation");
    contactInformation.innerHTML = `
<p>${user.phone}</p>
    <p>${user.email}</p>
    <p>${user.website}</p>
    `;
    const viewPostsLink = document.createElement("a");
    viewPostsLink.href = `posts.html?userId=${user.id}`;
    viewPostsLink.textContent = "view posts";
    viewPostsLink.classList.add("view-posts-link");

    card.appendChild(basicInformation);
    card.appendChild(addressSection);
    card.appendChild(companySection);
    card.appendChild(contactInformation);
    card.appendChild(viewPostsLink);

    return { card };
  });
  cardContainer.innerHTML = "";
  userCards.forEach(({ card }) => cardContainer.appendChild(card));
};

fetchUsers().then(renderUsers);

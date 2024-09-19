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

async function fetchPosts(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    return await response.json();
  } catch (error) {
    console.error("Gönderiler alınırken hata oluştu:", error);
  }
}
async function fetchAllPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  } catch (error) {
    console.error("Tüm gönderiler alınırken hata oluştu:", error);
  }
}
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");

console.log("URL parametreleri:", urlParams.toString());
console.log("Alınan userId:", userId);

if (userId) {
    fetchPosts(userId).then(posts => {
      displayPosts(posts);
    });
  } else {
    console.log("userId parametresi bulunamadı. Tüm postlar getiriliyor.");
    fetchAllPosts().then(posts => {
      displayPosts(posts);
    });
  }
 

    function displayPosts(posts) {
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = '';
      
        posts.forEach(post => {
          const card = document.createElement('div');
          card.classList.add('post-card');
          card.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          `;
          postsContainer.appendChild(card);
        });
      }
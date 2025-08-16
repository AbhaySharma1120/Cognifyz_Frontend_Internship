function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const userList = document.getElementById("userList");
      userList.innerHTML = ""; 

      users.forEach((user) => {
        const userDiv = document.createElement("div");
        userDiv.className = "user-card";
        userDiv.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                `;
        userList.appendChild(userDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

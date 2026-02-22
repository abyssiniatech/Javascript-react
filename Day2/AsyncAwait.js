const container = document.getElementById("posts");

const api = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log(data.slice(0,10))

    data.slice(0, 10).forEach(post => {
      const div = document.createElement("div");
      div.className = "post";

      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    container.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
};

api();
var existingBlogs = document.querySelector("#existingblogs");
var createNew = document.querySelector("#createNew");
var newPost = document.querySelector("#newpost");
var newBlog = document.querySelector("#newBlog");
var createButton = document.querySelector('#create');

function hideCreateNew() {
  createNew.hidden = true;
}

hideCreateNew();

newPost.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("click");
  existingBlogs.hidden = true;
  newPost.hidden = true;
  createNew.hidden = false;
  createButton.removeAttribute('hidden')
});
newBlog.addEventListener("submit", (event) => {
  var title = document.querySelector("#title").value;
  var content = document.querySelector("#content").value;
  event.preventDefault();
  if (!title || !content) {
    alert("Please enter a title and body for your post!");
    return;
  }
  const blogObj = {
    title: title,
    content: content,
  };
  fetch("/api/blogs", {
    method: "POST",
    body: JSON.stringify(blogObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      createNew.setAttribute("hidden", "false");
      location.reload();
    } else {
      alert("Error - please try again");
    }
  });
});
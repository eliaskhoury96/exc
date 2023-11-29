const render = function () {
    const postsContainer = $('#postContainer');
    postsContainer.empty(); 

    posts.forEach(post => {
      const postDiv = $('<div></div>');
      postDiv.html(`<strong>${post.name}</strong>: ${post.text}`);
      postsContainer.append(postDiv);
    });
}


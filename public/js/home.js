const newFormHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('comment-text').value.trim();
    const blog_id = document.querySelector('data-num').value.trim();

    if (text && blog_id) {
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ text, blog_id}),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/home');
        } else {
          alert('Failed to create blog post');
        }
      }
};

// DELETE
const blogDelete = async (event) => {
    if (event.target.hasAttribute('blogpost-id')) {
      const id = event.target.getAttribute('blogpost-id');
  
      const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert('Failed to delete blog post');
      }
    }
  };

document
.querySelector('.new-blogpost-form')
.addEventListener('submit', newFormHandler);

document
  .querySelector('.blogpost-list')
  .addEventListener('click', delButtonHandler);
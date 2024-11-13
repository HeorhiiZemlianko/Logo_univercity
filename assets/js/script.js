const form = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }

  submitButton.disabled = true;
  submitButton.innerText = 'Sending...';

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(new FormData(form))
  })
  .then(response => {
    if (response.ok) {
      alert('Message sent successfully');
      form.reset();
    } else {
      alert('Error sending message');
    }
  })
  .catch(() => {
    alert('Error sending message');
  })
  .finally(() => {
    submitButton.disabled = false;
    submitButton.innerText = 'Submit';
  });
});

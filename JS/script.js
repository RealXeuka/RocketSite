document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message === '') return;

  // Display user's message
  displayMessage(message, 'user-message');

  // Clear input field
  messageInput.value = '';

  // Send message to the bot
  fetch('/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })
  .then(response => response.json())
  .then(data => {
    // Display bot's response
    displayMessage(data.response, 'bot-message');
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function displayMessage(text, className) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${className}`;
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

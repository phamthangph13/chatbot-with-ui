document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessage('User', userInput);
        document.getElementById('user-input').value = '';
        
        // Send the message to the chatbot and get the response
        sendMessageToChatbot(userInput);
    }
});

function addMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender.toLowerCase());

    if (sender === 'Bot') {
        const avatar = document.createElement('img');
        avatar.src = 'file.jpg'; // Path to your avatar image
        avatar.classList.add('avatar');
        messageElement.appendChild(avatar);
    }

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messageElement.appendChild(messageContent);

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessageToChatbot(message) {
    try {
        const response = await fetch('http://127.0.0.1:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        });
        const data = await response.json();
        addMessage('Bot', data.response); // Add the actual response from the chatbot
    } catch (error) {
        console.error('Error:', error);
        addMessage('Bot', 'Sorry, there was an error processing your request.');
    }
}

// Example usage
sendMessageToChatbot("Hello, how are you?");

document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessage('User', userInput);
        document.getElementById('user-input').value = '';
        // Simulate a response from the chatbot
        setTimeout(() => {
            addMessage('Bot', 'This is a simulated response.');
        }, 1000);
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

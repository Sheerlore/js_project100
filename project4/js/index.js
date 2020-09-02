const form = document.querySelector('#message-form');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const message = document.querySelector('#message');
    const feedback = document.querySelector('.note-text');
    const messageContent = document.querySelector('.change-text');

    if (message.value === '') {
        feedback.classList.remove('el-hidden');
        setTimeout(function () {
        feedback.classList.add('el-hidden');
        }, 2000);
    } else {
        messageContent.textContent = message.value;
        message.value = '';
    }
})
document.addEventListener('DOMContentLoaded', function() {
    const buttonEl = document.getElementById("submit-button");
    const buttonElErrorText = document.getElementById('submit-button-error');
    const emailEl = document.getElementById('work-email');
    const emailErrorTest = document.getElementById('email-error');
    let errorList = [];
    
    if (emailEl) {
        // If em in localStorage, set emailEl value to em
        if (localStorage.getItem('em')) {
            emailEl.value = localStorage.getItem('em');
        }

        emailEl.addEventListener('input', function() {
                errorList = errorList.filter(item => item.source !== 'email');
            try {
                validateEmail(emailEl.value);
                emailErrorTest.textContent = '';
            } catch (error) {
                emailErrorTest.textContent = error.message;
                errorList.push({'source': 'email', 'message': error.message});
            }
        });
    }
    
    if (buttonEl) {
        buttonEl.addEventListener('click', (event) => {
            if (errorList.length > 0) {
                buttonElErrorText.textContent = 'Clear any errors before submitting.';
                event.preventDefault();
            } else {
                buttonElErrorText.textContent = '';
                handleFormSubmit({
                    email: emailEl.value,
                    buttonElText: buttonEl.textContent
                });
            }
        })
    }
});
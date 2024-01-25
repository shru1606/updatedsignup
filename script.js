let currentStep = 1;

function updateStepIndicator() {
    for (let i = 1; i <= 4; i++) {
        const indicator = document.getElementById(`step${i}Indicator`);
        if (i === currentStep) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    }
}

function nextStep(step) {
    if (validateStep(currentStep)) {
        document.getElementById(`step${currentStep}`).classList.add('hidden');
        currentStep = step;
        document.getElementById(`step${currentStep}`).classList.remove('hidden');
        updateStepIndicator();
    }
}

function prevStep(step) {
    document.getElementById(`step${currentStep}`).classList.add('hidden');
    currentStep = step;
    document.getElementById(`step${currentStep}`).classList.remove('hidden');
    updateStepIndicator();
}

// Remaining functions...

function validateStep(step) {
    switch (step) {
        case 1:
            return validatePersonalInformation();
        case 2:
            return validateContactInformation();
        case 3:
            return validateAdditionalInformation();
        case 4:
            return validateLoginInformation();
        default:
            return true;
    }
}

function validatePersonalInformation() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (firstName.trim() === '' || lastName.trim() === '') {
        alert('Please fill in all fields for Personal Information.');
        return false;
    }
    return true;
}

function validateContactInformation() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (email.trim() === '' || phone.trim() === '') {
        alert('Please fill in all fields for Contact Information.');
        return false;
    }

    if (!isValidPhoneNumber(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    return true;
}

function isValidPhoneNumber(phone) {
    return /^\d{10}$/.test(phone);
}

function validateAdditionalInformation() {
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    if (dob.trim() === '' || gender.trim() === '') {
        alert('Please fill in all fields for Additional Information.');
        return false;
    }
    return true;
}

function validateLoginInformation() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please fill in all fields for Login Information.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return false;
    }

    return true;
}

function submitForm() {
    if (validateStep(currentStep)) {
        alert('Registration Successful! You can now sign in.');
    }
}

// Initial step indicator update
updateStepIndicator();

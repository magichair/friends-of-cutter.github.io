// Cutter/Reinhart Park unified mailing list signup form.
// Bridges the Newsletter (Mailchimp) and Discussion list (groups.io) forms
// behind one email + checkbox UI, submitting each underlying form only if
// its corresponding checkbox is checked.
(function () {
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  var emailInput = document.getElementById('unified-email');
  var newsletterCheckbox = document.getElementById('list-newsletter');
  var discussionCheckbox = document.getElementById('list-discussion');
  var optionalToggle = document.getElementById('optional-toggle');
  var optionalFields = document.getElementById('mc-optional-fields');
  var submitButton = document.getElementById('unified-submit');
  var errorMessage = document.getElementById('signup-error');
  var successAlert = document.getElementById('signup-alert');
  var signupCard = document.getElementById('signup-card');
  var mcEmailInput = document.getElementById('mce-EMAIL');
  var mcForm = document.getElementById('mc-embedded-subscribe-form');
  var groupsioEmailInput = document.getElementById('email');
  var groupsioForm = document.getElementById('groupsio-embedded-subscribe-form');

  if (!submitButton) {
    return;
  }

  optionalToggle.addEventListener('click', function () {
    var isOpening = optionalFields.classList.contains('d-none');
    optionalFields.classList.toggle('d-none');
    optionalToggle.textContent = isOpening
      ? '- Hide name / address / volunteering info'
      : '+ Add name / address / volunteering info (optional)';
  });

  submitButton.addEventListener('click', function () {
    errorMessage.classList.add('d-none');

    var email = emailInput.value.trim();
    if (!isValidEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      errorMessage.classList.remove('d-none');
      return;
    }
    if (!newsletterCheckbox.checked && !discussionCheckbox.checked) {
      errorMessage.textContent = 'Please select at least one list to join.';
      errorMessage.classList.remove('d-none');
      return;
    }

    mcEmailInput.value = email;
    groupsioEmailInput.value = email;

    if (newsletterCheckbox.checked) {
      mcForm.submit();
    }
    if (discussionCheckbox.checked) {
      groupsioForm.submit();
    }

    signupCard.classList.add('d-none');
    successAlert.classList.remove('d-none');
  });
})();

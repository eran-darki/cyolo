(function () {
  'use strict'

  // Signature elements
  const fullnameSignature = document.getElementById('fullnameSignature');
  const jobTitleSignature = document.getElementById('jobTitleSignature');
  const mobilePhoneSignature = document.getElementById('mobilePhoneSignature');
  const emailSignature = document.getElementById('emailSignature');
  // Input fields
  const fullNameInput = document.getElementById('fullNameInput');
  const jobTitleInput = document.getElementById('jobTitleInput');
  const mobileInput = document.getElementById('mobileInput');
  const emailInput = document.getElementById('emailInput');
  // Edit name
  fullNameInput.addEventListener('input', () => {
    fullnameSignature.innerHTML = fullNameInput.value;
  });
  // Edit job title
  jobTitleInput.addEventListener('input', () => {
    jobTitleSignature.innerHTML = jobTitleInput.value;
  });
  // Edit mobile
  mobileInput.addEventListener('input', () => {
    mobileInput.value = mobileInput.value.replace(/[^ 0-9()\+-]/g, '');
    mobilePhoneSignature.getElementsByTagName('span')[0].innerHTML = mobileInput.value;
    mobilePhoneSignature.firstElementChild.href = `tel:${mobileInput.value}`;
  });
  // Edit email
  emailInput.addEventListener('input', () => {
    emailSignature.getElementsByTagName('span')[0].innerHTML = emailInput.value;
    emailSignature.firstElementChild.href = `mailto:${emailInput.value}`;
  });
})();
var formData = {
    fullName: [],
    email: [],
    phoneNumber: [],
    birthDate: [],
    gender: [],
    address1: [],
    address2: [],
    country: [],
    city: [],
    region: [],
    postalCode: []
};
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('email-address').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var birthDate = document.getElementById('birth-date').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address1 = document.getElementById('address1').value;
    var address2 = document.getElementById('address2').value;
    var country = document.getElementById('country').value;
    var city = document.getElementById('city').value;
    var region = document.getElementById('region').value;
    var postalCode = document.getElementById('postal-code').value;
    formData.fullName.push(fullName);
    formData.email.push(email);
    formData.phoneNumber.push(phoneNumber);
    formData.birthDate.push(birthDate);
    formData.gender.push(gender);
    formData.address1.push(address1);
    formData.address2.push(address2);
    formData.country.push(country);
    formData.city.push(city);
    formData.region.push(region);
    formData.postalCode.push(postalCode);
    displayFormData();
});
function displayFormData() {
    var result = `
      Full Name: ${formData.fullName.join(', ')}<br>
      Email Address: ${formData.email.join(', ')}<br>
      Phone Number: ${formData.phoneNumber.join(', ')}<br>
      Birth Date: ${formData.birthDate.join(', ')}<br>
      Gender: ${formData.gender.join(', ')}<br>
      Address: ${formData.address1.join(', ')}, ${formData.address2.join(', ')}<br>
      Country: ${formData.country.join(', ')}<br>
      City: ${formData.city.join(', ')}<br>
      Region: ${formData.region.join(', ')}<br>
      Postal Code: ${formData.postalCode.join(', ')}
    `;
    document.getElementById('form-data').innerHTML = result;
}
document.getElementById('delete-start').addEventListener('click', function () {
    if (formData.fullName.length > 0) formData.fullName.shift();
    if (formData.email.length > 0) formData.email.shift();
    if (formData.phoneNumber.length > 0) formData.phoneNumber.shift();
    if (formData.birthDate.length > 0) formData.birthDate.shift();
    if (formData.gender.length > 0) formData.gender.shift();
    if (formData.address1.length > 0) formData.address1.shift();
    if (formData.address2.length > 0) formData.address2.shift();
    if (formData.country.length > 0) formData.country.shift();
    if (formData.city.length > 0) formData.city.shift();
    if (formData.region.length > 0) formData.region.shift();
    if (formData.postalCode.length > 0) formData.postalCode.shift();
    displayFormData();
});
document.getElementById('delete-end').addEventListener('click', function () {
    if (formData.fullName.length > 0) formData.fullName.pop();
    if (formData.email.length > 0) formData.email.pop();
    if (formData.phoneNumber.length > 0) formData.phoneNumber.pop();
    if (formData.birthDate.length > 0) formData.birthDate.pop();
    if (formData.gender.length > 0) formData.gender.pop();
    if (formData.address1.length > 0) formData.address1.pop();
    if (formData.address2.length > 0) formData.address2.pop();
    if (formData.country.length > 0) formData.country.pop();
    if (formData.city.length > 0) formData.city.pop();
    if (formData.region.length > 0) formData.region.pop();
    if (formData.postalCode.length > 0) formData.postalCode.pop();
    displayFormData();
});

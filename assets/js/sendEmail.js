function sendMail(contactForm) {
  emailjs
    .send("gmail", "template_2nj0eqo", {
      from_name: contactForm.first_name.value,
      from_surname: contactForm.last_name.value,
      from_phone: contactForm.phone_number.value,
      from_email: contactForm.email_address.value,
      selsey_enquiry: contactForm.selsey_enquiry.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false; // To block from loading a new page
}

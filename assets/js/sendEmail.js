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

function sendEmail(contactFform) {
  emailjs
    .send("gmail", "template_wezvldr", {
      from_name: contactFform.first_name.value,
      from_surname: contactFform.last_name.value,
      from_phone: contactFform.phone_number.value,
      from_email: contactFform.email_address.value,
      arrival_date: contactFform.from.value,
      departure_date: contactFform.to.value,
      suite_name: contactFform.rooms.value,
      guests_number: contactFform.guests.value,
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

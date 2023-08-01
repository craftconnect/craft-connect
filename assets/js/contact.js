function composeEmail() {
    const emailAddress = "info@craftconnect.in";
    const subject = "Mail to Craft Connect";
    const body = "Hi !";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }
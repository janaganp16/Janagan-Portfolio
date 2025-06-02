document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value // added message
  };

  fetch("https://script.google.com/macros/s/AKfycbzwkU5g9e-ekWZHrDl1ae5beBbXLeTWwtgAKz2V7Fo93xTrCMZX-o0xSz_XBz3MsQBM/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);
    document.getElementById("contactForm").reset(); // optional: clears form
  });
});

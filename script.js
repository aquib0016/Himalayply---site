document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formStatus").textContent = "Thank you! We'll contact you soon.";
    this.reset();
});

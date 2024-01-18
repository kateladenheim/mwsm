document.addEventListener('DOMContentLoaded', function() {
    var toggles = document.querySelectorAll('.toggle');

    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            var description = this.nextElementSibling;
            if (description.style.display === "block") {
                description.style.display = "none";
            } else {
                description.style.display = "block";
            }
        });
    });
});

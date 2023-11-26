  // Get the button element
        const scrollButton = document.getElementById('projectsNav');

        // Get the section to scroll to
        const section2 = document.getElementById('projectsSection');

        // Add a scroll event listener
        window.addEventListener('scroll', function() {
            // Get the position of the section relative to the viewport
            const rect = section2.getBoundingClientRect();

            // Check if the section is in the viewport
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                // Add a class to the button when the section is in view
                scrollButton.classList.add('highlighted');
            } else {
                // Remove the class if the section is not in view
                scrollButton.classList.remove('highlighted');
            }
        });

        // Add a click event listener to scroll to the section when the button is clicked
        scrollButton.addEventListener('click', function() {
            section2.scrollIntoView({ behavior: 'smooth' });
        });
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Search functionality (basic example)
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search services...");
    searchInput.classList.add("search-bar");

    // Append search input inside the navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        navbar.appendChild(searchInput);
    }

    searchInput.addEventListener("keyup", function () {
        const searchQuery = this.value.toLowerCase();
        const services = document.querySelectorAll(".service-card");
        services.forEach(service => {
            const text = service.textContent.toLowerCase();
            service.style.display = text.includes(searchQuery) ? "block" : "none";
        });
    });

    // Dropdown menu toggle
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.addEventListener("mouseenter", () => {
            const menu = dropdown.querySelector(".dropdown-menu");
            if (menu) menu.style.display = "block";
        });
        dropdown.addEventListener("mouseleave", () => {
            const menu = dropdown.querySelector(".dropdown-menu");
            if (menu) menu.style.display = "none";
        });
    });

    // Add new services dynamically
    const servicesDropdown = document.querySelector(".dropdown-menu");
    if (servicesDropdown) {
        // const newServices = [
        //     { name: "Bridal Car Services", id: "bridal-car-services" },
        //     { name: "Towing Services 24/7", id: "towing-services" },
        //     { name: "Trucking Services", id: "trucking-services" },
        //     { name: "Heavy Equipment Rental", id: "heavy-equipment" },
        //     { name: "General Construction & Maintenance Services", id: "construction-maintenance" },
        //     { name: "Furniture Hotel & Residential", id: "furniture-hotel" },
        //     { name: "Auto Parts", id: "auto-parts" }
        ];
        
        newServices.forEach(service => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.setAttribute("href", `#${service.id}`);
            link.textContent = service.name;
            listItem.appendChild(link);
            servicesDropdown.appendChild(listItem);
        });
    }
});

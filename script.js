function loadHome() {
    document.querySelector(".content").innerHTML = `
        <h1>Welcome to Tea House</h1>
        <p>Discover our high-quality tea innovations.</p>
    `;
}

function loadAboutUs() {
    document.querySelector(".content").innerHTML = `
        <h1>About Us</h1>
        <p>We are committed to providing the best tea products.</p>
    `;
}

function loadProduct() {
    document.querySelector(".content").innerHTML = `
        <h1>Our Products</h1>
        <p>Explore our wide range of tea flavors.</p>
    `;
}

function loadContact() {
    document.querySelector(".content").innerHTML = `
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for inquiries.</p>
    `;
}

// Load the Home page by default
loadHome();

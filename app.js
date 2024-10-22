const URL = "https://fakestoreapi.com/products";
const productGrid = document.querySelector(".product-grid");

const getProducts = async () => {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        data.forEach(product => {
            // Create a card for each product
            let card = document.createElement('div');
            card.classList.add('card');

            // Add product image
            let img = document.createElement('img');
            img.src = product.image;
            card.appendChild(img);

            // Add product title
            let title = document.createElement('div');
            title.classList.add('card-title');
            title.innerText = product.title;
            card.appendChild(title);

            // Add product price
            let price = document.createElement('div');
            price.classList.add('card-price');
            price.innerText = `$${product.price}`;
            card.appendChild(price);

            // Add product description
            let description = document.createElement('p');
            description.innerText = product.description;
            card.appendChild(description);

            // Append the card to the grid
            productGrid.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

// Call the function to load products
getProducts();
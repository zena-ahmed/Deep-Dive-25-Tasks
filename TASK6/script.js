fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(products=>{
    const container = document.getElementById("productsContainer");

        products.forEach(product => {
            const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p class="price">${product.price} $</p>
            <p class="rating">Rating: ${product.rating.rate}</p>
            <button class="btn">Show Details</button>
            `;
card.querySelector(".btn").addEventListener("click", () => {
            alert(product.description)
});

container.appendChild(card);
        });
        })
        .catch(error => console.log("Error fetching products:", error));
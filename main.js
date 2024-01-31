async function getdata() {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data.products;
    const result = products.map(function (ele) {
        return `
            <div class="product">
                <h2>${ele.title}</h2>
                <img src=${ele.thumbnail} />
                <span>${ele.price}$</span>
                <p>${ele.brand}</p>
                <button onclick="navigateToDetails(${ele.id})">Details</button>
            </div>
        `;
    }).join('');

    document.querySelector(".products").innerHTML = result;
}

async function navigateToDetails(productId) {
    
    window.location.href = `details.html?id=${productId}`;
}

getdata();

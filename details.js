async function getDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('id');

    const response = await axios.get(`https://dummyjson.com/products/${productId}`);
    const data = response.data;

    const result = `<li>${data.title}</li>`;

    document.querySelector(".details").innerHTML = result;
}

getDetails();

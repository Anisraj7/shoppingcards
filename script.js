// const productBox = document.getElementById("products");

// fetch("https://fakestoreapi.com/products/")
// .then(res => res.json())
// .then(data => {
//     data.forEach(product => {
//         productBox.innerHTML += `
//         <div class="card">
//             <img src="${product.image}" alt="">
//             <h4>${product.title}</h4>
//             <div class="price">₹${(product.price * 20)}</div>
//             <div class="rating">⭐ ${product.rating.rate}</div>
//         </div>
//         `;
//     });
// })
// .catch(err => console.log(err));


fetch("https://fakestoreapi.com/products/")
  .then((p) => {
    return p.json();
  })
  .then((pureJs) => {
    console.log(pureJs);

    let products = document.getElementById("products");

    pureJs.forEach((c) => {
      let newTag = document.createElement("div");
      newTag.className = "product-card";

      newTag.innerHTML = `
        <h2>${c.title}</h2>
        <img src="${c.image}" alt="${c.title}">
        <p>${c.description.slice(0, 50)}...</p>
        <h3>₹ ${Math.round(c.price * 30)}</h3>
      `;

      products.appendChild(newTag);
    });
  })
  .catch((err) => console.log(err));


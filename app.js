function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

new Product('Duck Bag', 'img/r2bag.jpg');
new Product('Duck Banana', 'img/ybanana.jpg');
new Product('Duck Bathroom', 'img/bathroomstand.jpg'); 
new Product('Duck Boots', 'img/yboots.jpg');
new Product('Duck Breakfast', 'img/breakfast.jpg');
new Product('Duck Bubblegum', 'img/bubblegum.jpg');
new Product('Duck Chair', 'img/rchair.jpg');
new Product('Duck Cthulhu', 'img/cthulhu.jpg');
new Product('Duck Dragon', 'img/dragon.jpg');
new Product('Duck Pen', 'img/pen.jpg');
new Product('Duck Pet Sweep', 'img/pet-sweep.jpg');
new Product('Duck Scissors', 'img/scissors.jpg');
new Product('Duck Shark', 'img/shark.jpg');
new Product('Duck Sweep', 'img/sweep.png');
new Product('Duck Tauntaun', 'img/tauntaun.jpg');
new Product('Duck Unicorn', 'img/unicorn.jpg');
new Product('Duck Water Can', 'img/watercan.jpg');
new Product('Duck Wine Glass', 'img/wine-glass.jpg');

function generateRandomProducts() {
  const uniqueProducts = [];
  while (uniqueProducts.length < 3) {
    const randomIndex = Math.floor(Math.random() * Product.allProducts.length);
    const randomProduct = Product.allProducts[randomIndex];
    if (!uniqueProducts.includes(randomProduct)) {
      uniqueProducts.push(randomProduct);
    }
  }
  return uniqueProducts;
}

function updateProductStats(product) {
  product.timesShown++;
  product.timesClicked++;
}

function handleProductSelection(selectedProduct) {
  
  updateProductStats(selectedProduct);

  
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = '';

  const newProducts = generateRandomProducts();
  newProducts.forEach(product => {
    const imgElement = document.createElement('img');
    imgElement.src = product.imagePath;
    imgElement.alt = product.name;
    imgElement.addEventListener('click', () => handleProductSelection(product));
    productContainer.appendChild(imgElement);
  });

  // Increment current round
  currentRound++;

  // Show results if all rounds completed
  if (currentRound > totalRounds) {
    document.getElementById('view-results').style.display = 'block';
  }
}

document.getElementById('view-results').addEventListener('click', displayResults);


function displayResults() {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';

  const productNames = Product.allProducts.map(product => product.name);
  const votes = Product.allProducts.map(product => product.timesClicked);
  const views = Product.allProducts.map(product => product.timesShown)

 
  const ctx = document.createElement('canvas');
  ctx.id = 'results-chart'; // Add an ID to the canvas for later reference
  resultsContainer.appendChild(ctx);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: 'Votes',
        data: votes,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Viewed',
        data: views,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]

    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  
  document.getElementById('product-container').style.display = 'none';
  document.getElementById('view-results').style.display = 'none';
  resultsContainer.style.display = 'block';
}

// Total rounds for the voting
const totalRounds = 25;
// Current round counter
let currentRound = 1;

// Initial products for the first round
const initialProducts = generateRandomProducts();
// Display initial products
initialProducts.forEach(product => {
  const imgElement = document.createElement('img');
  imgElement.src = product.imagePath;
  imgElement.alt = product.name;
  imgElement.addEventListener('click', () => handleProductSelection(product));
  document.getElementById('product-container').appendChild(imgElement);
});

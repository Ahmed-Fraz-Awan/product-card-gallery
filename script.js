// Array Storage (initial 3 products)
let products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        description: "Noise-cancelling, 30hr battery life, Bluetooth 5.0",
        image: "https://via.placeholder.com/300x200?text=Headphones"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        description: "Fitness tracker, heart rate monitor, waterproof",
        image: "https://via.placeholder.com/300x200?text=Smart+Watch"
    },
    {
        id: 3,
        name: "Laptop Stand",
        price: 39.99,
        description: "Aluminum ergonomic stand, foldable, portable",
        image: "https://via.placeholder.com/300x200?text=Laptop+Stand"
    }
];

// Helper function to generate unique ID
function generateId() {
    return Date.now();
}

// Function to display products (using map + arrow functions)
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    
    if (!products.length) {
        productGrid.innerHTML = `<div class="col-span-full text-center py-12 text-gray-500">No products yet. Add some!</div>`;
        return;
    }

    // Using map (ES6) and arrow function
    const cardsHTML = products.map(product => `
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-5 flex flex-col flex-grow">
                <div class="flex justify-between items-start">
                    <h3 class="text-xl font-bold text-gray-800">${product.name}</h3>
                    <span class="bg-indigo-100 text-indigo-800 text-sm font-semibold px-2.5 py-0.5 rounded-full">$${product.price}</span>
                </div>
                <p class="text-gray-600 mt-2 text-sm flex-grow">${product.description}</p>
                <div class="mt-4 flex justify-between items-center">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Buy Now</button>
                    <button data-id="${product.id}" class="delete-btn bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition">Delete</button>
                </div>
            </div>
        </div>
    `).join('');  // join converts array to string
    
    productGrid.innerHTML = cardsHTML;
}

// Call initially
renderProducts();
// Add product functionality (using spread operator)
document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('productName').value.trim();
    const price = parseFloat(document.getElementById('productPrice').value);
    const description = document.getElementById('productDesc').value.trim();
    
    // Basic validation
    if (!name || isNaN(price) || price <= 0 || !description) {
        alert('Please fill all fields correctly (price > 0)');
        return;
    }
    
    // Create new product object
    const newProduct = {
        id: generateId(),
        name: name,
        price: price,
        description: description,
        image: "https://via.placeholder.com/300x200?text=New+Product"
    };
    
    // Using spread operator (...) to add new product to array
    products = [...products, newProduct];
    
    // Re-render gallery
    renderProducts();
    
    // Clear form
    document.getElementById('productForm').reset();
    
    // Optional: show success feedback
    alert('Product added successfully!');
});
// Delete product functionality (using filter method)
document.getElementById('productGrid').addEventListener('click', function(e) {
    // Check if clicked element has delete-btn class
    if (e.target.classList.contains('delete-btn')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        
        // Using filter method to remove product
        products = products.filter(product => product.id !== productId);
        
        // Re-render gallery
        renderProducts();
    }
});
// Async function to simulate fetching from server
async function fetchSampleProducts() {
    const loadingAlert = document.getElementById('loadingAlert');
    const loadBtn = document.getElementById('loadSampleBtn');
    
    // Show loading alert
    loadingAlert.classList.remove('hidden');
    loadBtn.disabled = true;
    loadBtn.textContent = '⏳ Loading...';
    
    try {
        // Fake API call with setTimeout (1 second delay)
        const fakeProducts = await new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: generateId(),
                        name: "Mechanical Keyboard",
                        price: 129.99,
                        description: "RGB backlit, hot-swappable switches, compact 60%",
                        image: "https://via.placeholder.com/300x200?text=Keyboard"
                    },
                    {
                        id: generateId(),
                        name: "Gaming Mouse",
                        price: 49.99,
                        description: "16000 DPI, 8 programmable buttons, ergonomic",
                        image: "https://via.placeholder.com/300x200?text=Mouse"
                    }
                ]);
            }, 1000);
        });
        
        // Add new products using spread operator
        products = [...products, ...fakeProducts];
        
        // Re-render gallery
        renderProducts();
        
        // Optional: success feedback
        console.log('Sample products added!');
        
    } catch (error) {
        // Bonus: error handling with try/catch
        console.error('Error fetching products:', error);
        alert('Failed to load sample products. Please try again.');
        
    } finally {
        // Hide loading alert and re-enable button
        loadingAlert.classList.add('hidden');
        loadBtn.disabled = false;
        loadBtn.textContent = '🔄 Load Sample Products (Async)';
    }
}

// Add event listener to the button
document.getElementById('loadSampleBtn').addEventListener('click', fetchSampleProducts);
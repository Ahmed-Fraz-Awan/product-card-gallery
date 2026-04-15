# 🛍️ Interactive Product Card Gallery

> A responsive product gallery web application with dynamic CRUD operations, form validation, and asynchronous data fetching. Built with vanilla JavaScript and Tailwind CSS.

## 📋 Assignment Overview

This project was developed as part of a web development assignment demonstrating proficiency in:

- **Tailwind CSS** for responsive, utility-first styling
- **Vanilla JavaScript (ES6+)** for dynamic content manipulation
- **Form validation** with real-time user feedback
- **Asynchronous JavaScript** using async/await and Promises
- **Array methods** including map, filter, and the spread operator

**Total Marks:** 15/15

---

## ✨ Features

### 1. Responsive Product Gallery
- 3-column grid on desktop, single column on mobile
- Each product card includes:
  - Product image (placeholder)
  - Product title
  - Description
  - Price badge
  - "Buy Now" and "Delete" buttons

### 2. Add New Product Form
- Input fields: Product Name, Price, Description
- Real-time validation (all fields required, price > 0)
- Dynamically adds product to the gallery

### 3. Delete Product Functionality
- Each product card has a delete button
- Removes product from the array and instantly updates the UI

### 4. Asynchronous Sample Products
- "Load Sample Products" button simulates a server API call
- 1-second delay using `setTimeout`
- Loading alert indicator during fetch
- Error handling with try/catch (bonus feature)

### 5. Persistent Data Structure
- Products stored in a JavaScript array
- Initial array contains 3 sample products
- Uses ES6+ features:
  - Arrow functions
  - Spread operator (`...`)
  - Array methods: `map()`, `filter()`

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and semantics |
| Tailwind CSS | Responsive styling, grid layout, navbar, cards |
| Vanilla JavaScript (ES6+) | Dynamic rendering, event handling, async operations |
| Font Awesome (via Tailwind) | Icons and visual enhancements |

---

## 📁 Project Structure
product-gallery/
├── index.html # Main HTML document with Tailwind CDN
├── script.js # All JavaScript functionality
└── README.md # Project documentation

---

## 🚀 Installation & Usage

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Git (for version control)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/product-card-gallery.git
   cd product-card-gallery

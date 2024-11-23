# Urban Mart - E-Commerce Website

Welcome to the E-Commerce Website project! This project is a fully functional e-commerce platform with features such as user authentication, product catalog, cart management, reviews, and checkout. Below is the detailed structure and functionality.

---

## **Database Design**

The application uses **PostgreSQL** as the database with the following tables:

### **Users**
| Column      | Type        | Description                     |
|-------------|-------------|---------------------------------|
| `user_id`   | `bigserial` | Primary key, unique identifier |
| `name`      | `varchar`   | User's full name               |
| `email`     | `varchar`   | User's email                   |
| `password`  | `varchar`   | Hashed password                |
| `street`    | `varchar`   | Street address                 |
| `city`      | `varchar`   | City                           |
| `state`     | `varchar`   | State                          |
| `phone`     | `varchar`   | Phone number                   |

### **Products**
| Column         | Type        | Description                     |
|----------------|-------------|---------------------------------|
| `prod_id`      | `bigserial` | Primary key, unique identifier |
| `title`        | `varchar`   | Product title                  |
| `description`  | `text`      | Product description            |
| `price`        | `numeric`   | Product price                  |
| `gender`       | `varchar`   | Target gender (e.g., Men, Women)|
| `size`         | `varchar`   | Available size(s)              |
| `star`         | `decimal`   | Average product rating         |
| `release_date` | `date`      | Release date                   |
| `image_url`    | `text`      | URL for product image          |

### **Cart**
| Column      | Type        | Description                     |
|-------------|-------------|---------------------------------|
| `cart_id`   | `bigserial` | Primary key, unique identifier |
| `user_id`   | `bigserial` | Foreign key from `users`       |
| `prod_id`   | `bigserial` | Foreign key from `products`    |
| `quantity`  | `integer`   | Quantity of the product        |

### **Reviews**
| Column        | Type        | Description                     |
|---------------|-------------|---------------------------------|
| `review_id`   | `bigserial` | Primary key, unique identifier |
| `prod_id`     | `bigserial` | Foreign key from `products`    |
| `review_text` | `text`      | User's review text             |
| `rating`      | `decimal`   | User's rating for the product  |

---

## **Technologies Used**

### **Backend**
- **Node.js**: Handles the backend logic and database interactions.
- **RESTful APIs**: Used for communication between the frontend and backend.
- **Cloudinary**: For efficient image handling and storage.

#### Backend Features:
- **User Authentication**: Sign up, login, and user profile handling.
- **Database Functions**: CRUD operations for users, products, carts, and reviews.

---

### **Frontend**
- **React.js**: Build the user interface with interactive and dynamic components.

#### Pages:
1. **Home Page**: Displays the latest products with a quick add-to-cart feature.
2. **Collection Page**: Showcases all available products.
3. **Cart Page**: Displays items added to the cart for the logged-in user.
4. **Checkout Page**: Summarizes the cart items with:
   - Order details (quantity, total amount)
   - Delivery address
   - Payment option
5. **About Us Page**: Information about the website and its purpose.
6. **Register Page**: User authentication with a flippable card design for Sign Up/Sign In.
7. **Product Page**: Detailed information about a single product.

---

## **Key Features**

- **Quick Add to Cart**: Available on both the collection page and the home page's latest products section.
- **Dynamic Cart Updates**: Real-time cart management for logged-in users.
- **Product Reviews**: Users can rate and review products.
- **Cloudinary Integration**: Efficient product image upload and management.

---

## **Future Improvements**

- Adding support for payment gateways.
- Wishlist functionality.
- Admin panel for managing products and users.
- Advanced product filtering options.

## Contributions

Feel free to open issues or create pull requests for improvements or feature additions.

### Contact

dynaster21@gmail.com

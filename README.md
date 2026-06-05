💼 GitHub: https://github.com/mahak123569

mvc project

# MVC Pattern in PHP

A simple PHP project demonstrating the **Model-View-Controller (MVC)** architectural pattern. This project separates business logic, user interface, and data handling to create a clean, maintainable, and scalable application.

## 📌 Features

- MVC Architecture
- Clean Project Structure
- Separation of Concerns
- Easy Maintenance
- Reusable Components
- Beginner-Friendly PHP Project

## 📂 Project Structure

```
mvcpattern/
│
├── controllers/
│   └── HomeController.php
│
├── models/
│   └── User.php
│
├── views/
│   └── home.php
│
├── config/
│   └── database.php
│
├── public/
│   └── index.php
│
└── README.md
```

## 🏗 MVC Architecture

### Model
The Model handles data and business logic.

Example:
```php
class User {
    public function getUsers() {
        return "Fetching user data";
    }
}
```

### View
The View displays data to the user.

Example:
```php
<h1>Welcome to MVC Application</h1>
```

### Controller
The Controller acts as an intermediary between Model and View.

Example:
```php
class HomeController {
    public function index() {
        include 'views/home.php';
    }
}
```

## ⚙️ Requirements

- PHP 7.4 or higher
- Apache/XAMPP/WAMP Server
- Web Browser

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/mahak123569/mvcpattern.git
```

2. Move the project to your web server directory.

3. Start Apache server.

4. Open in browser:

```
http://localhost/mvcpattern
```

## 📖 How It Works

1. User sends a request.
2. Controller receives the request.
3. Controller interacts with the Model.
4. Model processes data.
5. Controller sends data to View.
6. View displays the output.

## 🎯 Advantages of MVC

- Better code organization
- Easy debugging
- Code reusability
- Scalable architecture
- Team development support

## 🛠 Technologies Used

- PHP
- HTML
- CSS
- MySQL

## 👩‍💻 Author

**Mahak Kesarwani**

GitHub: https://github.com/mahak123569

## 📄 License

This project is licensed under the MIT License.

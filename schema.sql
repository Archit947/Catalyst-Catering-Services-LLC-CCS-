CREATE DATABASE IF NOT EXISTS catalyst_db;
USE catalyst_db;

CREATE TABLE IF NOT EXISTS jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    department VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS profile_downloads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS job_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    cv_path VARCHAR(255) NOT NULL,
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    company VARCHAR(255),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'sales') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin (password: admin123)
INSERT INTO users (username, password_hash, role)
SELECT 'admin', '$2y$12$XC3aRXyLOUlZtGDcfUAZmO6VyrzbmgCdf0kOFhGmpYzW0rIeQdmNC', 'admin'
WHERE NOT EXISTS (SELECT 1 FROM users WHERE username = 'admin');

-- Insert default sales (password: sales123)
INSERT INTO users (username, password_hash, role)
SELECT 'sales', '$2y$12$CNDw.xuX6H76v7Ztq./BseGE2XOEJLWKhoEEHT3gGdV31ob7L0Eb6', 'sales'
WHERE NOT EXISTS (SELECT 1 FROM users WHERE username = 'sales');

-- Insert dummy data if table is empty
INSERT INTO jobs (title, department, location, type, description)
SELECT 'Head Chef', 'Culinary', 'Dubai, UAE', 'Full-Time', 'Lead our culinary team in delivering exceptional dining experiences across corporate and institutional clients in Dubai.'
WHERE NOT EXISTS (SELECT 1 FROM jobs);

INSERT INTO jobs (title, department, location, type, description)
SELECT 'Facility Manager', 'Operations', 'Abu Dhabi, UAE', 'Full-Time', 'Oversee day-to-day facility operations including cleaning, maintenance, and support services at client sites.'
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Facility Manager');

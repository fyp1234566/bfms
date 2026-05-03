-- User Info Database Schema
-- Create products table
CREATE TABLE IF NOT EXISTS products (
    document_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL,
    description TEXT,
    barcode_id TEXT,
    barcode TEXT,
    status TEXT DEFAULT 'available',
    quantity INTEGER DEFAULT 1,
    image TEXT,
    created_at INTEGER DEFAULT (strftime('%s', 'now') * 1000),
    updated_at INTEGER DEFAULT (strftime('%s', 'now') * 1000)
);

-- Create borrowing records table
CREATE TABLE IF NOT EXISTS borrowing_records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_email TEXT NOT NULL,
    document_id TEXT NOT NULL,
    product_name TEXT NOT NULL,
    borrow_time INTEGER DEFAULT (strftime('%s', 'now') * 1000),
    return_time INTEGER,
    latitude REAL,
    longitude REAL,
    location_name TEXT,
    FOREIGN KEY (document_id) REFERENCES products (document_id)
);

-- Create borrow tokens table
CREATE TABLE IF NOT EXISTS borrow_tokens (
    borrow_id TEXT PRIMARY KEY,
    user_email TEXT NOT NULL,
    username TEXT NOT NULL,
    document_id TEXT NOT NULL,
    quantity INTEGER DEFAULT 1,
    created_at INTEGER DEFAULT (strftime('%s', 'now') * 1000),
    expires_at INTEGER,
    used INTEGER DEFAULT 0,
    FOREIGN KEY (document_id) REFERENCES products (document_id)
);

-- Insert sample products
INSERT OR IGNORE INTO products (document_id, name, price, description, barcode_id, barcode, status, quantity, image)
VALUES 
    ('item001', 'Laptop Dell XPS 13', 999.99, 'High-performance laptop with 16GB RAM', 'BAR001', 'barcode_image_001', 'available', 5, NULL),
    ('item002', 'Wireless Mouse Logitech', 29.99, 'Ergonomic wireless mouse', 'BAR002', 'barcode_image_002', 'available', 10, NULL),
    ('item003', 'USB-C Hub 7-in-1', 49.99, 'Multi-port USB-C hub', 'BAR003', 'barcode_image_003', 'available', 8, NULL);

-- User Data Database Schema
-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    username TEXT,
    password_hash TEXT,
    status TEXT DEFAULT 'active',
    password_set_status TEXT DEFAULT 'pending',
    approval_status TEXT DEFAULT 'pending',
    role TEXT DEFAULT 'user',
    created_at INTEGER DEFAULT (strftime('%s', 'now') * 1000),
    updated_at INTEGER DEFAULT (strftime('%s', 'now') * 1000)
);

-- Create sessions table
CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT UNIQUE NOT NULL,
    email TEXT NOT NULL,
    active INTEGER DEFAULT 1,
    created_at INTEGER DEFAULT (strftime('%s', 'now') * 1000),
    last_active_at INTEGER DEFAULT (strftime('%s', 'now') * 1000),
    expires_at INTEGER,
    FOREIGN KEY (email) REFERENCES users (email)
);

-- Create notifications table
CREATE TABLE IF NOT EXISTS notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_email TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'info',
    read INTEGER DEFAULT 0,
    created_at INTEGER DEFAULT (strftime('%s', 'now') * 1000),
    FOREIGN KEY (user_email) REFERENCES users (email)
);

-- Create daily borrows table
CREATE TABLE IF NOT EXISTS daily_borrows (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_email TEXT NOT NULL,
    borrow_date TEXT NOT NULL,
    borrow_count INTEGER DEFAULT 0,
    created_at INTEGER DEFAULT (strftime('%s', 'now') * 1000),
    updated_at INTEGER DEFAULT (strftime('%s', 'now') * 1000),
    UNIQUE(user_email, borrow_date),
    FOREIGN KEY (user_email) REFERENCES users (email)
);

-- Create VPN checks table
CREATE TABLE IF NOT EXISTS vpn_checks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_ip TEXT NOT NULL,
    user_email TEXT,
    asn TEXT,
    country TEXT,
    provider TEXT,
    is_vpn INTEGER,
    confidence_score REAL,
    check_type TEXT,
    result_type TEXT,
    latency INTEGER,
    check_time INTEGER DEFAULT (strftime('%s', 'now') * 1000)
);

-- Insert default admin user
INSERT OR IGNORE INTO users (email, username, password_hash, status, password_set_status, approval_status, role)
VALUES ('admin@bfms.com', 'Administrator', '$2b$10$rOzJqQjQjQjQjQjQjQjQjOzJqQjQjQjQjQjQjQjQjQjQjQjQjQjQjQjQj', 'active', 'set', 'approved', 'superadmin');

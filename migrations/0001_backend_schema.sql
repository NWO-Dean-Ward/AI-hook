-- Backend Schema for Brandstifter CMS
-- Projects, Blog Posts, and Admin Users

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  is_active BOOLEAN DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title_de TEXT NOT NULL,
  title_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description_de TEXT,
  description_en TEXT,
  category TEXT NOT NULL, -- kuechen, badmoebel, ladenbau, gastronomie, buero, outdoor
  client_type TEXT NOT NULL, -- privat, b2b
  year INTEGER NOT NULL,
  featured_image TEXT,
  gallery_images TEXT, -- JSON array of image URLs
  content_de TEXT, -- Rich text content
  content_en TEXT, -- Rich text content
  is_featured BOOLEAN DEFAULT 0,
  is_published BOOLEAN DEFAULT 1,
  display_order INTEGER DEFAULT 0,
  meta_title_de TEXT,
  meta_title_en TEXT,
  meta_description_de TEXT,
  meta_description_en TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  created_by INTEGER,
  FOREIGN KEY (created_by) REFERENCES admin_users(id)
);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title_de TEXT NOT NULL,
  title_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt_de TEXT,
  excerpt_en TEXT,
  content_de TEXT NOT NULL, -- Rich text/Markdown content
  content_en TEXT NOT NULL, -- Rich text/Markdown content
  featured_image TEXT,
  category TEXT, -- news, tips, trends, technik
  tags TEXT, -- JSON array of tags
  author_id INTEGER,
  is_published BOOLEAN DEFAULT 0,
  published_at DATETIME,
  view_count INTEGER DEFAULT 0,
  meta_title_de TEXT,
  meta_title_en TEXT,
  meta_description_de TEXT,
  meta_description_en TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES admin_users(id)
);

-- Media Library Table
CREATE TABLE IF NOT EXISTS media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  filename TEXT NOT NULL,
  original_name TEXT,
  mime_type TEXT,
  size INTEGER,
  url TEXT NOT NULL,
  thumbnail_url TEXT,
  width INTEGER,
  height INTEGER,
  alt_text_de TEXT,
  alt_text_en TEXT,
  uploaded_by INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (uploaded_by) REFERENCES admin_users(id)
);

-- Contact Form Submissions (for admin review)
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  project_type TEXT,
  budget TEXT,
  timeline TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT 0,
  is_answered BOOLEAN DEFAULT 0,
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Settings Table
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  type TEXT DEFAULT 'string', -- string, number, boolean, json
  description TEXT,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Indexes
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_published ON projects(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_read ON contact_submissions(is_read);

-- Insert default admin user (password: admin123 - should be changed immediately)
-- Password hash is for demonstration - in production, use proper bcrypt hashing
INSERT OR IGNORE INTO admin_users (username, email, password_hash, role) 
VALUES ('admin', 'admin@brandstifter.de', '$2a$10$YourHashedPasswordHere', 'super_admin');

-- Insert default settings
INSERT OR IGNORE INTO settings (key, value, type, description) VALUES 
  ('site_name', 'Brandstifter Urban Manufactur', 'string', 'Website name'),
  ('items_per_page', '12', 'number', 'Items per page in listings'),
  ('enable_blog', 'true', 'boolean', 'Enable blog section'),
  ('enable_contact_form', 'true', 'boolean', 'Enable contact form'),
  ('notification_email', 'info@brandstifter.de', 'string', 'Email for notifications');
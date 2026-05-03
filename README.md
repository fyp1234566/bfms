# BFMS - Borrowing and Financial Management System

A Cloudflare Worker with D1 database for managing item borrowing and financial operations.

## Features

- User authentication and session management
- Item borrowing and returning system
- Cloudflare D1 database for data persistence
- Role-based access control (user, admin, superadmin)
- Google OAuth integration
- Daily borrowing limitsthrt
- Location tracking for borrowed items
- Notification system
- VPN detection capabilities

## Requirements

- Node.js 16.0 or higher (for local development)
- Wrangler CLI (Cloudflare Workers)
- Cloudflare account with D1 databasef

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd bfms-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Login to Cloudflare:**
   ```bash
   npx wrangler login
   ```

## Setup

### 1. Create D1 Databases

```bash
# Create user_data database
npx wrangler d1 create bfms_user_data

# Create user_info database  
npx wrangler d1 create bfms_user_info
```

### 2. Update wrangler.toml

Replace the placeholder database IDs in `wrangler.toml` with the actual IDs from the previous step:

```toml
[[d1_databases]]
binding = "user_data"
database_name = "bfms_user_data"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"  # Replace with actual ID

[[d1_databases]]
binding = "user_info"
database_name = "bfms_user_info"
database_id = "yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"  # Replace with actual ID
```

### 3. Run Database Migrations

```bash
# Apply migrations to user_data database
npx wrangler d1 migrations apply bfms_user_data --remote

# Apply migrations to user_info database
npx wrangler d1 migrations apply bfms_user_info --remote
```

### 4. Configure Custom Domain (Optional)

Update the routes in `wrangler.toml`:

```toml
routes = [
  { pattern = "yourdomain.com/*", zone_name = "yourdomain.com" }
]
```

## Configuration

### Google OAuth

1. Create a project in Google Cloud Console
2. Enable Google+ API
3. Create OAuth 2.0 credentials
4. Add authorized redirect URI: `https://yourdomain.com/auth/google/callback`
5. Update environment variables in wrangler.toml or Cloudflare dashboard

### Environment Variables

You can set secrets using:

```bash
# Set Google OAuth secrets
npx wrangler secret put GOOGLE_CLIENT_ID
npx wrangler secret put GOOGLE_CLIENT_SECRET

# Set other secrets as needed
npx wrangler secret put SESSION_SECRET
```

## Development

### Local Development

```bash
# Start local development server
npm run dev

# Or with Wrangler directly
npx wrangler dev
```

The worker will be available at `http://localhost:8787`

### Database Operations

```bash
# View migration status
npm run db:migrate:info

# Apply migrations
npm run db:migrate

# Query database locally
npx wrangler d1 execute bfms_user_data --local --command "SELECT * FROM users"
```

## Deployment

### Deploy to Cloudflare Workers

```bash
# Deploy to production
npm run deploy

# Or with Wrangler directly
npx wrangler deploy
```

### Custom Domain Setup

1. Add your domain to Cloudflare
2. Configure DNS settings
3. Update `wrangler.toml` with your domain
4. Deploy the worker
5. Configure custom domain in Cloudflare Workers dashboard

## Default Admin Account

After database migration, a default admin account is created:

- **Email:** admin@bfms.com
- **Password:** You'll need to set this via the password reset functionality
- **Role:** superadmin

## Database Structure

### user_data D1 Database
- `users` - User accounts and profiles
- `sessions` - Active user sessions
- `notifications` - User notifications
- `daily_borrows` - Daily borrowing statistics
- `vpn_checks` - VPN detection logs

### user_info D1 Database
- `products` - Available items for borrowing
- `borrowing_records` - Item borrowing history
- `borrow_tokens` - Temporary borrowing tokens

## API Endpoints

### Authentication
- `GET /login` - Login page
- `POST /login` - Process login
- `GET /signup` - Signup page
- `POST /signup` - Create new account
- `GET /logout` - Logout user

### Items
- `GET /items` - List available items
- `POST /borrow` - Borrow an item
- `POST /return` - Return an item

### Google OAuth
- `GET /auth/google` - Initiate Google login
- `GET /auth/google/callback` - Google OAuth callback
- `POST /auth/google/2fa-verify` - 2FA verification

## Project Structure

```
bfms-main/
├── src/
│   └── index.js           # Main Cloudflare Worker
├── migrations/            # D1 database migrations
│   ├── 0001_initial_schema.sql
│   └── 0002_user_info_schema.sql
├── wrangler.toml          # Cloudflare configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Monitoring

### View Logs

```bash
# Tail logs from production
npm run tail

# Or with Wrangler directly
npx wrangler tail
```

### Analytics

View usage metrics in the Cloudflare Workers dashboard.

## Security Considerations

- Use HTTPS (automatically provided by Cloudflare)
- Implement rate limiting (consider using Cloudflare Rate Limiting)
- Validate and sanitize all user inputs
- Use environment variables for sensitive configuration
- Regularly update dependencies
- Monitor logs for suspicious activity

## Troubleshooting

### Database Issues

```bash
# Check migration status
npx wrangler d1 migrations list bfms_user_data --remote

# Recreate database if needed
npx wrangler d1 delete bfms_user_data
npx wrangler d1 create bfms_user_data
npx wrangler d1 migrations apply bfms_user_data --remote
```

### Deployment Issues

```bash
# Check wrangler configuration
npx wrangler whoami

# Validate configuration
npx wrangler validate

# Check deployment status
npx wrangler deployments list
```

### Common Issues

1. **Database not found**: Ensure database IDs in wrangler.toml are correct
2. **Migration fails**: Check SQL syntax and run migrations one by one
3. **OAuth not working**: Verify redirect URIs and client secrets
4. **Custom domain not working**: Check DNS settings and SSL certificates

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
1. Check the troubleshooting section
2. View logs with `npm run tail`
3. Check Cloudflare Workers dashboard
4. Create an issue on GitHub

---

**Note:** This is a Cloudflare Worker application with D1 database. It's designed to run on Cloudflare's edge network with serverless database storage.

# Bikes Rental

## Configuration

Step 1: we need to add .env file in `server` folder
Step 2: `cd client`
Step 3: `npm install`
Step 4: `cd ..`
Step 5: `cd server`
Step 6: `npm install`
Step 7: `npm run dev`

## Example .env for server:

MONGODB_USERNAME="username"
MONGODB_PASS="pass"
MONGO_URI="mongodb+srv://username:pass@cluster0.w12ba.mongodb.net/bike_rental?retryWrites=true&w=majority"
NODE_ENV="local"
EMAIL_HOST="smtp.mailtrap.io"
SMTP_PORT=2525
EMAIL_AUTH_USER="email_username"
EMAIL_AUTH_PASS="email_pass"
EMAIL_FROM_USER="test@test.com"
FRONTEND_BASE_URL="http://localhost:3000"
BACKENDEND_BASE_URL="http://localhost:1910"
JWT_SECRET="teamway123"
APP_NAME="Bike Rental"

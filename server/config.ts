/**
 * Application configuration
 */
export const config = {
  // Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // Application
  port: parseInt(process.env.PORT || '5001', 10),
  appUrl: process.env.APP_URL || 'http://localhost:5001',
  
  // Sessions
  session: {
    secret: process.env.SESSION_SECRET || 'bitcoin-quest-secret-key',
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    }
  },
  
  // SendGrid for emails
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY,
    fromEmail: process.env.EMAIL_FROM || 'noreply@bitcoinquest.com',
  },
  
  // Authentication
  auth: {
    verificationCodeExpiry: 30 * 60 * 1000, // 30 minutes
    resetTokenExpiry: 60 * 60 * 1000, // 1 hour
    jwt: {
      secret: process.env.JWT_SECRET || 'bitcoin-quest-jwt-secret',
      expiresIn: '7d',
    }
  }
};
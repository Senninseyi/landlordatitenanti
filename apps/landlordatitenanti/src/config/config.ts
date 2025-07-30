export const app_config = {
  appName: process.env.NEXT_PUBLIC_APPNAME || 'RentPro',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4400/api',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:4400',
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || '',
};

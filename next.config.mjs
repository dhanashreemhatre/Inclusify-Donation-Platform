/** @type {import('next').NextConfig} */

const config = {
  images: {
    domains: ['127.0.0.1'],
  },
  env: {
    RAZORPAY_KEY: 'rzp_test_lu7EAH1KzeYlT2',
    RAZORPAY_SECRET: '2yTjrh6XiaYwnM1y6VwphH9p'
  }
};

export default config;

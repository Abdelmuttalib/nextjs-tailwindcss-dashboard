module.exports = {
  apps: [
    {
      name: 'inview-dashboard',
      script: './node_modules/next/dist/bin/next',
      args: 'start',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};

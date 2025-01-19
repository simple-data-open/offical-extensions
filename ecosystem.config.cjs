module.exports = {
  apps: [
    {
      name: 'official/sd-chart-column',
      script: 'cd ./official/sd-chart-column && pnpm run dev',
      env: {
        GROUP: 'official',
      },
    },
  ],
};

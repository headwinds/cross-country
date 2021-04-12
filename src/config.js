const config = {
  api: {
    prodDomain: 'https://scout.vercel.app/api',
    localDomain: 'http://localhost:5000/api',
    isProd: true,
  },
};

export function getApiDomain() {
  return config.api.isProd ? config.api.prodDomain : config.api.localDomain;
}

export default config;

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Añadir la regla para manejar los archivos SVG como componentes React
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };
  
  export default nextConfig;
  
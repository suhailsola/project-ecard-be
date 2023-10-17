import packageJson from '../package.json';

/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
const config = {
    version: packageJson.version,
    name: packageJson.name,
    description: packageJson.description,

    nodeEnv: process.env['NODE_ENV'] ?? 'development',
    port: process.env['PORT'] ?? 3000,
    // Database
    postgres: {
        host: process.env["POSTGRES_HOST"],
        port: process.env["POSTGRES_PORT"],
        username: process.env["POSTGRES_USERNAME"],
        database: process.env["POSTGRES_DATABASE"],
        password: process.env["POSTGRES_PASSWORD"],
      },

    clientOrigins: {
        'test': process.env['DEV_ORIGIN'] ?? '*',
        'development': process.env['DEV_ORIGIN'] ?? '*',
        'production': process.env['PROD_ORIGIN'] ?? 'none'
    }
}

export default config
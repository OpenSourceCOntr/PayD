import app from './app';
import config from './config';
import logger from './utils/logger';

const port = config.port;

const server = app.listen(port, () => {
  logger.info(`🚀 PayD Backend Server listening on port ${port}`);
  logger.info(`📊 Environment: ${config.nodeEnv}`);
  logger.info(`🌍 Stellar Network: ${config.stellar.networkPassphrase}`);
  logger.info(`📡 Horizon URL: ${config.stellar.horizonUrl}`);
  logger.info(`🎯 SDS Enabled: ${config.sds.enabled}`);
  logger.info(`🔒 SDS Endpoint: ${config.sds.endpoint}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    logger.info('Server shutdown complete');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully...');
  server.close(() => {
    logger.info('Server shutdown complete');
    process.exit(0);
  });
});

export default server;

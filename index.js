require('./tracing'); // Must come first

const express = require('express');
const { trace, context } = require('@opentelemetry/api');
const client = require('prom-client');
const logger = require('./logger'); // Custom logger

const app = express();
const port = 4000;

// Prometheus metrics setup
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/', (req, res) => {
  logger.info('Root (/) route hit');
  res.send('👋 Welcome! Try visiting <a href="/hello">/hello</a> to see trace logs.');
});

app.get('/hello', (req, res) => {
  const currentSpan = trace.getSpan(context.active());

  if (currentSpan) {
    const traceId = currentSpan.spanContext().traceId;
    logger.info('Hello route hit', { traceId: traceId });
  } else {
    logger.warn('No active span found for /hello');
  }

  res.send('Hello This is Sainath 👋');
});

app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    const metrics = await register.metrics();
    res.end(metrics);
  } catch (ex) {
    res.status(500).end(ex);
  }
});

app.listen(port, () => {
  logger.info(`🚀 Server running at http://localhost:${port}`);
});

// tracing.js
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

// Optional: Add Winston or other instrumentation if needed
// const { WinstonInstrumentation } = require('@opentelemetry/instrumentation-winston');
// const winstonInstrumentation = new WinstonInstrumentation();

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: 'http://localhost:4318/v1/traces', // Adjust if using different endpoint
  }),
  instrumentations: [
    getNodeAutoInstrumentations(),
    // winstonInstrumentation, // Uncomment if using Winston
  ],
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'my-observability-app',
  }),
});

(async () => {
  try {
    await sdk.start();
    console.log('✅ OpenTelemetry Tracing initialized');
  } catch (err) {
    console.error('❌ OpenTelemetry failed to start', err);
  }
})();

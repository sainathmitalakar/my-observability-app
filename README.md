# 🚀 My Observability Stack | Node.js + Prometheus + Grafana + Loki + Tempo

Welcome to the complete local observability playground built by **Sainath Mitalakar** 💥 — designed to monitor your Node.js application using **metrics**, **logs**, and **traces** from scratch with no cloud dependency.

> 🧠 Built with love to learn, observe, and trace like a DevOps legend.

---

## 📦 Stack Overview

| Tool         | Role                          |
|--------------|-------------------------------|
| Node.js      | Sample app with instrumentation |
| Prometheus   | Collects metrics               |
| Grafana      | Visualizes everything          |
| Loki         | Collects logs                  |
| Promtail     | Sends logs to Loki             |
| Tempo        | Handles distributed tracing    |
| OpenTelemetry | Adds trace & metric support to Node.js |

---

## 🛠️ How to Run This Project (Local Setup on Windows)

### 1️⃣ Clone this repo
```bash
git clone https://github.com/sainathmitalakar/my-observability-app.git
cd my-observability-app
2️⃣ Install Node.js dependencies
bash
Copy
Edit
npm install
3️⃣ Start your Node.js app
bash
Copy
Edit
node index.js
This runs the Express app on:
http://localhost:3000/hello

4️⃣ Run observability services (using Windows binaries)
Open 5 terminals and run the following commands one by one:

bash
Copy
Edit
# 1. Start Prometheus
.\prometheus\prometheus.exe --config.file=configs/prometheus.yaml

# 2. Start Loki
.\loki\loki.exe --config.file=configs/loki.yaml

# 3. Start Tempo
.\tempo\tempo.exe --config.file=configs/tempo.yaml

# 4. Start Promtail
.\promtail\promtail.exe --config.file=configs/promtail.yaml

# 5. Start Grafana
.\grafana\grafana.exe
🌐 Access Dashboards
Tool	URL
Grafana	http://localhost:3000
Prometheus	http://localhost:9090
Loki	http://localhost:3100
Tempo	http://localhost:3200

🔍 Key Features
🎯 Real-time metrics from Node.js via prom-client

🪵 Log scraping and labeling with Promtail → Loki

🔎 Distributed tracing with OpenTelemetry → Tempo

📊 One unified dashboard in Grafana

🧠 Fully local setup — no cloud needed

📂 Folder Structure
perl
Copy
Edit
my-observability-app/
├── index.js                  # Node.js Express app
├── tracing.js                # OpenTelemetry instrumentation
├── logger.js                 # Winston logger with trace context
├── jsconfig.json
├── mimir.yaml                # Optional config
├── configs/                  # YAML configs for all services
├── loki/                     # Loki binary
├── tempo/                    # Tempo binary
├── promtail/                 # Promtail binary
├── prometheus/               # Prometheus binary
├── grafana/                  # Grafana binary
└── README.md
✨ Observability Flow Diagram
scss
Copy
Edit
User → Node.js → Prometheus (metrics)
               → Loki (logs via Promtail)
               → Tempo (traces via OpenTelemetry)
                        ↓
                   Grafana (dashboards)
🙋‍♂️ Author
Sainath Mitalakar
🚀 DevOps Engineer | Systems Architect
🔗 Topmate | LinkedIn | 🇮🇳 India


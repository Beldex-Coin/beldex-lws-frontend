# 💎 Beldex LWS Frontend

A high-performance, secure, and visually stunning web interface for the **Beldex Light Wallet Service (LWS)**. Built with React and TypeScript, it provides a premium experience for managing Beldex (BDX) transactions.

---

## 🔗 Official Links

*   **Official Web Wallet**: [wallet.beldex.io](https://wallet.beldex.io)
*   **Official Website**: [beldex.io](https://beldex.io)
*   **Block Explorer**: [explorer.beldex.io](https://explorer.beldex.io)

---

## 🚀 Getting Started

### Prerequisites

*   **Node.js**: v16.x or higher
*   **npm**: v8.x or higher

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Beldex-Coin/beldex-lws-frontend.git
    cd beldex-lws-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    The project includes a `.env` file with empty variables. You only need to fill in the required values as described in the [Configuration](#-configuration-env) section.

---

## ⚙️ Configuration (.env)

The application is configured using environment variables. Below are the key parameters and placeholders for different networks.

### Environment Variables

| Variable | Description |
| :--- | :--- |
| `NETTYPE` | **Network Type**: `0` for Mainnet, `1` for Testnet, `2` for Stagenet. |
| `SERVER_URL` | **LWS API Endpoint**: The URL of your Beldex Light Wallet Service. |
| `APP_NAME` | **App Identity**: Name used in User-Agent and headers. |
| `APP_VERSION` | **Version**: Current version of the application. |

### 📝 Example: Mainnet Template
To connect to a Mainnet LWS, update your `.env` with:

```env
NETTYPE = 0
SERVER_URL = <mainnet_lws_api_url>
APP_NAME = <your_app_name>
APP_VERSION = <version_number>
WEB_VERSION = <web_version_number>
```

### 🧪 Example: Testnet Template
For development and testing on Testnet:

```env
NETTYPE = 1
SERVER_URL = <testnet_lws_api_url>
APP_NAME = <your_app_name>
APP_VERSION = <version_number>
WEB_VERSION = <web_version_number>
```

---

## 🛠 Available Scripts

### `npm start`
Runs the app in **development mode**.
The app will be available at [http://localhost:8080](http://localhost:8080).

### `npm run build`
Builds the app for **production** to the `dist` folder.
It bundles React in production mode and optimizes the build for maximum performance.

### `npm test`
Launches the test runner in interactive watch mode.

---

## 🏗 Technology Stack

*   **Core**: React 18 & TypeScript
*   **State**: Redux Toolkit & Redux Persist
*   **Styling**: Material UI (MUI) & SASS
*   **Bundler**: Webpack 5
*   **Icons**: MUI Icons

---

## 📄 License

This project is proprietary. For licensing inquiries, please contact the [Beldex Team](https://beldex.io).

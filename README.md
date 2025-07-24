
# 📶 DetectNQI

![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript)
   
**DetectNQI** is a lightweight JavaScript utility to detect the **Network Quality Index (NQI)** based on round-trip time (RTT) to download a small static resource. It classifies the connection into a gear rating from **1 (slow)** to **10 (fast)**, which can be used to adapt application behavior based on current network conditions.

---

## 📦 Installation

Clone or copy the file directly into your project:

```bash
git clone https://github.com/poen0121/nqi.git
```

Or manually download the `nqi.js` file and place it in your project along with a file named `nqi.dat`.

> ⚠️ `nqi.dat` must be a static file hosted alongside `nqi.js` for accurate RTT measurement.

---

## 🛠️ Usage

```js
import { DetectNQI } from './nqi.js';

(async () => {
  const result = await DetectNQI({ debug: true });
  console.log(result);
  // Example output: { rtt: 142.35, gear: 8 }
})();
```

### Parameters

| Name   | Type    | Default | Description                          |
|--------|---------|---------|--------------------------------------|
| debug  | Boolean | `false` | Enable console logging for debugging |

### Returns

A `Promise` that resolves to an object:

```ts
{
  rtt: number | null,  // RTT in milliseconds
  gear: number         // Gear level from 0 (no signal) to 10 (very fast)
}
```

---

## 📁 Project Structure

```
nqi/
├── nqi.js   // Main script
└── nqi.dat  // Small static file for RTT test
```

---

## 🧪 Debug Mode

Enable debug mode to log detailed info to the browser console:

```js
await DetectNQI({ debug: true });
// Console output:
// NQI: rtt=83.12 ms, gear=9
```

---

## ℹ️ Notes

This utility is intended for simple, client-side network quality estimation and does not guarantee precise latency measurement.  
For production-critical networking, consider using more robust tools like WebRTC statistics or server-side metrics.

---

## 📜 License

This project is licensed under the GNU General Public License (GPL) v3.0. You can freely use, modify, and distribute the code, but any derivative works must also be licensed under the GPL, and the source code must be made available.

See the full GPL license text at https://www.gnu.org/licenses/gpl-3.0.html.
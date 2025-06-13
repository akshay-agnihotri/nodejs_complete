# 🚀 ExpressJS के Internals को समझते हैं - Code Deep Dive

## 📋 हमारा Basic ExpressJS Code

```javascript
const http = require("http");
const express = require("express");

const app = express();

// Middleware functions
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2: Processing request...");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = 3000;

// const httpServer = http.createServer(app);
// httpServer.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## 🔍 ExpressJS के Internals में Deep Dive

### 📂 GitHub Repository Structure
ExpressJS एक open source framework है, तो हम इसके code को देख सकते हैं:
- GitHub repository में जाएं
- `lib` folder में click करें
- `response.js` file खोलें

### 🔎 `send()` Function की Internal Working

जब हम `res.send("Hello, World!")` use करते हैं, तो internally यह क्या होता है:

#### 🧪 Data Type Analysis
ExpressJS internally check करता है कि आप कौन सा data send कर रहे हैं:

1. **String Data** 📝
   - अगर string है तो content-type `text/html` set करता है
   - लेकिन सिर्फ तभी जब पहले से set नहीं है

2. **Other Data Types** 🔢
   - Number, Boolean etc. के लिए
   - Content-type को `binary` या `json` set करता है

#### 💡 Key Points:
- यह automatically headers set करता है
- By the way you can overwrite the header using ```setHeader``` 

## 🎯 Code Simplification - Server Setup

### पुराना तरीका (Longer Way):
```javascript
const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### नया तरीका (Shorter Way):
```javascript
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## 🔧 `app.listen()` की Internal Working

### 📋 application.js file में देखें:
जब आप `app.listen()` call करते हैं, internally यह होता है:

1. **Step 1**: `http.createServer(app)` call करता है
2. **Step 2**: उस server object पर `.listen()` call करता है

```javascript
// Internally ExpressJS यह करता है:
const server = http.createServer(app);
return server.listen(PORT, callback);
```

## ✨ Final Optimized Code

```javascript
const express = require("express"); // http import हटा दिया

const app = express();

// Middleware functions
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2: Processing request...");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## 🎓 Key Learnings

### ✅ ExpressJS के Fayde:
1. **Clean Code Structure** 📚
2. **Middleware Funnel System** 🔄
3. **Code की कमी** 💪
4. **Built-in Functionality** ⚡

### 🤔 आगे के सवाल:
- Different routes कैसे handle करें? (`/message`, `/` etc.)
- Incoming requests को आसानी से कैसे read करें?

## 🚀 Pro Tips

### 🔍 Code Investigation Technique:
- Open source libraries के code को देखना
- Internal working समझने के लिए
- Custom solutions बनाने के लिए
- Headers और functionality को समझने के लिए

### 📖 Learning Method:
1. GitHub repository explore करें
2. Key files (response.js, application.js) देखें  
3. Functions को search करें
4. Internal implementation समझें

---

**Next Steps:** अब हम देखेंगे कि different routes कैसे handle करते हैं और incoming requests को कैसे easily read करते हैं! 🎯
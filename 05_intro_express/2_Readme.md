# 🚀 Express.js Install Karte Hain!

## 🗂️ Project Setup

Hamare project mein **Express.js add** karte hain! Tum chahe toh **new project** bhi bana sakte ho.

**Important:** `nodemon` install karna mat bhoolna! 📝


## 📦 Express.js Install Karna

### 💻 Command:
```bash
npm install --save express
```

### 🤔 --save Kyun, --save-dev Kyun Nahi?
- Yeh **production dependency** hai
- Sirf development tool nahi hai
- Application ka **integral part** hai
- Server par deploy karte time bhi **zaroori** hai
- Application ka **major piece** hai

### ✅ Installation Check
Install hone ke baad **package.json** mein entry add ho jayegi `dependencies` section mein!

## 🔧 Express.js Use Karna

### 📝 Import Statement
**app.js** file mein:

```javascript
const express = require('express');
```

### 📚 Organization Tip
Main imports ko **separate** karta hun:
- Node specific modules
- Third party packages  
- Own imports

*Empty lines se clearly dikh jata hai kya kya hai!* 

## 🏗️ Express App Create Karna

### 🎯 App Banayenge:
```javascript
const app = express();
```

### 🔍 Behind The Scenes
- **Express package** ek function export karta hai
- `Ctrl/Cmd + Click` karke source code dekh sakte ho
- Function execute karne se **new object** milta hai
- Express framework **lot of logic** manage karta hai behind the scenes

## 🌐 Server Setup

### ⚡ Quick Setup:
```javascript
// app itself ek valid request handler hai!
http.createServer(app)
```

### 🏃‍♂️ Run Karo:
```bash
npm start
```

### 🤷‍♂️ Kya Hoga?
- Server **running** hoga
- Lekin **requests handle nahi** hongi
- Kyunki abhi **logic define** nahi kiya
- App **almost nothing** kar raha hai

### 🔑 Key Point
**Express.js** ek **specific way** setup karta hai incoming requests handle karne ka - yeh uski **key characteristic** hai!

*Next lecture mein dekhenge kya hai yeh!* 🎓✨
# 📝 Response Mein Data Kaise Bhejein?

Abhi tak hum sirf console mein log kar rahe the, lekin wo zyada interesting data nahi dikhata. Isliye hum response object `res` ka use karenge data bhejne ke liye.

## 🛠️ Response Headers Set Karna

`res` ke paas kuch methods hote hain, jaise `setHeader`. Isse hum response ke headers set kar sakte hain.

**Example:**

```javascript
res.setHeader('Content-Type', 'text/html');
```

Yeh browser ko batata hai ki jo hum bhej rahe hain, wo **HTML content** hai. Browser is header ko samajhta hai aur uske hisaab se response ko render karta hai.

## 🧩 Headers Ki Limit

Browser sirf kuch specific headers samajhta hai, toh hum sirf wahi set karte hain. Aage chalke hum ek package bhi seekhenge jo automatically content type set kar deta hai, jisse manual set karne ki zarurat nahi padti.

## 📄 HTML Response Body Likhen

Ab header set ho gaya, lekin abhi tak humne HTML content nahi bheja. Iske liye hum `res.write()` use karte hain.

`res.write()` multiple times call kar sakte hain, jaise hum response ke chunks ya lines likh rahe ho.

**Example:**

```javascript
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Hello from my Node.js server</h1></body>');
res.write('</html>');
```

Yeh thoda complex lag sakta hai, par baad mein hum ek asaan tareeka seekhenge HTML bhejne ka.

## 🛑 Response Ko End Karna Zaroori Hai

Jab humne headers set kar diye aur saara content likh diya, tab hum `res.end()` call karte hain. `res.end()` ke baad hum response mein kuch aur nahi likh sakte, warna error aayegi.

`res.end()` karte hi Node.js browser ko ye pura response bhej deta hai.

## 💻 Output Dekhna

File save karo aur `node app.js` dobara chalayein. Browser mein localhost:3000 reload karo.

Ab tumhe page par "Hello from my Node.js server" dikhai dega.

## 🔍 Developer Tools Mein Response Dekhna

Chrome developer tools (ya kisi bhi browser ka developer tools) open karo, network tab mein request select karo. Wahan tum headers dekh sakte ho — jaise `Content-Type: text/html` jo humne set kiya tha. Aur response body mein tumne jo HTML likha, wo bhi dekh sakte ho.

## 🚀 Aage Ka Plan

Ye basic tareeka hai response bhejne ka Node.js mein. Aage chalke hum Express.js framework seekhenge jisse ye sab kaam bahut asaani se ho jata hai. Lekin pehle yeh samajhna zaroori hai ki peeche kya ho raha hai.

Ab hum seekhenge ki request se data kaise lein, aur response mein kaise bhejen.

---

### Complete Example Code:

```javascript
// Complete server setup with response handling
const http = require('http');

const server = http.createServer((req, res) => {
    // Set response header
    res.setHeader('Content-Type', 'text/html');
    
    // Write HTML content
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
    
    // End the response
    res.end();
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

### Commands to Run:

```bash
# Save the file as app.js and run
node app.js

# Open browser and visit
# http://localhost:3000
```
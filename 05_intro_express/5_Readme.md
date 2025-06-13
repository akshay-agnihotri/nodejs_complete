# Express.js Form Handling aur Data Extraction 📝

## HTML Form Setup 🎨
Form banana hai jisme user data enter kar sake:

```html
<form action="/product" method="post">
  <input type="text" name="title">
  <button type="submit">Add Product</button>
</form>
```

## Route Middleware Setup 🛣️
POST request handle karne ke liye middleware banayenge:

```javascript
app.use('/product', (req, res, next) => {
  console.log(req.body); // Form data yahan milega
  res.redirect('/'); // Success ke baad redirect
});
```

## Body Parser Installation 📦
Request body ko parse karne ke liye package install karna padega:

```bash
npm install --save body-parser
```

## Why Separate Package? 🤷‍♂️
- **History**: Pehle Express mein built-in tha, phir remove kiya, phir wapas add kiya
- **Future-proof**: Agar express se phir remove ho jaye toh hamara code still work karega
- **Recommended approach**: Express team khud recommend karti hai separate package use karna
- **Stability**: Third-party package zyada stable aur reliable hai

## Body Parser Configuration ⚙️

```javascript
const bodyParser = require('body-parser');

// Middleware register karo
app.use(bodyParser.urlencoded({ extended: false }));
```

## Key Points 🔑
- **Order matters**: Body parser middleware routes se pehle lagana chahiye
- **Auto parsing**: Manual string parsing ki zarurat nahi
- **Object format**: Data JavaScript object ke form mein milta hai
- **Server restart**: Naya package install karne ke baad server restart karo
- **Extensible**: Different parsers for different data types (files, JSON, etc.)

## Output Example 📊
Form submit karne ke baad console mein milega:

```javascript
{ title: 'Book' } // Clean object formatx`x 
```

## Next Challenge 🤔
Abhi ye middleware GET aur POST dono requests ke liye run hota hai. Sirf POST requests handle karne ka solution next step mein dekheंge! 🚀
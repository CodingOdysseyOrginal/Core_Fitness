const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51PSedh03TvbBrOXuutOEjhbvNip57YxSiTRzJZZA9jeEfQeNsRhYlfdVquJMQjygvjlLDactT3n5ykZ83kXgJftr00bidthM6R');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    const items = req.body.items;
    let lineItems = items.map(item => ({
        price: item.id,
        quantity: item.quantity
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(4000, () => console.log("Listening on port 4000!"));

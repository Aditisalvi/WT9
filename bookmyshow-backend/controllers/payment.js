const Stripe = require('stripe');

const stripe = Stripe('YOUR_STRIPE_SECRET_KEY');

exports.createPayment = (req, res) => {
  const payment = new Payment({
    user: req.user._id,
    amount: req.body.amount,
    currency: req.body.currency
  });

  payment.save((err, payment) => {
    if (err) return res.status(400).send(err);
    stripe.charges.create({
      amount: payment.amount,
      currency: payment.currency,
      source: payment.source
    }, (err, charge) => {
      if (err) return res.status(400).send(err);
      res.json(charge);
    });
  });
};

let budgetData = {
  purchases: [
    {
      id: 1,
      description: 'Shake Shack',
      price: 10,
      category: 'food'
    },
    {
      id: 2,
      description: 'World Gas',
      price: 40,
      category: 'gas'
    },
    {
      id: 3,
      description: 'Terry\'s T-Shirts',
      price: 25,
      category: 'other'
    },
    {
      id: 4,
      description: 'Crescent Village Apartments',
      price: 500,
      category: 'rent'
    }
  ],
  budgetLimit: 1000
}
const timer = 2000;
let id = 4;
module.exports = {
  budgetData: (req, res) => {
    setTimeout(() => res.send(budgetData), timer)
  },
  purchase: (req, res) => {
    const { description, price, category } = req.body;
    if (description && price && category) {
      id++;
      budgetData.purchases.push({
        id,
        description,
        price,
        category
      })
      setTimeout(() => res.send(budgetData.purchases.reverse()), timer);
    } else {
      res.status(400).json(`Missing info: you send description: ${description}, price: ${price}, category: ${category}`);
    }
  },
  remove(req, res) {
    const { id } = req.params;
    budgetData.purchases = budgetData.purchases.filter(purchase => purchase.id !== parseInt(id))
    setTimeout(() => res.send(budgetData.purchases), timer)
  }
}
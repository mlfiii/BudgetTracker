let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/budget", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// name: {
//     type: String,
//     trim: true,
//     required: "Enter a name for transaction"
//   },
//   value: {
//     type: Number,
//     required: "Enter an amount"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }

let budgetSeed = [
    {
        name: 'Check Deposit',
        value: 5000,
        date: Date.now()

    },
    {
        name: 'Mortgage',
        value: -1000,
        date: Date.now()
    },
    {
        name: 'Groceries',
        value: -100,
        date: Date.now()
    },
    {
        name: 'Books',
        value: -200,
        date: Date.now()
    }
];

db.Transaction.deleteMany({})
    .then(() => db.Transaction.collection.insertMany(budgetSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

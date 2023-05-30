const articles = [{
    name: 'Tennis',
    amount: 5,
    price: 90000,
},
{
    name: 'Gap',
    amount: 7,
    price: 30000,
},
{
    name: 'T-Shirt',
    amount: 8,
    price: 20000,
},
{
    name: 'Jacket',
    amount: 3,
    price: 150000,
},
{
    name: 'Skirt',
    amount: 9,
    price: 50000,
},
]

//create a function which calculates the total of the sum of the quantities times the price of the items

const calculateTotal = (articles) => {
    const total = articles.reduce((total, article) => {
        const {amount, price} = article;
        return total + (amount * price);
    }, 0);
    return total;
}

const result = calculateTotal(articles);
console.log(result);


//create a function which checks the stock of an article, if there is stock that returns a message saying that there is availability, otherwise that there is no availability
const queryStock = (articles, name ,query) => {
    const articleStock = articles.find(article => article.name === name);

    if(articleStock && articleStock.amount >= query) {
        return `the article '${name}' have the requested quantity (${query}) in stock`;
    } else {
        return `the article '${name}' does not have enough stock for the quantity ordered`;
    }
}

console.log(queryStock(articles, 'Gap', 6));

//create a function which creates a new array with name and price and also filters the items whose prices are greater than 50000.

const filterArticles = articles
.map(article => ({name: article.name, price: article.price}))
.filter(article => article.price > 50000);

console.log(filterArticles);
# E-Commerce Scraper

Collect product and reviews from a different e-commerce stores. 

Note that current repo is in its early stages

## If you like this tool then please Star it

## Supported Stores
 - https://www.target.com/

## Features
-   **Scrape products**
-   **Scrape reviews by product Id**

## To Do
-   [ ] Add proxy support
-   [ ] Run from the CLI
-   [ ] Save output to the CSV/JSON files
-   [ ] Add more stores
       - [ ] https://www.walmart.com/ 
       - [ ] https://www.bol.com/
       - [ ] I'm open to add more stores. Not Amazon and preferably with Alexa rank starting from 10k

**Possible errors**

-   If there will be let me know

## Installation

**Install from NPM**

```sh
$ npm i e-scraper
```

**Install from YARN**

```sh
$ yarn add e-scraper
```

## USAGE

# Module


**Options**

```javascript
const options = {
    // Store name
    // Supported stores: Target
    store: "Target",

    // When you search for a product, you need to specify keyword value
    keyword: 'xbox',
    
    // When you need to collect reviews, you need to specific productId value
    productId: '334343',

    // Number of products or reviews to collect
    number: 50,
    
    // Number of products or reviews to skip
    offset: 50,
    
    // Set store ID
    // Some stores can have different store Id values
    // Default {storeId} value for a Target is 3991
    storeId: 3991,
    
    // Include in search result promoted values
    // Some stores can include promoted products in to the response
    // Target does support this option
    // Default {sponsoredProducts} is 1
    sponsoredProducts: 1,
};
```

```javascript
const { product, reviews } = require('e-scraper');

(async () => {
    try {
        // Collect products
        const products = await product({ store: 'Target' keyword: 'Xbox ', number: 50 });
        // Collect reviews
        const reviews = await reviews({ store: 'Target', productId: '232323', number: 50 });

    } catch (error) {
        console.log(error);
    }
})();
```

**JSON output:**

```javascript
{
    total: '829',
    has_more: true,
    next: 91,
    output: [{Reviews, Products...}]
}
```


---

## License

**MIT**

**Free Software**

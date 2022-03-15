
# Task

A Rest API in PHP for product Listing Page



## Features

- Product Listing
- Filters by Price Range, Color and Category.
- Sort by price in Ascending And Descending Order.
## Screenshot

- Home Page
![](./screenshot/HomePage.png)
- To load All product Details click on get all product and the data appears
![](./screenshot/loadedData.png)
- To Apply Filters on Price Click On Price To Sort it Either in ascending or descending order.
![](./screenshot/filterAscending.png)
![](./screenshot/ascendingData.png)
Applying Descending Order Filter
![](./screenshot/DescendingData.png)
- Filter Data In Range
![](./screenshot/FilterRangeSelection.png)
<1000
![](./screenshot/lt1000.png)
![](./screenshot/lt1000part2.png)
1000-2000
![](./screenshot/gt1000.png)
 \>2000
![](./screenshot/gt2000.png)
- Filter Based On Color
![](./screenshot/colorblue.png)
if gold is used as filter
![](./screenshot/colorgold.png)
> Note that based on other colors we can filter the data
- Filter Based on Category
![](./screenshot/personalizedJewelery.png)
if Necklace is used as Filter
![](./screenshot/necklace.png)
> Note that based on other category we can filter the data

## Technology used

- PHP,HTML,BOOTSTRAP,AJAX And JAVAScript
- MySQL Database

## Run Locally

Clone the project

```bash
  git clone https://github.com/rougesocket/RestAPI-Task.git
```

Go to the project directory

```bash
  cd RestAPI-Task
```

## Setup On Local Machine
1. Download the product_list.csv from the repo
2. Install XAMPP
3. Go to PHP MyAdmin And Create a New Database with name "product"
4. Go to import and import the csv file into your database.
5. Optional : Make Necessary Changes accordingly in API/utility/connection.php if name of database or table or port is different.


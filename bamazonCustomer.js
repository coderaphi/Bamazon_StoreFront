//require------------------------->
var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require("cli-table");

// connection criteria to mysql---------------------------------------->
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sunflash23#",
    database: "bamazon",

});

// create connection to mysql---------------------------------------->
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
    // displayProducts();
    displayProducts()
    start();


});

// query product details from mysql---------------------------------------->
function start() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;

        var choiceArray = [];

        for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].item_id.toString());
        }

        inquirer
            .prompt([
                {
                    name: "item",
                    type: "rawlist",
                    message: "what is the Item ID",
                    choices: choiceArray
                    
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many units would you like to buy?",
                    validate: function(v) {
                        if(!v || isNaN(v)) {
                            connection.destroy();
                            return 'Please enter a valid qty';
                        }
                        return true;
                    }
                }
            ])
            .then(function (answer) {
                var qty = parseInt(answer.quantity);
                var ID = parseInt(answer.item);
                for (var i = 0; i < results.length; i++) {

                    var chosenItem = results[i];

                    if (chosenItem.item_id  === ID) {

                        if (chosenItem.stock_quantity < qty) {
                            console.log("Sorry we are unable to fullfill your order due to limited quantity");
                            connection.destroy();
                        }
                        else {
                            
                            console.log("your order has been placed, Thank you for the order");
                            var newQty = chosenItem.stock_quantity - qty;
                            updateProdQty(ID, newQty);   
                        }
                        break;
                    }

                }
 
            })
    });
}


function updateProdQty(id, qty) {
    return connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [qty, id], function (err, results) {
        if (err) throw err;

        displayProducts(true);
    });
}

function exitPrompt() {
    inquirer
            .prompt([
                {
                    name: "quit",
                    type: "rawlist",
                    message: "Do you want to exit? ",
                    choices: ["yes","no"]
                    
                }
            ])
            .then(function (response){
                if(response.quit === 'yes') {
                    connection.destroy();
                } else {
                    start();
                }
            });
}

function displayProducts(showExit) {
    var table = new Table({
        head: ['Item ID', 'Name', 'Type', 'Price', 'Quantity']
        , colWidths: [10, 20, 10, 10, 10]
    })
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            strOut = '';
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity])


        }
        console.log(table.toString());
        
        if (showExit) {
            exitPrompt();
        }
    });


}




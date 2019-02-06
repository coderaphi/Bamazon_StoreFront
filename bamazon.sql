DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price INT,
stock_quantity INT,

PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Tomatoes", "fruits", 5, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Papayas", "fruits", 3, 8);	

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("grapes", "fruits", 2, 6);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Mandarines", "fruits", 3, 12);	
	
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dates", "fruits", 3, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Apples", "fruits", 5, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("berries", "fruits", 3, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("cherries", "fruits", 7, 12);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("mangoes", "fruits", 3, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("tangerines", "fruits", 1, 2);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("pomagrenate", "fruits", 15, 8);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("banana", "fruits", 2, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("guava", "fruits", 2, 14);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("avacado", "fruits", 15, 4);	
		

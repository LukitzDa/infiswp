Leetcode 2 Aufgaben- bis 4.3.2025

Aufgabe 6 Replace Employee ID With The Unique Identifier:
SELECT unique_id, name
FROM employees e
LEFT JOIN EmployeeUni eu
ON e.id = eu.id

Aufgabe 7: Product Sales Analysis I:
SELECT p.product_name, s.year, s.price
FROM sales s
LEFT JOIN product p
USING(product_id)
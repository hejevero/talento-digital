-- CONSULTAS COMPLEMENTARIAS
INSERT INTO country (country_id, country, last_update) VALUES (600, "Chile", CURRENT_DATE);
INSERT INTO city (city_id, city, country_id, last_update) VALUES (600, "Coquimbo", 600, CURRENT_DATE);
INSERT INTO address (address_id, address, address2, distric, city_id, postal_code, phone, last_update) VALUES(600, "Coquimbo", "Coquimbo", "Coquimbo", 600, 1780000, "987654321", CURRENT_DATE);

-- PUNTO 1
-- TABLA CUSTOMER
SELECT * FROM customer;

INSERT INTO customer (customer_id, store_id, first_name, last_name, email, address_id, activebool, create_date, last_update, active) VALUES (600, 1, "Helmo", "Velásquez", "hejevero@gmail.com", 600, true, CURRENT_DATE, CURRENT_DATE, 1);

UPDATE FROM customer
SET first_name = "Jesús", last_name = "Rodríguez", email = "helmo.velasquez@gmail.com"
WHERE customer_id = 600;

DELETE FROM customer
WHERE customer_id = 600;

-- TABLA STAFF
SELECT * FROM staff;

INSERT INTO staff (staff_id, first_name, last_name, address_id, email, store_id, active, username, password, last_update, picture) VALUES (600, "Helmo", "Velásquez", 600, "hejevero@gmail.com", 1, true, "hejevero", "1234567890", CURRENT_DATE, "https://pictures.cl/picture.png");

UPDATE staff
SET first_name = "Jesús", last_name = "Rodríguez", email = "helmo.velasquez@gmail.com"
WHERE staff_id = 600;

DELETE FROM staff 
WHERE staff_id = 600;

-- TABLA ACTOR
SELECT * FROM actor;

INSERT INTO actor (actor_id, first_name, last_name, last_update)
VALUES (201, "Helmo", "Velásquez", CURRENT_DATE);

UPDATE FROM actor
SET last_name = "Rodríguez"
WHERE actor_id = 201;

DELETE FROM actor
SET actor_id = 201;

-- Punto 2
-- Listar todas las rental con los datos de customer dado un año y mes
SELECT * FROM rental;

SELECT * FROM rental 
JOIN customer ON rental.rental_id = customer.customer_id
WHERE EXTRACT(MONTH FROM rental.rental_date) = "5" 
AND EXTRACT(YEAR FROM rental.rental_date) = "2005"

-- Punto 3
-- Listar numero, fecha (payment_date) y total (amount) de todas las payment
SELECT * FROM payment

SELECT payment.payment_id AS Identificador, payment.payment_date AS Fecha, payment.amount AS Total
FROM payment;

-- Punto 4
-- Listar todas las film del año 2006 que contengan un (renta_rate) mayor a 4.0
SELECT * FROM film;

SELECT * FROM film 
WHERE rental_rate > "4" 
AND release_year = "2005";
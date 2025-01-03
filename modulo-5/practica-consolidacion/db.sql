SELECT * FROM customer;

INSERT INTO customer (customer_id, store_id, first_name, last_name, email, address_id, activebool, create_date, )
VALUES (600, 1, 'Helmo', 'Velásquez', 'hejevero@gmail.com', 200, true, CURRENT_DATE, CURRENT_DATE, 1);

UPDATE FROM customer
SET email = 'helmo.velasquez@gmail.com'
WHERE customer_id = 600;

DELETE FROM customer
WHERE customer_id = 600;















DELETE FROM Staff
WHERE staff_id = 3;

-- ACTOR
SELECT * FROM actor;

INSERT INTO actor (actor_id, first_name, last_name, last_update)
VALUES (201, 'Helmo', 'Velásquez', CURRENT_DATE);

UPDATE FROM actor
SET last_name = 'Rodríguez'
WHERE actor_id = 201;

DELETE FROM actor
SET actor_id = 201;

-- Punto 2
-- Listar todas las rental con los datos de customer dado un año y mes
SELECT * FROM rental;

SELECT * FROM rental JOIN customer ON rental.rental_id = customer.customer_id
WHERE EXTRACT (MONTH FROM rental.rental_date) = '05' AND EXTRACT(YEAR FROM rental.rental_date) = '2005'

-- Punto 3
-- Listar numero, fecha (payment_date) y total (amount) de todas las payment
SELECT * FROM payment

SELECT payment.payment_id, payment.payment_date, payment.amount 
FROM payment;

-- Punto 4
-- Listar todas las film del año 2006 que contengan un (renta_rate) mayor a 4.0
SELECT * FROM film;

SELECT * FROM film 
WHERE rental_rate > 4 AND release_year = 2005
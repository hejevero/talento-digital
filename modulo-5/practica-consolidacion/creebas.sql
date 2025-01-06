-- Sentencias SQL para crear la base de datos dvdrental

-- Creación de tabla "actor"
CREATE TABLE actor (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Creación de tabla "film"
CREATE TABLE film (
    film_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    release_year YEAR,
    language_id BIGINT NOT NULL,
    rental_duration BIGINT NOT NULL DEFAULT 3,
    rental_rate DECIMAL(4, 2) NOT NULL DEFAULT 4.99,
    length BIGINT,
    replacement_cost INTEGER NOT NULL DEFAULT 19990,
    rating CHAR(10) DEFAULT 'G',
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    special_features TEXT
    fulltext TEXT
);

-- Creación de tabla "customer"
CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    store_id BIGINT NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    email VARCHAR(50),
    address_id BIGINT NOT NULL,
    activebool BOOLEAN NOT NULL,
    create_date DATE NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    active BOOLEAN NOT NULL DEFAULT true
);

-- Creación de tabla "address"
CREATE TABLE address (
    address_id SERIAL PRIMARY KEY,
    address VARCHAR(50) NOT NULL,
    address2 VARCHAR(50),
    district VARCHAR(20) NOT NULL,
    city_id BIGINT NOT NULL,
    postal_code VARCHAR(10),
    phone VARCHAR(20) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Creación de tabla "city"
CREATE TABLE city (
    city_id SERIAL PRIMARY KEY,
    city VARCHAR(50) NOT NULL,
    country_id BIGINT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Creación de tabla "country"
CREATE TABLE country (
    country_id SERIAL PRIMARY KEY,
    country VARCHAR(50) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Creación de tabla "inventory"
CREATE TABLE inventory (
    inventory_id SERIAL PRIMARY KEY,
    film_id BIGINT NOT NULL,
    store_id BIGINT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Creación de tabla "payment"
CREATE TABLE payment (
    payment_id SERIAL PRIMARY KEY,
    customer_id BIGINT NOT NULL,
    staff_id BIGINT NOT NULL,
    rental_id BIGINT NOT NULL,
    amount BIGINT NOT NULL,
    payment_date TIMESTAMP NOT NULL
);

-- Creación de tabla "rental"
CREATE TABLE rental (
    rental_id SERIAL PRIMARY KEY,
    rental_date TIMESTAMP NOT NULL,
    inventory_id BIGINT NOT NULL,
    customer_id BIGINT NOT NULL,
    return_date TIMESTAMP,
    staff_id BIGINT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Creación de tabla "staff"
CREATE TABLE staff (
    staff_id SERIAL PRIMARY KEY,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    address_id BIGINT NOT NULL,
    email VARCHAR(50),
    store_id BIGINT NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(40),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    picture TEXT
);

-- Creación de tabla "store"
CREATE TABLE store (
    store_id SERIAL PRIMARY KEY,
    manager_staff_id BIGINT NOT NULL,
    address_id BIGINT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Relaciones y claves foráneas
ALTER TABLE film ADD CONSTRAINT fk_language FOREIGN KEY (language_id) REFERENCES language(language_id);
ALTER TABLE customer ADD CONSTRAINT fk_address FOREIGN KEY (address_id) REFERENCES address(address_id);
ALTER TABLE address ADD CONSTRAINT fk_city FOREIGN KEY (city_id) REFERENCES city(city_id);
ALTER TABLE city ADD CONSTRAINT fk_country FOREIGN KEY (country_id) REFERENCES country(country_id);
ALTER TABLE rental ADD CONSTRAINT fk_inventory FOREIGN KEY (inventory_id) REFERENCES inventory(inventory_id);
ALTER TABLE rental ADD CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customer(customer_id);
ALTER TABLE rental ADD CONSTRAINT fk_staff FOREIGN KEY (staff_id) REFERENCES staff(staff_id);
ALTER TABLE payment ADD CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customer(customer_id);
ALTER TABLE payment ADD CONSTRAINT fk_staff FOREIGN KEY (staff_id) REFERENCES staff(staff_id);
ALTER TABLE payment ADD CONSTRAINT fk_rental FOREIGN KEY (rental_id) REFERENCES rental(rental_id);
ALTER TABLE store ADD CONSTRAINT fk_manager_staff FOREIGN KEY (manager_staff_id) REFERENCES staff(staff_id);
ALTER TABLE store ADD CONSTRAINT fk_address FOREIGN KEY (address_id) REFERENCES address(address_id);

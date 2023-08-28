-- Tabla de vehículos

CREATE TABLE cars (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  plateNumber VARCHAR(7) NOT NULL UNIQUE,
  year int(4) NOT NULL,
  color VARCHAR(255) NOT NULL,
  entryDate DATE NOT NULL,
  brand VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL
);
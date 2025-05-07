For database Query





/////Inside backend folder
pnpm install
pnpm init
pnpm add express mysql2 dotenv cors


create database harvest;
use harvest;
CREATE TABLE harvest_storage (
  id INT AUTO_INCREMENT PRIMARY KEY,
  step VARCHAR(255),
  process TEXT,
  storage_method TEXT,
  best_practice TEXT,
  date DATE
);

CREATE TABLE harvest_cleaning (
  id INT AUTO_INCREMENT PRIMARY KEY,
  step VARCHAR(255),
  process TEXT,
  cleaning_method TEXT,
  best_practice TEXT,
  date DATE
);

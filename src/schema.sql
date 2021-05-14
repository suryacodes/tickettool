
-- -----------------------------------------------------
-- Schema Ticketdesk
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ticketdesk`;

-- -----------------------------------------------------
-- Schema Ticketdesk
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ticketdesk` DEFAULT CHARACTER SET utf8 ; 

USE `ticketdesk`;
-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `users` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(1000) NOT NULL,
  `is_verified` Boolean NOT NULL DEFAULT false,
  `is_deleted`  Boolean NOT NULL DEFAULT false,
  `is_blocked`  Boolean NOT NULL DEFAULT false, 
  `created_at` DATETIME NOT NULL default now(),
  `updated_at` DATETIME NOT NULL default now(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;












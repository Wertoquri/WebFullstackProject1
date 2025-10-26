CREATE TABLE `comments`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `post_id` INT NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `comment` TEXT NOT NULL
);
ALTER TABLE
    `comments` ADD CONSTRAINT `comments_post_id_foreign` FOREIGN KEY(`post_id`) REFERENCES `products`(`id`);
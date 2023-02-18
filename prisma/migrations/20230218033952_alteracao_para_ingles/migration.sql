/*
  Warnings:

  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `produtos`;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_product` VARCHAR(191) NOT NULL,
    `purchase_price` DOUBLE NULL,
    `sale_price` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `products_name_product_key`(`name_product`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

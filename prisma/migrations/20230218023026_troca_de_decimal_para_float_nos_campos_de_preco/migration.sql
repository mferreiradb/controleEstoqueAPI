/*
  Warnings:

  - You are about to alter the column `valor_compra` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `valor_venda` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `produtos` MODIFY `valor_compra` DOUBLE NULL,
    MODIFY `valor_venda` DOUBLE NOT NULL;

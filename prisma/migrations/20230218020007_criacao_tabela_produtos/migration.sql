-- CreateTable
CREATE TABLE `produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_produto` VARCHAR(191) NOT NULL,
    `valor_compra` DECIMAL(65, 30) NULL,
    `valor_venda` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `produtos_nome_produto_key`(`nome_produto`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

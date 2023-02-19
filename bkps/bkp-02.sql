CREATE DATABASE  IF NOT EXISTS `controle_estoque` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `controle_estoque`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: controle_estoque
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('00a931c1-1e52-429d-b045-bc314e5633e8','d922fbdf8a89ca3f00af2b0f9ecf02b55281636dd6a03d9a5324a467a8ed0d09','2023-02-18 02:11:54.876','20230218021154_add_funcao_updatedat',NULL,NULL,'2023-02-18 02:11:54.863',1),('05df25c6-35ab-447e-aebb-666f5d256223','d0bc23b4691f6d39c75e22f963c4e19a72ac631e034132cccd7192e6fb059fc0','2023-02-18 02:00:07.336','20230218020007_criacao_tabela_produtos',NULL,NULL,'2023-02-18 02:00:07.311',1),('292c9118-f28b-43c2-b40b-cac8ca548cb0','39a1ea7f6b5082e89680899757620a40849bee965126bdb46403862d65cf65cb','2023-02-18 02:03:04.717','20230218020304_adicao_colunas_de_criacao_e_atualizacao_do_registro',NULL,NULL,'2023-02-18 02:03:04.699',1),('7300b594-9b7c-4559-8154-659e10e6a406','d7b20c3d1878a0a7fff405da67b3f5a0e91dfc59cb7c005b362922c120e6684c','2023-02-18 03:39:52.970','20230218033952_alteracao_para_ingles',NULL,NULL,'2023-02-18 03:39:52.948',1),('f83d778d-19c3-487e-8565-08ad4f4bc10f','b87273631d5142289da0cb8927749dfbce041779bb619c0d478345af58a8a460','2023-02-18 02:30:26.325','20230218023026_troca_de_decimal_para_float_nos_campos_de_preco',NULL,NULL,'2023-02-18 02:30:26.293',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_product` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `purchase_price` double DEFAULT NULL,
  `sale_price` double NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_name_product_key` (`name_product`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Test',10,20,'2023-02-18 03:41:28.529','2023-02-18 03:41:16.623'),(2,'Test 2',20,40,'2023-02-18 03:41:44.739','2023-02-18 03:41:31.660');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'controle_estoque'
--

--
-- Dumping routines for database 'controle_estoque'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-18  0:45:05

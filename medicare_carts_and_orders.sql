-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: medicare
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `carts_and_orders`
--

DROP TABLE IF EXISTS `carts_and_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts_and_orders` (
  `cartid` bigint NOT NULL,
  `dateofpurchase` varchar(255) DEFAULT NULL,
  `orderno` varchar(255) DEFAULT NULL,
  `payment` varchar(255) DEFAULT NULL,
  `productcategory` varchar(255) DEFAULT NULL,
  `productid` bigint DEFAULT NULL,
  `productimageurl` varchar(1000) DEFAULT NULL,
  `productname` varchar(255) DEFAULT NULL,
  `productprice` varchar(255) DEFAULT NULL,
  `qty` varchar(255) DEFAULT NULL,
  `totalprice` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cartid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts_and_orders`
--

LOCK TABLES `carts_and_orders` WRITE;
/*!40000 ALTER TABLE `carts_and_orders` DISABLE KEYS */;
INSERT INTO `carts_and_orders` VALUES (135,NULL,NULL,'notpaid','personalcare',312,'https://www.netmeds.com/images/product-v1/600x600/959573/mcaffeine_cappuccino_coffee_foaming_face_wash_kills_99_9_acne_causing_germs_with_vitamin_e_75_ml_0_0.jpg','mCaffeine Cappuccino Coffee Foaming Face Wash - Kills 99.9% Acne Causing Germs with Vitamin E 75 ml','194.65','2','389.3','admin'),(136,'Fri Dec 09 2022 23:17:55 GMT+0530 (India Standard Time)','12224','paid','personalcare',312,'https://www.netmeds.com/images/product-v1/600x600/959573/mcaffeine_cappuccino_coffee_foaming_face_wash_kills_99_9_acne_causing_germs_with_vitamin_e_75_ml_0_0.jpg','mCaffeine Cappuccino Coffee Foaming Face Wash - Kills 99.9% Acne Causing Germs with Vitamin E 75 ml','194.65','2','389.3','ppk06');
/*!40000 ALTER TABLE `carts_and_orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-09 23:19:49

-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: test1
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (15,'The Great Gatsby\"','A classic novel by F. Scott Fitzgerald that explores the American Dream in the Roaring Twenties.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6vD0kMF1FNqdM_Kfjrnk7G-Ftox5gMSkhQ&usqp=CAU',13),(16,'To Kill a Mockingbird',' Harper Lee\'s masterpiece about racial injustice and moral growth in the American South.','https://epqkkxb65h3.exactdn.com/wp-content/uploads/2023/02/m-2908.jpg',10),(17,'Nineteen Eighty-Four','George Orwell\'s dystopian novel depicting a totalitarian regime and the struggle for individual freedom.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0hBrYZnZbc6jO1JkCfMm-UT5W-d-mdzNBA&usqp=CAU',10),(18,'Pride and Prejudice','Jane Austen\'s classic romance novel focusing on love, class, and societal expectations.','https://cloudfront.penguin.co.in/wp-content/uploads/2022/01/9780143454229.jpg',9),(19,'The Hobbit','J.R.R. Tolkien\'s adventure about Bilbo Baggins, a hobbit who embarks on a quest to reclaim treasure guarded by a dragon.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCshfXFnijZ290nt7FFEBsqSvEMfVbqha7w&usqp=CAU',12);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-07 19:43:48

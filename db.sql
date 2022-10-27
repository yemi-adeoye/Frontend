-- MySQL dump 10.13  Distrib 5.1.36, for Win32 (ia32)
--
-- Host: localhost    Database: playgroundDB
-- ------------------------------------------------------
-- Server version	5.5.16-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL,
  `created_on` date DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `leaves_left` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `total_leaves` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `manager_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfemnv0llvsjg4adl4xl1m0cxv` (`manager_id`),
  KEY `FK6lk0xml9r7okjdq0onka4ytju` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (14,NULL,NULL,'UI Developer',20,'draco malfoy',20,5,10),(16,NULL,NULL,'UI Developer',6,'harry potter',20,7,12),(18,NULL,NULL,'Java Developer',20,'ronald weasley',20,17,12),(22,NULL,NULL,'Product Owner',20,'frodo baggins',20,21,12),(24,NULL,NULL,'Scrum Master',20,'bilbo baggins',20,23,12),(45,'2022-10-27',NULL,'Product Owner',20,'Geoff Squire',20,44,12);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (46);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_details`
--

DROP TABLE IF EXISTS `leave_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leave_details` (
  `id` bigint(20) NOT NULL,
  `days` int(11) DEFAULT NULL,
  `from_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `employee_id` bigint(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `response` varchar(1000) DEFAULT NULL,
  `record_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKg7k2fa9ibob9n169gs78g84vg` (`employee_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_details`
--

LOCK TABLES `leave_details` WRITE;
/*!40000 ALTER TABLE `leave_details` DISABLE KEYS */;
INSERT INTO `leave_details` VALUES (27,3,'2022-11-02','2022-11-04',16,'DENIED',NULL,'ACTIVE'),(28,2,'2022-11-29','2022-11-30',16,'APPROVED',NULL,'ACTIVE'),(33,4,'2022-12-22','2022-12-29',16,'PENDING',NULL,'DELETED'),(34,2,'2022-12-29','2022-12-30',16,'PENDING',NULL,'DELETED'),(35,2,'2022-10-28','2022-10-29',16,'APPROVED',NULL,'ACTIVE'),(36,3,'2022-11-16','2022-11-12',16,'DENIED','It is product summit time','ACTIVE'),(37,2,'2022-12-06','2022-10-07',16,'APPROVED',NULL,'ACTIVE'),(38,2,'2022-12-23','2022-12-24',16,'APPROVED',NULL,'ACTIVE'),(39,2,'2022-12-29','2022-12-30',16,'APPROVED',NULL,'ACTIVE'),(40,2,'2022-11-17','2022-11-18',16,'DENIED',NULL,'ACTIVE'),(41,3,'2022-12-07','2022-12-09',16,'APPROVED',NULL,'ACTIVE'),(42,1,'2022-10-29','2022-10-29',16,'APPROVED',NULL,'ACTIVE'),(43,3,'2022-12-20','2022-12-22',16,'DENIED','it is product lauch week','ACTIVE');
/*!40000 ALTER TABLE `leave_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manager` (
  `id` bigint(20) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlx8n4x9vqj3lqv8cj9ienwrv6` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES (10,NULL,'Senior Developer','Severus Snape',9),(12,NULL,'Dev Lead','Albus Dumbledore',11);
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket` (
  `id` bigint(20) NOT NULL,
  `genarated_date` date DEFAULT NULL,
  `issue` varchar(3000) DEFAULT NULL,
  `priority` varchar(255) DEFAULT NULL,
  `response` varchar(2000) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `employee_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKa78dsu86la2dni050sh6gap19` (`employee_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (29,'2022-10-26','VPN not establishing connection. cannot access app dependencies from nexus','RED','check with IT team for password update or expiry for VPM ','CLOSED',16),(30,'2022-10-26','DB connection gives error. ','RED','Check DB String and add server DB name instead of local','CLOSED',16),(31,'2022-10-26','something is wring with my backend docker image ','BLUE',NULL,'CLOSED',16),(32,'2022-10-26','some isuue ','YELLOW',NULL,'CLOSED',16);
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (9,'$2a$10$URwnTUnF4ZoyWRzffZMvDO31c.t59twV.E3dTxOiF1APt/w1Cq0OO','MANAGER','severus@gmail.com',''),(5,'$2a$10$NIcSj1a9jrNxJYNn0UES..9/m.g/aD6gGQM3CupzQSXqBszOcTxra','EMPLOYEE','draco@gmail.com','\0'),(7,'$2a$10$bAMB7TMM180Z2WIieVUkRuU98zVqbgZz0P4vpJJnlErgvCR7Qrgku','EMPLOYEE','harry@gmail.com',''),(11,'$2a$10$s0FBMswWGkQMj12XVUZiw.Hgw5enOfrfeXJjaKgmDIffsiO5C8Jra','MANAGER','albus@gmail.com',''),(23,'$2a$10$nlRMkfErDuPOd05psKWm7uAzX..m1etGToeXXxCk0WLlMaD9HBYPy','EMPLOYEE','bilbo@gmail.com','\0'),(21,'$2a$10$y8fczkXY1O2M27earDoDXOZyR6H4Y1xm6r7UFgjLDO/Pi7LshfYum','EMPLOYEE','frodo@gmail.com',''),(17,'$2a$10$YyLYJ.Ny7U7yYAXwcolDeeOe7j/zhn9tdL9YDXLbyScNPvJS9KsQ.','EMPLOYEE','ronald@gmail.com','\0'),(44,'$2a$10$vtHcKl1HPZSE1HVTHlurJubGgwYS/tcIvd.ZZHfmvT9veLrjxBf26','EMPLOYEE','geoff@gmail.com','');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-28  1:57:35

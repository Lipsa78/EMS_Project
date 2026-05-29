-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: ems_db
-- ------------------------------------------------------
-- Server version	8.0.43

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
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `attendance_id` bigint NOT NULL AUTO_INCREMENT,
  `employee_id` bigint NOT NULL,
  `attendance_date` date NOT NULL,
  `check_in` time DEFAULT NULL,
  `check_out` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `working_hours` double DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`attendance_id`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES (2,2,'2026-05-20','09:30:00','18:00:00','PRESENT',8.5,'2026-05-20 16:46:34'),(3,3,'2026-05-20',NULL,NULL,'ABSENT',0,'2026-05-20 16:46:34'),(4,2,'2026-05-23','09:00:00','18:00:00','PRESENT',NULL,'2026-05-23 12:40:57'),(5,2,'2026-05-23','19:07:27','19:09:59','PRESENT',NULL,'2026-05-23 13:37:27'),(6,2,'2026-05-24','13:58:54',NULL,'PRESENT',NULL,'2026-05-24 08:28:53'),(7,2,'2026-05-24','14:04:51','14:07:37','PRESENT',NULL,'2026-05-24 08:34:50');
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `department_id` bigint NOT NULL AUTO_INCREMENT,
  `department_name` varchar(255) DEFAULT NULL,
  `manager_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`department_id`),
  UNIQUE KEY `department_name` (`department_name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'IT','Rahul Sharma','2026-05-20 16:07:51'),(2,'HR','Priya Das','2026-05-20 16:07:51'),(3,'Finance','Amit Kumar','2026-05-20 16:07:51'),(4,'Marketing','Sneha Roy','2026-05-20 16:07:51'),(7,'Accounting','Sreyash Das','2026-05-23 07:31:17'),(12,'CSE','Raj Kumarb Mohanta','2026-05-27 05:27:52');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents` (
  `document_id` bigint NOT NULL AUTO_INCREMENT,
  `employee_id` bigint NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_type` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `file_size` bigint DEFAULT NULL,
  `upload_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `uploaded_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`document_id`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `documents_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
INSERT INTO `documents` VALUES (2,2,'aadhaar.jpg','image/jpeg','/uploads/aadhaar.jpg',102400,'2026-05-20 16:58:34','HR'),(3,3,'offer_letter.pdf','application/pdf','/uploads/offer_letter.pdf',307200,'2026-05-20 16:58:34','Admin');
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `employee_id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `department_id` bigint DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `joining_date` date DEFAULT NULL,
  `salary` double DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `email` (`email`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`department_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (2,'Priya','Das','Female','2000-08-15','priya@gmail.com','9876543211','Cuttack, Odisha',2,'HR Executive','2026-02-10',45000,'/uploads/priya.jpg','ACTIVE','2026-05-20 16:24:54'),(3,'Amit','Kumar','Male','2002-12-20','amit@gmail.com','9876543212','Puri, Odisha',3,'Accountant','2026-03-05',40000,'/uploads/amit.jpg','ACTIVE','2026-05-20 16:24:54'),(10,'Amit','Kumar','Male','2005-06-12','amit2@gmail.com','7854367282','Cuttack, Odisha',NULL,'HR','2024-05-09',43000,'C:\\Users\\lipsa\\OneDrive\\Pictures\\Saved Pictures\\Mine.jpg','ACTIVE','2026-05-21 17:57:56'),(12,'Akash','Kumar','Male','2008-04-12','amit123@gmail.com','9875465670','BBSR, Odisha',NULL,'Accountant','2024-04-23',54000,NULL,'INACTIVE','2026-05-21 18:00:46'),(17,'Sreyash','Sagar','Male','2004-03-27','Sreyash3@gmail.com','7654367890','Cuttack, Odisha',NULL,'HR','2024-03-23',40000,'/uploads/Sreyash Sagar.jpg','ACTIVE','2026-05-25 15:01:00'),(18,'Sanvi','Das','Female','2004-08-10','sanvi03@gmail.com','7654366784','Berhampur, Odisha',NULL,'Teacher','2025-07-25',35000,'/uploads/MOON.jpg','ACTIVE','2026-05-25 15:13:12');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_requests`
--

DROP TABLE IF EXISTS `leave_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leave_requests` (
  `leave_id` bigint NOT NULL AUTO_INCREMENT,
  `employee_id` bigint NOT NULL,
  `leave_type` varchar(255) DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `applied_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`leave_id`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `leave_requests_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_requests`
--

LOCK TABLES `leave_requests` WRITE;
/*!40000 ALTER TABLE `leave_requests` DISABLE KEYS */;
INSERT INTO `leave_requests` VALUES (2,2,'CASUAL_LEAVE','2026-06-01','2026-06-02','Family function','REJECTED','2026-05-20 16:49:34'),(3,2,'Sick Leave','2026-05-25','2026-05-27','Fever','APPROVED','2026-05-23 13:16:42'),(4,2,'Sick Leave','2026-05-25','2026-05-27','Fever','REJECTED','2026-05-24 08:50:22'),(5,3,'CASUAL_LEAVE','2026-05-24','2026-05-30','Family Function','APPROVED','2026-05-24 09:03:30');
/*!40000 ALTER TABLE `leave_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `notification_id` bigint NOT NULL AUTO_INCREMENT,
  `employee_id` bigint DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`notification_id`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (2,2,'Salary Credited','Your May salary has been credited.','INFO',0,'2026-05-20 16:55:39'),(3,3,'Attendance Missing','Please mark your attendance.','WARNING',0,'2026-05-20 16:55:39');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payroll`
--

DROP TABLE IF EXISTS `payroll`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payroll` (
  `payroll_id` bigint NOT NULL AUTO_INCREMENT,
  `employee_id` bigint NOT NULL,
  `basic_salary` double DEFAULT NULL,
  `bonus` double DEFAULT NULL,
  `deduction` double DEFAULT NULL,
  `final_salary` double DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`payroll_id`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `payroll_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payroll`
--

LOCK TABLES `payroll` WRITE;
/*!40000 ALTER TABLE `payroll` DISABLE KEYS */;
INSERT INTO `payroll` VALUES (2,2,45000,3000,2000,46000,'2026-05-31','PAID','2026-05-20 16:53:04'),(3,3,40000,2000,1000,41000,'2026-05-31','PENDING','2026-05-20 16:53:04');
/*!40000 ALTER TABLE `payroll` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin User','admin@ems.com','admin123','ROLE_ADMIN','ACTIVE','2026-05-20 16:16:31','2026-05-20 16:16:31'),(2,'HR User','hr@ems.com','hr123','ROLE_HR','ACTIVE','2026-05-20 16:16:31','2026-05-20 16:16:31'),(3,'Rahul Sharma','rahul@gmail.com','rahul785','ROLE_EMPLOYEE','ACTIVE','2026-05-20 16:16:31','2026-05-20 16:16:31'),(4,'Priya Das','priya@gmail.com','priya707','ROLE_EMPLOYEE','ACTIVE','2026-05-20 16:16:31','2026-05-20 16:16:31'),(5,'Admin','admin@gmail.com','$2a$10$glhpNhJZl3slc.IF8mrc8un6xn2Tw640RQvz8bThjRcW1Th3Xhb66','ROLE_ADMIN','ACTIVE','2026-05-22 05:43:35','2026-05-22 16:31:52'),(8,'Admin','admin98@gmail.com','$2a$10$ef21y6zmWnzbV0mqwlJgcOm3xdL2PRysdQDfIP2qS.3hUjwWJbRnS','ADMIN','ACTIVE','2026-05-22 15:29:50','2026-05-22 15:29:50'),(10,'Admin','admin987@gmail.com','$2a$10$rNtRfFM80ifU27.08IJMj.Y/Jtv706cl93PIBFoQ4ynhWCUWdqlPC','ADMIN','ACTIVE','2026-05-22 15:32:40','2026-05-22 15:32:40'),(11,'Admin','admin754@gmail.com','$2a$10$kamxi9IGHyHxEIvcAIttS.BiDjfoeNTS34XNFDHS4YLnb/TV1EHdi','ADMIN','ACTIVE','2026-05-22 15:47:36','2026-05-22 15:47:36'),(13,NULL,'admin73@gmail.com','$2a$10$U038qP1NGrSXIkvFnyLej.RsPrcfLTrjfcNaSto2vAptRkTbNk5g.',NULL,'ACTIVE','2026-05-23 06:42:16','2026-05-23 06:42:16');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-29 11:06:25

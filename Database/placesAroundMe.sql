-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 21, 2023 at 12:04 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `placesAroundMe`
--
CREATE DATABASE IF NOT EXISTS `placesAroundMe` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `placesAroundMe`;

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `storeId` int(11) NOT NULL,
  `storeName` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `address` varchar(100) NOT NULL,
  `latitude` decimal(10,8) NOT NULL,
  `longitude` decimal(10,8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`storeId`, `storeName`, `description`, `address`, `latitude`, `longitude`) VALUES
(1, 'Shoes', 'The best shoes in the area', 'Dizengoff 298,Tel-Aviv', '0.00000000', '0.00000000'),
(2, 'The showroom bakehouse', 'Best Cookies in Tel-Aviv', 'Pinkas st 3, Tel-Aviv', '0.00000000', '0.00000000'),
(3, 'Golda', 'Best ice cream in Tel-Aviv', 'Ben yehuda 110, Tel-Aviv', '0.00000000', '0.00000000'),
(4, 'Dominator', 'Best video games store in Tel-Aviv', 'Dizengoff 240, Tel-Aviv', '0.00000000', '0.00000000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`storeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `storeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

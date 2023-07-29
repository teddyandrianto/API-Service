-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2023 at 12:58 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_checklist`
--

CREATE TABLE `tbl_checklist` (
  `id_checklist` int(11) NOT NULL,
  `nama_checklist` varchar(25) NOT NULL,
  `date_create` datetime NOT NULL,
  `date_update` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_item_checklist`
--

CREATE TABLE `tbl_item_checklist` (
  `id_item` int(11) NOT NULL,
  `nama_item` varchar(25) NOT NULL,
  `id_checklist` int(11) NOT NULL,
  `date_update` datetime NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id_user` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(60) NOT NULL,
  `token` longtext NOT NULL,
  `date_create` datetime NOT NULL,
  `date_update` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_checklist`
--
ALTER TABLE `tbl_checklist`
  ADD PRIMARY KEY (`id_checklist`);

--
-- Indexes for table `tbl_item_checklist`
--
ALTER TABLE `tbl_item_checklist`
  ADD PRIMARY KEY (`id_item`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_checklist`
--
ALTER TABLE `tbl_checklist`
  MODIFY `id_checklist` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_item_checklist`
--
ALTER TABLE `tbl_item_checklist`
  MODIFY `id_item` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

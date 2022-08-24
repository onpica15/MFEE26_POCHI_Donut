-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-08-18 11:38:04
-- 伺服器版本： 10.4.24-MariaDB
-- PHP 版本： 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `group-e`
--

-- --------------------------------------------------------

--
-- 資料表結構 `willowcart_member_age`
--

CREATE TABLE `willowcart_member_age` (
  `sid` int(11) NOT NULL,
  `member_age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `willowcart_member_age`
--

INSERT INTO `willowcart_member_age` (`sid`, `member_age`) VALUES
(1, 20),
(2, 23),
(3, 25),
(4, 21),
(5, 30),
(6, 33),
(7, 28),
(8, 45),
(9, 35),
(10, 45),
(11, 40),
(12, 20),
(13, 32),
(14, 24),
(15, 43),
(16, 21),
(17, 45),
(18, 27),
(19, 29),
(20, 31),
(21, 40),
(22, 38),
(23, 60),
(24, 41),
(25, 47),
(26, 45),
(27, 44),
(28, 61),
(29, 50),
(30, 52),
(31, 53),
(32, 34),
(33, 33),
(34, 39),
(35, 50),
(36, 70);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `willowcart_member_age`
--
ALTER TABLE `willowcart_member_age`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `willowcart_member_age`
--
ALTER TABLE `willowcart_member_age`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

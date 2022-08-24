-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022 年 08 月 20 日 17:23
-- 伺服器版本： 10.4.21-MariaDB
-- PHP 版本： 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `Group-E`
--

-- --------------------------------------------------------

--
-- 資料表結構 `cart_orders`
--

CREATE TABLE `cart_orders` (
  `sid` int(11) NOT NULL,
  `member_sid` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `total_quantity` int(11) DEFAULT NULL,
  `pay_price` int(11) DEFAULT NULL,
  `pay_type` varchar(50) DEFAULT NULL,
  `store_name` varchar(50) DEFAULT NULL,
  `market_name` varchar(50) DEFAULT NULL,
  `ship_name` varchar(50) DEFAULT NULL,
  `ship_phone` int(11) DEFAULT NULL,
  `ship_email` varchar(50) DEFAULT NULL,
  `ship_address` varchar(50) DEFAULT NULL,
  `discount_code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `cart_orders`
--

INSERT INTO `cart_orders` (`sid`, `member_sid`, `created_at`, `total_quantity`, `pay_price`, `pay_type`, `store_name`, `market_name`, `ship_name`, `ship_phone`, `ship_email`, `ship_address`, `discount_code`) VALUES
(1, 1, '2021-08-31', 10, 500, '到店取貨', '大安店', NULL, '游小豪', 977037182, 'loveyu@aa.bb.cc', '新北市板橋區安安路77號88樓', NULL),
(2, 2, '2021-08-31', 44, 600, '超商取貨', NULL, '7-11大同門市', '游中豪', 977037184, 'loveyu@aa.bb.dd', '新北市板橋區安安路77號99樓', NULL),
(3, 1, '2021-09-03', 10, 500, '到店取貨', '大安店', NULL, '游小豪', 977037182, 'loveyu@aa.bb.cc', '新北市板橋區安安路77號88樓', NULL),
(4, 2, '2021-09-13', 44, 600, '超商取貨', NULL, '7-11大同門市', '游中豪', 977037184, 'loveyu@aa.bb.dd', '新北市板橋區安安路77號99樓', NULL),
(5, 1, '2021-09-30', 10, 500, '到店取貨', '大安店', NULL, '游小豪', 977037182, 'loveyu@aa.bb.cc', '新北市板橋區安安路77號88樓', NULL),
(6, 2, '2021-11-30', 44, 600, '超商取貨', NULL, '7-11大同門市', '游中豪', 977037184, 'loveyu@aa.bb.dd', '新北市板橋區安安路77號99樓', NULL),
(7, 1, '2022-01-01', 10, 500, '到店取貨', '大安店', NULL, '游小豪', 977037182, 'loveyu@aa.bb.cc', '新北市板橋區安安路77號88樓', NULL),
(8, 2, '2022-01-04', 44, 600, '超商取貨', NULL, '7-11大同門市', '游中豪', 977037184, 'loveyu@aa.bb.dd', '新北市板橋區安安路77號99樓', NULL),
(9, 3, '2022-01-12', 1, 35, '到店取貨', '大安店', NULL, 'willow', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(10, 5, '2022-01-23', 1, 50, '到店取貨', '大安店', NULL, 'willow1', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(11, 6, '2022-02-01', 1, 50, '到店取貨', '大安店', NULL, 'willow2', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(12, 7, '2022-02-08', 50, 2500, '到店取貨', '大安店', NULL, 'v', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(13, 8, '2022-02-08', 1, 50, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(14, 11, '2022-02-16', 1, 50, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(15, 13, '2022-02-22', 1, 50, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(16, 9, '2022-02-27', 1, 50, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(17, 5, '2022-02-27', 1, 50, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(18, 4, '2022-02-28', 1, 35, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(19, 17, '2022-03-01', 30, 1050, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(20, 20, '2022-03-02', 1, 35, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(21, 19, '2022-03-02', 1, 35, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(22, 15, '2022-03-03', 1, 35, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(23, 3, '2022-03-03', 1, 35, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(24, 12, '2022-03-08', 1, 35, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(25, 16, '2022-03-10', 1, 35, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(26, 36, '2022-03-13', 100, 4500, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(27, 34, '2022-03-13', 100, 3500, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(28, 34, '2022-03-14', 70, 2450, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(29, 23, '2022-03-16', 10, 450, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(30, 24, '2022-03-17', 15, 675, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(31, 23, '2022-03-17', 10, 300, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(32, 28, '2022-03-28', 20, 600, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(33, 25, '2022-04-07', 10, 500, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(34, 27, '2022-04-07', 20, 600, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(35, 7, '2022-04-10', 10, 400, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(36, 8, '2022-04-12', 20, 800, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(37, 9, '2022-04-18', 10, 350, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(38, 10, '2022-04-23', 20, 700, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(39, 30, '2022-04-26', 100, 4500, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(40, 28, '2022-04-30', 10, 450, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(41, 19, '2022-05-02', 100, 5000, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(42, 25, '2022-05-10', 50, 2500, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(43, 23, '2022-05-15', 20, 600, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(44, 4, '2022-05-17', 20, 1000, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(45, 6, '2022-05-18', 5, 250, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(46, 8, '2022-05-19', 20, 700, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(47, 8, '2022-05-20', 20, 700, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(48, 22, '2022-05-21', 10, 300, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(49, 11, '2022-05-24', 10, 500, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(50, 5, '2022-05-29', 10, 350, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(51, 3, '2022-05-31', 20, 800, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(52, 3, '2022-06-01', 20, 800, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(53, 31, '2022-06-04', 25, 1250, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(54, 31, '2022-06-06', 10, 500, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(55, 35, '2022-06-10', 20, 600, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(56, 24, '2022-06-11', 20, 900, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(57, 21, '2022-06-11', 10, 500, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(58, 20, '2022-06-12', 8, 240, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(59, 17, '2022-06-14', 30, 1050, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(60, 18, '2022-06-14', 20, 1000, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(61, 20, '2022-06-17', 7, 280, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(62, 13, '2022-06-20', 10, 300, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(63, 6, '2022-06-25', 10, 500, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(64, 9, '2022-06-30', 10, 450, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(65, 14, '2022-07-03', 20, 700, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(66, 14, '2022-07-17', 20, 700, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(67, 17, '2022-07-18', 25, 1000, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(68, 30, '2022-07-19', 10, 450, '到店取貨', '大安店', NULL, '[value-8]', 0, '977037182', 'loveyu@aa.bb.cc', 0),
(69, 53, '2022-08-20', NULL, NULL, NULL, NULL, NULL, '111', 111, '111@ss.ss', '復興南路99號2樓', NULL),
(70, 53, '2022-08-20', NULL, NULL, NULL, NULL, NULL, '111', 111, '111@ss.ss', '復興南路99號2樓', NULL),
(71, 53, '2022-08-20', 2, 90, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(72, 53, '2022-08-20', 2, 90, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(73, 53, '2022-08-20', 2, 90, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(74, 53, '2022-08-20', 2, 90, NULL, NULL, NULL, '111', 111, '111@ss.ss', '復興南路99號2樓', NULL),
(75, 53, '2022-08-20', 2, 85, NULL, NULL, NULL, '111', 111, '111@ss.ss', '復興南路99號2樓', NULL);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `cart_orders`
--
ALTER TABLE `cart_orders`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart_orders`
--
ALTER TABLE `cart_orders`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

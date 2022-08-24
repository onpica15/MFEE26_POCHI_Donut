-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-08-16 20:46:22
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
-- 資料庫： `group-e`
--

-- --------------------------------------------------------

--
-- 資料表結構 `willownews`
--

CREATE TABLE `willownews` (
  `newsid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `starttime` datetime DEFAULT NULL,
  `finishtime` datetime DEFAULT NULL,
  `newstitle` varchar(255) DEFAULT NULL,
  `words` varchar(255) DEFAULT NULL,
  `newsimg` varchar(255) DEFAULT NULL,
  `newsstyle` int(11) DEFAULT NULL,
  `news_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `willownews`
--

INSERT INTO `willownews` (`newsid`, `userid`, `starttime`, `finishtime`, `newstitle`, `words`, `newsimg`, `newsstyle`, `news_at`) VALUES
(24, 0, '2022-07-31 00:00:00', '2022-08-12 00:00:00', 'Taiwan Gyu-Kaku  最 強 燒 肉 系 點 心  即將登場！！！', '使用 #牛角獨家醬汁\n『秘傳鹽蔥醬』以及『香濃青醬』\n加入 #精選牛五花與 #鮮嫩燻雞肉\n推出 超 濃 郁 燒 肉 系 點 心 \n\n⠀\n搭配全新 #波堤手撕麵包＆#北海道酥皮\nＱ軟有嚼勁 ( ⸝⸝˘????˘⸝⸝) 還有 滿滿滿の酥香', 'cb1a54accdf85111f54c6f95a33bdbc7.png', 2, '2022-08-05 14:50:11'),
(25, 0, '2022-11-20 00:00:00', '2022-11-20 00:00:00', '波堤獅月見中秋禮盒~~', '７／２２(五)起門市#開始預購\r\n\r\n#早鳥優惠價一盒只要625元(原價800元)\r\n⠀\r\n精選厚切年輪、鳳梨酥、鳳凰酥\r\n還有還有大人氣「波堤獅」造型#桃山月餅\r\n⠀\r\n滿滿的精緻糕點組合，讓你送禮大方又得體\r\n', 'JLA0WBN.png', 2, '2022-08-04 16:29:46'),
(26, 0, '2022-08-25 00:00:00', '2022-09-10 00:00:00', '可可控 集合啦！ 全新登場！香濃 #可可蛋糕圈', '✧✦ 餅乾可可蛋糕圈 ✦✧\n可可餅乾碎片 x Ｑ軟 可可蛋糕圈\n豐富口感就像濃郁布朗尼般美味\n⠀\n✧✦ 草莓可可蛋糕圈 ✦✧\n草莓巧克力醬 x 濃郁可可蛋糕圈\n香甜濃郁 的完美搭配', '5f1b85b9996483dde0074c37b2f5e085.png', 2, '2022-08-05 12:40:42'),
(27, 0, '2022-08-09 00:00:00', '2022-09-27 00:00:00', '夏季 #新品開箱體驗　 開 跑 囉！', '這次將邀請 20 位 親愛der粉絲們\n一起開箱這次的超美味新品 ✧◝(⁰▿⁰)◜✧\n\n＊本表單僅為報名，不代表報名成功，名單將另行公布。', '066b3ed8a94c175a2a8de34c4d034cfc.png', 2, '2022-08-05 13:22:04'),
(28, 0, '2022-07-01 00:00:00', '2022-08-01 00:00:00', '抹茶茶廊新品上市', '首次聯名 108 MATCHA SARO 一〇八抹茶茶廊 Taiwan ，推出 9 款茶香濃厚的 #茶系列 甜甜圈', 'b12f98783e565e5b1be46b22e915782d.png', 2, '2022-08-05 13:22:41'),
(30, 0, '2022-08-10 16:35:12', '2022-08-10 16:35:12', '濃濃濃 #濃系列 甜甜圈新上市', '新登場的 #濃郁系 蜜糖波堤\n以及全新der #濃可可瑪芬\n⠀\n濃郁不甜膩～甜點控千萬別錯過', 'm70U05L.png', 1, '2022-08-10 16:35:12');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `willownews`
--
ALTER TABLE `willownews`
  ADD PRIMARY KEY (`newsid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `willownews`
--
ALTER TABLE `willownews`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

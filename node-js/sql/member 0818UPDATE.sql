-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-08-18 11:57:45
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
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `sid` int(11) NOT NULL,
  `account` varchar(255) NOT NULL,
  `pass_hash` varchar(255) NOT NULL,
  `birthday` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(11) DEFAULT '9',
  `address` varchar(255) NOT NULL DEFAULT '未有住址',
  `avatar` varchar(255) DEFAULT NULL,
  `level` int(11) NOT NULL,
  `valid` int(255) NOT NULL DEFAULT 0,
  `creat_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`sid`, `account`, `pass_hash`, `birthday`, `email`, `mobile`, `address`, `avatar`, `level`, `valid`, `creat_at`) VALUES
(1, '1', '$2b$10$R9mDXPmN3UDyH2hR2YT.duxZrp.zSozPkO2GPsAwq7QNHx0EsTkzq', '2022-08-22 00:00:00', NULL, '', 'gggg', '7d016921-950e-4db4-9f23-002f0f653315.jpg', 3, 0, '2022-07-28 10:11:49'),
(2, '7gfgdfg', '11gdfgfg', '0000-00-00 00:00:00', 'ggfdgdfg', '0', '', '', 1, 0, '2022-07-28 10:12:26'),
(3, 'dsadasd', 'dsadads', '2022-07-13 00:00:00', 'dsad@hamcl.com', '0', '', '', 1, 0, '2022-07-28 10:48:38'),
(4, 'FDSFSDF', 'fdsfsdf', '2022-07-19 00:00:00', 'fdsfd@mail.com', '0', '', '', 1, 0, '2022-07-28 10:49:44'),
(5, 'gfdgdfg', 'aaaaaa', '0000-00-00 00:00:00', 'gfdgdfg@mail.com', '0', '', '', 1, 0, '2022-07-28 13:21:17'),
(7, '456', '$2b$10$F4L7cRdkeIATlSBVh8JOG.zXxxBOUviqySKjcgf.j4.AddX7EWvLm', '2022-08-17 16:36:07', '123@mail.com', '0', '', '', 1, 7542, '2022-07-28 13:43:58'),
(8, '123', '$2b$10$Jw2YtKg9xCF/pLc5h/R6A.BHV2vLTEMoEtEQvSlnnzheXvlkxMnXe', '2022-08-17 16:36:07', '123@mail.com', '0', '', '', 1, 7542, '2022-07-28 13:52:07'),
(9, 'sunny', '$2b$10$IZmTxLb6f67ydsDPETk8bOGE9WJfW/gC2VIIad5yIJ3P8Ls7D89/u', '2022-07-12 00:00:00', 'FDSF@mail.com', '0', '', '', 1, 0, '2022-07-28 14:36:27'),
(10, 'ming', '$2b$10$0ELkPPcDZrbh5W6c..6Ad.AMKiaRT8h/1PhHe0Ld3zmFAsUgej3Xm', '2022-08-12 00:00:00', 'FDSF@mail.com', '222222222', '小鎮村', '05346b9f-9c9f-4896-9b13-e97cbc4e3247.jpg', 2, 0, '2022-07-28 14:49:34'),
(11, '444', '$2b$10$9DSo9IeKaye0sevIkAZPOeTe5J2.Y/16Rgxd4ggUxhdUK/lrRn2ZG', '2022-08-15 00:00:00', '444@mail.com', '44444444', '444444444', '5dc8df13-9aef-4ac1-b4a2-7aa807f8f19e.jpg', 2, 0, '2022-07-29 10:48:28'),
(12, '', '$2b$10$DAnC.UTpsqV0PQCxmFy9EOL/1rHzQBnN6NEHvVSjXRPnc0IN9a1WC', '2022-08-09 14:01:08', '', '0', '', '1028ce7b-769f-4571-b2ad-1c0b078b66f1.jpg', 0, 0, '0000-00-00 00:00:00'),
(13, '', '$2b$10$DAnC.UTpsqV0PQCxmFy9EOL/1rHzQBnN6NEHvVSjXRPnc0IN9a1WC', '2022-08-09 14:01:08', '', '0', '', 'b5da7ec7-46f3-4e41-9fa3-4634907685e5.jpg', 0, 0, '0000-00-00 00:00:00'),
(14, 'member1', '$2b$10$MlKd/nLPCvu0IDlF5QyZYupGHddMI11Oe8cRUZXZVu.6k1a2s5mdq', '2022-08-31 00:00:00', 'member1@mail.com', '0', '', '6e4742b2-9faa-49b3-a9b8-d1118053ad8e.jpg', 1, 0, '2022-08-02 17:10:01'),
(15, '', '$2b$10$V9MSmqWBSTbJki2iniWeieJ9Hf9CgF86zeiUIoT.EWjx5OPW7wLBG', '2003-11-14 00:00:00', 'FDSF@mail.com', '111111111', 'fdfdsfdsfsfds', '593ec969-866c-40d1-8187-4a6ee4e4232c.jpg', 3, 0, '2022-08-02 17:16:36'),
(16, '', '$2b$10$9XzV96tmov5U7TOihren7ef1rIY0s/XIs2wEh72GNer20b0KtdHNi', '0000-00-00 00:00:00', 'FDSF@mail.com', '44444444', '4444444444444444', '2c702106-3e04-4ed4-8f31-94e863fe4050.jpg', 0, 0, '2022-08-02 17:20:43'),
(17, '', '$2b$10$rbXcIRbn9E7znttPC0gb7uTgsEcqzi791pV1cRHGqEiTEIO44qTbW', '0000-00-00 00:00:00', '', '', '', 'fe3c9e82-46e5-4f0a-bb2d-c3552d9bce53.jpg', 2, 0, '2022-08-02 17:52:43'),
(18, '', '$2b$10$inIip6TqasxZfd2xCbQj5eHszdHxtBl40xRMUGBonnq4/celmY02.', '0000-00-00 00:00:00', '', '', '', 'e6aeb5dc-e999-4de4-b383-d5261fc9d07a.jpg', 4, 7542, '2022-08-02 17:54:57'),
(20, 'baibai', '$2b$10$rwd13d153eih.ylrHA7/WO2BVyi0crpTT3.3VwBv6CgPqbi2sT.l6', '2022-08-18 14:27:15', 'wameny10814@gmail.comtretert', '0', '', '4fdbad58-8917-476c-a9c3-b2eb3643e313.jpg', 1, 7542, '2022-08-08 12:09:19'),
(21, '', '$2b$10$DAnC.UTpsqV0PQCxmFy9EOL/1rHzQBnN6NEHvVSjXRPnc0IN9a1WC', '2022-08-09 14:01:08', '', '0', '', '', 0, 1111, '0000-00-00 00:00:00'),
(22, '', '$2b$10$DAnC.UTpsqV0PQCxmFy9EOL/1rHzQBnN6NEHvVSjXRPnc0IN9a1WC', '2022-08-09 14:01:08', '', '0', '', '', 0, 1111, '0000-00-00 00:00:00'),
(23, 'yuchen', '$2b$10$kY.2rcYnmNED0HjO/ydDNOgOH/z6J7AyXWzM364IXMpDY39Oi37Ui', '0000-00-00 00:00:00', 'yuchen@mail.com', '0', '', '', 0, 0, '2022-08-09 17:32:51'),
(24, 'baibaibai', '$2b$10$cz0y6MDwtApMJDez4bT4Je.kFagxKqEzwGwFnLv65IQ3J6nd1OGfy', '2022-08-31 00:00:00', '', '', '', 'c2a1da4f-6442-492a-8574-750e4dcf55af.jpg', 2, 7542, '2022-08-10 10:30:13'),
(25, 'sunnysunny', '$2b$10$fawG./5Md/.IbNHoyKo2z.9pn60tOuHmR.e.26dZn13.nmvIOObq.', '2022-08-10 10:50:37', 'FDSF@mail.com', '', '', '3336ac66-0ae1-480c-b9a4-384b9bc9bedb.jpg', 1, 0, '2022-08-10 10:50:16'),
(26, 'member8', '$2b$10$j6hnK/yM4OaTgpWWk6p1zutseEJS3u6kWu5UGYE4iYMAWKYV.f1HK', '2022-06-15 00:00:00', '', '0513245136', '台北市新化街18號', 'db5eba37-98c7-4eb9-80d7-34a915a921c1.jpg', 2, 0, '2022-08-10 11:05:04'),
(27, 'member9', '$2b$10$b7/evL7rwWxjAqOelZCTne2lcjRdJCWps7gIHFJ8eiY5J4JoYtTai', '2022-08-25 00:00:00', '', '0513254123', '台北市文心路654號', 'd142d887-4941-420c-bcf9-154259136b56.jpg', 2, 0, '2022-08-10 11:35:13'),
(28, 'member10', '$2b$10$q9Q8qleupDiaRsjoY31BdeCiA/TklAtGoAdQBAwQXeHogKtJQshhy', '2022-08-10 11:39:47', 'member10@mail.com', '', '', '1c36419e-d90b-4afa-9b2d-59d2e2fdd40a.jpg', 1, 0, '2022-08-10 11:37:30'),
(29, 'member11', '$2b$10$Y9wpBdhjwhBROnepr0xR2.B6gAFtAAvubrGsGr0n9aIjF0yOpvWQG', '2022-08-10 11:41:22', 'member11@mail.com', '', '', '232832f7-79b6-413b-a876-bf0cbb8f4656.jpg', 1, 0, '2022-08-10 11:40:56'),
(30, 'member12', '$2b$10$FZhA2HGoAChPF.o9ShjDyeQ0e9dTw2MOz7DI9PJv49N.Sz03t.SF.', '0000-00-00 00:00:00', NULL, '05953214563', '新竹市墨以路125號', '6f3157f6-5878-4527-9f83-1a50e2d755ef.jpg', 3, 0, '2022-08-10 11:46:09'),
(31, 'member13', '$2b$10$x6TsEKVmyWqZJnhny0TFsuAJlnrBAOXtFu2JIzh2BuABMY7ve9SZC', '2022-08-10 11:52:30', 'member13@mail.com', '', '', '36ec6383-bcb0-46b9-a487-3a9bb98d5191.jpg', 1, 0, '2022-08-10 11:48:33'),
(32, 'member14', '$2b$10$ULmObMFitDKlBb5T6jIM4ex2PrNsB58x1H/bEHfs3gU06Lul5owLG', '2022-08-10 11:53:22', 'member14@mail.com', '', '', '1dd1bcbe-4470-4a2b-a736-5beceb680c65.jpg', 1, 0, '2022-08-10 11:53:07'),
(33, 'member15', '$2b$10$0ipbQQStN1A1.lGlbbAgb.0vveASNZiqkFp5bc3EgGawLRhumfZfG', '2022-08-10 11:56:01', 'member15@mail.com', '', '', '3e8383ad-3211-4906-a966-bc78550a92e1.jpg', 1, 0, '2022-08-10 11:55:36'),
(34, 'member16', '$2b$10$EG6iOyaVLFFdslUC6mQEpu84yPdRkYYnhPCg3Nl33HMuDJQtHq82y', '2022-08-10 11:58:12', 'member16@mail.com', '', '', 'b4338aff-7375-4250-b37b-06f0a41599ee.jpg', 1, 0, '2022-08-10 11:57:49'),
(35, 'member17', '$2b$10$zsu9PcwUTLSsYywRvX7lPOf740ZcvMniKvYTV1iDfeGhppQJ/JXhe', '2022-08-10 12:04:44', 'member17@mail.com', '', '', '8552738a-230a-4814-be0a-1c9f7f1c27dd.jpg', 1, 0, '2022-08-10 12:01:01'),
(36, 'member18', '$2b$10$bdTXBvi3YdUpAqhZePQlousxtTOV08GDsYSnbGv189.bMMN8fxx3q', '2022-08-10 12:07:31', 'member18@mail.com', '', '', '6920c331-4a12-4481-9e9b-87d7a45c1390.jpg', 1, 0, '2022-08-10 12:05:09'),
(37, 'member19', '$2b$10$XAmJwYpqdBdMSPh7Z27Pge3aDO35hWc6ve1ExYFJ6jl97GN2G8WOK', '2022-08-10 12:08:16', 'member19@mail.com', '', '', '06b83792-db5f-40ae-a410-d4dee688f9fe.jpg', 1, 0, '2022-08-10 12:07:55'),
(38, 'member20', '$2b$10$DiYEr2ilnFKdREH0t6GiuOiio1W/H04yLGdlWmWCa3NUD1vY3/T.e', '2022-08-10 12:12:47', 'member20@mail.com', '', '', 'fa5595f0-3028-4765-9481-c3fd5586b8d0.jpg', 1, 0, '2022-08-10 12:11:46'),
(39, 'member21', '$2b$10$EBgA3UQAwoNyrBUr0Q1DUOz9xova.zZ00nnzuxFE1HS6K6/OV0Aw6', '0000-00-00 00:00:00', '', '', 'fdfdsfdsfdsf', '7fdbb288-0253-4cbe-a17d-e178d5b2f38a.jpg', 2, 0, '2022-08-10 12:13:24'),
(40, 'member22', '$2b$10$wWbiZq.ZzakIOCj02kvnyemmvCzqJhQjm5SWoFe1rGOjdyvZCZWw.', '2022-08-10 13:16:21', '', '0254125368', 'sddasdasdasd', '49662e9c-633b-43bb-be16-090d18a0c01d.jpg', 2, 0, '2022-08-10 13:06:43'),
(41, 'member23', '$2b$10$QUZG3dyDo6IyqVyVGQ.tAOeq1enHcOypmasJ5a.DsEddCcHcaOqEq', '2022-08-10 13:23:22', '', '0654521305', 'dsadasdasdasdasd', '9d0ca53b-d71a-43ce-8a2c-49d1cfbcf6cf.jpg', 2, 0, '2022-08-10 13:22:02'),
(42, 'member24', '$2b$10$M9a/nk1U7vtivUj.Fumvue/1LX6zjN3ZiCvkLuY9tmCECvikFwUzq', '0000-00-00 00:00:00', '', '0542132120', 'gfdgdgegtrh', '5adeee4b-7d2b-4c93-b0e3-1e9f6a324f91.jpg', 2, 0, '2022-08-10 13:27:39'),
(43, 'member25', '$2b$10$OlDdyeyWI36fUE2bOWVx/O3XkPkPoM4a/3YGeCDI0FtLOdvaryi9e', '2022-08-10 13:37:18', 'member25@mail.com', '', '', '8d7ee487-49b2-4d04-88be-0855b3f83263.jpg', 1, 0, '2022-08-10 13:36:50'),
(44, 'member26', '$2b$10$4ew5LEBP9CVLSi7q2YoJpuBZ9lYDwFkVOEbsYEqKexjULWPg/FYIy', '2022-08-10 16:32:03', '', '0254123512', '新北市新樂路111號', '11cc02bc-2e12-4dc8-9ad8-6c3564a139f2.jpg', 2, 0, '2022-08-10 16:30:35'),
(45, 'member30', '$2b$10$FDNpjsJxRpwATP/BqBeoOOuGEQ0KfbBu.Z14CX5jWegCC/0O02Leq', '2022-08-10 18:19:07', 'member30@mail.com', '', '', '80f7f441-8dd0-4d09-94a2-a26542913f9c.jpg', 1, 0, '2022-08-10 18:14:51'),
(46, 'member55', '$2b$10$EcNTXbyNYNQ28KhtDkTvYOYKAhq2QALPnH2jTsbGt1MReCITmmR1K', '2022-08-31 00:00:00', 'member55@mail.com', '', '', '', 0, 0, '2022-08-16 19:38:09'),
(47, 'member50', '$2b$10$cK8vovkQtGGoYGZa3L5tK.9gLQ.pqlcI2.XE0wh3st1pyTooGcetq', '0000-00-00 00:00:00', '', '0511423214', '新北市新聞路111號', 'be5ac1a9-31ea-4a2c-aeb4-e0de913214c4.jpg', 2, 0, '2022-08-18 12:07:31'),
(48, 'member51', '$2b$10$WWhUSo2mwwfX8UDpOB3EueZ72z13eiiAiw4jvAfP0eANc9Jsbo4zO', '2022-08-08 00:00:00', 'member51@mail.com', '', '', '', 0, 0, '2022-08-18 12:10:27'),
(49, 'member52', '$2b$10$t4/KVAURBg0SpLdXdfDfLu.x3NZagKa3ABUh1IUEhox8ySOdqP8VK', '2022-08-29 00:00:00', 'member52@mail.com', '', '', '', 0, 0, '2022-08-18 12:12:17'),
(50, 'member53', '$2b$10$zsOv5SCrgREqwxqtu0.9quwYKdG16.L2eFA46irm/E7DXaEgU7vDi', '2022-08-09 00:00:00', 'member53@mail.com', '', '', '', 0, 0, '2022-08-18 12:13:52'),
(51, 'member54', '$2b$10$x/4ddwogsUodUemVPUc./ug5IHfzoFNElVu6t48bOq6Q42VEsHViW', '2022-08-10 00:00:00', NULL, '', 'fdsfdsfdsfsdfds', 'f76d0734-ecdd-4726-bc1a-7191f070e438.jpg', 2, 7542, '2022-08-18 14:23:42'),
(52, 'member56', '$2b$10$fD7CqMhTHG.lm0nmSXGzWunBppnfX8pph7ZG8dMO5y3FEP2B.I0nO', '2022-08-23 00:00:00', 'member56@mail.com', '9', '未有住址', NULL, 0, 0, '2022-08-18 17:56:20');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

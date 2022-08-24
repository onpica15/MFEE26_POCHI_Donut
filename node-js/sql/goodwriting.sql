-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-08-18 18:50:49
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
-- 資料表結構 `goodwriting`
--

CREATE TABLE `goodwriting` (
  `goodwritingid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `goodtitle` varchar(255) DEFAULT NULL,
  `goodwords` varchar(255) DEFAULT NULL,
  `goodimg` varchar(255) DEFAULT NULL,
  `good_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `goodwriting`
--

INSERT INTO `goodwriting` (`goodwritingid`, `userid`, `goodtitle`, `goodwords`, `goodimg`, `good_at`) VALUES
(3, 0, '安安123', '美國眾議院議長裴洛西（Nancy Pelosi）旋風訪台引發全球矚目，卻也讓不斷文攻武嚇台灣的中國氣炸，中國官媒《央視新聞》還刻意整理有哪些「好朋友」表態支持中國，更誇稱有「上百個」國家、國際組織在第一時間「挺中」。不過 G7 國家也發表聯合聲明，表示支持裴洛西訪台。\n\n就裴洛西訪台行為，聯合國秘書長發言人杜加里克（Stephane Dujarric）2 日於記者會上僅稱會維持 1971年於聯合國大會上第 2758 號決議的立場。\n\n阿拉伯國家聯盟首席助理秘書長兼秘書長辦公室主任扎齊發表聲明指出，阿盟支持', 'e0156571-c2ec-442b-be0d-6d3bccd18d58.jpg', '2022-08-04 12:13:45'),
(6, 0, ' 早鳥優惠  Early Bird Discount until 30 July', '*10種不同的甜甜圈底和糖霜 *非常適合作為禮物 *可愛又好吃', 'eefd2d06-a700-432f-936c-c068ebc645b6.png', '2022-08-04 19:01:24'),
(8, 0, '古早味甜甜圈最對味～～', '我最喜歡一口咬下後，嘴唇周圍沾滿奶粉的感覺，甜甜又充滿奶香~~~', '42a63c51-d802-4747-b3bc-c6d69bcf4f56.jpg', '2022-08-11 11:41:51'),
(9, 0, '一年一度烘焙業最大盛事準備登場\n隨手作純手工蛋黃酥\n今年一樣與各位盛大見面👏🏻👏🏻', '今年是個辛苦又難熬的一年，大家的荷包勢必有所限制🚫\n為了回饋廣大鄉親，售價方面也是盡量努力維持，不要與往年落差太大💸\n我們仍不惜成本，使用純天然、無添加、價格飆高的嚇人的原物料，希望讓各位吃得安心、送的開心✌🏻', 'c3d98377-4d86-4b21-81e2-69cd508975bf.jpg', '2022-08-11 11:42:02'),
(10, 0, '天使手作', '甜點上菜♥\n來顆美味的甜甜圈吧！\n本月精選！\n購買現貨“甜甜圈”👉享9折優惠\n本檔甜甜圈🍩限定活動至9/15唷！', '6f1c6a4d-f494-4a39-9d40-9563da5a1c2c.jpg', '2022-08-11 11:42:13'),
(11, 0, '🎀艸水木堂​\n🏠地點：台中市西區民生路364號​\n🕒營業時間：11:00-19:00​', '審計新村內超人氣的烤甜甜圈店🍩​\n以北歐森林系旋轉木馬為主題🌲​\n現烤出爐的甜甜圈配上新鮮水果🍓​\n外皮烤的又酥又香吃起來像可頌！​\n多種口味搭配好想每個都吃一遍​\n每日限量還有隱藏口味我還不排爆❗️​', '8459fa78-f680-4390-8937-bdaf7527674e.jpg', '2022-08-11 11:42:23'),
(12, 0, '今天要分享的這個麵包是風靡全台、標榜內餡爆漿的麵包', '今天來推薦一間最近吃到很喜歡的甜甜圈🍩 \n而且我每天上班還都會經過😆', '3359e381-4b7c-4f87-b633-320ad0e93fa1.jpg', '2022-08-11 11:42:35'),
(13, 0, '關渡宮美食推薦', '悶在家快悶壞了嗎，趁端午連假到關渡宮走走透透氣，看看河景、騎騎腳踏車，悠閒又不會人擠人，到關渡宮當然要吃個鐵蛋跟雙胞胎、甜甜圈囉，現在人很少不用排隊也不用等，\n有人說雙胞胎表現不如以往，但冷掉還是好吃很難得。', '4164ab26-7c34-4cd5-8052-b5f7811bce2e.jpg', '2022-08-11 11:42:43'),
(14, 0, 'Po個甜甜圈望梅止渴一下', '現在有點餓\n為了明天美美的不要水腫\n我忍住先不吃宵夜🤐🤐🤐\n嗯....\n怎麼好像更餓惹🤔🤭\n照片裡的甜甜圈是之前去嘉義vlog時\nEric大大幫大家買的奮起湖檜木甜甜圈❤️❤️\n真的超好吃！！\n我那時候回來一天嗑掉一盒\n好吃到連溫溫都說想團購😆🍩', '732a871b-6268-47d5-a211-abb05369f218.jpg', '2022-08-11 11:42:53'),
(15, 0, '吃一個甜甜圈 要騎單車多久才能消化', '週末來顆甜甜圈 簡直太療癒🍩再去騎個單車就太好了😌\n但我覺得在櫥窗挑選的過程是最滿足的時光（因為吃下去就後悔了😆', '846c032d-1c6a-4bcf-b72f-4ec4ed1f5614.jpg', '2022-08-11 11:43:06');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `goodwriting`
--
ALTER TABLE `goodwriting`
  ADD PRIMARY KEY (`goodwritingid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `goodwriting`
--
ALTER TABLE `goodwriting`
  MODIFY `goodwritingid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

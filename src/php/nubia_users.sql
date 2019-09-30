-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1:3306
-- 生成日期： 2019-09-30 03:50:24
-- 服务器版本： 5.7.26
-- PHP 版本： 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `1908`
--

-- --------------------------------------------------------

--
-- 表的结构 `nubia_users`
--

DROP TABLE IF EXISTS `nubia_users`;
CREATE TABLE IF NOT EXISTS `nubia_users` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `u_name` varchar(20) DEFAULT 'user' COMMENT '用户名',
  `u_password` varchar(100) NOT NULL COMMENT '用户密码',
  `u_phone` bigint(20) NOT NULL COMMENT '用户电话',
  PRIMARY KEY (`u_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `nubia_users`
--

INSERT INTO `nubia_users` (`u_id`, `u_name`, `u_password`, `u_phone`) VALUES
(1, 'user', 'e10adc3949ba59abbe56e057f20f883e', 13755897321),
(2, 'user', 'e10adc3949ba59abbe56e057f20f883e', 11111111111),
(3, 'user', '330204ff54a28ded2fea4256bb567979', 12222222222),
(4, 'user', 'ed4e5f060548c25359d8697a322f059c', 12222222223),
(5, 'user', 'e58b5b9d105b415dbbd6f8d210c4b8de', 12222222224),
(6, 'user', 'bd96ce2eb6ab11f0a38b15cd4c21b733', 12222222225),
(7, 'user', 'a0acfa39850efa1147a47c24af605617', 12222222229),
(8, 'user', 'cda88b6f6b7ee583dab780190d35d863', 12222222228),
(9, 'user', '7237eead4628acaea6895b0c11462e35', 12222222227),
(10, 'user', 'd3b962bd7e381d58f7effd05dfb453c2', 13264943432),
(11, 'user', '44174616feb23eed7c91a6bf89367420', 12421453251);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

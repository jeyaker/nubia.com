-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1:3306
-- 生成日期： 2019-09-30 04:14:58
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
-- 表的结构 `goods`
--

DROP TABLE IF EXISTS `goods`;
CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `title` varchar(255) DEFAULT NULL COMMENT '商品标题',
  `original_price` decimal(20,2) DEFAULT NULL COMMENT '商品原价',
  `price` decimal(20,2) DEFAULT NULL COMMENT '商品单价',
  `num` int(10) DEFAULT NULL COMMENT '商品库存',
  `pic` text NOT NULL COMMENT '图片/商品图片',
  `type` text COMMENT '商品种类',
  `version` text CHARACTER SET utf8mb4 COMMENT '商品版本',
  `details` text COMMENT '商品详情',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `title`, `original_price`, `price`, `num`, `pic`, `type`, `version`, `details`) VALUES
(1, 'logo', '0.00', NULL, NULL, '[{\"src\":\"../img/nubia-logo-inverse-x2-cn.png\"}]', NULL, NULL, NULL),
(2, '导航手机1', '0.00', NULL, NULL, '[{\"src\":\"../img/phone_1.png\"}]', NULL, NULL, NULL),
(3, '导航手机2', '0.00', NULL, NULL, '[{\"src\":\"../img/phone_2.png\"}]', NULL, NULL, NULL),
(4, '导航手机3', '0.00', NULL, NULL, '[{\"src\":\"../img/phone_3.png\"}]', NULL, NULL, NULL),
(5, '导航手机4', '0.00', NULL, NULL, '[{\"src\":\"../img/phone_4.png\"}]', NULL, NULL, NULL),
(6, '导航手机5', '0.00', NULL, NULL, '[{\"src\":\"../img/phone_5.png\"}]', NULL, NULL, NULL),
(7, '导航手机6', '0.00', NULL, NULL, '[{\"src\":\"../img/phone_6.png\"}]', NULL, NULL, NULL),
(8, '导航红魔手机1', '0.00', NULL, NULL, '[{\"src\":\"../img/hongmo_1.png\"}]', NULL, NULL, NULL),
(9, '导航红魔手机2', '0.00', NULL, NULL, '[{\"src\":\"../img/hongmo_2.png\"}]', NULL, NULL, NULL),
(10, '导航红魔手机3', '0.00', NULL, NULL, '[{\"src\":\"../img/hongmo_3.png\"}]', NULL, NULL, NULL),
(11, '导航摄影', '0.00', NULL, NULL, '[{\"src\":\"../img/NeoVision-logo.png\"}]', NULL, NULL, NULL),
(12, '导航nubia', '0.00', NULL, NULL, '[{\"src\":\"../img/nubiaui-logo.png\"}]', NULL, NULL, NULL),
(13, '二级导航hm1', '0.00', NULL, NULL, '[{\"src\":\"../img/hm_1.png\"}]', NULL, NULL, NULL),
(14, '二级导航hm2', '0.00', NULL, NULL, '[{\"src\":\"../img/hm_2.png\"}]', NULL, NULL, NULL),
(15, '二级导航hm3', '0.00', NULL, NULL, '[{\"src\":\"../img/hm_3.png\"}]', NULL, NULL, NULL),
(16, '二级导航hm4', '0.00', NULL, NULL, '[{\"src\":\"../img/hm_4.png\"}]', NULL, NULL, NULL),
(17, '二级导航hm5', '0.00', NULL, NULL, '[{\"src\":\"../img/hm_5.png\"}]', NULL, NULL, NULL),
(18, '二级导航hm6', '0.00', NULL, NULL, '[{\"src\":\"../img/hm_6.png\"}]', NULL, NULL, NULL),
(19, '二级导航hm7', '0.00', NULL, NULL, '[{\"src\":\"../img/hm_7.png\"}]', NULL, NULL, NULL),
(20, '二级导航hm8', '0.00', NULL, NULL, '[{\"src\":\"../img/hm_8.png\"}]', NULL, NULL, NULL),
(21, '二级导航阿尔法', '0.00', NULL, NULL, '[{\"src\":\"../img/a.png\"}]', NULL, NULL, NULL),
(22, '二级导航x1', '0.00', NULL, NULL, '[{\"src\":\"../img/x_1.png\"}]', NULL, NULL, NULL),
(23, '二级导航x2', '0.00', NULL, NULL, '[{\"src\":\"../img/x_2.png\"}]', NULL, NULL, NULL),
(24, '二级导航x3', '0.00', NULL, NULL, '[{\"src\":\"../img/x_3.png\"}]', NULL, NULL, NULL),
(25, '二级导航x4', '0.00', NULL, NULL, '[{\"src\":\"../img/x_4.png\"}]', NULL, NULL, NULL),
(26, '二级导航x5', '0.00', NULL, NULL, '[{\"src\":\"../img/x_5.png\"}]', NULL, NULL, NULL),
(27, '二级导航z1', '0.00', NULL, NULL, '[{\"src\":\"../img/z_1.png\"}]', NULL, NULL, NULL),
(28, '二级导航z2', '0.00', NULL, NULL, '[{\"src\":\"../img/z_2.png\"}]', NULL, NULL, NULL),
(29, '二级导航周边1', '0.00', NULL, NULL, '[{\"src\":\"../img/zhoubian_1.png\"}]', NULL, NULL, NULL),
(30, '二级导航周边2', '0.00', NULL, NULL, '[{\"src\":\"../img/zhoubian_2.png\"}]', NULL, NULL, NULL),
(31, '二级导航周边3', '0.00', NULL, NULL, '[{\"src\":\"../img/zhoubian_3.png\"}]', NULL, NULL, NULL),
(32, '二级导航周边4', '0.00', NULL, NULL, '[{\"src\":\"../img/zhoubian_4.png\"}]', NULL, NULL, NULL),
(33, '二级导航专属1', '0.00', NULL, NULL, '[{\"src\":\"../img/zhuanshu_1.png\"}]', NULL, NULL, NULL),
(34, '二级导航专属2', '0.00', NULL, NULL, '[{\"src\":\"../img/zhuanshu_2.png\"}]', NULL, NULL, NULL),
(35, '二级导航专属3', '0.00', NULL, NULL, '[{\"src\":\"../img/zhuanshu_3.png\"}]', NULL, NULL, NULL),
(36, '二级导航专属4', '0.00', NULL, NULL, '[{\"src\":\"../img/zhuanshu_4.png\"}]', NULL, NULL, NULL),
(37, '轮播图1', '0.00', NULL, NULL, '[{\"src\":\"../img/brand_1.jpg\"}]', NULL, NULL, NULL),
(38, '轮播图2', '0.00', NULL, NULL, '[{\"src\":\"../img/brand_2.jpg\"}]', NULL, NULL, NULL),
(39, '轮播图3', '0.00', NULL, NULL, '[{\"src\":\"../img/brand_3.jpg\"}]', NULL, NULL, NULL),
(40, '轮播图4', '0.00', NULL, NULL, '[{\"src\":\"../img/brand_4.jpg\"}]', NULL, NULL, NULL),
(41, '轮播图5', '0.00', NULL, NULL, '[{\"src\":\"../img/brand_5.jpg\"}]', NULL, NULL, NULL),
(42, '轮播图下1', '0.00', NULL, NULL, '[{\"src\":\"../img/brand_b1.jpg\"}]', NULL, NULL, NULL),
(43, '轮播图下2', '0.00', NULL, NULL, '[{\"src\":\"../img/brand_b2.jpg\"}]', NULL, NULL, NULL),
(44, '轮播图下3', '0.00', NULL, NULL, '[{\"src\":\"../img/brand_b3.jpg\"}]', NULL, NULL, NULL),
(45, '热销1', '0.00', NULL, NULL, '[{\"src\":\"../img/rexiao_1.jpg\"}]', NULL, NULL, NULL),
(46, 'Z20', '0.00', '3499.00', 10, '[{\"src\":\"../img/rexiao_2.png\"},{\"src\":\"../img/rexiao_2_1.png\",\"details\":\"【9月26日-28日】限时直降300元，赠水晶触控保护壳\",\"title\":\"Z20 钻石黑 6GB+128GB\"},{\"src\":\"../img/rexiao_2_2.png\"},{\"src\":\"../img/rexiao_2_3.png\"},{\"src\":\"../img/rexiao_2_4.png\"}]', '[\"钻石黑\",\"锦鲤红\"]', '[\"6GB+128GB\",\"8GB+128GB\",\"8GB+512GB\"]', '4800万超清双屏自拍'),
(47, '红魔3', '3499.00', '2699.00', 10, '[{\"src\":\"../img/rexiao_3.png\"},{\"src\":\"../img/rexiao_3_1.png\",\"title\":\"红魔3 玄铁黑 8GB+128GB \",\"details\":\"6+128GB直降300元，低至：2499元， 8+128GB直降300元，低至：2699元\"},{\"src\":\"../img/rexiao_3_2.png\"},{\"src\":\"../img/rexiao_3_3.png\"},{\"src\":\"../img/rexiao_3_4.png\"}]', '[\"玄铁黑\",\"赤焰红\",\"战地迷彩版\",\"红蓝竞技版\"]', '[\"12GB+256GB\",\"6GB+128GB\",\"8GB+128GB\"]', '骁龙855'),
(48, '努比亚阿尔法', '3499.00', '2999.00', 10, '[{\"src\":\"../img/rexiao_4.png\"},{\"src\":\"../img/rexiao_4_1.png\",\"title\":\"努比亚阿尔法 伯爵黑（联通版） 1G+8G \",\"details\":\"六期免息、赠nubia pods\"},{\"src\":\"../img/rexiao_4_2.png\"},{\"src\":\"../img/rexiao_4_3.png\"},{\"src\":\"../img/rexiao_4_4.png\"}]', '[\"伯爵黑（联通版）\",\"流光金（联通版）\",\"伯爵黑（移动版）\"]', '[\"1G+8G\",\"流光金1+8G\"]', '可以穿戴的手机'),
(49, 'X', '2199.00', '1999.00', 10, '[{\"src\":\"../img/rexiao_5.jpg\"},{\"src\":\"../img/rexiao_5_1.png\",\"title\":\"X 深空灰 6GB+64GB \",\"details\":\"双屏黑科技、1600+2400万AI自拍\"},{\"src\":\"../img/rexiao_5_2.png\"},{\"src\":\"../img/rexiao_5_3.png\"},{\"src\":\"../img/rexiao_5_4.png\"}]', '[\"深空灰\",\"黑金\",\"海光蓝\",\"星空典藏版（蓝金梵高版）\",\"蓝金版\"]', '[\"6GB+64GB\",\"8GB+128GB\",\"8GB+256GB\",\"8GB+512GB\",\"蓝金版8+256GB\"]', '双屏黑科技'),
(50, '红魔Mars', '2699.00', '1899.00', 10, '[{\"src\":\"../img/rexiao_6.jpg\"},{\"src\":\"../img/rexiao_6_1.png\",\"title\":\"红魔Mars 烈焰红 6GB+64GB \",\"details\":\"骁龙845、电竞RGB炫彩灯带\"},{\"src\":\"../img/rexiao_6_2.png\"},{\"src\":\"../img/rexiao_6_3.png\"},{\"src\":\"../img/rexiao_6_4.png\"}]', '[\"曜石黑\",\"迷彩色\",\"烈焰红\"]', '[\"10GB+256GB\",\"6GB+64GB\",\"8GB+128GB\"]', '6+64GB'),
(51, '红魔Mars', '3199.00', '2099.00', 10, '[{\"src\":\"../img/rexiao_7.jpg\"},{\"src\":\"../img/rexiao_7_1.png\",\"title\":\"红魔Mars 烈焰红 8GB+128GB \",\"details\":\"骁龙845、电竞RGB炫彩灯带\"},{\"src\":\"../img/rexiao_7_2.png\"},{\"src\":\"../img/rexiao_7_3.png\"},{\"src\":\"../img/rexiao_7_4.png\"}]', '[\"曜石黑\",\"迷彩色\",\"烈焰红\"]', '[\"10GB+256GB\",\"6GB+64GB\",\"8GB+128GB\"]', '8+128GB'),
(52, '精选1', '0.00', NULL, NULL, '[{\"src\":\"../img/jingxuan_1.jpg\"}]', NULL, NULL, NULL),
(53, '红魔弹夹移动电源', '0.00', '149.00', 10, '[{\"src\":\"../img/jingxuan_2.png\"},{\"src\":\"../img/jingxuan_2_1.png\",\"title\":\"红魔弹夹移动电源 黑色  \",\"details\":\"满足不同快充协议手机及其他移动设备，大功率输出可充Macbook；品质过硬，堪比移动电源中的AK-47！\"},{\"src\":\"../img/jingxuan_2_2.png\"},{\"src\":\"../img/jingxuan_2_3.png\"}]', '[\"黑色\"]', NULL, NULL),
(54, '红魔3电竞魔盒', '0.00', '199.00', 10, '[{\"src\":\"../img/jingxuan_3.png\"},{\"src\":\"../img/jingxuan_3_1.png\",\"title\":\"红魔3电竞魔盒 黑色   \",\"details\":\"集线管理，线材不再碍手碍脚，100Mbps有线以太网更稳定，助您肆意驰骋于王者峡谷，带妹吃鸡如虎添翼\"},{\"src\":\"../img/jingxuan_3_2.png\"}]', '[\"黑色\"]', NULL, NULL),
(55, '红魔3电竞向量保护套', '0.00', '79.00', 10, '[{\"src\":\"../img/jingxuan_4.png\"},{\"src\":\"../img/jingxuan_4_1.png\",\"title\":\"红魔电竞向量保护套（3和3S通用） 黑色   \",\"details\":\"\"},{\"src\":\"../img/jingxuan_4_2.png\"}]', '[\"黑色\"]', NULL, NULL),
(56, '红魔3双滑轨保护套', '0.00', '49.00', 10, '[{\"src\":\"../img/jingxuan_5.png\"},{\"src\":\"../img/jingxuan_5_1.png\",\"title\":\"红魔3双滑轨保护套（手柄专用） 黑色  \",\"details\":\"\"},{\"src\":\"../img/jingxuan_5_2.png\"}]', '[\"黑色\"]', NULL, NULL),
(57, '红魔Mars手柄专用保护套', '49.00', '29.00', 10, '[{\"src\":\"../img/jingxuan_6.png\"},{\"src\":\"../img/jingxuan_6_1.png\",\"title\":\"红魔Mars手柄专用保护套 黑色  \",\"details\":\"\"},{\"src\":\"../img/jingxuan_6_2.png\"},{\"src\":\"../img/jingxuan_6_3.png\"}]', '[\"黑色\"]', NULL, NULL),
(58, 'nubia pods （时尚真无线耳机）', '799.00', '499.00', 10, '[{\"src\":\"../img/jingxuan_7.png\"},{\"src\":\"../img/jingxuan_7_1.png\",\"title\":\"万魔联名 （时尚真无线耳机） 黑色  \",\"details\":\"特惠300元\"},{\"src\":\"../img/jingxuan_7_2.jpg\"},{\"src\":\"../img/jingxuan_7_3.jpg\"},{\"src\":\"../img/jingxuan_7_4.jpg\"}]', '[\"黑色\",\"金色\"]', NULL, NULL),
(59, '热评1', '0.00', NULL, NULL, '[{\"src\":\"../img/reping_1.jpg\"}]', NULL, NULL, NULL),
(60, '热评2', '0.00', NULL, NULL, '[{\"src\":\"../img/reping_2.jpg\"}]', NULL, NULL, NULL),
(61, '热评3', '0.00', NULL, NULL, '[{\"src\":\"../img/reping_3.jpg\"}]', NULL, NULL, NULL),
(62, '热评4', '0.00', NULL, NULL, '[{\"src\":\"../img/reping_4.jpg\"}]', NULL, NULL, NULL),
(63, '视频1', '0.00', NULL, NULL, '[{\"src\":\"../img/shipin_1.jpg\"}]', NULL, NULL, NULL),
(64, '视频2', '0.00', NULL, NULL, '[{\"src\":\"../img/shipin_2.jpg\"}]', NULL, NULL, NULL),
(65, '视频3', '0.00', NULL, NULL, '[{\"src\":\"../img/shipin_3.jpg\"}]', NULL, NULL, NULL),
(66, '视频4', '0.00', NULL, NULL, '[{\"src\":\"../img/shipin_4.jpg\"}]', NULL, NULL, NULL),
(67, '客服', '0.00', NULL, NULL, '[{\"src\":\"../img/kefu.png\"}]', NULL, NULL, NULL),
(68, 'app二维码', '0.00', NULL, NULL, '[{\"src\":\"../img/app.png\"}]', NULL, NULL, NULL),
(69, '底部logo', '0.00', NULL, NULL, '[{\"src\":\"../img/nubia-logo-x2.png\"}]', NULL, NULL, NULL),
(70, '微信二维码', '0.00', NULL, NULL, '[{\"src\":\"../img/nb-weixin-code-figure.jpg\"}]', NULL, NULL, NULL);

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

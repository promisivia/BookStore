/*
WorkBench MySQL Data Transfer

Source Host           : localhost:3306
Source Database       : bookstore
Target Server Type    : MYSQL
*/

set global time_zone = '+8:00';

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `order_item`;
DROP TABLE IF EXISTS `orders`;
DROP TABLE IF EXISTS `cart`;
DROP TABLE IF EXISTS `user_info`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `book`;

-- ----------------------------
-- Table structure for book
-- ----------------------------

CREATE TABLE `BOOK` (
                        `id` int(11) NOT NULL,
                        `isbn` varchar(255) DEFAULT NULL,
                        `name` varchar(255) DEFAULT NULL,
                        `type` varchar(255) DEFAULT NULL,
                        `author` varchar(255) DEFAULT NULL,
                        `inventory` int(11) DEFAULT NULL,
                        `image` varchar(255) DEFAULT NULL,
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `BOOK` VALUES ('1', '1', 'Java核心技术卷II', '编程', '凯S.霍斯特曼', '1000');
INSERT INTO `BOOK` VALUES ('2', '2', '深入理解计算机系统', '编程', '兰德尔·E·布莱恩特', '1200');
INSERT INTO `BOOK` VALUES ('3', '3', 'Effective C++', '编程', '梅耶', '1000');
INSERT INTO `BOOK` VALUES ('4', '4', '小王子', '儿童文学', '圣-埃克苏佩里', '1000');
INSERT INTO `BOOK` VALUES ('5', '5', 'Java编程思想', '编程', 'Bruce Eckel', '9096');
INSERT INTO `BOOK` VALUES ('6', '6', '魔兽世界编年史套装(全三卷)', '魔幻小说', '克里斯˙梅森', '123');
INSERT INTO `BOOK` VALUES ('7', '7', '三体：全三册', '科幻小说', '刘慈欣', '14414');
INSERT INTO `BOOK` VALUES ('8', '8', '悲惨世界（上中下）（精装版）', '世界名著', '雨果', '388');
INSERT INTO `BOOK` VALUES ('9', '9', '动物农场', '社会小说', '乔治·奥威尔', '123');
INSERT INTO `BOOK` VALUES ('10', '10', '机器学习', '编程', '周志华', '2525');
INSERT INTO `BOOK` VALUES ('11', '11', '纳尼亚传奇', '魔幻小说', '刘易斯', '123');
INSERT INTO `BOOK` VALUES ('12', '12', '老人与海', '世界名著', '海明威', '2414');
INSERT INTO `BOOK` VALUES ('13', '13', '魔力的胎动', '悬疑/推理小说', '东野圭吾', '1232');
INSERT INTO `BOOK` VALUES ('14', '14', '我不怕这漫长黑夜', '青春文学', '苑子豪',  '1142');
INSERT INTO `BOOK` VALUES ('15', '15', '永久记录', '传记文学', '爱德华·斯诺登', '124');
INSERT INTO `BOOK` VALUES ('16', '16', '探索月球', '儿童文学', '安妮·詹克利奥维奇', '1516');
INSERT INTO `BOOK` VALUES ('17', '17', '高考英语 五年高考三年模拟', '中小学教辅', '曲一线', '12332');
INSERT INTO `BOOK` VALUES ('18', '18', '红楼梦', '世界名著', '曹雪芹', '2441');
INSERT INTO `BOOK` VALUES ('19', '19', '草房子', '儿童文学', '曹文轩', '1235');
INSERT INTO `BOOK` VALUES ('20', '20', '追风筝的人', '世界名著', '卡勒德·胡赛尼', '14141');
INSERT INTO `BOOK` VALUES ('21', '21', '软件工程原理', '编程', '沈备军、陈昊鹏、陈雨亭', '1024');
INSERT INTO `BOOK` VALUES ('22', '22', '数据库系统概念', '编程', '西尔伯沙茨', '244');
INSERT INTO `BOOK` VALUES ('23', '23', '算法导论', '编程', '科尔曼', '144');
INSERT INTO `BOOK` VALUES ('24', '24', '史记（文白对照本）', '古籍', '司马迁', '4141');
INSERT INTO `BOOK` VALUES ('25', '25', '天龙八部(全五册)', '武侠小说', '金庸', '74747');
INSERT INTO `BOOK` VALUES ('26', '26', '笑傲江湖(全四册)', '武侠小说', '金庸', '2522');
INSERT INTO `BOOK` VALUES ('27', '27', '楚留香传奇(全三册)', '武侠小说', '古龙', '551');
INSERT INTO `BOOK` VALUES ('28', '28', '哈利波特与魔法石', '魔幻小说', 'J·K·罗琳', '1000');
INSERT INTO `BOOK` VALUES ('29', '29', '哈利·波特与死亡圣器', '魔幻小说', 'J·K·罗琳', '1551');

-- ----------------------------
-- Table structure for users
-- ----------------------------
CREATE TABLE `BOOK_PRICE` (
                        `id` int(11) NOT NULL,
                        `date` datetime NOT NULL default '1000-01-01 00:00:00',
                        `price` decimal(10,2) NOT NULL,
                        PRIMARY KEY (`id`,`date`),
                        FOREIGN KEY (`id`) REFERENCES `book` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book——price
-- ----------------------------
INSERT INTO `BOOK_PRICE` VALUES ('1', default, '95.20');
INSERT INTO `BOOK_PRICE` VALUES ('2', default,'136.90');
INSERT INTO `BOOK_PRICE` VALUES ('3', default, '51.30');
INSERT INTO `BOOK_PRICE` VALUES ('4', default, '8.89');
INSERT INTO `BOOK_PRICE` VALUES ('5', default, '91.20');
INSERT INTO `BOOK_PRICE` VALUES ('6', default, '449.20');
INSERT INTO `BOOK_PRICE` VALUES ('7', default, '50.20');
INSERT INTO `BOOK_PRICE` VALUES ('8', default, '104.00');
INSERT INTO `BOOK_PRICE` VALUES ('9', default, '20.40');
INSERT INTO `BOOK_PRICE` VALUES ('10', default, '61.60');
INSERT INTO `BOOK_PRICE` VALUES ('11', default, '86.20');
INSERT INTO `BOOK_PRICE` VALUES ('12', default, '27.80');
INSERT INTO `BOOK_PRICE` VALUES ('13', default, '35.90');
INSERT INTO `BOOK_PRICE` VALUES ('14', default, '37.50');
INSERT INTO `BOOK_PRICE` VALUES ('15', default, '56.70');
INSERT INTO `BOOK_PRICE` VALUES ('16', default, '133.20');
INSERT INTO `BOOK_PRICE` VALUES ('17', default, '70.80');
INSERT INTO `BOOK_PRICE` VALUES ('18', default, '18.80');
INSERT INTO `BOOK_PRICE` VALUES ('19', default, '22.50');
INSERT INTO `BOOK_PRICE` VALUES ('20', default, '35.30');
INSERT INTO `BOOK_PRICE` VALUES ('21', default, '35.90');
INSERT INTO `BOOK_PRICE` VALUES ('22', default, '74.20');
INSERT INTO `BOOK_PRICE` VALUES ('23', default, '77.63');
INSERT INTO `BOOK_PRICE` VALUES ('24', default, '237.10');
INSERT INTO `BOOK_PRICE` VALUES ('25', default, '102.30');
INSERT INTO `BOOK_PRICE` VALUES ('26', default, '80.10');
INSERT INTO `BOOK_PRICE` VALUES ('27', default, '224.50');
INSERT INTO `BOOK_PRICE` VALUES ('28', default, '30.20');
INSERT INTO `BOOK_PRICE` VALUES ('29', default, '56.20');

-- ----------------------------
-- Table structure for users
-- ----------------------------
CREATE TABLE `USER` (
                        `user_id` int(11) NOT NULL,
                        `username` varchar(255) NOT NULL,
                        `password` varchar(255) NOT NULL,
                        `email` varchar(255) NOT NULL,
                        `type` varchar(255) NOT NULL,
                        `disable` boolen NOT NULL,
                        PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '12345','13321982841@163.com',  'ADMIN');

-- ----------------------------
-- Table structure for user
-- ----------------------------
CREATE TABLE `USER_INFO` (
                             `user_id` bigint NOT NULL,
                             `phone` varchar(255) NOT NULL,
                             `address` varchar(255) NOT NULL,
                             PRIMARY KEY (`user_id`,`phone`,`address`),
                             FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `USER_INFO` VALUES(173,"13321982841","上海市闵行区东川路800号");


-- ----------------------------
-- Table structure for cart
-- ----------------------------
CREATE TABLE `CART` (
                        `user_id` int(11) NOT NULL,
                        `book_id` int(11) NOT NULL,
                        `quantity` int(11) NOT NULL,
                        `selected` boolean NOT NULL,
                        FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
                        FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE,
                        PRIMARY KEY (`user_id`, `book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for order
-- ----------------------------
CREATE TABLE `ORDERS` (
                         `order_id` int(11) NOT NULL,
                         `user_id` int(11) NOT NULL,
                         `price` decimal(10,2) DEFAULT NULL,
                         `payed` boolean DEFAULT true,
                         `date` datetime DEFAULT NULL,
                         PRIMARY KEY (`order_id`),
                         FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `ORDER_ITEM` (
                              `order_id` int(11) NOT NULL,
                              `book_id` int(11) NOT NULL,
                              `quantity` int(11) NOT NULL,
                              PRIMARY KEY (`order_id`,`book_id`),
                              FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE,
                              FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

create or replace view CONSUME as(
select o.order_id, o.user_id, sum(oi.quantity) as total_quantity, o.price as total_money
from orders o join order_item oi on o.order_id = oi.order_id
group by o.user_id, o.order_id);

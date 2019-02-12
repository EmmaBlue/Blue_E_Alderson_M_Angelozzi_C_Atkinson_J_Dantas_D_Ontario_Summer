-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 12, 2019 at 03:03 AM
-- Server version: 5.7.20
-- PHP Version: 7.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ontario`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_country`
--

CREATE TABLE `tbl_country` (
  `country_id` smallint(5) UNSIGNED NOT NULL,
  `country_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_country`
--

INSERT INTO `tbl_country` (`country_id`, `country_name`) VALUES
(2, 'Afghanistan'),
(3, 'Albania'),
(4, 'Algeria'),
(5, 'American Samoa'),
(6, 'Andorra'),
(7, 'Angola'),
(8, 'Anguilla'),
(9, 'Antarctica'),
(10, 'Antigua and Barbuda'),
(11, 'Argentina'),
(12, 'Armenia'),
(13, 'Aruba'),
(14, 'Australia'),
(15, 'Austria'),
(16, 'Azerbaijan'),
(17, 'Bahamas'),
(18, 'Bahrain'),
(19, 'Bangladesh'),
(20, 'Barbados'),
(21, 'Belarus'),
(22, 'Belgium'),
(23, 'Belize'),
(24, 'Benin'),
(25, 'Bermuda'),
(26, 'Bhutan'),
(27, 'Bolivia'),
(28, 'Bosnia and Herzegovina'),
(29, 'Botswana'),
(30, 'Bouvet Island'),
(31, 'Brazil'),
(32, 'British Indian Ocean Territory'),
(33, 'Brunei Darussalam'),
(34, 'Bulgaria'),
(35, 'Burkina Faso'),
(36, 'Burundi'),
(37, 'Cambodia'),
(38, 'Cameroon'),
(39, 'Canada'),
(40, 'Cape Verde'),
(41, 'Cayman Islands'),
(42, 'Central African Republic'),
(43, 'Chad'),
(44, 'Chile'),
(45, 'China'),
(46, 'Christmas Island'),
(47, 'Cocos (Keeling) Islands'),
(48, 'Colombia'),
(49, 'Comoros'),
(50, 'Congo'),
(51, 'Cook Islands'),
(52, 'Costa Rica'),
(53, 'Croatia (Hrvatska)'),
(54, 'Cuba'),
(55, 'Cyprus'),
(56, 'Czech Republic'),
(57, 'Denmark'),
(58, 'Djibouti'),
(59, 'Dominica'),
(60, 'Dominican Republic'),
(61, 'East Timor'),
(62, 'Ecuador'),
(63, 'Egypt'),
(64, 'El Salvador'),
(65, 'Equatorial Guinea'),
(66, 'Eritrea'),
(67, 'Estonia'),
(68, 'Ethiopia'),
(69, 'Falkland Islands (Malvinas)'),
(70, 'Faroe Islands'),
(71, 'Fiji'),
(72, 'Finland'),
(73, 'France'),
(74, 'France, Metropolitan'),
(75, 'French Guiana'),
(76, 'French Polynesia'),
(77, 'French Southern Territories'),
(78, 'Gabon'),
(79, 'Gambia'),
(80, 'Georgia'),
(81, 'Germany'),
(82, 'Ghana'),
(83, 'Gibraltar'),
(84, 'Guernsey'),
(85, 'Greece'),
(86, 'Greenland'),
(87, 'Grenada'),
(88, 'Guadeloupe'),
(89, 'Guam'),
(90, 'Guatemala'),
(91, 'Guinea'),
(92, 'Guinea-Bissau'),
(93, 'Guyana'),
(94, 'Haiti'),
(95, 'Heard and Mc Donald Islands'),
(96, 'Honduras'),
(97, 'Hong Kong'),
(98, 'Hungary'),
(99, 'Iceland'),
(100, 'India'),
(101, 'Isle of Man'),
(102, 'Indonesia'),
(103, 'Iran (Islamic Republic of)'),
(104, 'Iraq'),
(105, 'Ireland'),
(106, 'Israel'),
(107, 'Italy'),
(108, 'Ivory Coast'),
(109, 'Jersey'),
(110, 'Jamaica'),
(111, 'Japan'),
(112, 'Jordan'),
(113, 'Kazakhstan'),
(114, 'Kenya'),
(115, 'Kiribati'),
(116, 'Korea, Democratic People\'s Republic of'),
(117, 'Korea, Republic of'),
(118, 'Kosovo'),
(119, 'Kuwait'),
(120, 'Kyrgyzstan'),
(121, 'Lao People\'s Democratic Republic'),
(122, 'Latvia'),
(123, 'Lebanon'),
(124, 'Lesotho'),
(125, 'Liberia'),
(126, 'Libyan Arab Jamahiriya'),
(127, 'Liechtenstein'),
(128, 'Lithuania'),
(129, 'Luxembourg'),
(130, 'Macau'),
(131, 'Macedonia'),
(132, 'Madagascar'),
(133, 'Malawi'),
(134, 'Malaysia'),
(135, 'Maldives'),
(136, 'Mali'),
(137, 'Malta'),
(138, 'Marshall Islands'),
(139, 'Martinique'),
(140, 'Mauritania'),
(141, 'Mauritius'),
(142, 'Mayotte'),
(143, 'Mexico'),
(144, 'Micronesia, Federated States of'),
(145, 'Moldova, Republic of'),
(146, 'Monaco'),
(147, 'Mongolia'),
(148, 'Montenegro'),
(149, 'Montserrat'),
(150, 'Morocco'),
(151, 'Mozambique'),
(152, 'Myanmar'),
(153, 'Namibia'),
(154, 'Nauru'),
(155, 'Nepal'),
(156, 'Netherlands'),
(157, 'Netherlands Antilles'),
(158, 'New Caledonia'),
(159, 'New Zealand'),
(160, 'Nicaragua'),
(161, 'Niger'),
(162, 'Nigeria'),
(163, 'Niue'),
(164, 'Norfolk Island'),
(165, 'Northern Mariana Islands'),
(166, 'Norway'),
(167, 'Oman'),
(168, 'Pakistan'),
(169, 'Palau'),
(170, 'Palestine'),
(171, 'Panama'),
(172, 'Papua New Guinea'),
(173, 'Paraguay'),
(174, 'Peru'),
(175, 'Philippines'),
(176, 'Pitcairn'),
(177, 'Poland'),
(178, 'Portugal'),
(179, 'Puerto Rico'),
(180, 'Qatar'),
(181, 'Reunion'),
(182, 'Romania'),
(183, 'Russian Federation'),
(184, 'Rwanda'),
(185, 'Saint Kitts and Nevis'),
(186, 'Saint Lucia'),
(187, 'Saint Vincent and the Grenadines'),
(188, 'Samoa'),
(189, 'San Marino'),
(190, 'Sao Tome and Principe'),
(191, 'Saudi Arabia'),
(192, 'Senegal'),
(193, 'Serbia'),
(194, 'Seychelles'),
(195, 'Sierra Leone'),
(196, 'Singapore'),
(197, 'Slovakia'),
(198, 'Slovenia'),
(199, 'Solomon Islands'),
(200, 'Somalia'),
(201, 'South Africa'),
(202, 'South Georgia South Sandwich Islands'),
(203, 'South Sudan'),
(204, 'Spain'),
(205, 'Sri Lanka'),
(206, 'St. Helena'),
(207, 'St. Pierre and Miquelon'),
(208, 'Sudan'),
(209, 'Suriname'),
(210, 'Svalbard and Jan Mayen Islands'),
(211, 'Swaziland'),
(212, 'Sweden'),
(213, 'Switzerland'),
(214, 'Syrian Arab Republic'),
(215, 'Taiwan'),
(216, 'Tajikistan'),
(217, 'Tanzania, United Republic of'),
(218, 'Thailand'),
(219, 'Togo'),
(220, 'Tokelau'),
(221, 'Tonga'),
(222, 'Trinidad and Tobago'),
(223, 'Tunisia'),
(224, 'Turkey'),
(225, 'Turkmenistan'),
(226, 'Turks and Caicos Islands'),
(227, 'Tuvalu'),
(228, 'Uganda'),
(229, 'Ukraine'),
(230, 'United Arab Emirates'),
(231, 'United Kingdom'),
(232, 'United States'),
(233, 'United States minor outlying islands'),
(234, 'Uruguay'),
(235, 'Uzbekistan'),
(236, 'Vanuatu'),
(237, 'Vatican City State'),
(238, 'Venezuela'),
(239, 'Vietnam'),
(240, 'Virgin Islands (British)'),
(241, 'Virgin Islands (U.S.)'),
(242, 'Wallis and Futuna Islands'),
(243, 'Western Sahara'),
(244, 'Yemen'),
(245, 'Zaire'),
(246, 'Zambia'),
(247, 'Zimbabwe');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subscribers`
--

CREATE TABLE `tbl_subscribers` (
  `sub_id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `last_update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_subscribers`
--

INSERT INTO `tbl_subscribers` (`sub_id`, `first_name`, `last_name`, `email`, `created_at`, `last_update_date`) VALUES
(10, 'Emma', 'Blue', 'emmajaeblue@gmail.com', '2019-02-11 16:18:59', NULL),
(11, 'Jacob', 'Atkinson', 'j_atkinson63@fanshaweonline.ca', '2019-02-11 16:21:14', NULL),
(12, 'Daniela', 'Dantas', 'danifdantas@gmail.com', '2019-02-11 16:22:10', NULL),
(13, 'Mariah', 'Alderson', 'm_alderson59387@fanshaweonline.ca', '2019-02-11 16:23:23', NULL),
(15, 'Test', 'Test', 'Test@test.com', '2019-02-11 18:45:57', NULL),
(16, 'First Sub Name', 'First Sub Lastname', 'camillo@test.com', '2019-02-11 18:47:42', NULL),
(17, 'testtest', 'First Sub Lastname', 'testtest@ok.com', '2019-02-11 18:50:16', '2019-02-11 18:50:25'),
(18, 'Emmmmma', 'Blueee', 'amme@test.ca', '2019-02-11 18:56:17', NULL),
(21, 'Camillo', 'Angelozzi', 'c_angelozzi@fanshaweonline.ca', '2019-02-11 19:29:43', NULL),
(22, 'Christian', 'Angelozzi', 'cangelozzi@gmail.com', '2019-02-11 19:41:52', NULL),
(28, 'Greta', 'Garbo', 'greta@garbo.com', '2019-02-11 21:33:18', NULL),
(29, 'zsazsa', 'gabor', 'pan@pan.com', '2019-02-11 21:42:20', NULL),
(30, 'Nelson', 'Piquet', 'nelson@piquet.br', '2019-02-11 21:46:07', NULL),
(31, 'AnotherPink', 'Martini', 'pink@martini.com', '2019-02-11 21:49:19', '2019-02-11 22:02:32');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sub_country`
--

CREATE TABLE `tbl_sub_country` (
  `id` int(10) UNSIGNED NOT NULL,
  `sub_id` int(11) NOT NULL,
  `country_id` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_sub_country`
--

INSERT INTO `tbl_sub_country` (`id`, `sub_id`, `country_id`) VALUES
(10, 10, 39),
(11, 11, 39),
(12, 12, 31),
(13, 13, 39),
(14, 14, 107),
(15, 15, 14),
(16, 16, 17),
(17, 17, 9),
(18, 18, 9),
(19, 19, 39),
(20, 20, 39),
(21, 21, 39),
(22, 22, 39),
(23, 23, 7),
(24, 24, 13),
(25, 25, 11),
(26, 26, 5),
(27, 27, 9),
(28, 28, 15),
(29, 29, 168),
(30, 30, 19),
(31, 31, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_country`
--
ALTER TABLE `tbl_country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `tbl_subscribers`
--
ALTER TABLE `tbl_subscribers`
  ADD PRIMARY KEY (`sub_id`);

--
-- Indexes for table `tbl_sub_country`
--
ALTER TABLE `tbl_sub_country`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_country`
--
ALTER TABLE `tbl_country`
  MODIFY `country_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=248;

--
-- AUTO_INCREMENT for table `tbl_subscribers`
--
ALTER TABLE `tbl_subscribers`
  MODIFY `sub_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `tbl_sub_country`
--
ALTER TABLE `tbl_sub_country`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

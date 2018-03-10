-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2018 at 05:05 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `noisemusic`
--

-- --------------------------------------------------------

--
-- Table structure for table `downloads`
--

CREATE TABLE `downloads` (
  `id` int(255) NOT NULL,
  `songid` int(255) NOT NULL,
  `num` int(255) NOT NULL,
  `postingdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `downloads`
--

INSERT INTO `downloads` (`id`, `songid`, `num`, `postingdate`) VALUES
(1, 11, 1, '2017-12-05 11:33:25'),
(2, 11, 1, '2018-02-13 19:56:46'),
(3, 11, 1, '2018-02-13 19:56:54'),
(4, 12, 1, '2018-02-16 14:54:03'),
(5, 6, 1, '2018-02-16 14:56:03'),
(6, 6, 1, '2018-02-16 15:32:19'),
(7, 10, 1, '2018-02-16 15:34:12'),
(8, 10, 1, '2018-02-16 15:34:17'),
(9, 10, 1, '2018-02-16 15:34:20'),
(10, 10, 1, '2018-02-16 15:34:25'),
(11, 6, 1, '2018-02-16 15:35:59'),
(12, 6, 1, '2018-02-16 15:36:01');

-- --------------------------------------------------------

--
-- Table structure for table `musicfiles`
--

CREATE TABLE `musicfiles` (
  `id` int(255) NOT NULL,
  `artist` varchar(255) NOT NULL,
  `album` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `song_url` varchar(6000) NOT NULL,
  `songname` varchar(255) NOT NULL,
  `filetype` varchar(255) NOT NULL,
  `paystatus` varchar(255) DEFAULT NULL,
  `postingdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `musicfiles`
--

INSERT INTO `musicfiles` (`id`, `artist`, `album`, `image_url`, `song_url`, `songname`, `filetype`, `paystatus`, `postingdate`) VALUES
(1, 'hh', 'hhh', 'uploads/images/africarythms2.jpg', 'uploads/audio/01 Lord Knows.mp3', '01 Lord Knows.mp3', 'Audio', NULL, '2018-01-14 09:18:25'),
(2, 'ttt', 'ttt', 'uploads/images/africarythms3.jpg', 'uploads/audio/05 The Trillest.mp3', '05 The Trillest.mp3', 'Audio', NULL, '2018-01-14 09:18:25'),
(3, 'ddd', 'ddd', 'uploads/images/africarythms15.jpeg', 'uploads/audio/Take_Care_of_Me.mp3', 'Take_Care_of_Me.mp3', 'Audio', NULL, '2018-01-14 09:18:25'),
(4, 'oooo', 'ooo', 'uploads/images/africarythms5.jpg', 'uploads/audio/Tiwa Savage ft. Wizkid - Bad (prod. P2J).mp3', 'Tiwa Savage ft. Wizkid - Bad (prod. P2J).mp3', 'Audio', NULL, '2018-01-14 09:18:25'),
(5, 'bbbbb', 'bbbbbbbbbbbbbbb', 'uploads/images/africarythms6.jpg', 'uploads/audio/01. Hello.mp3', '01. Hello.mp3', 'Audio', NULL, '2018-01-14 09:18:25'),
(6, 'zzzzzzzzzzzz', 'zzzzzzzzzzzzzz', 'uploads/images/africarythms4.jpg', 'uploads/audio/2Lives -bend over (master)(prod by Quincy Wizzy).mp3', '2Lives -bend over (master)(prod by Quincy Wizzy).mp3', 'Audio', NULL, '2018-01-14 09:18:25'),
(7, 'ssssssssssss', 'sssssssssssss', 'uploads/images/africarythms6.jpg', 'uploads/audio/2lives-Cadre.mp3', '2lives-Cadre.mp3', 'Audio', NULL, '2018-01-14 09:18:25'),
(8, '2 Lives', 'Single', 'uploads/images/africarythms12.jpg', 'uploads/audio/2Lives-Lepulani.mp3', 'Lepulani', 'Audio', NULL, '2018-01-14 09:18:25'),
(9, 'Hip Hop', 'This thing called life', 'uploads/images/africarythms11.jpg', 'uploads/audio/05. Hip Hop.mp3', 'Augustina', 'Audio', NULL, '2018-01-14 09:18:25'),
(10, 'Meek Mill', 'Trillest', 'uploads/images/africarythms18.jpg', 'uploads/audio/05 The Trillest.mp3', 'Trillest', 'Audio', NULL, '2018-01-14 09:18:25'),
(11, 'Meek Mill', 'Trillest', 'uploads/images/africarythms17.jpg', 'uploads/audio/The Trillest.mp3', 'The Trillest', 'Audio', NULL, '2018-01-14 09:18:25'),
(12, 'yyy', 'yyy', 'uploads/images/serviceimage.png', 'uploads/audio/yyy.mp3', 'yyy', 'Audio', NULL, '2018-02-13 20:30:08');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(255) NOT NULL,
  `rating` int(255) NOT NULL,
  `songid` int(255) NOT NULL,
  `postingdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `useraccounts`
--

CREATE TABLE `useraccounts` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `usertype` varchar(20) DEFAULT NULL,
  `postingdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `useraccounts`
--

INSERT INTO `useraccounts` (`id`, `username`, `mobile`, `pass`, `location`, `email`, `usertype`, `postingdate`) VALUES
(1, 'mmaikabo', '0976379025', 'thabo@2017', 'Chilanga', 'maikabom@gmail.com', 'Admin', '2017-12-05 21:02:15'),
(2, 'NgendaM', '0975789045', 'ngenda@2017', 'Woodlands', 'ngendu@gmail.com', 'Standard', '2018-01-09 15:54:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `downloads`
--
ALTER TABLE `downloads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `songId` (`songid`),
  ADD KEY `timeposting` (`postingdate`);

--
-- Indexes for table `musicfiles`
--
ALTER TABLE `musicfiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artist` (`artist`),
  ADD KEY `album` (`album`),
  ADD KEY `paystatus` (`paystatus`),
  ADD KEY `postingDate` (`postingdate`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rating` (`rating`),
  ADD KEY `songidRated` (`songid`);

--
-- Indexes for table `useraccounts`
--
ALTER TABLE `useraccounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usertype` (`usertype`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `downloads`
--
ALTER TABLE `downloads`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `musicfiles`
--
ALTER TABLE `musicfiles`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `useraccounts`
--
ALTER TABLE `useraccounts`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `downloads`
--
ALTER TABLE `downloads`
  ADD CONSTRAINT `songid` FOREIGN KEY (`id`) REFERENCES `musicfiles` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

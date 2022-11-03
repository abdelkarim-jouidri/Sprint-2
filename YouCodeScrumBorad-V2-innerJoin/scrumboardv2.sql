-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 01, 2022 at 11:45 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scrumboardv2`
--

-- --------------------------------------------------------

--
-- Table structure for table `priorityfield`
--

CREATE TABLE `priorityfield` (
  `id` int(11) NOT NULL,
  `priority` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `priorityfield`
--

INSERT INTO `priorityfield` (`id`, `priority`) VALUES
(1, 'Low'),
(2, 'Medium'),
(3, 'High'),
(4, 'Critical');

-- --------------------------------------------------------

--
-- Table structure for table `statusfield`
--

CREATE TABLE `statusfield` (
  `id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `statusfield`
--

INSERT INTO `statusfield` (`id`, `status`) VALUES
(1, 'To Do'),
(2, 'In Progress'),
(3, 'Done');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `type_id` int(11) NOT NULL,
  `priority_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `task_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `type_id`, `priority_id`, `status_id`, `description`, `task_date`) VALUES
(4, 'Reiciendis enim arch', 2, 2, 3, 'Voluptatem Maiores ', '1987-01-15'),
(9, 'moved to done', 2, 3, 3, 'Deserunt porro ut in', '1994-07-25'),
(10, 'Ut veniam elit sun', 1, 1, 2, 'long description', '2020-12-14'),
(11, 'moved to in progress', 1, 2, 1, 'ok', '2029-02-28'),
(12, 'Pariatur Amet eaqu', 2, 3, 3, 'Possimus fugiat pos', '2001-08-07');

-- --------------------------------------------------------

--
-- Table structure for table `typefield`
--

CREATE TABLE `typefield` (
  `id` int(11) NOT NULL,
  `type_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `typefield`
--

INSERT INTO `typefield` (`id`, `type_name`) VALUES
(1, 'Feature'),
(2, 'Bug');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `priorityfield`
--
ALTER TABLE `priorityfield`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statusfield`
--
ALTER TABLE `statusfield`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`type_id`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `priority_id` (`priority_id`);

--
-- Indexes for table `typefield`
--
ALTER TABLE `typefield`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `priorityfield`
--
ALTER TABLE `priorityfield`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `statusfield`
--
ALTER TABLE `statusfield`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `typefield`
--
ALTER TABLE `typefield`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `typefield` (`id`),
  ADD CONSTRAINT `tasks_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `statusfield` (`id`),
  ADD CONSTRAINT `tasks_ibfk_3` FOREIGN KEY (`priority_id`) REFERENCES `priorityfield` (`id`),
  ADD CONSTRAINT `tasks_ibfk_4` FOREIGN KEY (`status_id`) REFERENCES `statusfield` (`id`),
  ADD CONSTRAINT `tasks_ibfk_5` FOREIGN KEY (`priority_id`) REFERENCES `priorityfield` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

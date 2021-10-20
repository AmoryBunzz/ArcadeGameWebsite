-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 19, 2021 lúc 11:06 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `arcade_game_website`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admins`
--

CREATE TABLE `admins` (
  `AdminID` int(255) NOT NULL,
  `Email` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `Password` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `Name` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `DayOfBirth` date DEFAULT NULL,
  `Avatar` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `admins`
--

INSERT INTO `admins` (`AdminID`, `Email`, `Password`, `Name`, `Gender`, `DayOfBirth`, `Avatar`) VALUES
(1, 'tuankietnk2001@gmail.com', 'admin01', 'Nguyễn Đặng Tuấn Kiệt', 1, '2001-04-09', NULL),
(2, 'oppahd96@gmail.com', 'admin02', 'Hồ Minh Hiếu', 1, '0000-00-00', NULL),
(3, 'bduyphuong12@gmail.com', 'admin03', 'Bùi Duy Phương', 1, NULL, NULL),
(4, 'nghia567123@gmail.com', 'admin04', 'Lê Trung Nghĩa', 1, NULL, NULL),
(5, '19521953@gm.uit.edu.vn', 'admin05', 'Mã Hải Nhật', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `all_user_records`
--

CREATE TABLE `all_user_records` (
  `id` int(255) NOT NULL,
  `UserID` int(255) NOT NULL,
  `GameID` int(255) NOT NULL,
  `HighScore` int(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `id` int(255) NOT NULL,
  `UserID` int(255) NOT NULL,
  `GameID` int(255) NOT NULL,
  `Comment` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `error_feedbacks`
--

CREATE TABLE `error_feedbacks` (
  `id` int(255) NOT NULL,
  `UserID` int(255) NOT NULL,
  `GameID` int(255) NOT NULL,
  `ErrorType` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ErrorInfo` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `AdminID` int(255) DEFAULT NULL,
  `ProcessStatus` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `games`
--

CREATE TABLE `games` (
  `id` int(255) NOT NULL,
  `DevID` int(255) NOT NULL,
  `IFrame` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `UploadDate` date NOT NULL,
  `GameTitle` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `GameAvatar` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `Category` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `GamePlayImage` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Description` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Played` int(255) DEFAULT NULL,
  `Rate` int(255) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `games`
--

INSERT INTO `games` (`id`, `DevID`, `IFrame`, `UploadDate`, `GameTitle`, `GameAvatar`, `Category`, `GamePlayImage`, `Description`, `Played`, `Rate`, `createdAt`, `updatedAt`) VALUES
(4, 1, 'https://test.com/game1', '2021-10-13', 'Game1-updated', '1634198825630.jpg', 'Racing', '', NULL, 5, 0, '2021-10-13', '2021-10-14');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20211005181929-create-game.js'),
('20211005182724-create-user.js'),
('20211005183024-create-comment.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `upload_game_requests`
--

CREATE TABLE `upload_game_requests` (
  `id` int(255) NOT NULL,
  `UserID` int(255) NOT NULL,
  `IFrame` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `RequestDate` date NOT NULL,
  `GameTitle` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `Category` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `GameAvatar` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `GamePlayImage` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Description` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `AdminID` int(255) DEFAULT NULL,
  `RequestStatus` tinyint(1) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `Email` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `Password` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `Role` tinyint(1) NOT NULL,
  `Name` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `DayOfBirth` date DEFAULT NULL,
  `Avatar` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Friends` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `Email`, `Password`, `Role`, `Name`, `Gender`, `DayOfBirth`, `Avatar`, `Friends`, `createdAt`, `updatedAt`) VALUES
(8, 'test4@gmail.com', '$2a$10$6KkUsGvPviDk5o65t0TtQuAipVb5Da00IalqUELa5vndPQzSl59yG', 0, 'Tuấn Kiệt', 1, '0000-00-00', '', '', '2021-10-08', '2021-10-08'),
(9, 'tuankietnk2001@gmail.com', '$2a$10$rTD480Arm6GU5stitL55Fe6x0dZK2kWFXPd5TZUziv2NtX8ooja6u', 0, 'Tuấn Kiệt', 1, '0000-00-00', '', '', '2021-10-08', '2021-10-08'),
(10, 'test5@gmail.com', '$2a$10$n9uXb/T8QQJld1n/pSuAoeY6ZwfOWQEIZycZoZBRwAm7dJpB/PQcq', 0, 'Tuấn Kiệt', 1, '0000-00-00', '', '', '2021-10-13', '2021-10-13');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`AdminID`);

--
-- Chỉ mục cho bảng `all_user_records`
--
ALTER TABLE `all_user_records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameID` (`GameID`),
  ADD KEY `UserID` (`UserID`);

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameID` (`GameID`),
  ADD KEY `UserID` (`UserID`);

--
-- Chỉ mục cho bảng `error_feedbacks`
--
ALTER TABLE `error_feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameID` (`GameID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `AdminID` (`AdminID`);

--
-- Chỉ mục cho bảng `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `games_ibfk_1` (`DevID`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `upload_game_requests`
--
ALTER TABLE `upload_game_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AdminID` (`AdminID`),
  ADD KEY `UserID` (`UserID`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admins`
--
ALTER TABLE `admins`
  MODIFY `AdminID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `all_user_records`
--
ALTER TABLE `all_user_records`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `error_feedbacks`
--
ALTER TABLE `error_feedbacks`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `games`
--
ALTER TABLE `games`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `upload_game_requests`
--
ALTER TABLE `upload_game_requests`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `all_user_records`
--
ALTER TABLE `all_user_records`
  ADD CONSTRAINT `all_user_records_ibfk_1` FOREIGN KEY (`GameID`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `all_user_records_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`GameID`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `error_feedbacks`
--
ALTER TABLE `error_feedbacks`
  ADD CONSTRAINT `error_feedbacks_ibfk_1` FOREIGN KEY (`GameID`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `error_feedbacks_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `error_feedbacks_ibfk_3` FOREIGN KEY (`AdminID`) REFERENCES `admins` (`AdminID`);

--
-- Các ràng buộc cho bảng `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`DevID`) REFERENCES `admins` (`AdminID`);

--
-- Các ràng buộc cho bảng `upload_game_requests`
--
ALTER TABLE `upload_game_requests`
  ADD CONSTRAINT `upload_game_requests_ibfk_1` FOREIGN KEY (`AdminID`) REFERENCES `admins` (`AdminID`),
  ADD CONSTRAINT `upload_game_requests_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

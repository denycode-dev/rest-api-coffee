-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Agu 2020 pada 03.51
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coffeproject`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Appetizer'),
(2, 'Main Course'),
(3, 'Dessert'),
(4, 'Beverage'),
(5, 'Snack'),
(6, 'Recommended food');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `invoice` int(11) NOT NULL,
  `cashierId` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `orderOn` text NOT NULL,
  `amout` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`invoice`, `cashierId`, `date`, `orderOn`, `amout`) VALUES
(14527, 1, '2020-08-15 08:14:50', 'Espresso, Choco Rhum, Black Forest', 59000),
(14528, 1, '2020-08-15 08:14:50', 'Salmon Truffle Teriyaki, Wiener Schnitzel', 129000),
(14530, 1, '2020-08-15 08:18:40', 'Salmon Truffle Teriyaki, Red Velvet Latte', 93000),
(14531, 1, '2020-08-15 08:18:40', 'Choco Rhum, Cappucino', 33000),
(14532, 1, '2020-08-15 08:21:41', 'Espresso, Salmon Truffle Teriyaki', 70000),
(14533, 1, '2020-08-15 08:21:41', 'Espresso, Cofee Latte, Cappucino, Red Velvet Latte, Choco Rhum, Black Forest, Chicken Katsu Dabu-dabu, Salmon Truffle Teriyaki, Wiener Schnitzel', 310000),
(14534, 2, '2020-08-19 14:07:49', 'Cofee Latte', 15000),
(14535, 2, '2020-08-18 14:10:08', 'Black Forest, Salmon Truffle Teriyaki', 90000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `image` text NOT NULL,
  `price` int(59) NOT NULL,
  `idCategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `name`, `image`, `price`, `idCategory`) VALUES
(26, 'Espresso', 'https://www.seriouseats.com/2018/06/20180613-coffee-vs-espresso-vicky-wasik-3-1500x1125.jpg', 10000, 4),
(27, 'Cofee Latte', 'https://img-global.cpcdn.com/recipes/758c36d0112cbce6/751x532cq70/coffee-lattecappuccino-foto-resep-utama.jpg', 15000, 4),
(28, 'Cappucino', 'https://vaya.in/recipes/wp-content/uploads/2019/02/Cappuccino.jpg', 5000, 4),
(29, 'Red Velvet Latte ', 'https://media-cdn.tripadvisor.com/media/photo-s/0b/ae/db/d3/goodfellas-resto-bar.jpg', 33000, 4),
(30, 'Choco Rhum', 'https://img-global.cpcdn.com/recipes/2b7fd0a04c2d58dd/751x532cq70/dead-choco-rum-foto-resep-utama.jpg', 28000, 3),
(31, 'Black Forest', 'https://ofbatteranddough.com/wp-content/uploads/2019/02/Black-Forest-Cake-1-1.jpg', 30000, 3),
(32, 'Chicken Katsu Dabu-dabu', 'https://i.pinimg.com/474x/b9/76/05/b97605fa0d5d0116d477665ee1e137c4.jpg', 60000, 2),
(33, 'Salmon Truffle Teriyaki', 'https://media-cdn.tripadvisor.com/media/photo-s/14/86/73/2d/rice-sauteed-seasonal.jpg', 60000, 2),
(34, 'Wiener Schnitzel', 'https://rosemarieskitchensite.files.wordpress.com/2019/08/weiner-schnitzel3.jpg?w=849', 69000, 2),
(35, 'Boba Time', 'https://www.bobatimeindonesia.com/wp-content/uploads/2020/07/menueditor_item_841b602bbf154713abed02b09f343fe5_1582106680213090153.jpg', 12000, 2),
(40, 'Ice Tea', 'http://localhost:18000/uploads/image/2020-08-23T04_44_38.842Zes-teh-manis-doktersehat.jpg', 9000, 1),
(41, 'coffe', 'http://localhost:18000/uploads/image/2020-08-24T06_56_28.954Z1596071269760.png', 3000, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Cashier'),
(2, 'Managerial');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `division` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `tlpNumber` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roleId` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `division`, `email`, `tlpNumber`, `password`, `roleId`, `image`, `createAt`, `updateAt`) VALUES
(3, 'William Pamudji', 'cashier', 'denykun666@gmail.com', '+628317486960', '$2b$15$Lv9n8ZhqJnEf3qdOKYN5s.j4woob6es6gp9Y8a9d5dBCkjwztD/0q', 1, '', '2020-08-20 17:05:17', '2020-08-20 17:05:17'),
(4, 'Neng Aurin Putri Dinda Andriani', 'cashier', 'aurin.p.d.a@gmail.com', '+628387567890', '$2b$15$hWzPQaO1DnKxzc3N5WwN8ukfS9C2KSCFeq8Drsa4ccvv8YzC/03dy', 1, '', '2020-08-20 17:09:18', '2020-08-20 17:09:18'),
(5, 'Handri Mudrika', 'Kepala Toko', 'sangHandri@gmail.com', '+628582245678', '$2b$15$Ex19a/.tHggbyJvJ85XtK.2ThUowfRcEC1iZSGh1L9wjOAF8TeEjG', 1, '', '2020-08-20 17:11:33', '2020-08-20 17:11:33'),
(19, 'Deni Irawan Nugraha', 'accounting', 'deni.irawan40563@gmail.com', '083822322603', '$2b$10$2UseOYB5ccF7VPAsgbi1YeKGwhOG5N79scqEYKg9vm7BoyIxSNVsq', 2, 'http://localhost:18000/uploads/image/2020-08-24T06_20_11.836ZCiel Phantomhive. Birthday,  December 14..jpg', '2020-08-24 06:20:11', '2020-08-24 06:20:11'),
(20, 'Anjar Analuam', 'Cashier', 'anjar@gmail.com', '083822322607', '$2b$10$t6dCiHXWEEHh234P2Y9bNeRpsYvO3Bg4oLPCMfGhX06racgo8cl6i', 2, 'http://localhost:18000/uploads/image/2020-08-24T07_12_04.189Z20200729_091638.jpg', '2020-08-24 07:12:06', '2020-08-24 07:12:06');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`invoice`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `invoice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14536;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT untuk tabel `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

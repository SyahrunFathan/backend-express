-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Sep 2024 pada 08.29
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_test`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_cafe`
--

CREATE TABLE `tb_cafe` (
  `id_cafe` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tb_cafe`
--

INSERT INTO `tb_cafe` (`id_cafe`, `name`, `address`, `phoneNumber`, `createdAt`, `updatedAt`) VALUES
('01ea70dd-db57-4e05-9abc-39287a243c93', 'Cafe B', 'Jl. Soekarno Hatta', '081244423801', '2024-09-22 05:57:03', '2024-09-22 05:57:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_menu`
--

CREATE TABLE `tb_menu` (
  `id_menu` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `recommended` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tb_menu`
--

INSERT INTO `tb_menu` (`id_menu`, `name`, `price`, `recommended`, `createdAt`, `updatedAt`) VALUES
('9d722f36-1b5b-4f70-9a14-32a0d85577fa', 'Nasi Ayam Penyet', 22000, 1, '2024-09-22 05:58:10', '2024-09-22 05:58:37'),
('e995a0dc-c3e9-4247-a961-fbd1bf81b2c0', 'Mie Goreng', 15000, 1, '2024-09-22 05:45:19', '2024-09-22 05:45:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_user`
--

CREATE TABLE `tb_user` (
  `id_user` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('Super Admin','Owner','Manager') DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tb_user`
--

INSERT INTO `tb_user` (`id_user`, `username`, `fullname`, `password`, `role`, `token`, `createdAt`, `updatedAt`) VALUES
('14a0dbc8-a276-4883-bc7f-e380c6e2b4e8', 'Syahrun19', 'Syahrun Fathan Hidayah', '$2a$10$Is6OwuUdgk5xn2mihY/LKOAkUkzjm5Rjuno24p.kClPvAPrumBFfK', 'Owner', NULL, '2024-09-22 04:52:30', '2024-09-22 05:59:39');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_cafe`
--
ALTER TABLE `tb_cafe`
  ADD PRIMARY KEY (`id_cafe`);

--
-- Indeks untuk tabel `tb_menu`
--
ALTER TABLE `tb_menu`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indeks untuk tabel `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

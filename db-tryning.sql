-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2023 a las 05:52:13
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db-tryning`
--
CREATE DATABASE IF NOT EXISTS `db-tryning` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db-tryning`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trainers`
--

CREATE TABLE `trainers` (
  `id_trainer` varchar(255) NOT NULL,
  `name` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `image` varchar(255) NOT NULL,
  `username` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `trainers`
--

INSERT INTO `trainers` (`id_trainer`, `name`, `email`, `image`, `username`) VALUES
('asjlhrieaaaaaq+q+asñbkejhiofioe', 'Nico Presa', 'pedro@gmail.com', 'https://www.ui1.es/sites/default/files/blog/images/blog_entrenador_de_futbol_cafd_web.jpg', 'trainerC8D8Ra7M'),
('asjlhrieaaaaaq+q+asñbkejhiofioe', 'Nico Presa', 'pedro@gmail.com', 'https://images.hola.com/imagenes/estar-bien/20200205159628/errores-que-evita-entrenador-personal/0-777-664/errores-entrenador-personal-t.jpg', 'trainero7RelbBR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` varchar(255) NOT NULL,
  `name` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `image` varchar(255) NOT NULL,
  `username` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `name`, `email`, `image`, `username`) VALUES
('asjlhrieq+q+asñbkejhiofioe', 'Pedro Presa', 'pedro@gmail.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpj2elRrHLpPcNjxMfFdLA9zSoxiCbivEvHQ&usqp=CAU', 'usernameqeZw6AOG'),
('FGPDJuBgIPTnTBbFChaEGQElSZk1', 'Juan Peñalba', 'juantandil123@gmail.com', 'https://lh3.googleusercontent.com/a/AAcHTtfs8vW9MJq4LQPtTrtawFkgbjZFK3rdGE-a6I0g4A=s96-c', 'username1ekp8awX');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

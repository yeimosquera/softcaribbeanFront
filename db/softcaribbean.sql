-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2022 a las 02:27:40
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `softcaribbean`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `cddocumento` varchar(20) NOT NULL,
  `dsnombres` varchar(60) NOT NULL,
  `dsapellidos` varchar(60) NOT NULL,
  `fenacimiento` varchar(60) NOT NULL,
  `cdgenero` varchar(10) NOT NULL,
  `feregistro` varchar(50) DEFAULT NULL,
  `febaja` varchar(50) DEFAULT NULL,
  `cdusuario` varchar(150) NOT NULL,
  `dsdireccion` varchar(200) NOT NULL,
  `dsphoto` varchar(500) DEFAULT NULL,
  `cdtelefono_fijo` varchar(20) DEFAULT NULL,
  `cdtelefono_movil` varchar(20) NOT NULL,
  `dsemail` varchar(200) NOT NULL,
  `dseps` varchar(50) DEFAULT NULL,
  `dsarl` varchar(50) DEFAULT NULL,
  `dscondicion` text DEFAULT NULL,
  `cdtipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `cddocumento`, `dsnombres`, `dsapellidos`, `fenacimiento`, `cdgenero`, `feregistro`, `febaja`, `cdusuario`, `dsdireccion`, `dsphoto`, `cdtelefono_fijo`, `cdtelefono_movil`, `dsemail`, `dseps`, `dsarl`, `dscondicion`, `cdtipo`) VALUES
(2, '1007059556', 'Yeison', 'Hinestroza Mosquera', '04-07-1995', 'Masculino', '08-09-2022', '', 'Yhinestroza', 'crr 26 eg # 37 - 135', '', '', '3116603530', 'yeimosquera1995@gmail.com', 'Sura', 'Sura', '', 1),
(4, '1007059556', 'Yeison', 'Hinestroza Mosquera', '04-07-1995', 'Masculino', '08-09-2022', '', 'Yhinestroza', 'crr 26 eg # 37 - 135', '', '', '3116603530', 'yeimosquera1995@gmail.com', 'Sura', 'Sura', '', 1),
(5, '1007059556', 'Yeison', 'Hinestroza Mosquera', '04-07-1995', 'Masculino', '08-09-2022', '', 'Yhinestroza', 'crr 26 eg # 37 - 135', '', '', '3116603530', 'yeimosquera1995@gmail.com', 'Sura', 'Sura', '', 1),
(6, 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'user@example.com', 'string', 'string', 'string', 1),
(7, '1007059556', 'Yeison', 'Hinestroza Mosquera', '04-07-1995', 'Masculino', '08-09-2022', '', 'Yhinestroza', 'crr 26 eg # 37 - 135', '', '', '3116603530', 'yeimosquera1995@gmail.com', 'Sura', 'Sura', '', 1),
(8, '1007059556', 'Yeison', 'Hinestroza Mosquera', '04-07-1995', 'Masculino', '08-09-2022', '', 'Yhinestroza', 'crr 26 eg # 37 - 135', '', '', '3116603530', 'yeimosquera1995@gmail.com', 'Sura', 'Sura', '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_persona`
--

CREATE TABLE `tipo_persona` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_persona`
--

INSERT INTO `tipo_persona` (`id`, `descripcion`) VALUES
(1, 'Paciente'),
(2, 'Empleado'),
(3, 'Trabajador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `cdtipo` (`cdtipo`);

--
-- Indices de la tabla `tipo_persona`
--
ALTER TABLE `tipo_persona`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tipo_persona`
--
ALTER TABLE `tipo_persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`cdtipo`) REFERENCES `tipo_persona` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 20/10/2023 às 03:17
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `forum`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `discussion`
--

CREATE TABLE `discussion` (
  `id` int(11) NOT NULL,
  `parent_comment` varchar(500) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `post` varchar(1000) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `discussion`
--

INSERT INTO `discussion` (`id`, `parent_comment`, `title`, `post`, `date`) VALUES
(132, '130', 'Eng. Vince', 'So, kindly, hurry and sign up', '2021-08-05 10:27:43'),
(131, '130', 'Eng. Vince', 'I will be teaching it here soon.', '2021-08-05 10:27:33'),
(130, '0', 'Eng. Vince', 'Hello, anyone interested in learning cybersecurity ?', '2021-08-05 10:27:07'),
(129, '126', 'Mr Kyalo', 'Technology might fail to be a key driver of development in Africa', '2021-08-03 11:35:25'),
(128, '121', 'Mr Kyalo', 'No, English is spoken in the same measure as French', '2021-08-03 11:34:33'),
(127, '126', 'Mr Kyalo', 'it will definitely become industrialized ', '2021-08-03 11:33:58'),
(126, '0', 'Mr Kyalo', 'What is the future of Africa?\n', '2021-08-03 11:33:28'),
(125, '121', 'Martin', 'Maybe Chinese due to high population in the home nation ', '2021-08-03 11:28:57'),
(124, '104', 'Martin', 'on which subject?', '2021-08-03 11:28:30'),
(123, '116', 'Martin', 'Soon all technical courses will be available', '2021-08-03 11:28:09'),
(122, '121', 'Martin', 'I know there are many international langugaes', '2021-08-03 11:27:27'),
(121, '0', 'Martin', 'Is English the most spoken language on the globe', '2021-08-03 11:26:53'),
(120, '116', 'Martin', 'i just know of cybersecurity ', '2021-07-22 08:32:27'),
(119, '93', 'Martin', 'being new makes it better', '2021-07-22 08:32:01'),
(118, '104', 'Martin', 'get in touch, i can help', '2021-07-22 08:31:40'),
(117, '107', 'Martin', 'try windows 11', '2021-07-22 08:31:17'),
(115, '104', 'Mr Kyalo', 'i can do it for you. can i give you my contact.', '2021-07-22 08:23:22'),
(116, '0', 'Martin', 'What courses can i learn on this platform', '2021-07-22 08:30:58'),
(114, '99', 'Mr Kyalo', 'purchase only from a verified dealer', '2021-07-22 08:22:33'),
(113, '95', 'Mr Kyalo', 'depends with personal prefference', '2021-07-22 08:20:50'),
(112, '93', 'Mr Kyalo', 'its fast', '2021-07-22 08:20:28'),
(111, '104', 'Jack', 'For which subject', '2021-07-21 21:11:58'),
(110, '107', 'John', 'For which computer', '2021-07-21 21:11:25'),
(109, '107', 'Jane', 'I also need windows 11', '2021-07-21 21:10:38'),
(108, '107', 'Jemoh', 'Which one', '2021-07-21 21:09:55'),
(107, '0', 'Martin', 'Kindly help me in OS', '2021-07-19 03:55:00'),
(106, '104', 'Martin', 'or any other topic of your choice', '2021-07-19 03:54:39'),
(105, '104', 'Martin', 'The project title can be fees management system', '2021-07-19 03:54:15'),
(104, '0', 'Martin', 'Who can develop fourth year project for me?', '2021-07-19 03:53:31'),
(103, '99', 'Mr Kyalo', 'of what capacity', '2021-07-09 08:44:14'),
(102, '93', 'Mr Kyalo', 'enhanced security as compared to previous versions.', '2021-07-09 08:43:19'),
(101, '99', 'Martin', 'you can buy it at any computer shop', '2021-07-09 08:27:36'),
(100, '99', 'Mr Kyalo', 'But also the old version its okey', '2021-07-05 19:55:09'),
(99, '0', 'Mr Kyalo', 'I am looking for a external harddisk SSD it will be better', '2021-07-05 19:54:50'),
(98, '95', 'Mr Kyalo', 'also JavaScript its also popular', '2021-07-05 19:54:01'),
(97, '95', 'Mr Kyalo', 'Python is so far the best', '2021-07-05 19:53:35'),
(96, '93', 'Masila', 'By the way it looks like they copy pasted the mac-os', '2021-07-05 19:53:04'),
(95, '0', 'Masila', 'Which is the best programming language?', '2021-07-05 19:52:22'),
(94, '93', 'Mr Kyalo', 'It looks more attractive', '2021-07-05 19:43:18'),
(93, '0', 'Mr Kyalo', 'What are some of the improved features of windows 11?', '2021-07-05 19:42:52'),
(142, '0', 'calculo', 'como calcular a raiz quadrada de algo?', '2023-10-20 00:26:17'),
(143, '142', 'Multipla por ele mesmo', '....', '2023-10-20 00:26:55'),
(144, '0', 'teste', 'teste', '2023-10-20 00:38:54');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `discussion`
--
ALTER TABLE `discussion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `discussion`
--
ALTER TABLE `discussion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
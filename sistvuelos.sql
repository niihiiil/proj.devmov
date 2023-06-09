USE [master]
GO
/****** Object:  Database [SistemaVuelos]    Script Date: 13/6/2023 02:03:34 ******/
CREATE DATABASE [SistemaVuelos]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SistemaVuelos', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLSERVER\MSSQL\DATA\SistemaVuelos.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'SistemaVuelos_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLSERVER\MSSQL\DATA\SistemaVuelos_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [SistemaVuelos] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SistemaVuelos].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SistemaVuelos] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SistemaVuelos] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SistemaVuelos] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SistemaVuelos] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SistemaVuelos] SET ARITHABORT OFF 
GO
ALTER DATABASE [SistemaVuelos] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SistemaVuelos] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SistemaVuelos] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SistemaVuelos] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SistemaVuelos] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SistemaVuelos] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SistemaVuelos] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SistemaVuelos] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SistemaVuelos] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SistemaVuelos] SET  DISABLE_BROKER 
GO
ALTER DATABASE [SistemaVuelos] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SistemaVuelos] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SistemaVuelos] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SistemaVuelos] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SistemaVuelos] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SistemaVuelos] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SistemaVuelos] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SistemaVuelos] SET RECOVERY FULL 
GO
ALTER DATABASE [SistemaVuelos] SET  MULTI_USER 
GO
ALTER DATABASE [SistemaVuelos] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SistemaVuelos] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SistemaVuelos] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SistemaVuelos] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [SistemaVuelos] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [SistemaVuelos] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'SistemaVuelos', N'ON'
GO
ALTER DATABASE [SistemaVuelos] SET QUERY_STORE = OFF
GO
USE [SistemaVuelos]
GO
/****** Object:  Table [dbo].[Aeropuerto]    Script Date: 13/6/2023 02:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Aeropuerto](
	[AeropuertoID] [int] NOT NULL,
	[CodigoUnico] [varchar](10) NULL,
	[Nombre] [varchar](100) NULL,
	[Localidad] [varchar](100) NULL,
	[Pais] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[AeropuertoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Asocia]    Script Date: 13/6/2023 02:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Asocia](
	[ClienteID] [int] NOT NULL,
	[TarjetaID] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ClienteID] ASC,
	[TarjetaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Avion]    Script Date: 13/6/2023 02:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Avion](
	[AvionID] [int] NOT NULL,
	[Codigo] [varchar](10) NULL,
	[NumPlazas] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[AvionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 13/6/2023 02:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente](
	[ClienteID] [int] NOT NULL,
	[DNI] [varchar](10) NULL,
	[Nombre] [varchar](50) NULL,
	[Apellidos] [varchar](50) NULL,
	[Dirección] [varchar](100) NULL,
	[Teléfono] [varchar](20) NULL,
	[IDCredenciales] [int] NULL,
 CONSTRAINT [PK__Cliente__71ABD0A7ED9A052E] PRIMARY KEY CLUSTERED 
(
	[ClienteID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UQ__Cliente__C035B8DD517E7219] UNIQUE NONCLUSTERED 
(
	[DNI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Credenciales]    Script Date: 13/6/2023 02:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Credenciales](
	[CredencialesID] [int] NOT NULL,
	[Usuario] [varchar](50) NOT NULL,
	[Contraseña] [varchar](100) NOT NULL,
 CONSTRAINT [PK__Credenci__D6DC6EB295AB37EF] PRIMARY KEY CLUSTERED 
(
	[CredencialesID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pertenecer]    Script Date: 13/6/2023 02:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pertenecer](
	[VueloID] [int] NOT NULL,
	[AeropuertoID] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[VueloID] ASC,
	[AeropuertoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Realiza]    Script Date: 13/6/2023 02:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Realiza](
	[AvionID] [int] NOT NULL,
	[VueloID] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[AvionID] ASC,
	[VueloID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reserva]    Script Date: 13/6/2023 02:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reserva](
	[ReservaID] [int] NOT NULL,
	[ClienteID] [int] NULL,
	[NumPlazas] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ReservaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TarjetaCredito]    Script Date: 13/6/2023 02:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TarjetaCredito](
	[TarjetaID] [int] NOT NULL,
	[ClienteID] [int] NULL,
	[NumeroTarjeta] [varchar](16) NULL,
PRIMARY KEY CLUSTERED 
(
	[TarjetaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TarjetaEmbarque]    Script Date: 13/6/2023 02:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TarjetaEmbarque](
	[TarjetaEmbarqueID] [int] NOT NULL,
	[ClienteID] [int] NULL,
	[ReservaID] [int] NULL,
	[Fecha] [date] NULL,
	[NumAsiento] [int] NULL,
	[Fila] [int] NULL,
	[Columna] [char](1) NULL,
	[Planta] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[TarjetaEmbarqueID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vuelo]    Script Date: 13/6/2023 02:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vuelo](
	[VueloID] [int] NOT NULL,
	[CodigoUnico] [varchar](20) NULL,
	[FechaSalida] [date] NULL,
	[HoraSalida] [time](7) NULL,
	[FechaLlegada] [date] NULL,
	[HoraLlegada] [time](7) NULL,
	[AeropuertoSalidaID] [int] NULL,
	[AeropuertoLlegadaID] [int] NULL,
	[AvionID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[VueloID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Asocia]  WITH CHECK ADD  CONSTRAINT [FK__Asocia__ClienteI__5AEE82B9] FOREIGN KEY([ClienteID])
REFERENCES [dbo].[Cliente] ([ClienteID])
GO
ALTER TABLE [dbo].[Asocia] CHECK CONSTRAINT [FK__Asocia__ClienteI__5AEE82B9]
GO
ALTER TABLE [dbo].[Asocia]  WITH CHECK ADD FOREIGN KEY([TarjetaID])
REFERENCES [dbo].[TarjetaCredito] ([TarjetaID])
GO
ALTER TABLE [dbo].[Cliente]  WITH CHECK ADD  CONSTRAINT [FK_Cliente_Credenciales] FOREIGN KEY([IDCredenciales])
REFERENCES [dbo].[Credenciales] ([CredencialesID])
GO
ALTER TABLE [dbo].[Cliente] CHECK CONSTRAINT [FK_Cliente_Credenciales]
GO
ALTER TABLE [dbo].[Pertenecer]  WITH CHECK ADD FOREIGN KEY([AeropuertoID])
REFERENCES [dbo].[Aeropuerto] ([AeropuertoID])
GO
ALTER TABLE [dbo].[Pertenecer]  WITH CHECK ADD FOREIGN KEY([VueloID])
REFERENCES [dbo].[Vuelo] ([VueloID])
GO
ALTER TABLE [dbo].[Realiza]  WITH CHECK ADD FOREIGN KEY([AvionID])
REFERENCES [dbo].[Avion] ([AvionID])
GO
ALTER TABLE [dbo].[Realiza]  WITH CHECK ADD FOREIGN KEY([VueloID])
REFERENCES [dbo].[Vuelo] ([VueloID])
GO
ALTER TABLE [dbo].[Reserva]  WITH CHECK ADD  CONSTRAINT [FK__Reserva__Cliente__403A8C7D] FOREIGN KEY([ClienteID])
REFERENCES [dbo].[Cliente] ([ClienteID])
GO
ALTER TABLE [dbo].[Reserva] CHECK CONSTRAINT [FK__Reserva__Cliente__403A8C7D]
GO
ALTER TABLE [dbo].[TarjetaCredito]  WITH CHECK ADD  CONSTRAINT [FK__TarjetaCr__Clien__398D8EEE] FOREIGN KEY([ClienteID])
REFERENCES [dbo].[Cliente] ([ClienteID])
GO
ALTER TABLE [dbo].[TarjetaCredito] CHECK CONSTRAINT [FK__TarjetaCr__Clien__398D8EEE]
GO
ALTER TABLE [dbo].[TarjetaEmbarque]  WITH CHECK ADD  CONSTRAINT [FK__TarjetaEm__Clien__4316F928] FOREIGN KEY([ClienteID])
REFERENCES [dbo].[Cliente] ([ClienteID])
GO
ALTER TABLE [dbo].[TarjetaEmbarque] CHECK CONSTRAINT [FK__TarjetaEm__Clien__4316F928]
GO
ALTER TABLE [dbo].[TarjetaEmbarque]  WITH CHECK ADD FOREIGN KEY([ReservaID])
REFERENCES [dbo].[Reserva] ([ReservaID])
GO
ALTER TABLE [dbo].[Vuelo]  WITH CHECK ADD FOREIGN KEY([AeropuertoSalidaID])
REFERENCES [dbo].[Aeropuerto] ([AeropuertoID])
GO
ALTER TABLE [dbo].[Vuelo]  WITH CHECK ADD FOREIGN KEY([AeropuertoLlegadaID])
REFERENCES [dbo].[Aeropuerto] ([AeropuertoID])
GO
ALTER TABLE [dbo].[Vuelo]  WITH CHECK ADD FOREIGN KEY([AvionID])
REFERENCES [dbo].[Avion] ([AvionID])
GO
USE [master]
GO
ALTER DATABASE [SistemaVuelos] SET  READ_WRITE 
GO

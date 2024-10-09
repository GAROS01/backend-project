-- creamos la base de datos
create database if not exists  jobdb;

-- seleccionamos la base de datos
use jobdb;

-- creamos las tablas
-- tabla administrativos
create table administrativos (
    id_administrativo int not null auto_increment,
    correo varchar(50),
    nombre varchar(20),
    apellido varchar(20),
    telefono int not null,
    primary key (id_administrativo),
    unique (correo)
);

-- tabla clientes
create table clientes (
    id_cliente int not null auto_increment,
    correo varchar(50),
    nombre varchar(20),
    apellido varchar(20),
    telefono int,
    creador_administrativo int,
    fecha_registro timestamp not null default current_timestamp,
    primary key (id_cliente),
    unique (correo),
    foreign key (creador_administrativo) references administrativos(id_administrativo)
);

-- tabla manicuristas
create table manicuristas (
    id_manicurista int not null auto_increment,
    correo varchar(50),
    nombre varchar(20),
    apellido varchar(20),
    telefono int,
    creado_por_administrativo int,
    primary key (id_manicurista),
    unique (correo),
    foreign key (creado_por_administrativo) references administrativos(id_administrativo)
);

-- tabla citas
create table citas (
    id_cita int not null auto_increment,
    fecha date,
    hora time,
    id_cliente int,
    id_manicurista int,
    gestiona_administrativo int,
    fecha_creacion timestamp not null default current_timestamp,
    primary key (id_cita),
    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_manicurista) references manicuristas(id_manicurista),
    foreign key (gestiona_administrativo) references administrativos(id_administrativo)
);

-- se insertan datos de ejmplo en las tablas
-- Insertar datos en la tabla administrativos
insert into administrativos (correo, nombre, apellido, telefono) values ('correo@ejemplo.com', 'Nombre', 'Apellido', 555555555);
insert into administrativos (correo, nombre, apellido, telefono) values ('juanperez@ejemplo.com', 'Juan', 'Pérez', 123456789);
insert into administrativos (correo, nombre, apellido, telefono) values ('mariagomez@ejemplo.com', 'María', 'Gómez', 987654321);
insert into administrativos (correo, nombre, apellido, telefono) values ('pedrorodriguez@ejemplo.com', 'Pedro', 'Rodriguez', 12348765);

-- Insertar datos en la tabla clientes
insert into clientes (correo, nombre, apellido, telefono, creador_administrativo) values ('correo@ejemplo.com', 'Nombre', 'Apellido', 555555555, 1);
insert into clientes (correo, nombre, apellido, telefono, creador_administrativo) values ('carloslopez@ejemplo.com', 'Carlos', 'López', 555123456, 1);
insert into clientes (correo, nombre, apellido, telefono, creador_administrativo) values ('anamartinez@ejemplo.com', 'Ana', 'Martínez', 555654321, 2);
insert into clientes (correo, nombre, apellido, telefono, creador_administrativo) values ('carlosgonzalez@ejemplo.com', 'Carlos', 'Gonzalez', 12345678, 1);
insert into clientes (correo, nombre, apellido, telefono, creador_administrativo) values ('analopez@ejemplo.com', 'Ana', 'Lopez', 87654328, 2);
insert into clientes (correo, nombre, apellido, telefono, creador_administrativo) values ('luisperez@ejemplo.com', 'Luis', 'Perez', 12348767, 3);
insert into clientes (correo, nombre, apellido, telefono, creador_administrativo) values ('mariagomez@ejemplo.com', 'Maria', 'Gomez', 12345679, 1);
insert into clientes (correo, nombre, apellido, telefono, creador_administrativo) values ('pedrorodriguez@ejemplo.com', 'Pedro', 'Rodriguez', 87654322, 2);
insert into clientes (correo, nombre, apellido, telefono, creador_administrativo) values ('juanperez@ejemplo.com', 'Juan', 'Perez', 12348765, 3);

-- Insertar datos en la tabla manicuristas
insert into manicuristas (correo, nombre, apellido, telefono, creado_por_administrativo) values ('correo@ejemplo.com', 'Nombre', 'Apellido', 555555555, 1);
insert into manicuristas (correo, nombre, apellido, telefono, creado_por_administrativo) values ('laurafernandez@ejemplo.com', 'Laura', 'Fernández', 555987654, 1);
insert into manicuristas (correo, nombre, apellido, telefono, creado_por_administrativo) values ('pedrogarcia@ejemplo.com', 'Pedro', 'García', 555321987, 2);
insert into manicuristas (correo, nombre, apellido, telefono, creado_por_administrativo) values ('manuelgonzalez@ejemplo.com', 'Manuel', 'Gonzalez', 12345678, 1);
insert into manicuristas (correo, nombre, apellido, telefono, creado_por_administrativo) values ('analopez@ejemplo.com', 'Ana', 'Lopez', 87654328, 2);
insert into manicuristas (correo, nombre, apellido, telefono, creado_por_administrativo) values ('luisperez@ejemplo.com', 'Luis', 'Perez', 12348767, 3);
insert into manicuristas (correo, nombre, apellido, telefono, creado_por_administrativo) values ('mariagomez@ejemplo.com', 'Maria', 'Gomez', 12345679, 1);


-- Insertar datos en la tabla citas
insert into citas (fecha, hora, id_cliente, id_manicurista, gestiona_administrativo) values ('2023-10-01', '10:00:00', 1, 1, 1);
insert into citas (fecha, hora, id_cliente, id_manicurista, gestiona_administrativo) values ('2023-10-02', '11:00:00', 2, 2, 2);
insert into citas (fecha, hora, id_cliente, id_manicurista, gestiona_administrativo) values ('2023-10-03', '12:00:00', 3, 3, 3);
insert into citas (fecha, hora, id_cliente, id_manicurista, gestiona_administrativo) values ('2023-10-04', '13:00:00', 4, 4, 1);
insert into citas (fecha, hora, id_cliente, id_manicurista, gestiona_administrativo) values ('2023-10-05', '14:00:00', 5, 5, 2);
insert into citas (fecha, hora, id_cliente, id_manicurista, gestiona_administrativo) values ('2023-10-06', '15:00:00', 6, 6, 3);

-- creamos la base de datos
create database if not exists  jobdb;

-- seleccionamos la base de datos
use jobdb;

-- creamos las tablas
-- tabla administrativos
create table administrativos (
    id_administrativo int not null auto_increment,
    correo varchar(100),
    nombre_completo varchar(100),
    telefono varchar(20),
    contraseña varchar(100),
    primary key (id_administrativo),
    unique (correo)
);

-- tabla clientes
create table clientes (
    id_cliente int not null auto_increment,
    correo varchar(100),
    nombre_completo varchar(100),
    telefono varchar(20),
    fecha_registro timestamp not null default current_timestamp,
    primary key (id_cliente),
    unique (correo)
);

-- tabla manicuristas
create table manicuristas (
    id_manicurista int not null auto_increment,
    correo varchar(100),
    nombre_completo varchar(100),
    telefono varchar(20),
    primary key (id_manicurista),
    unique (correo)
);

-- tabla citas
create table citas (
    id_cita int not null auto_increment,
    fecha date,
    hora time,
    id_cliente int not null,
    id_manicurista int not null,
    fecha_creacion timestamp not null default current_timestamp,
    primary key (id_cita),
    foreign key (id_cliente) references clientes(id_cliente) on delete cascade on update cascade,
    foreign key (id_manicurista) references manicuristas(id_manicurista) on delete cascade on update cascade
);


-- se insertan datos de ejmplo en las tablas
-- Insertar datos en la tabla administrativos
insert into administrativos (correo, nombre_completo, telefono, contraseña) values ('admino@ejemplo.com', 'Administrador', '1234567890', 'admin098');
insert into administrativos (correo, nombre_completo, telefono, contraseña) values ('admin1@empresa.com', 'Juan Perez', '3216549870', 'admin123');
insert into administrativos (correo, nombre_completo, telefono, contraseña) values ('admin2@empresa.com', 'Ana Gomez', '3206541234', 'pass456');

-- Insertar datos en la tabla clientes
insert into clientes (correo, nombre_completo, telefono) values ('cliente1@gmail.com', 'Carlos Sanchez', '3001234567');
insert into clientes (correo, nombre_completo, telefono) values ('cliente2@gmail.com', 'Maria Fernanda', '3109876543');
insert into clientes (correo, nombre_completo, telefono) values ('cliente3@gmail.com', 'Laura Rodríguez', '3207654321');

-- Insertar datos en la tabla manicuristas
insert into manicuristas (correo, nombre_completo, telefono) values ('manicurista1@gmail.com', 'Sofia Lopez', '3152345678');
insert into manicuristas (correo, nombre_completo, telefono) values ('manicurista2@gmail.com', 'Clara Mendoza', '3104567890');
insert into manicuristas (correo, nombre_completo, telefono) values ('manicurista3@gmail.com', 'Valeria Ortiz', '3223456789');


-- Insertar datos en la tabla citas
insert into citas (fecha, hora, id_cliente, id_manicurista) values ('2025-02-15', '10:00:00', 1, 1);
insert into citas (fecha, hora, id_cliente, id_manicurista) values ('2025-01-15', '11:00:00', 2, 2);
insert into citas (fecha, hora, id_cliente, id_manicurista) values ('2025-01-10', '12:00:00', 3, 3);

create database if not exists  jobdb;

use jobdb;

create table administrativos (
    id_administrativo int not null auto_increment,
    nombre varchar(20),
    apellido varchar(20),
    telefono int not null,
    primary key (id_administrativo),
    unique (telefono)
);

create table clientes (
    id_cliente int not null auto_increment,
    nombre varchar(20),
    apellido varchar(20),
    telefono int,
    creador_administrativo int,
    fecha_registro timestamp not null default current_timestamp,
    primary key (id_cliente),
    unique (telefono),
    foreign key (creador_administrativo) references administrativos(id_administrativo)
);

create table manicuristas (
    id_manicurista int not null auto_increment,
    nombre varchar(20),
    apellido varchar(20),
    telefono int,
    creado_por_administrativo int,
    primary key (id_manicurista),
    foreign key (creado_por_administrativo) references administrativos(id_administrativo)
);

create table citas (
    id_cita int not null auto_increment,
    fecha date,
    hora time,
    id_manicurista int,
    gestiona_administrativo int,
    fecha_creacion timestamp not null default current_timestamp,
    primary key (id_cita),
    foreign key (id_manicurista) references manicuristas(id_manicurista),
    foreign key (gestiona_administrativo) references administrativos(id_administrativo)
);

insert into administrativos (nombre, apellido, telefono) values ('Juan', 'Perez', 12345678);
insert into administrativos (nombre, apellido, telefono) values ('Maria', 'Gomez', 87654321);
insert into administrativos (nombre, apellido, telefono) values ('Pedro', 'Rodriguez', 12348765);


insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Carlos', 'Gonzalez', 12345678, 1);
insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Ana', 'Lopez', 87654328, 2);
insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Luis', 'Perez', 12348767, 3);
insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Maria', 'Gomez', 12345679, 1);
insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Pedro', 'Rodriguez', 87654322, 2);
insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Juan', 'Perez', 12348765, 3);
insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Carlos', 'Gonzalez', 12345670, 1);
insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Ana', 'Lopez', 87654321, 2);
insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Luis', 'Perez', 12348764, 3);
insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Maria', 'Gomez', 12345671, 1);
insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Pedro', 'Rodriguez', 87654321, 2);
insert into clientes (nombre, apellido, telefono, creador_administrativo) values ('Juan', 'Perez', 12348762, 3);

insert into manicuristas (nombre, apellido, telefono, creado_por_administrativo) values ('Manuel', 'Gonzalez', 12345678, 1);
insert into manicuristas (nombre, apellido, telefono, creado_por_administrativo) values ('Ana', 'Lopez', 87654328, 2);
insert into manicuristas (nombre, apellido, telefono, creado_por_administrativo) values ('Luis', 'Perez', 12348767, 3);
insert into manicuristas (nombre, apellido, telefono, creado_por_administrativo) values ('Maria', 'Gomez', 12345679, 1);
insert into manicuristas (nombre, apellido, telefono, creado_por_administrativo) values ('Pedro', 'Rodriguez', 87654322, 2);


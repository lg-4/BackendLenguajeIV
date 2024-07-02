-- Active: 1718679611763@@142.44.161.115@3306

CREATE PROCEDURE InsertTipoVehiculo(IN nom_tipo VARCHAR(50))
BEGIN
    INSERT INTO TIPOS_VEHICULOS (nom_tipo_vehiculo)
    VALUES (nom_tipo);
END;



call InsertTipoVehiculo('Camioneta');



CREATE PROCEDURE UpdateTipoVehiculo(IN nom_tipo VARCHAR(50), IN cod_tipo BIGINT)
BEGIN
    UPDATE TIPOS_VEHICULOS set nom_tipo_vehiculo = nom_tipo
    where cod_tipo_vehiculo = cod_tipo;
END;

CALL UpdateTipoVehiculo ('mundo', 1);
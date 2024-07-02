
CREATE PROCEDURE InsertTipoVehiculo(IN nom_tipo VARCHAR(50))
BEGIN
    INSERT INTO TIPOS_VEHICULOS (nom_tipo_vehiculo)
    VALUES (nom_tipo);
END;



call InsertTipoVehiculo('Pickup');



CREATE PROCEDURE UpdateTipoVehiculo(IN nom_tipo VARCHAR(50), IN cod_tipo BIGINT)
BEGIN
    UPDATE TIPOS_VEHICULOS set nom_tipo_vehiculo = nom_tipo
    where cod_tipo_vehiculo = cod_tipo;
END;

CALL UpdateTipoVehiculo ('Pickup', 3);
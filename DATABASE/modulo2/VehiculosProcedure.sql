
CREATE PROCEDURE InsertVehiculos(IN p_año_veh VARCHAR(4), IN p_mot_veh VARCHAR(50), IN p_pot_veh VARCHAR(50), IN p_cod_marca BIGINT, IN p_model VARCHAR(50), IN p_tip_tran BIGINT)
    BEGIN
    START TRANSACTION;
        INSERT INTO VEHICULOS(año_vehiculo, mot_vehiculo, pot_vehiculo, cod_marca, modelo, cod_tipo_transmision) VALUES (p_año_veh, p_mot_veh, p_pot_veh, p_cod_marca, p_model, p_tip_tran);
    COMMIT;

        SELECT * FROM VEHICULOS ORDER BY cod_vehiculo DESC LIMIT 1;
    
    END;


CALL InsertVehiculos('2025', 'Eléctrico', '185 kW', 8, 'Model 3', 2);






CREATE PROCEDURE UpdateVehiculos(IN p_año_veh VARCHAR(4), IN p_mot_veh VARCHAR(50), IN p_pot_veh VARCHAR(50), IN p_cod_marca BIGINT, IN p_model VARCHAR(50), IN p_tip_tran BIGINT, IN p_cod_veh BIGINT)
    BEGIN
    START TRANSACTION;
        UPDATE VEHICULOS SET año_vehiculo = p_año_veh,
                             mot_vehiculo = p_mot_veh, 
                             pot_vehiculo = p_pot_veh, 
                             cod_marca = p_cod_marca, 
                             modelo =p_model, 
                             cod_tipo_transmision = p_tip_tran
        WHERE cod_vehiculo = p_cod_veh;
    COMMIT;

    SELECT * FROM VEHICULOS WHERE cod_vehiculo= p_cod_veh;

    END;

CALL UpdateVehiculos('2024', '3.0L Turbo', '110 HP', 3, 'Corolla', 2, 12);







CREATE PROCEDURE SelectVehiculos()
    BEGIN
        SELECT v.cod_vehiculo, v.año_vehiculo, v.mot_vehiculo, v.pot_vehiculo, m.nom_marca, v.modelo, t.nom_transmision, v.img_vehiculo, tv.nom_tipo_vehiculo
        FROM VEHICULOS v
        INNER JOIN MARCAS m ON v.cod_marca = m.cod_marca
        INNER JOIN TIPOS_TRANSMISIONES t ON v.cod_tipo_transmision = t.cod_tipo_transmision
        INNER JOIN TIPOS_VEHICULOS tv ON m.cod_tipo_vehiculo= tv.cod_tipo_vehiculo;
    END;

    CALL SelectVehiculos();





CREATE PROCEDURE SelectBuscarVehiculo(IN p_modelo VARCHAR(50), IN p_marca VARCHAR(100))
    BEGIN
        SELECT v.cod_vehiculo, v.año_vehiculo, v.mot_vehiculo, v.pot_vehiculo, m.nom_marca, v.modelo, t.nom_transmision, v.img_vehiculo, tv.nom_tipo_vehiculo
        FROM VEHICULOS v
        INNER JOIN MARCAS m ON v.cod_marca = m.cod_marca
        INNER JOIN TIPOS_TRANSMISIONES t ON v.cod_tipo_transmision = t.cod_tipo_transmision
        INNER JOIN TIPOS_VEHICULOS tv ON m.cod_tipo_vehiculo= tv.cod_tipo_vehiculo
       WHERE 
        (v.modelo = p_modelo OR p_modelo IS NULL)
        AND 
        (m.nom_marca = p_marca OR p_marca IS NULL);
    END;

    CALL SelectBuscarVehiculo(NULL, 'Tesla');


CREATE PROCEDURE SelectCompararVehiculos(IN p_cod_veh1 BIGINT, IN p_cod_veh2 BIGINT, IN p_cod_veh3 BIGINT)
    BEGIN
        SELECT v.cod_vehiculo, v.año_vehiculo, v.mot_vehiculo, v.pot_vehiculo, m.nom_marca, v.modelo, t.nom_transmision, v.img_vehiculo, tv.nom_tipo_vehiculo, h.precio
        FROM VEHICULOS v
        INNER JOIN MARCAS m ON v.cod_marca = m.cod_marca
        INNER JOIN TIPOS_TRANSMISIONES t ON v.cod_tipo_transmision = t.cod_tipo_transmision
        INNER JOIN TIPOS_VEHICULOS tv ON m.cod_tipo_vehiculo = tv.cod_tipo_vehiculo
        INNER JOIN HISTORIALES h ON v.cod_vehiculo = h.cod_vehiculo 
        WHERE v.cod_vehiculo IN (p_cod_veh1, p_cod_veh2, p_cod_veh3);
    END;

    CALL SelectCompararVehiculos(7, 1, 12);



CREATE PROCEDURE InsertVehiculos(IN p_año_veh VARCHAR(4), IN p_mot_veh VARCHAR(50), IN p_pot_veh VARCHAR(50), IN p_cod_marca BIGINT, IN p_model VARCHAR(50), IN p_tip_tran BIGINT)
    BEGIN
    START TRANSACTION;
        INSERT INTO VEHICULOS(año_vehiculo, mot_vehiculo, pot_vehiculo, cod_marca, modelo, cod_tipo_transmision) VALUES (p_año_veh, p_mot_veh, p_pot_veh, p_cod_marca, p_model, p_tip_tran);
    COMMIT;
    END;

CALL InsertVehiculos('2024', '2.0L Turbo', '250 HP', 3, 'Corolla', 2 );
CALL InsertVehiculos('2023', 'V6 3.5L', '300 HP', 4, 'Mustang', 1);
CALL InsertVehiculos('2022', 'Eléctrico', '150 kW', 5, 'i3', 2);
CALL InsertVehiculos('2021', 'Híbrido 2.5L', '200  HP', 2, 'Accord', 3);
CALL InsertVehiculos('2024', 'V8 5.0L', '450  HP', 6, 'Silverado', 2);
CALL InsertVehiculos('2023', '1.8L', '140  HP', 7, 'Golf', 1);
CALL InsertVehiculos('2022', 'Eléctrico', '225 kW', 8, 'Model 3', 2);






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
    END;

CALL UpdateVehiculos('2024', '2.0L Turbo', '250 HP', 3, 'Corolla', 2, 1);







CREATE PROCEDURE SelectVehiculos()
    BEGIN
        SELECT v.cod_vehiculo, v.año_vehiculo, v.mot_vehiculo, v.pot_vehiculo, m.nom_marca, v.modelo, t.nom_transmision, v.img_vehiculo
        FROM VEHICULOS v
        INNER JOIN MARCAS m ON v.cod_marca = m.cod_marca
        INNER JOIN TIPOS_TRANSMISIONES t ON v.cod_tipo_transmision = t.cod_tipo_transmision;
    END;

    CALL SelectVehiculos();





CREATE PROCEDURE SelectVehiculo(IN p_modelo VARCHAR(50), IN p_marca VARCHAR(100))
    BEGIN
        SELECT v.cod_vehiculo, v.año_vehiculo, v.mot_vehiculo, v.pot_vehiculo, m.nom_marca, v.modelo, t.nom_transmision, v.img_vehiculo
        FROM VEHICULOS v
        INNER JOIN MARCAS m ON v.cod_marca = m.cod_marca
        INNER JOIN TIPOS_TRANSMISIONES t ON v.cod_tipo_transmision = t.cod_tipo_transmision
       WHERE 
        (v.modelo = p_modelo OR p_modelo IS NULL)
        AND 
        (m.nom_marca = p_marca OR p_marca IS NULL);
    END;

    CALL SelectVehiculo(NULL, NULL);

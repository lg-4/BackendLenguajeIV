
CREATE PROCEDURE InsertEstadisticas(IN p_cod_est BIGINT, p_cod_veh BIGINT, nom_est VARCHAR(100), IN valor_est VARCHAR(100), fec_est DATE)
BEGIN
    START TRANSACTION;
    INSERT INTO `ESTADISTICAS` (cod_estadistica, cod_vehiculo, nom_estadistica, valor, fec_estadistica) VALUES (p_cod_est, p_cod_veh, nom_est, valor_est, fec_est);
    COMMIT;
END;
CALL InsertEstadisticas(3, 1, 'MALO', '2', '2024-07-06');

 
CREATE PROCEDURE UpdateEstadisticas(p_cod_veh BIGINT, nom_est VARCHAR(100), IN valor_est VARCHAR(100), fec_estadistica DATE, p_cod_est BIGINT)
    BEGIN
    START TRANSACTION;
        UPDATE `ESTADISTICAS` SET cod_vehiculo = p_cod_veh, 
                                    nom_estadistica = nom_est, 
                                    valor = valor_est, 
                                    fec_estadistica = fec_estadistica 
        WHERE cod_estadistica = p_cod_est;
    COMMIT;
    END; 

CALL UpdateEstadisticas(1, 'EXELENTE', '10', '2024-07-06', 1); 


CREATE PROCEDURE SelectEstadisticas()
BEGIN
    SELECT 
        v.cod_estadistica,
        v.nom_estadistica,
        v.valor,
        v.fec_estadistica 
    FROM ESTADISTICAS v 
    INNER JOIN VEHICULOS a ON v.cod_vehiculo = a.cod_vehiculo
    ORDER BY v.cod_estadistica;
END;


CALL SelectEstadisticas();
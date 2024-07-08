
CREATE PROCEDURE InsertEvaluaciones(IN p_cod_eva BIGINT, IN p_cod_veh BIGINT, IN resul_eva FLOAT, IN fec_eva DATE,IN p_cod_usuario BIGINT)
BEGIN
    START TRANSACTION;
    INSERT INTO `EVALUACIONES` (cod_evaluacion, cod_vehiculo, resul_evaluacion, fec_evaluacion, cod_usuario) VALUES (p_cod_eva, p_cod_veh, resul_eva, fec_eva, p_cod_usuario);
    COMMIT;
END;

CALL InsertEvaluaciones(1, 1, 4.5, '2024-07-06', 2);


CREATE PROCEDURE UpdateEvaluaciones(IN p_cod_veh BIGINT, IN result_eva VARCHAR(50), IN fec_eva DATE, IN p_cod_usuario BIGINT, IN p_cod_eva BIGINT)
BEGIN
    START TRANSACTION;  
    UPDATE `EVALUACIONES` SET cod_vehiculo = p_cod_veh,
                                resul_evaluacion = result_eva,
                                fec_evaluacion = fec_eva, 
                                cod_usuario = p_cod_usuario
    WHERE cod_evaluacion = p_cod_eva;
    COMMIT;
END;

CALL UpdateEvaluaciones(1, '5.5', '2024-07-06', 2, 1);


CREATE PROCEDURE SelectEvaluaciones()
BEGIN
    SELECT 
        v.cod_evaluacion,
        v.resul_evaluacion,
        v.fec_evaluacion,
        v.cod_usuario 
    FROM EVALUACIONES v 
    INNER JOIN VEHICULOS a ON v.cod_vehiculo = a.cod_vehiculo
    INNER JOIN USUARIOS u ON v.cod_usuario = u.cod_usuario
    ORDER BY v.cod_evaluacion;
END;

CALL SelectEvaluaciones();

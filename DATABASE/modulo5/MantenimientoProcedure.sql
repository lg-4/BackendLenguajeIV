
CREATE PROCEDURE InsertMantenimientos(IN descrip_mante VARCHAR(50))
    BEGIN
        START TRANSACTION;
            INSERT INTO `MANTENIMIENTOS` (descripcion) VALUES (descrip_mante);
        COMMIT;
    END;

call InsertMantenimientos('Preventivo');

INSERT INTO `MANTENIMIENTOS` ( cod_tipo_mantenimiento, fec_mantenimiento, descripcion) VALUES (1, '24-08-05' ,'Rectificado de barras');

CREATE PROCEDURE UpdateMantenimientos(IN descrip_mante VARCHAR(50), IN cod_mante BIGINT)
    BEGIN
        START TRANSACTION;
            UPDATE MANTENIMIENTOS SET descripcion= descrip_mante WHERE cod_mantenimiento = cod_mante;
        COMMIT;
    END;

CALL UpdateMantenimientos ('Balanceo', 2);


CREATE PROCEDURE SelectMantenimientos()
    BEGIN
        SELECT 
            cod_mantenimiento,
            descripcion,
            a.nom_mantenimiento
        FROM MANTENIMIENTOS v 
        INNER JOIN `TIPOS_MANTENIMIENTOS` a ON nom_mantenimiento = a.nom_mantenimiento
        ORDER BY cod_mantenimiento;
    END;

CALL SelectMantenimientos();
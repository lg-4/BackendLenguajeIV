CREATE PROCEDURE InsertMarcas(IN p_cod_tipov BIGINT, IN p_nom_marc VARCHAR (100))
    BEGIN
        START TRANSACTION;
            INSERT INTO MARCAS (cod_tipo_vehiculo, nom_marca) VALUES (p_cod_tipov, p_nom_marc);
        COMMIT;
    END;

call InsertMarcas(1, 'Honda');
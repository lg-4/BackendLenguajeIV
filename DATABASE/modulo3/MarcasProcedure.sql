-- Active: 1717652580478@@142.44.161.115@3306
CREATE PROCEDURE InsertMarcas(IN p_cod_tipov BIGINT, IN p_nom_marc VARCHAR (100))
    BEGIN
        START TRANSACTION;
            INSERT INTO MARCAS (cod_tipo_vehiculo, nom_marca) VALUES (p_cod_tipov, p_nom_marc);
        COMMIT;
    END;

call InsertMarcas(1, 'Honda');


CREATE PROCEDURE UpdateMarcas(IN p_cod_tipov BIGINT, IN p_nom_marc VARCHAR (100))
    BEGIN
        START TRANSACTION;
            UPDATE MARCAS SET cod_tipo_vehiculo = p_cod_tipov WHERE nom_marca = p_nom_marc;
        COMMIT;
    END;

CALL UpdateMarcas ('Civic Sedan', 2);
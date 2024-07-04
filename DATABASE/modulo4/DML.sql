-- Active: 1717652160625@@142.44.161.115@3306@1900Pac2Equ3
CREATE PROCEDURE InsertPromDescuentos(IN P_Fec_pro Date, IN P_Promo Float, IN P_Desc Float,IN P_Dispo Varchar(50), IN P_Tipo_Vehiculo Bigint, IN P_Marca_Vehiculo Bigint)
    BEGIN
        START TRANSACTION;
            INSERT INTO PROM_DESCUENTOS (fec_prom, promocion, descuento, disponibilidad, cod_tipo_vehiculo, cod_marca) 
            VALUES (P_Fec_pro, P_Promo, P_Desc, P_Dispo, P_Tipo_Vehiculo, P_Marca_Vehiculo);
        COMMIT;
    END;

    call InsertPromDescuentos('2024-07-03', 10, 2, 'Hoy', 1, 2);



CREATE PROCEDURE UpdatePromDescuentos(IN P_Fec_pro Date, IN P_Promo Float, IN P_Desc Float,IN P_Dispo Varchar(50), IN P_Tipo_Vehiculo Bigint, IN P_Marca_Vehiculo Bigint, IN P_cod_pro BIGINT)
    BEGIN
        START TRANSACTION;
            UPDATE PROM_DESCUENTOS SET fec_prom = P_Fec_pro, promocion = P_Promo, descuento = P_Desc, disponibilidad = P_Dispo, cod_tipo_vehiculo = P_Tipo_Vehiculo, cod_marca = P_Marca_Vehiculo WHERE cod_promo = P_cod_pro;
        COMMIT;
    END;

CALL UpdatePromDescuentos ('2024-07-03', 10, 2, 'Lunes', 1, 2, 2);


CREATE PROCEDURE SelectPromDescuentos()
    BEGIN
        SELECT cod_tipo_mantenimiento, nom_mantenimiento FROM TIPOS_MANTENIMIENTOS ORDER BY nom_mantenimiento;
    END;

CALL SelectTipoMantenimientos();
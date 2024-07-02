SELECT 
    v.cod_vehiculo,
    v.año_vehiculo,
    v.mot_vehiculo,
    v.pot_vehiculo,
    m.nom_marca,
    v.modelo,
    t.nom_transmision
FROM VEHICULOS v
INNER JOIN MARCAS m ON v.cod_marca = m.cod_marca
INNER JOIN TIPOS_TRANSMISIONES t ON v.cod_tipo_transmision = t.cod_tipo_transmision
where ;

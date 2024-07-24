import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on('error', (err) => {
    console.error('Error en el cliente de Redis:', err);
});

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('Conexión a Redis exitosa');
    } catch (err) {
        console.error('Error al conectar a Redis:', err);
    }
};

connectRedis();

export { redisClient };
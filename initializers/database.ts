import 'reflect-metadata';
import {Connection, createConnection, getConnectionOptions} from 'typeorm';
import {WikiEntry} from '../entities/WikiEntry';

export const initializeDatabase = async (optionOverrides: Record<string, any> = {}): Promise<Connection> => {
    const connectionOptions = await getConnectionOptions();
    const options: any = {
        ...connectionOptions,
        entities: [WikiEntry],
        migrations: [__dirname + '/migrations/*.ts'],
        ...optionOverrides
    };

    return createConnection(options);
};

export default initializeDatabase;
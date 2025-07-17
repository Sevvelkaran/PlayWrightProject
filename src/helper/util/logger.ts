import { format, transports } from 'winston';

export function options(scenarioName: string) {
    return {
        transports: [
            new transports.File({
                filename: `test-results/logs/${scenarioName}.log`,
                level: 'info',
                format: format.combine(
                    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                    format.printf(info => `${info.level} ${info.timestamp}: ${info.message}`)
                )
            }),
            new transports.Console({
                level: 'info',
                format: format.combine(
                    format.colorize(),
                    format.printf(info => `${info.level}: ${info.message}`)
                )
            })
        ]
    };
}

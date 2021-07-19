import { format } from 'winston';
import { stringifyMessage } from '../utils';

export const providerFormat = format((info) => {
    try {
        //TODO : Check if we can remove this if block itself
        //@ts-ignore
        if (info.message instanceof Error) {
            info.message = Object.assign(
                {
                    //@ts-ignore
                    message: info.message.message,
                    //@ts-ignore
                    stack: info.message.stack,
                },
                info.message,
            );
        }

        if (info instanceof Error) {
            info = Object.assign(
                {
                    message: info.message,
                    stack: info.stack,
                },
                info,
            );
        }
        info.message = stringifyMessage(info.message);
        return info;
    } catch (error) {
        console.log('Error in enumerateErrorFormat', error);
        return error;
    }
});
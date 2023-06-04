import { UserBody } from '../../interfaces/User.interfaces';

export function checkEmptyFields(user: UserBody): void {
    const emptyFields: string[] = [];

    for (const key in user) {
        //@ts-ignore
        if (!user[key]) {
            emptyFields.push(key);
        }
    }
    if (emptyFields.length) {
        throw new Error(`${emptyFields} ${emptyFields.length === 1 ? 'is' : 'are'} required`);
    }
}

import mongoose from 'mongoose';

export function connectDB(dbUrl: string) {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(dbUrl)
            .then((connection) => {
                console.log('\n [🔋 MongoDB]:Database connection established!');
                resolve(connection);
            })
            .catch((error) => reject(error));
    });
}

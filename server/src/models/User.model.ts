import mongoose from 'mongoose';

import { UserBody } from '../interfaces/User.interfaces';

const Model = mongoose.Schema;

const UserModel = new Model<UserBody>({
    userName: { type: String, default: '' },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    age: { type: String, default: '' },
    gender: { type: String, default: '' },
    address: { type: String, default: '' },
    website: { type: String, default: '' },
    email: { type: String, required: true, default: '', unique: true },
    password: { type: String, required: true, default: '' },
});

export default mongoose.model('Users', UserModel);

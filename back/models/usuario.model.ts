
import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';


const usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [ true, 'Nome é necessário' ]
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        unique: true,
        required: [ true, 'Email é necessário' ]
    },
    password: {
        type: String,
        required: [ true, 'Senha é necessário']
    }
});

usuarioSchema.method('compararPassword', function( password: string = ''): boolean {

    if (  bcrypt.compareSync( password, this.password ) ) {
        return true;
    } else {
        return false;
    }

});

interface IUsuario extends Document {
    nombre: string;
    email: string;
    password: string;
    avatar: string;

    compararPassword(password: string): boolean;
}

export const Usuario = model<IUsuario>('Usuario', usuarioSchema);

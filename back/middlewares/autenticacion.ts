import { Response, Request, NextFunction } from 'express';
import Token from '../class/token';

export const verificaToken = (req: any, res: Response, next: NextFunction) => {

  const userToken = req.get('x-token') || '';

  Token.comprobarToken(userToken)
    .then((decoded: any) => {
      req.usuario = decoded.usuario;
      next();
    })
    .catch((err: any) => {
      res.status(400).json({
        ok: false,
        mensaje: 'Token no es correcto'
      });
    });
}



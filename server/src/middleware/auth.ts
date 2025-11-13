import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
  email?: string;
}

export interface AuthedRequest extends Request {
  user?: { id: string };
}

export function authMiddleware(req: AuthedRequest, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'missing_authorization' });
  const parts = auth.split(' ');
  const token = parts.length === 2 ? parts[1] : parts[0];
  try {
    const secret = process.env.JWT_SECRET || 'dev-secret';
    const payload = jwt.verify(token, secret) as JwtPayload;
    req.user = { id: payload.id };
    next();
  } catch (err) {
    return res.status(401).json({ error: 'invalid_token' });
  }
}

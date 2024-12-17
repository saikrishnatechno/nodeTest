import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { username, password } = req.body;

  try {
    console.log("Into the login : ")
    const user = await User.findOne({ where: { username } });
    console.log("after the user.findone")
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    next(error); // Send error to global error handler
  }
};
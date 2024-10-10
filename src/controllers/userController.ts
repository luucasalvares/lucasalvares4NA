import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { isValidEmail, isValidName, isCapitalized } from '../helpers/validators';

const userService = new UserService();

export const addUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    if (!isValidName(name) || !isCapitalized(name)) {
      return res.status(400).json({ error: 'Nome deve ter pelo menos 3 letras e começar com letra maiúscula' });
    }

    const user = await userService.createUser(name, email);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err instanceof Error ? err.message : 'Erro ao criar usuário' });
  }
}

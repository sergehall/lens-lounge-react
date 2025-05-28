// src/mocks/mock-server/server.ts (или другой backend/server файл)
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

import { DEFAULT_PROFILE } from '../../features/showcase/profile/mocks/defaultProfile';
import { usersMock } from '../../features/users/mocks/usersMock';

const app = express();
const PORT = 4000;
const JWT_SECRET = 'dev_secret';

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

const users = usersMock;

app.get('/', (req, res) => {
  res.send('Mock API is running!');
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  // 1. Find a user
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  // 2. Check password
  // const match = await bcrypt.compare(password, user.passwordHash);
  const match = password === user.passwordHash;
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });

  //  3. Create a JWT
  const token = jwt.sign({ userId: user.userId }, JWT_SECRET, { expiresIn: '1h' });

  console.log('Generated token:', token);
  // 4. Set cookie + return profile
  res
    .cookie('token', token, {
      httpOnly: true,
      secure: false, // Safari over HTTPS requires true, but in dev you can false
      sameSite: 'lax', // important: not ‘strict’, otherwise the cookie will not be sent when going from 3000 → 4000
    })
    .json(DEFAULT_PROFILE);
});

// GET /api/profile — returns profile by cookie token
app.get('/api/profile', (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = users.find((u) => u.userId === decoded.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(DEFAULT_PROFILE);
  } catch (err) {
    console.error('JWT verification failed:', err);
    return res.status(401).json({ error: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

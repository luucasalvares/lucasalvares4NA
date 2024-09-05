import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://lucasalvares_user:PpGcJbAN5eQhY32nRFO2VHf1kh4dbEWV@dpg-crceu53tq21c73d6s770-a.oregon-postgres.render.com/lucasalvares';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;
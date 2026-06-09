export const env = {
  baseUrl: (process.env.MOTOR_BASE_URL ?? 'https://distribuciongastosdev.pacificotest.com.pe/distribuciones/').trim(),
  username: (process.env.MOTOR_USERNAME ?? '').trim(),
  password: process.env.MOTOR_PASSWORD ?? '',
  gestorUsername: (process.env.MOTOR_GESTOR_USERNAME ?? '').trim(),
  gestorPassword: process.env.MOTOR_GESTOR_PASSWORD ?? '',
  gestorGastoUsername:(process.env.MOTOR_GESTOR_GASTO_USERNAME ?? '').trim(),
  gestorGastoPassword:process.env.MOTOR_GESTOR_GASTO_PASSWORD ?? '',
  headless: process.env.HEADLESS !== 'false',
  workers: Number(process.env.PW_WORKERS ?? 1),
  slowMo: Number(process.env.PW_SLOWMO ?? 0),
};

export function validateRequiredEnv(): void {
  const missing = ['MOTOR_USERNAME', 'MOTOR_PASSWORD'].filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Faltan variables de entorno requeridas: ${missing.join(', ')}`);
  }
}

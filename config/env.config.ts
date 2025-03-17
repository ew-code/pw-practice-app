import * as dotenv from 'dotenv';

dotenv.config({ override: true });

function requireEnvVariable(envVariableName: string): string {
  const envVariableValue = process.env[envVariableName] ?? '[NOT SET]';
  if (envVariableValue === undefined) {
    throw new Error(`Environment variable ${envVariableName} is not set.`);
  }
  return envVariableValue;
}

export const BASE_URL = requireEnvVariable('BASE_URL');

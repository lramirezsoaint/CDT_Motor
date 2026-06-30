import fs from 'fs';
import path from 'path';
import rolesConfig from './roles.json';

export type RoleConfig = {
  id: string;
  envPrefix: string;
  projectName: string;
  testMatch: string[];
  testIgnore: string[];
};

function assertString(value: unknown, field: string, roleId: string): asserts value is string {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Invalid roles.json: role "${roleId}" must define "${field}" as a non-empty string.`);
  }
}

function assertStringArray(value: unknown, field: string, roleId: string): asserts value is string[] {
  if (!Array.isArray(value) || value.length === 0 || value.some((item) => typeof item !== 'string' || item.trim() === '')) {
    throw new Error(`Invalid roles.json: role "${roleId}" must define "${field}" as a non-empty string array.`);
  }
}

function normalizeRoles(config: unknown): RoleConfig[] {
  if (!Array.isArray(config) || config.length === 0) {
    throw new Error('Invalid roles.json: expected a non-empty array of roles.');
  }

  const projectNames = new Set<string>();
  const roleIds = new Set<string>();

  return config.map((role) => {
    const rawRole = role as Partial<RoleConfig>;
    const roleId = typeof rawRole.id === 'string' && rawRole.id.trim() !== '' ? rawRole.id : '<unknown>';

    assertString(rawRole.id, 'id', roleId);
    assertString(rawRole.envPrefix, 'envPrefix', roleId);
    assertString(rawRole.projectName, 'projectName', roleId);
    assertStringArray(rawRole.testMatch, 'testMatch', roleId);
    assertStringArray(rawRole.testIgnore, 'testIgnore', roleId);

    if (roleIds.has(rawRole.id)) {
      throw new Error(`Invalid roles.json: duplicated role id "${rawRole.id}".`);
    }

    if (projectNames.has(rawRole.projectName)) {
      throw new Error(`Invalid roles.json: duplicated projectName "${rawRole.projectName}".`);
    }

    roleIds.add(rawRole.id);
    projectNames.add(rawRole.projectName);

    return {
      id: rawRole.id,
      envPrefix: rawRole.envPrefix,
      projectName: rawRole.projectName,
      testMatch: rawRole.testMatch,
      testIgnore: rawRole.testIgnore,
    };
  });
}

export const roles = normalizeRoles(rolesConfig);

export function resolveRoleAuthFile(role: RoleConfig, rootDir: string): string {
  const authFile = path.join(rootDir, '.auth', `${role.id}.json`);

  if (!fs.existsSync(authFile)) {
    throw new Error(
      `Missing authentication state for role "${role.id}": expected ${authFile}. ` +
        `Run scripts/auth/create-auth.js or create .auth/${role.id}.json before executing Playwright.`,
    );
  }

  return authFile;
}

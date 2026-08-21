require('dotenv').config();

const BUG_TITLE = '[QA-AUTO] Prueba integración Playwright';
const BUG_DESCRIPTION =
  'Bug generado automáticamente desde el framework de automatización QA para validar la integración con Azure DevOps.';
const API_VERSION = '7.1';

type AzureWorkItemResponse = {
  id?: number;
  url?: string;
  fields?: {
    'System.Title'?: string;
  };
  _links?: {
    html?: {
      href?: string;
    };
  };
};

type AzureErrorResponse = {
  message?: string;
  typeKey?: string;
  errorCode?: number;
  eventId?: number;
};

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Falta la variable de entorno requerida: ${name}`);
  }

  return value;
}

function buildLikelyReason(status: number): string {
  if (status === 401) {
    return 'PAT invalido, expirado o no enviado con Basic Authentication.';
  }

  if (status === 403) {
    return 'El PAT no tiene permisos suficientes para crear Work Items en el proyecto.';
  }

  if (status === 404) {
    return 'Organizacion, proyecto, tipo de Work Item Bug o endpoint no encontrado.';
  }

  if (status === 400) {
    return 'Payload invalido o el proceso del proyecto no permite crear Bugs con estos campos.';
  }

  if (status >= 500) {
    return 'Error temporal del servicio de Azure DevOps.';
  }

  return 'Revisar permisos del PAT, nombre del proyecto y respuesta de Azure DevOps.';
}

async function parseResponseBody(response: Response): Promise<AzureWorkItemResponse | AzureErrorResponse | string> {
  const text = await response.text();

  if (!text) {
    return '';
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function getMessage(body: AzureWorkItemResponse | AzureErrorResponse | string): string {
  if (typeof body === 'string') {
    return body || 'Azure DevOps no devolvio cuerpo de respuesta.';
  }

  return body.message || JSON.stringify(body);
}

async function main() {
  if (typeof fetch !== 'function') {
    throw new Error('La version actual de Node no tiene fetch nativo disponible.');
  }

  const organization = requiredEnv('AZURE_DEVOPS_ORGANIZATION');
  const project = requiredEnv('AZURE_DEVOPS_PROJECT');
  const pat = requiredEnv('AZURE_DEVOPS_PAT');
  const endpoint = `https://dev.azure.com/${encodeURIComponent(organization)}/${encodeURIComponent(
    project,
  )}/_apis/wit/workitems/$Bug?api-version=${API_VERSION}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`:${pat}`).toString('base64')}`,
      'Content-Type': 'application/json-patch+json',
    },
    body: JSON.stringify([
      {
        op: 'add',
        path: '/fields/System.Title',
        value: BUG_TITLE,
      },
      {
        op: 'add',
        path: '/fields/System.Description',
        value: BUG_DESCRIPTION,
      },
    ]),
  });

  const body = await parseResponseBody(response);

  if (!response.ok) {
    console.error('No fue posible crear el Bug en Azure DevOps.');
    console.error(`Status HTTP: ${response.status} ${response.statusText}`);
    console.error(`Mensaje Azure DevOps: ${getMessage(body)}`);
    console.error(`Endpoint utilizado: ${endpoint}`);
    console.error(`Motivo probable: ${buildLikelyReason(response.status)}`);
    process.exit(1);
  }

  const workItem = body as AzureWorkItemResponse;
  const title = workItem.fields?.['System.Title'] || BUG_TITLE;
  const url = workItem._links?.html?.href || workItem.url || 'No disponible';

  console.log('Azure DevOps conectado correctamente.');
  console.log('Bug creado correctamente.');
  console.log(`ID: ${workItem.id ?? 'No disponible'}`);
  console.log(`Título: ${title}`);
  console.log(`URL: ${url}`);
}

main().catch(error => {
  console.error('No fue posible ejecutar la prueba de integracion con Azure DevOps.');
  console.error(`Mensaje: ${error instanceof Error ? error.message : String(error)}`);
  console.error('Motivo probable: Variables de entorno incompletas, Node sin fetch nativo o error de conectividad.');
  process.exit(1);
});

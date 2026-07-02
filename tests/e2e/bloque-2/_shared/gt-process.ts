import { expect, test } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGtDistribution } from './gt-distribution';
import { config } from 'process';
import { buildTags } from '../../_globalshared/tags/tags';

type ProcessAction = 'run' | 'close';
type ProcessMode = 'Completo' | 'Resumido';
type ProcessFlow = 'real' | 'presupuesto';

type ProcessBase = {
 caseId: string;
 mode: ProcessMode;
 flow?: ProcessFlow;
 role?: 'gestorGT';
 priority?: 'critical' | 'smoke';
 requiresPolicy?: boolean;
};

type ProcessGtCaseConfig = ProcessBase & {
 phase: RegExp;
 action: ProcessAction;
 expectedMessage: RegExp;
};

type ProcessAmountPermanenceCaseConfig = ProcessBase & {
 expectedLabels: RegExp[];
};

type ProcessAccountBalanceCaseConfig = ProcessBase & {
 expectedColumns: RegExp[];
 closedProcess?: boolean;
};

export function ProcessGtCase(config: ProcessGtCaseConfig) {
 test.skip(`${tagsFor(config)} pendiente de liberación`, async () => {
 test.info().annotations.push({
 type: `${config.caseId}-pending`,
 description: "Aun no se ha definido distribucion/version que garantice que el proceso pueda ejecutarse sin depender de datos vivos.",
 });
 });
}

export function ProcessAmountPermanenceCase(config: ProcessAmountPermanenceCaseConfig) {
 test.skip(`${tagsFor(config)} pendiente de liberación`, async () => {
 test.info().annotations.push({
 type: `${config.caseId}-pending`,
 description: "Aun no se ha definido distribucion/version que garantice que el proceso pueda ejecutarse sin depender de datos vivos.",
 });
 });
}

export function ProcessAccountBalanceCase(config: ProcessAccountBalanceCaseConfig) {
 test.skip(`${tagsFor(config)} pendiente de liberación`, async () => {
 test.info().annotations.push({
 type: `pending`,
 description: "Aun no se ha definido distribucion/version que garantice que el proceso pueda ejecutarse sin depender de datos vivos.",
 });
 });
}

async function openProcessView(page: Page, config: Pick<ProcessBase, 'flow'>) {
 test.skip(`pendiente de liberación`, async () => {
 test.info().annotations.push({
 type: `pending`,
 description: "Aun no se ha definido distribucion/version que garantice que el proceso pueda ejecutarse sin depender de datos vivos.",
 });
 });
}

async function loginAsGestor(page: Page) {
 test.skip(`pendiente de liberación`, async () => {
 test.info().annotations.push({
 type: `pending`,
 description: "Aun no se ha definido distribucion/version que garantice que el proceso pueda ejecutarse sin depender de datos vivos.",
 });
 });
}

function annotateMissingOperationalData() {
 test.skip(`pendiente de liberación`, async () => {
 test.info().annotations.push({
 type: `pending`,
 description: "Aun no se ha definido distribucion/version que garantice que el proceso pueda ejecutarse sin depender de datos vivos.",
 });
 });
}

function tagsFor(config: ProcessBase) {
 return buildTags({ bloque: '@bloque2', caseId: config.caseId, flowTag: '@procesos' });
}

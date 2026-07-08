import { test, expect } from '@fixtures/base.fixture';
import { ProcessCase } from '../_shared/am-process-flow';
import { AM_PROCESS_CASES } from '../_shared/am-process-cases';
ProcessCase(test, expect, AM_PROCESS_CASES['E66-GF-ER']);

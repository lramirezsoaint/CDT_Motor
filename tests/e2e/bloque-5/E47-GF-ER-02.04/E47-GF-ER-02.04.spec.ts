import { test, expect } from '@fixtures/base.fixture';
import { ProcessCase } from '../_shared/am-process-flow';
import { AM_PROCESS_CASES } from '../_shared/am-process-cases';

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');

ProcessCase(test, expect, AM_PROCESS_CASES['E47-GF-ER-02.04']);

import { test, expect } from '@fixtures/base.fixture';
import { FileLifecycleCase } from '../_shared/am-file-lifecycle';
import { AM_FILE_LIFECYCLE_CASES } from '../_shared/am-file-lifecycle-cases';
FileLifecycleCase(test, expect, AM_FILE_LIFECYCLE_CASES['E11-AM-02.2']);

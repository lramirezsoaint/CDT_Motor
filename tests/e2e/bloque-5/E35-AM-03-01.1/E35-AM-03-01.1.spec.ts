import { test, expect } from '@fixtures/base.fixture';
import { CrudCase } from '../_shared/am-crud';
import { AM_CRUD_CASES } from '../_shared/am-crud-cases';
CrudCase(test, expect, AM_CRUD_CASES['E35-AM-03-01.1']);

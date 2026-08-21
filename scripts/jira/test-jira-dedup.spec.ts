import { expect, test } from '@playwright/test';
import { formatJiraDedupDuplicate } from './test-jira-dedup';

test.describe('jira dedup harness', () => {
  test('candidateCount=0 prints duplicate=false', () => {
    expect(formatJiraDedupDuplicate([], undefined)).toBe('false');
  });

  test('duplicate match prints issue key', () => {
    expect(formatJiraDedupDuplicate([{ key: 'SCRUM-1' }], { key: 'SCRUM-1' })).toBe('SCRUM-1');
  });
});

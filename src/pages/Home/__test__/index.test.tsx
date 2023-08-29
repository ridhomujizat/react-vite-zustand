/* eslint-disable @typescript-eslint/lines-between-class-members */
import React, { Suspense } from 'react';
import { describe, expect, it, vi } from 'vitest';
import {
  render,
  screen,
  RenderResult,
  fireEvent,
} from '@testing-library/react';
import MockTheme from 'utils/MockTheme';
import RoleAccesPage from '..';

describe('Home', async () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(
      <Suspense fallback>
        <MockTheme>
          <RoleAccesPage />
        </MockTheme>
      </Suspense>,
    );
  });
  it('DESCRIBE', () => {});
});

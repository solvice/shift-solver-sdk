// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SolviceShiftSolver } from '../client';

export abstract class APIResource {
  protected _client: SolviceShiftSolver;

  constructor(client: SolviceShiftSolver) {
    this._client = client;
  }
}

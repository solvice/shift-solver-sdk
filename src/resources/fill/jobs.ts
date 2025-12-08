// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FillAPI from './fill';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Return original request
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FillAPI.FillRequest> {
    return this._client.get(path`/v2/fill/jobs/${id}`, options);
  }

  /**
   * Contains the explanation, once solved.
   */
  explanation(id: string, options?: RequestOptions): APIPromise<JobExplanationResponse> {
    return this._client.get(path`/v2/fill/jobs/${id}/explanation`, options);
  }

  /**
   * Contains the actual solution, once solved.
   */
  solution(id: string, options?: RequestOptions): APIPromise<JobSolutionResponse> {
    return this._client.get(path`/v2/fill/jobs/${id}/solution`, options);
  }

  /**
   * Check whether the job is solved or not.
   */
  status(id: string, options?: RequestOptions): APIPromise<FillAPI.SolviceStatusJob> {
    return this._client.get(path`/v2/fill/jobs/${id}/status`, options);
  }
}

/**
 * The score of a solution shows how good this solution is w.r.t all the
 * constraints. All solvers try to maximize the score.
 */
export interface Score {
  feasible?: boolean | null;

  /**
   * The score of the constraints that are hard. This should be 0 in order to be
   * feasible.
   */
  hardScore?: number | null;

  /**
   * The score of the constraints that are medium.
   */
  mediumScore?: number | null;

  /**
   * The score of the constraints that are soft.
   */
  softScore?: number | null;
}

/**
 * Shift assignment solution
 */
export interface ShiftAssignmentSolution {
  /**
   * Start date-time
   */
  from: string;

  /**
   * Shift id
   */
  shift: string;

  /**
   * End date-time
   */
  to: string;

  /**
   * Employee id
   */
  employee?: string | null;

  /**
   * List of skills
   */
  skills?: Array<string> | null;

  /**
   * Travel time in seconds
   */
  travelTimeInSeconds?: number | null;
}

/**
 * Unresolved constraints in the resulting solution.
 */
export interface Unresolved {
  /**
   * Constraint type.
   */
  constraint: string;

  /**
   * Score impact of this conflict.
   */
  score: string;
}

/**
 * Explains the conflicts of a certain fill solution and the unresolved
 * constraints.
 */
export interface JobExplanationResponse {
  /**
   * Score of the solution.
   */
  score: Score;

  /**
   * Unresolved constraints in the solution
   */
  unresolved: Array<Unresolved>;

  /**
   * Alternative employee assignments per shift.
   */
  alternatives?: { [key: string]: unknown } | null;

  /**
   * Conflicts in the solution
   */
  conflicts?: Array<JobExplanationResponse.Conflict> | null;
}

export namespace JobExplanationResponse {
  /**
   * A conflict in the resulting solution.
   */
  export interface Conflict {
    /**
     * Constraint type.
     */
    constraint: string;

    /**
     * Score impact of this conflict.
     */
    score: string;

    /**
     * Employee id.
     */
    employee?: string | null;

    /**
     * Shift id.
     */
    shift?: string | null;

    /**
     * Skill id.
     */
    skill?: string | null;
  }
}

/**
 * Fill response from solve
 */
export interface JobSolutionResponse {
  /**
   * Id of the solve job
   */
  id?: string | null;

  /**
   * Actual solution: assignments per shift
   */
  assignments?: Array<ShiftAssignmentSolution> | null;

  /**
   * The score of a solution shows how good this solution is w.r.t all the
   * constraints. All solvers try to maximize the score.
   */
  score?: Score | null;

  /**
   * Status of the solve job.
   */
  status?: 'ERROR' | 'QUEUED' | 'SOLVING' | 'SOLVED' | null;

  /**
   * List of suggested shift assignments returned by suggest api call
   */
  suggestions?: Array<ShiftAssignmentSolution> | null;

  /**
   * Unassigned shifts
   */
  unassigned?: Array<string> | null;

  violations?: Array<JobSolutionResponse.Violation> | null;
}

export namespace JobSolutionResponse {
  /**
   * A constraint that is broken in the current solution with a certain value
   * (penalty) and a certain level (hard, soft, medium).
   */
  export interface Violation {
    /**
     * Level of unresolved constraint.
     */
    level: 'HARD' | 'SOFT' | 'MEDIUM' | null;

    /**
     * Name of the constraint.
     */
    name: string | null;

    /**
     * Value of the unresolved constraint. The higher, the more deviation from
     * perfection this constraint has.
     */
    value: number | null;
  }
}

export declare namespace Jobs {
  export {
    type Score as Score,
    type ShiftAssignmentSolution as ShiftAssignmentSolution,
    type Unresolved as Unresolved,
    type JobExplanationResponse as JobExplanationResponse,
    type JobSolutionResponse as JobSolutionResponse,
  };
}

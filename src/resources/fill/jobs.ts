// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from './jobs';
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
  unresolved: Array<Unresolved> | JobExplanationResponse.UnionMember1;

  /**
   * Alternative employee assignments per shift.
   */
  alternatives?: JobExplanationResponse.Alternatives | null;

  /**
   * Conflicts in the solution
   */
  conflicts?: Array<JobExplanationResponse.UnionMember0> | JobExplanationResponse.UnionMember1 | null;
}

export namespace JobExplanationResponse {
  /**
   * Unresolved constraints in the solution
   */
  export interface UnionMember1 {
    /**
     * Constraint type.
     */
    constraint:
      | 'TRIP_CAPACITY'
      | 'RESOURCE_CAPACITY'
      | 'RESOURCE_CAPACITY2'
      | 'TRAVEL_TIME'
      | 'TYPE_REQUIREMENT'
      | 'TAG_SOFT'
      | 'TAG_HARD'
      | 'TYPE_REQUIREMENT_SOFT'
      | 'END_LOCATION_TRAVEL_TIME'
      | 'TIME_WINDOW_CONFLICT'
      | 'SHIFT_END_CONFLICT'
      | 'OVERTIME_END_CONFLICT'
      | 'RESOURCE_USAGE'
      | 'URGENCY'
      | 'PREFERRED_RESOURCE_CONFLICT'
      | 'ALLOWED_RESOURCES'
      | 'DISALLOWED_RESOURCES'
      | 'REGION_TIME'
      | 'FAIR_WORK'
      | 'UNSERVED_JOBS'
      | 'RESOURCE_ACTIVATION'
      | 'OPEN_DAYS'
      | 'JOB_PRECEDENCE'
      | 'JOB_DAY_INDEX'
      | 'DATE_TIME_WINDOW_CONFLICT'
      | 'DATE_TIME_WINDOW_CONFLICT_SOFT'
      | 'LINKED_JOB_CONFLICT'
      | 'PLANNED_RESOURCE'
      | 'PLANNED_ARRIVAL'
      | 'PLANNED_DATE'
      | 'WORKING_TIME'
      | 'HARD_JOBS'
      | 'MAX_DRIVE_TIME'
      | 'MAX_DRIVE_TIME_JOB'
      | 'FAIR_TOTAL_WORK'
      | 'RESOURCE_PERIOD_MAX_SERVICE_TIME'
      | 'RESOURCE_PERIOD_MAX_DRIVE_TIME'
      | 'RESOURCE_PERIOD_MAX_WORK_TIME'
      | 'RESOURCE_PERIOD_MIN_SERVICE_TIME'
      | 'RESOURCE_PERIOD_MIN_DRIVE_TIME'
      | 'RESOURCE_PERIOD_MIN_WORK_TIME'
      | 'MINIMISE_TRIP_USAGE'
      | 'DELIVERY_NOT_ON_SAME_VEHICLE'
      | 'DELIVERY_BEFORE_PICKUP'
      | 'SAME_TRIP'
      | 'SEQUENCE'
      | 'SAME_TIME'
      | 'NEIGHBOR'
      | 'DIRECT_SEQUENCE'
      | 'SAME_RESOURCE'
      | 'WAIT_TIME'
      | 'DRIVE_TIME'
      | 'HOURLY_COST'
      | 'RANKING_SOFT'
      | 'FAIR_COMPLEXITY_PER_TRIP'
      | 'FAIR_COMPLEXITY_PER_RESOURCE'
      | 'RESOURCE_PERIOD_MIN_COMPLEXITY'
      | 'RESOURCE_PERIOD_MAX_COMPLEXITY'
      | 'RESOURCE_COMPATIBILITY'
      | 'JOBTYPE_VIOLATION'
      | 'GROUP_SEQUENCE'
      | 'JOB_PROXIMITY';

    /**
     * Score impact of this conflict.
     */
    score: string;
  }

  /**
   * Alternative employee assignments per shift.
   */
  export interface Alternatives {
    /**
     * Shift id
     */
    shift: string;

    /**
     * Employee id in the alternative solution
     */
    employee?: string | null;

    /**
     * Score of the alternative solution
     */
    score?: Alternatives.Score | null;

    /**
     * Unresolved constraints in this alternative solution
     */
    violations?: Array<JobsAPI.Unresolved> | Alternatives.UnionMember1 | null;

    [k: string]: unknown;
  }

  export namespace Alternatives {
    /**
     * Score of the alternative solution
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
     * Unresolved constraints in this alternative solution
     */
    export interface UnionMember1 {
      /**
       * Constraint type.
       */
      constraint: string;

      /**
       * Score impact of this conflict.
       */
      score: string;
    }
  }

  /**
   * Conflicts in the solution
   */
  export interface UnionMember0 {
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

  /**
   * Conflicts in the solution
   */
  export interface UnionMember1 {
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

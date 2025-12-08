// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FillAPI from './fill';
import * as JobsAPI from './jobs';
import {
  JobExplanationResponse,
  JobSolutionResponse,
  Jobs,
  Score,
  ShiftAssignmentSolution,
  Unresolved,
} from './jobs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Fill extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);

  /**
   * Demo of random generated FILL instance
   */
  demo(options?: RequestOptions): APIPromise<FillRequest> {
    return this._client.get('/v2/fill/demo', options);
  }

  /**
   * Will trigger the evaluation run.
   */
  evaluate(body: FillEvaluateParams, options?: RequestOptions): APIPromise<SolviceStatusJob> {
    return this._client.post('/v2/fill/evaluate', { body, ...options });
  }

  /**
   * Will trigger the solver run.
   */
  solve(body: FillSolveParams, options?: RequestOptions): APIPromise<SolviceStatusJob> {
    return this._client.post('/v2/fill/solve', { body, ...options });
  }

  /**
   * Will return the suggest moves for an unassigned job.
   */
  suggest(body: FillSuggestParams, options?: RequestOptions): APIPromise<SolviceStatusJob> {
    return this._client.post('/v2/fill/suggest', { body, ...options });
  }
}

export type DayOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

/**
 * Explanation
 */
export interface FillExplanation {
  /**
   * Whether to enable post-processing of explainability
   */
  enabled?: boolean | null;

  /**
   * Whether to filter hard constraint violated solutions in the response.
   */
  filterHardConstraints?: boolean | null;
}

export interface FillOptions {
  /**
   * Whether to always score shared skills
   */
  alwaysScoreSharedSkills?: boolean | null;

  /**
   * Explanation
   */
  explanation?: FillExplanation | null;

  /**
   * Whether to enforce availability constraints
   */
  hardAvailability?: boolean | null;

  /**
   * Whether to enforce blacklist constraints
   */
  hardBlacklist?: boolean | null;

  /**
   * Whether to enforce skill constraints
   */
  hardSkill?: boolean | null;

  /**
   * Idle weekend definition.
   */
  idleWeekend?: IdleWeekendDefinition | null;

  /**
   * Partial planning. Whether to fill all shifts or not. Default is false
   */
  partialPlanning?: boolean | null;

  /**
   * Whether to penalise employees with zero hours
   */
  penaliseZeroHours?: boolean | null;

  /**
   * Whether to use availability locations
   */
  useAvailabilityLocations?: boolean | null;
}

/**
 * FILL request for solving, evaluating
 */
export interface FillRequest {
  /**
   * List of employees
   */
  employees: Array<FillRequest.Employee>;

  /**
   * List of shifts that should be assigned to employees
   */
  shifts: Array<FillRequest.Shift>;

  /**
   * List of assignments that are pre-set. (optional)
   */
  assignments?: unknown;

  /**
   * List of shift demands. Demands are periodic minima and maxima for a certain
   * number of employees to be present.
   */
  demands?: Array<FillRequest.Demand> | null;

  /**
   * Buckets or groups of employees where fairness in workload is required.
   */
  fairnessBuckets?: Array<FillRequest.FairnessBucket> | null;

  /**
   * Webhook endpoint to receive POST request with the id.
   */
  hook?: string | null;

  label?: string | null;

  /**
   * Options for tuning the solver
   */
  options?: FillOptions | null;

  /**
   * List of shift patterns. Patterns are sequences of shifts that can be desired or
   * prohibited.
   */
  patterns?: Array<FillRequest.Pattern> | null;

  /**
   * List of shared skill requirements. Shared skills are skill requirements that
   * govern a group of shifts.
   */
  requirements?: Array<FillRequest.Requirement> | null;

  /**
   * List of Rest definitions. A rest is defined for a fixed period or a duration.
   */
  rests?: Array<FillRequest.Rest> | null;

  /**
   * List of Rules. Rules can be Counters or Series.
   */
  rules?: Array<Rule> | null;

  schedule?: Array<FillRequest.Schedule> | null;

  /**
   * Weights adjust objectives and scores.
   */
  weights?: FillWeights | null;
}

export namespace FillRequest {
  /**
   * Employee that can be assigned to a shift
   */
  export interface Employee {
    /**
     * Name of the employee (unique)
     */
    name: string;

    /**
     * Availability of the employee
     */
    availability?: Array<Employee.Availability> | null;

    constracts?: Array<Employee.Constract> | null;

    /**
     * Efficiency of the employee
     */
    efficiency?: number | null;

    /**
     * Location
     */
    home?: FillAPI.ShiftLocation | null;

    /**
     * Hourly pay of the employee. The solver will then optimize the cost of the
     * planning.
     */
    hourlyPay?: number | null;

    /**
     * Rules that hold for the entire period.
     */
    periodRules?: Array<Employee.PeriodRule> | null;

    preference?: Array<string> | null;

    /**
     * Shift preferences of the employee. List of shift tags.
     */
    preferences?: unknown;

    /**
     * Skills of the employee
     */
    skills?: Array<Employee.Skill> | null;
  }

  export namespace Employee {
    /**
     * Time window of availability. If no location is provided, the solver will not
     * take into account travel time.
     */
    export interface Availability {
      /**
       * start time of the window
       */
      from: string;

      /**
       * end time of the window
       */
      to: string;

      /**
       * Location
       */
      location?: FillAPI.ShiftLocation | null;
    }

    /**
     * Contract of the employee
     */
    export interface Constract {
      /**
       * name of the contract
       */
      name: string | null;

      /**
       * earliest shift start
       */
      earliestShiftStart?: string | null;

      /**
       * latest shift end
       */
      latestShiftEnd?: string | null;

      /**
       * latest shift start
       */
      latestShiftStart?: string | null;

      /**
       * maximum working time per week
       */
      max?: string | null;

      /**
       * maximum consecutive work days
       */
      maxConsecutiveWorkDays?: number | null;

      /**
       * maximum shift length
       */
      maxShiftLength?: string | null;

      /**
       * maximum shifts per day
       */
      maxShiftsDay?: number | null;

      /**
       * maximum working days per week
       */
      maxWorkingDays?: number | null;

      /**
       * minimum working time per week
       */
      min?: string | null;

      /**
       * minimum rest between shifts
       */
      minRest?: string | null;

      /**
       * minimum rest between shifts on the same day
       */
      minRestBetweenShiftsSameDay?: number | null;

      /**
       * minimum shift length
       */
      minShiftLength?: string | null;
    }

    export interface PeriodRule {
      /**
       * Period of the rule. The rule only applies to this period
       */
      period: FillAPI.Period;

      /**
       * earliest shift start
       */
      earliestShiftStart?: string | null;

      /**
       * latest shift end
       */
      latestShiftEnd?: string | null;

      /**
       * latest shift start
       */
      latestShiftStart?: string | null;

      /**
       * maximum shift length
       */
      maxShiftLength?: string | null;

      /**
       * The maximum number of weekends to be idle in this period.
       */
      maxWeekendsIdle?: number | null;

      /**
       * Maximum number of working days in the period.
       */
      maxWorkingDays?: number | null;

      /**
       * Maximum working duration in the period. Not including travel time
       */
      maxWorkingDuration?: string | null;

      /**
       * Minimum rest duration between shifts
       */
      minRestDuration?: string | null;

      /**
       * Minimum rest duration between shifts in the same day
       */
      minRestDurationBetweenShiftsSameDay?: string | null;

      /**
       * minimum shift length
       */
      minShiftLength?: string | null;

      /**
       * The minimum number of weekends to be idle in this period.
       */
      minWeekendsIdle?: number | null;

      /**
       * Minimum number of working days in the period.
       */
      minWorkingDays?: number | null;

      /**
       * Minimum working duration in the period. Not including travel time
       */
      minWorkingDuration?: string | null;
    }

    /**
     * Employee skill
     */
    export interface Skill {
      /**
       * name of the skill
       */
      name: string;

      /**
       * expiry date of the skill
       */
      expiry?: string | null;

      /**
       * Period
       */
      period?: FillAPI.Period | null;

      /**
       * weight of the skill
       */
      weight?: number | null;
    }
  }

  /**
   * Shift to be filled
   */
  export interface Shift {
    /**
     * Start time of the shift
     */
    from: string;

    /**
     * Maximum number of employees assigned to this shift.
     */
    max: number | null;

    /**
     * Minimum number of employees assigned to this shift.
     */
    min: number | null;

    /**
     * Name of the shift
     */
    name: string;

    /**
     * End time of the shift
     */
    to: string;

    /**
     * Maximum number of employees assigned to this shift.
     */
    blocklist?: Array<string> | null;

    /**
     * Financial cost of the shift
     */
    cost?: number | null;

    employees?: Array<string> | null;

    /**
     * Location
     */
    location?: FillAPI.ShiftLocation | null;

    locked?: Array<boolean> | null;

    /**
     * Priority of the shift. High priority shifts get assigned more
     */
    priority?: number | null;

    /**
     * Shift rests can define required idle/rest time after the shift.
     */
    rests?: unknown;

    /**
     * Skills required for the shift
     */
    skills?: Array<FillAPI.SkillRequirement> | null;

    /**
     * Shift tags. Used to identify groups of shifts in rules.
     */
    tags?: Array<Shift.Tag> | null;

    value?: number | null;
  }

  export namespace Shift {
    export interface Tag {
      name: string;
    }
  }

  /**
   * The number of employees you need at time intervals defined by `from`/`to`.
   */
  export interface Demand {
    /**
     * The start time of the shift demand
     */
    from: string;

    name: string;

    /**
     * The skills required for the shift demand
     */
    skills: Array<FillAPI.SkillRequirement> | null;

    /**
     * The end time of the shift demand
     */
    to: string;

    /**
     * The maximum number of shifts to create
     */
    max?: number | null;

    /**
     * The minimum number of shifts to create
     */
    min?: number | null;
  }

  /**
   * A FairnessBucket defines a group of Employees that should have fair shifts over
   * the predefined shifts.
   */
  export interface FairnessBucket {
    /**
     * The employees in the fairness bucket
     */
    employees: Array<string>;

    /**
     * The shifts in the fairness bucket
     */
    shifts: Array<string>;

    /**
     * The target value of workload per employee
     */
    target: string;

    /**
     * Period
     */
    period?: FillAPI.Period | null;
  }

  /**
   * Pattern to describe (un)desired series of shifts. Based on a `satisfy` type
   * (`PREFERRED`, `PROHIBITED`, or `UNPREFERRED`)
   */
  export interface Pattern {
    /**
     * List of Pattern Elements describing `ON`/`OFF` for several shifts
     */
    elements?: Array<Pattern.Element> | null;

    /**
     * (`PREFERRED`, `PROHIBITED`, or `UNPREFERRED`)
     */
    satisfy?: 'PREFERRED' | 'PROHIBITED' | 'UNPREFERRED' | null;

    /**
     * `SINGLE_DAY` (spanning shifts in a single days) or `MULTI_DAY` (spanning shifts
     * accross days)
     */
    type?: 'SINGLE_DAY' | 'MULTI_DAY' | null;

    /**
     * Importance (weight) of the Pattern
     */
    weight?: number | null;
  }

  export namespace Pattern {
    /**
     * Single element to describe a shift on/off
     */
    export interface Element {
      /**
       * List of shift tags to include
       */
      tags?: Array<string> | null;

      /**
       * `ON` (doing that shift) or `OFF` (not doing that shift)
       */
      type?: 'ON' | 'OFF' | null;
    }
  }

  /**
   * An optional list of shared resource requirements
   */
  export interface Requirement {
    /**
     * List of shifts that the requirement applies to
     */
    shifts: Array<string>;

    /**
     * The skill this requirement applies to
     */
    skill: string;

    /**
     * The number of shared resources required for this skill.
     */
    value: number;
  }

  /**
   * Rest time before and after shifts
   */
  export interface Rest {
    /**
     * Filter by shift tag excludes
     */
    excludes?: Array<string> | null;

    /**
     * Maximum number of rest periods
     */
    frequency?: number | null;

    /**
     * Maximum duration
     */
    max?: string | null;

    /**
     * Minimum duration
     */
    min?: string | null;

    /**
     * Minimum consecutive duration of a rest.
     */
    minConsecutive?: string | null;

    /**
     * Period
     */
    period?: FillAPI.Period | null;

    /**
     * Rest type (`CONSECUTIVE` or `WEEKLY`)
     */
    periodType?: FillAPI.PeriodType | null;

    /**
     * If the rest needs to be `BEFORE` or `AFTER` a shift (`tags` must be applied as
     * well)
     */
    sequence?: 'BEFORE' | 'AFTER' | null;

    /**
     * Filter by shift tag
     */
    tags?: Array<string> | null;
  }

  /**
   * Input assignment
   */
  export interface Schedule {
    /**
     * Name of the employee
     */
    employee: string;

    /**
     * Name of the shift
     */
    shift: string;

    /**
     * If the shift is locked. Locked shifts cannot be touched by the solver
     */
    locked?: boolean;
  }
}

export interface FillWeights {
  availability?: string | null;

  blacklist?: string | null;

  concurrent?: string | null;

  costs?: string | null;

  criticalSkills?: string | null;

  dayOfWeek?: string | null;

  distance?: string | null;

  distanceAL?: string | null;

  efficiency?: string | null;

  fairness?: string | null;

  latestShiftStart?: string | null;

  locked?: string | null;

  maxConsecutive?: string | null;

  maxHours?: string | null;

  maxShift?: string | null;

  maxWorkingDays?: string | null;

  minHours?: string | null;

  minHoursUnassigned?: string | null;

  minRest?: string | null;

  minShift?: string | null;

  pref?: string | null;

  priority?: string | null;

  requirements?: string | null;

  sameDay?: string | null;

  sameDayMinRest?: string | null;

  shiftEnd?: string | null;

  shiftStart?: string | null;

  skills?: string | null;

  softSkills?: string | null;

  softSkillsLevel?: string | null;

  unassigned?: string | null;

  wages?: string | null;

  working?: string | null;
}

export interface IdleWeekendDefinition {
  /**
   * Day of the week on which the weekend officially starts.
   */
  fromDayOfWeek: DayOfWeek;

  /**
   * Time of day on which the weekend officially starts.
   */
  fromTime: string;

  /**
   * Day of the week on which the weekend officially ends.
   */
  toDayOfWeek: DayOfWeek;

  /**
   * Time of day on which the weekend officially ends.
   */
  toTime: string;

  restTime?: string | null;
}

/**
 * Error or warning message
 */
export interface Message {
  /**
   * Error message
   */
  message: string;

  /**
   * Error code
   */
  code?: number;
}

/**
 * Period
 */
export interface Period {
  /**
   * Duration of the rolling period. Do not use this in combo with from/to
   */
  duration?: string | null;

  /**
   * List of dates to exclude from the from/to period.
   */
  excludes?: Array<string> | null;

  /**
   * Start of the period
   */
  from?: string | null;

  /**
   * Duration of the rolling period. Do not use this in combo with from/to
   */
  period?: unknown;

  /**
   * End of the period
   */
  to?: string | null;

  type?: PeriodType | null;
}

export type PeriodType = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'SCHEDULE';

/**
 * Rule that the solver needs to take into account.
 */
export interface Rule {
  /**
   * Type of constraint. `COUNTER` or `SEQUENCE`. A counter counts the number of
   * occurances and the constraint
   */
  constraint: 'COUNTER' | 'SEQUENCE';

  /**
   * Type of rule. `HOURS_WORKED`, `DAYS_WORKED`, `DAYS_IDLE`, `WEEKENDS_WORKED`,
   * `WEEKENDS_IDLE`, `SHIFT_TYPES_WORKED` or `SHIFT_TYPES_HOURS_WORKED`
   */
  type:
    | 'HOURS_WORKED'
    | 'DAYS_WORKED'
    | 'DAYS_IDLE'
    | 'WEEKENDS_WORKED'
    | 'WEEKENDS_IDLE'
    | 'SHIFT_TYPES_WORKED'
    | 'SHIFT_TYPES_HOURS_WORKED';

  /**
   * Maximum number of employees necessary to fill these shifts. If min==max then
   * you'll get that exact amount of employees.
   */
  max?: number | null;

  /**
   * Minimum number of employees necessary to fill these shifts.
   */
  min?: number | null;

  /**
   * Period
   */
  period?: Period | null;

  /**
   * Shift tags to filter this rule by. For example only shifts with the tag `EARLY`.
   */
  shifts?: unknown;

  tags?: Array<string> | null;

  /**
   * Rule that the solver needs to take into account.
   */
  then?: Rule | null;
}

/**
 * Location
 */
export interface ShiftLocation {
  /**
   * latitude of the location
   */
  lat?: number;

  /**
   * longitude of the location
   */
  lon?: number;
}

/**
 * Skill requirement on a shift level
 */
export interface SkillRequirement {
  /**
   * name of the skill
   */
  name: string;

  /**
   * Hard requirement or not. If not, the skill is a soft skill requirement that will
   * act as an affinity.
   */
  hard?: boolean | null;

  /**
   * weight of the skill
   */
  weight?: number | null;
}

/**
 * Status of a solve job
 */
export interface SolviceStatusJob {
  /**
   * Job ID
   */
  id: string;

  /**
   * List of errors
   */
  errors?: Array<Message> | null;

  /**
   * Duration of the solve in seconds
   */
  solveDuration?: number | null;

  /**
   * Status of the solve.
   */
  status?: 'QUEUED' | 'SOLVING' | 'SOLVED' | 'ERROR' | null;

  /**
   * List of warnings
   */
  warnings?: Array<Message> | null;
}

export interface FillEvaluateParams {
  /**
   * List of employees
   */
  employees: Array<FillEvaluateParams.Employee>;

  /**
   * List of shifts that should be assigned to employees
   */
  shifts: Array<FillEvaluateParams.Shift>;

  /**
   * List of assignments that are pre-set. (optional)
   */
  assignments?: unknown;

  /**
   * List of shift demands. Demands are periodic minima and maxima for a certain
   * number of employees to be present.
   */
  demands?: Array<FillEvaluateParams.Demand> | null;

  /**
   * Buckets or groups of employees where fairness in workload is required.
   */
  fairnessBuckets?: Array<FillEvaluateParams.FairnessBucket> | null;

  /**
   * Webhook endpoint to receive POST request with the id.
   */
  hook?: string | null;

  label?: string | null;

  /**
   * Options for tuning the solver
   */
  options?: FillOptions | null;

  /**
   * List of shift patterns. Patterns are sequences of shifts that can be desired or
   * prohibited.
   */
  patterns?: Array<FillEvaluateParams.Pattern> | null;

  /**
   * List of shared skill requirements. Shared skills are skill requirements that
   * govern a group of shifts.
   */
  requirements?: Array<FillEvaluateParams.Requirement> | null;

  /**
   * List of Rest definitions. A rest is defined for a fixed period or a duration.
   */
  rests?: Array<FillEvaluateParams.Rest> | null;

  /**
   * List of Rules. Rules can be Counters or Series.
   */
  rules?: Array<Rule> | null;

  schedule?: Array<FillEvaluateParams.Schedule> | null;

  /**
   * Weights adjust objectives and scores.
   */
  weights?: FillWeights | null;
}

export namespace FillEvaluateParams {
  /**
   * Employee that can be assigned to a shift
   */
  export interface Employee {
    /**
     * Name of the employee (unique)
     */
    name: string;

    /**
     * Availability of the employee
     */
    availability?: Array<Employee.Availability> | null;

    constracts?: Array<Employee.Constract> | null;

    /**
     * Efficiency of the employee
     */
    efficiency?: number | null;

    /**
     * Location
     */
    home?: FillAPI.ShiftLocation | null;

    /**
     * Hourly pay of the employee. The solver will then optimize the cost of the
     * planning.
     */
    hourlyPay?: number | null;

    /**
     * Rules that hold for the entire period.
     */
    periodRules?: Array<Employee.PeriodRule> | null;

    preference?: Array<string> | null;

    /**
     * Shift preferences of the employee. List of shift tags.
     */
    preferences?: unknown;

    /**
     * Skills of the employee
     */
    skills?: Array<Employee.Skill> | null;
  }

  export namespace Employee {
    /**
     * Time window of availability. If no location is provided, the solver will not
     * take into account travel time.
     */
    export interface Availability {
      /**
       * start time of the window
       */
      from: string;

      /**
       * end time of the window
       */
      to: string;

      /**
       * Location
       */
      location?: FillAPI.ShiftLocation | null;
    }

    /**
     * Contract of the employee
     */
    export interface Constract {
      /**
       * name of the contract
       */
      name: string | null;

      /**
       * earliest shift start
       */
      earliestShiftStart?: string | null;

      /**
       * latest shift end
       */
      latestShiftEnd?: string | null;

      /**
       * latest shift start
       */
      latestShiftStart?: string | null;

      /**
       * maximum working time per week
       */
      max?: string | null;

      /**
       * maximum consecutive work days
       */
      maxConsecutiveWorkDays?: number | null;

      /**
       * maximum shift length
       */
      maxShiftLength?: string | null;

      /**
       * maximum shifts per day
       */
      maxShiftsDay?: number | null;

      /**
       * maximum working days per week
       */
      maxWorkingDays?: number | null;

      /**
       * minimum working time per week
       */
      min?: string | null;

      /**
       * minimum rest between shifts
       */
      minRest?: string | null;

      /**
       * minimum rest between shifts on the same day
       */
      minRestBetweenShiftsSameDay?: number | null;

      /**
       * minimum shift length
       */
      minShiftLength?: string | null;
    }

    export interface PeriodRule {
      /**
       * Period of the rule. The rule only applies to this period
       */
      period: FillAPI.Period;

      /**
       * earliest shift start
       */
      earliestShiftStart?: string | null;

      /**
       * latest shift end
       */
      latestShiftEnd?: string | null;

      /**
       * latest shift start
       */
      latestShiftStart?: string | null;

      /**
       * maximum shift length
       */
      maxShiftLength?: string | null;

      /**
       * The maximum number of weekends to be idle in this period.
       */
      maxWeekendsIdle?: number | null;

      /**
       * Maximum number of working days in the period.
       */
      maxWorkingDays?: number | null;

      /**
       * Maximum working duration in the period. Not including travel time
       */
      maxWorkingDuration?: string | null;

      /**
       * Minimum rest duration between shifts
       */
      minRestDuration?: string | null;

      /**
       * Minimum rest duration between shifts in the same day
       */
      minRestDurationBetweenShiftsSameDay?: string | null;

      /**
       * minimum shift length
       */
      minShiftLength?: string | null;

      /**
       * The minimum number of weekends to be idle in this period.
       */
      minWeekendsIdle?: number | null;

      /**
       * Minimum number of working days in the period.
       */
      minWorkingDays?: number | null;

      /**
       * Minimum working duration in the period. Not including travel time
       */
      minWorkingDuration?: string | null;
    }

    /**
     * Employee skill
     */
    export interface Skill {
      /**
       * name of the skill
       */
      name: string;

      /**
       * expiry date of the skill
       */
      expiry?: string | null;

      /**
       * Period
       */
      period?: FillAPI.Period | null;

      /**
       * weight of the skill
       */
      weight?: number | null;
    }
  }

  /**
   * Shift to be filled
   */
  export interface Shift {
    /**
     * Start time of the shift
     */
    from: string;

    /**
     * Maximum number of employees assigned to this shift.
     */
    max: number | null;

    /**
     * Minimum number of employees assigned to this shift.
     */
    min: number | null;

    /**
     * Name of the shift
     */
    name: string;

    /**
     * End time of the shift
     */
    to: string;

    /**
     * Maximum number of employees assigned to this shift.
     */
    blocklist?: Array<string> | null;

    /**
     * Financial cost of the shift
     */
    cost?: number | null;

    employees?: Array<string> | null;

    /**
     * Location
     */
    location?: FillAPI.ShiftLocation | null;

    locked?: Array<boolean> | null;

    /**
     * Priority of the shift. High priority shifts get assigned more
     */
    priority?: number | null;

    /**
     * Shift rests can define required idle/rest time after the shift.
     */
    rests?: unknown;

    /**
     * Skills required for the shift
     */
    skills?: Array<FillAPI.SkillRequirement> | null;

    /**
     * Shift tags. Used to identify groups of shifts in rules.
     */
    tags?: Array<Shift.Tag> | null;

    value?: number | null;
  }

  export namespace Shift {
    export interface Tag {
      name: string;
    }
  }

  /**
   * The number of employees you need at time intervals defined by `from`/`to`.
   */
  export interface Demand {
    /**
     * The start time of the shift demand
     */
    from: string;

    name: string;

    /**
     * The skills required for the shift demand
     */
    skills: Array<FillAPI.SkillRequirement> | null;

    /**
     * The end time of the shift demand
     */
    to: string;

    /**
     * The maximum number of shifts to create
     */
    max?: number | null;

    /**
     * The minimum number of shifts to create
     */
    min?: number | null;
  }

  /**
   * A FairnessBucket defines a group of Employees that should have fair shifts over
   * the predefined shifts.
   */
  export interface FairnessBucket {
    /**
     * The employees in the fairness bucket
     */
    employees: Array<string>;

    /**
     * The shifts in the fairness bucket
     */
    shifts: Array<string>;

    /**
     * The target value of workload per employee
     */
    target: string;

    /**
     * Period
     */
    period?: FillAPI.Period | null;
  }

  /**
   * Pattern to describe (un)desired series of shifts. Based on a `satisfy` type
   * (`PREFERRED`, `PROHIBITED`, or `UNPREFERRED`)
   */
  export interface Pattern {
    /**
     * List of Pattern Elements describing `ON`/`OFF` for several shifts
     */
    elements?: Array<Pattern.Element> | null;

    /**
     * (`PREFERRED`, `PROHIBITED`, or `UNPREFERRED`)
     */
    satisfy?: 'PREFERRED' | 'PROHIBITED' | 'UNPREFERRED' | null;

    /**
     * `SINGLE_DAY` (spanning shifts in a single days) or `MULTI_DAY` (spanning shifts
     * accross days)
     */
    type?: 'SINGLE_DAY' | 'MULTI_DAY' | null;

    /**
     * Importance (weight) of the Pattern
     */
    weight?: number | null;
  }

  export namespace Pattern {
    /**
     * Single element to describe a shift on/off
     */
    export interface Element {
      /**
       * List of shift tags to include
       */
      tags?: Array<string> | null;

      /**
       * `ON` (doing that shift) or `OFF` (not doing that shift)
       */
      type?: 'ON' | 'OFF' | null;
    }
  }

  /**
   * An optional list of shared resource requirements
   */
  export interface Requirement {
    /**
     * List of shifts that the requirement applies to
     */
    shifts: Array<string>;

    /**
     * The skill this requirement applies to
     */
    skill: string;

    /**
     * The number of shared resources required for this skill.
     */
    value: number;
  }

  /**
   * Rest time before and after shifts
   */
  export interface Rest {
    /**
     * Filter by shift tag excludes
     */
    excludes?: Array<string> | null;

    /**
     * Maximum number of rest periods
     */
    frequency?: number | null;

    /**
     * Maximum duration
     */
    max?: string | null;

    /**
     * Minimum duration
     */
    min?: string | null;

    /**
     * Minimum consecutive duration of a rest.
     */
    minConsecutive?: string | null;

    /**
     * Period
     */
    period?: FillAPI.Period | null;

    /**
     * Rest type (`CONSECUTIVE` or `WEEKLY`)
     */
    periodType?: FillAPI.PeriodType | null;

    /**
     * If the rest needs to be `BEFORE` or `AFTER` a shift (`tags` must be applied as
     * well)
     */
    sequence?: 'BEFORE' | 'AFTER' | null;

    /**
     * Filter by shift tag
     */
    tags?: Array<string> | null;
  }

  /**
   * Input assignment
   */
  export interface Schedule {
    /**
     * Name of the employee
     */
    employee: string;

    /**
     * Name of the shift
     */
    shift: string;

    /**
     * If the shift is locked. Locked shifts cannot be touched by the solver
     */
    locked?: boolean;
  }
}

export interface FillSolveParams {
  /**
   * List of employees
   */
  employees: Array<FillSolveParams.Employee>;

  /**
   * List of shifts that should be assigned to employees
   */
  shifts: Array<FillSolveParams.Shift>;

  /**
   * List of assignments that are pre-set. (optional)
   */
  assignments?: unknown;

  /**
   * List of shift demands. Demands are periodic minima and maxima for a certain
   * number of employees to be present.
   */
  demands?: Array<FillSolveParams.Demand> | null;

  /**
   * Buckets or groups of employees where fairness in workload is required.
   */
  fairnessBuckets?: Array<FillSolveParams.FairnessBucket> | null;

  /**
   * Webhook endpoint to receive POST request with the id.
   */
  hook?: string | null;

  label?: string | null;

  /**
   * Options for tuning the solver
   */
  options?: FillOptions | null;

  /**
   * List of shift patterns. Patterns are sequences of shifts that can be desired or
   * prohibited.
   */
  patterns?: Array<FillSolveParams.Pattern> | null;

  /**
   * List of shared skill requirements. Shared skills are skill requirements that
   * govern a group of shifts.
   */
  requirements?: Array<FillSolveParams.Requirement> | null;

  /**
   * List of Rest definitions. A rest is defined for a fixed period or a duration.
   */
  rests?: Array<FillSolveParams.Rest> | null;

  /**
   * List of Rules. Rules can be Counters or Series.
   */
  rules?: Array<Rule> | null;

  schedule?: Array<FillSolveParams.Schedule> | null;

  /**
   * Weights adjust objectives and scores.
   */
  weights?: FillWeights | null;
}

export namespace FillSolveParams {
  /**
   * Employee that can be assigned to a shift
   */
  export interface Employee {
    /**
     * Name of the employee (unique)
     */
    name: string;

    /**
     * Availability of the employee
     */
    availability?: Array<Employee.Availability> | null;

    constracts?: Array<Employee.Constract> | null;

    /**
     * Efficiency of the employee
     */
    efficiency?: number | null;

    /**
     * Location
     */
    home?: FillAPI.ShiftLocation | null;

    /**
     * Hourly pay of the employee. The solver will then optimize the cost of the
     * planning.
     */
    hourlyPay?: number | null;

    /**
     * Rules that hold for the entire period.
     */
    periodRules?: Array<Employee.PeriodRule> | null;

    preference?: Array<string> | null;

    /**
     * Shift preferences of the employee. List of shift tags.
     */
    preferences?: unknown;

    /**
     * Skills of the employee
     */
    skills?: Array<Employee.Skill> | null;
  }

  export namespace Employee {
    /**
     * Time window of availability. If no location is provided, the solver will not
     * take into account travel time.
     */
    export interface Availability {
      /**
       * start time of the window
       */
      from: string;

      /**
       * end time of the window
       */
      to: string;

      /**
       * Location
       */
      location?: FillAPI.ShiftLocation | null;
    }

    /**
     * Contract of the employee
     */
    export interface Constract {
      /**
       * name of the contract
       */
      name: string | null;

      /**
       * earliest shift start
       */
      earliestShiftStart?: string | null;

      /**
       * latest shift end
       */
      latestShiftEnd?: string | null;

      /**
       * latest shift start
       */
      latestShiftStart?: string | null;

      /**
       * maximum working time per week
       */
      max?: string | null;

      /**
       * maximum consecutive work days
       */
      maxConsecutiveWorkDays?: number | null;

      /**
       * maximum shift length
       */
      maxShiftLength?: string | null;

      /**
       * maximum shifts per day
       */
      maxShiftsDay?: number | null;

      /**
       * maximum working days per week
       */
      maxWorkingDays?: number | null;

      /**
       * minimum working time per week
       */
      min?: string | null;

      /**
       * minimum rest between shifts
       */
      minRest?: string | null;

      /**
       * minimum rest between shifts on the same day
       */
      minRestBetweenShiftsSameDay?: number | null;

      /**
       * minimum shift length
       */
      minShiftLength?: string | null;
    }

    export interface PeriodRule {
      /**
       * Period of the rule. The rule only applies to this period
       */
      period: FillAPI.Period;

      /**
       * earliest shift start
       */
      earliestShiftStart?: string | null;

      /**
       * latest shift end
       */
      latestShiftEnd?: string | null;

      /**
       * latest shift start
       */
      latestShiftStart?: string | null;

      /**
       * maximum shift length
       */
      maxShiftLength?: string | null;

      /**
       * The maximum number of weekends to be idle in this period.
       */
      maxWeekendsIdle?: number | null;

      /**
       * Maximum number of working days in the period.
       */
      maxWorkingDays?: number | null;

      /**
       * Maximum working duration in the period. Not including travel time
       */
      maxWorkingDuration?: string | null;

      /**
       * Minimum rest duration between shifts
       */
      minRestDuration?: string | null;

      /**
       * Minimum rest duration between shifts in the same day
       */
      minRestDurationBetweenShiftsSameDay?: string | null;

      /**
       * minimum shift length
       */
      minShiftLength?: string | null;

      /**
       * The minimum number of weekends to be idle in this period.
       */
      minWeekendsIdle?: number | null;

      /**
       * Minimum number of working days in the period.
       */
      minWorkingDays?: number | null;

      /**
       * Minimum working duration in the period. Not including travel time
       */
      minWorkingDuration?: string | null;
    }

    /**
     * Employee skill
     */
    export interface Skill {
      /**
       * name of the skill
       */
      name: string;

      /**
       * expiry date of the skill
       */
      expiry?: string | null;

      /**
       * Period
       */
      period?: FillAPI.Period | null;

      /**
       * weight of the skill
       */
      weight?: number | null;
    }
  }

  /**
   * Shift to be filled
   */
  export interface Shift {
    /**
     * Start time of the shift
     */
    from: string;

    /**
     * Maximum number of employees assigned to this shift.
     */
    max: number | null;

    /**
     * Minimum number of employees assigned to this shift.
     */
    min: number | null;

    /**
     * Name of the shift
     */
    name: string;

    /**
     * End time of the shift
     */
    to: string;

    /**
     * Maximum number of employees assigned to this shift.
     */
    blocklist?: Array<string> | null;

    /**
     * Financial cost of the shift
     */
    cost?: number | null;

    employees?: Array<string> | null;

    /**
     * Location
     */
    location?: FillAPI.ShiftLocation | null;

    locked?: Array<boolean> | null;

    /**
     * Priority of the shift. High priority shifts get assigned more
     */
    priority?: number | null;

    /**
     * Shift rests can define required idle/rest time after the shift.
     */
    rests?: unknown;

    /**
     * Skills required for the shift
     */
    skills?: Array<FillAPI.SkillRequirement> | null;

    /**
     * Shift tags. Used to identify groups of shifts in rules.
     */
    tags?: Array<Shift.Tag> | null;

    value?: number | null;
  }

  export namespace Shift {
    export interface Tag {
      name: string;
    }
  }

  /**
   * The number of employees you need at time intervals defined by `from`/`to`.
   */
  export interface Demand {
    /**
     * The start time of the shift demand
     */
    from: string;

    name: string;

    /**
     * The skills required for the shift demand
     */
    skills: Array<FillAPI.SkillRequirement> | null;

    /**
     * The end time of the shift demand
     */
    to: string;

    /**
     * The maximum number of shifts to create
     */
    max?: number | null;

    /**
     * The minimum number of shifts to create
     */
    min?: number | null;
  }

  /**
   * A FairnessBucket defines a group of Employees that should have fair shifts over
   * the predefined shifts.
   */
  export interface FairnessBucket {
    /**
     * The employees in the fairness bucket
     */
    employees: Array<string>;

    /**
     * The shifts in the fairness bucket
     */
    shifts: Array<string>;

    /**
     * The target value of workload per employee
     */
    target: string;

    /**
     * Period
     */
    period?: FillAPI.Period | null;
  }

  /**
   * Pattern to describe (un)desired series of shifts. Based on a `satisfy` type
   * (`PREFERRED`, `PROHIBITED`, or `UNPREFERRED`)
   */
  export interface Pattern {
    /**
     * List of Pattern Elements describing `ON`/`OFF` for several shifts
     */
    elements?: Array<Pattern.Element> | null;

    /**
     * (`PREFERRED`, `PROHIBITED`, or `UNPREFERRED`)
     */
    satisfy?: 'PREFERRED' | 'PROHIBITED' | 'UNPREFERRED' | null;

    /**
     * `SINGLE_DAY` (spanning shifts in a single days) or `MULTI_DAY` (spanning shifts
     * accross days)
     */
    type?: 'SINGLE_DAY' | 'MULTI_DAY' | null;

    /**
     * Importance (weight) of the Pattern
     */
    weight?: number | null;
  }

  export namespace Pattern {
    /**
     * Single element to describe a shift on/off
     */
    export interface Element {
      /**
       * List of shift tags to include
       */
      tags?: Array<string> | null;

      /**
       * `ON` (doing that shift) or `OFF` (not doing that shift)
       */
      type?: 'ON' | 'OFF' | null;
    }
  }

  /**
   * An optional list of shared resource requirements
   */
  export interface Requirement {
    /**
     * List of shifts that the requirement applies to
     */
    shifts: Array<string>;

    /**
     * The skill this requirement applies to
     */
    skill: string;

    /**
     * The number of shared resources required for this skill.
     */
    value: number;
  }

  /**
   * Rest time before and after shifts
   */
  export interface Rest {
    /**
     * Filter by shift tag excludes
     */
    excludes?: Array<string> | null;

    /**
     * Maximum number of rest periods
     */
    frequency?: number | null;

    /**
     * Maximum duration
     */
    max?: string | null;

    /**
     * Minimum duration
     */
    min?: string | null;

    /**
     * Minimum consecutive duration of a rest.
     */
    minConsecutive?: string | null;

    /**
     * Period
     */
    period?: FillAPI.Period | null;

    /**
     * Rest type (`CONSECUTIVE` or `WEEKLY`)
     */
    periodType?: FillAPI.PeriodType | null;

    /**
     * If the rest needs to be `BEFORE` or `AFTER` a shift (`tags` must be applied as
     * well)
     */
    sequence?: 'BEFORE' | 'AFTER' | null;

    /**
     * Filter by shift tag
     */
    tags?: Array<string> | null;
  }

  /**
   * Input assignment
   */
  export interface Schedule {
    /**
     * Name of the employee
     */
    employee: string;

    /**
     * Name of the shift
     */
    shift: string;

    /**
     * If the shift is locked. Locked shifts cannot be touched by the solver
     */
    locked?: boolean;
  }
}

export interface FillSuggestParams {
  /**
   * List of employees
   */
  employees: Array<FillSuggestParams.Employee>;

  /**
   * List of shifts that should be assigned to employees
   */
  shifts: Array<FillSuggestParams.Shift>;

  /**
   * List of assignments that are pre-set. (optional)
   */
  assignments?: unknown;

  /**
   * List of shift demands. Demands are periodic minima and maxima for a certain
   * number of employees to be present.
   */
  demands?: Array<FillSuggestParams.Demand> | null;

  /**
   * Buckets or groups of employees where fairness in workload is required.
   */
  fairnessBuckets?: Array<FillSuggestParams.FairnessBucket> | null;

  /**
   * Webhook endpoint to receive POST request with the id.
   */
  hook?: string | null;

  label?: string | null;

  /**
   * Options for tuning the solver
   */
  options?: FillOptions | null;

  /**
   * List of shift patterns. Patterns are sequences of shifts that can be desired or
   * prohibited.
   */
  patterns?: Array<FillSuggestParams.Pattern> | null;

  /**
   * List of shared skill requirements. Shared skills are skill requirements that
   * govern a group of shifts.
   */
  requirements?: Array<FillSuggestParams.Requirement> | null;

  /**
   * List of Rest definitions. A rest is defined for a fixed period or a duration.
   */
  rests?: Array<FillSuggestParams.Rest> | null;

  /**
   * List of Rules. Rules can be Counters or Series.
   */
  rules?: Array<Rule> | null;

  schedule?: Array<FillSuggestParams.Schedule> | null;

  /**
   * Weights adjust objectives and scores.
   */
  weights?: FillWeights | null;
}

export namespace FillSuggestParams {
  /**
   * Employee that can be assigned to a shift
   */
  export interface Employee {
    /**
     * Name of the employee (unique)
     */
    name: string;

    /**
     * Availability of the employee
     */
    availability?: Array<Employee.Availability> | null;

    constracts?: Array<Employee.Constract> | null;

    /**
     * Efficiency of the employee
     */
    efficiency?: number | null;

    /**
     * Location
     */
    home?: FillAPI.ShiftLocation | null;

    /**
     * Hourly pay of the employee. The solver will then optimize the cost of the
     * planning.
     */
    hourlyPay?: number | null;

    /**
     * Rules that hold for the entire period.
     */
    periodRules?: Array<Employee.PeriodRule> | null;

    preference?: Array<string> | null;

    /**
     * Shift preferences of the employee. List of shift tags.
     */
    preferences?: unknown;

    /**
     * Skills of the employee
     */
    skills?: Array<Employee.Skill> | null;
  }

  export namespace Employee {
    /**
     * Time window of availability. If no location is provided, the solver will not
     * take into account travel time.
     */
    export interface Availability {
      /**
       * start time of the window
       */
      from: string;

      /**
       * end time of the window
       */
      to: string;

      /**
       * Location
       */
      location?: FillAPI.ShiftLocation | null;
    }

    /**
     * Contract of the employee
     */
    export interface Constract {
      /**
       * name of the contract
       */
      name: string | null;

      /**
       * earliest shift start
       */
      earliestShiftStart?: string | null;

      /**
       * latest shift end
       */
      latestShiftEnd?: string | null;

      /**
       * latest shift start
       */
      latestShiftStart?: string | null;

      /**
       * maximum working time per week
       */
      max?: string | null;

      /**
       * maximum consecutive work days
       */
      maxConsecutiveWorkDays?: number | null;

      /**
       * maximum shift length
       */
      maxShiftLength?: string | null;

      /**
       * maximum shifts per day
       */
      maxShiftsDay?: number | null;

      /**
       * maximum working days per week
       */
      maxWorkingDays?: number | null;

      /**
       * minimum working time per week
       */
      min?: string | null;

      /**
       * minimum rest between shifts
       */
      minRest?: string | null;

      /**
       * minimum rest between shifts on the same day
       */
      minRestBetweenShiftsSameDay?: number | null;

      /**
       * minimum shift length
       */
      minShiftLength?: string | null;
    }

    export interface PeriodRule {
      /**
       * Period of the rule. The rule only applies to this period
       */
      period: FillAPI.Period;

      /**
       * earliest shift start
       */
      earliestShiftStart?: string | null;

      /**
       * latest shift end
       */
      latestShiftEnd?: string | null;

      /**
       * latest shift start
       */
      latestShiftStart?: string | null;

      /**
       * maximum shift length
       */
      maxShiftLength?: string | null;

      /**
       * The maximum number of weekends to be idle in this period.
       */
      maxWeekendsIdle?: number | null;

      /**
       * Maximum number of working days in the period.
       */
      maxWorkingDays?: number | null;

      /**
       * Maximum working duration in the period. Not including travel time
       */
      maxWorkingDuration?: string | null;

      /**
       * Minimum rest duration between shifts
       */
      minRestDuration?: string | null;

      /**
       * Minimum rest duration between shifts in the same day
       */
      minRestDurationBetweenShiftsSameDay?: string | null;

      /**
       * minimum shift length
       */
      minShiftLength?: string | null;

      /**
       * The minimum number of weekends to be idle in this period.
       */
      minWeekendsIdle?: number | null;

      /**
       * Minimum number of working days in the period.
       */
      minWorkingDays?: number | null;

      /**
       * Minimum working duration in the period. Not including travel time
       */
      minWorkingDuration?: string | null;
    }

    /**
     * Employee skill
     */
    export interface Skill {
      /**
       * name of the skill
       */
      name: string;

      /**
       * expiry date of the skill
       */
      expiry?: string | null;

      /**
       * Period
       */
      period?: FillAPI.Period | null;

      /**
       * weight of the skill
       */
      weight?: number | null;
    }
  }

  /**
   * Shift to be filled
   */
  export interface Shift {
    /**
     * Start time of the shift
     */
    from: string;

    /**
     * Maximum number of employees assigned to this shift.
     */
    max: number | null;

    /**
     * Minimum number of employees assigned to this shift.
     */
    min: number | null;

    /**
     * Name of the shift
     */
    name: string;

    /**
     * End time of the shift
     */
    to: string;

    /**
     * Maximum number of employees assigned to this shift.
     */
    blocklist?: Array<string> | null;

    /**
     * Financial cost of the shift
     */
    cost?: number | null;

    employees?: Array<string> | null;

    /**
     * Location
     */
    location?: FillAPI.ShiftLocation | null;

    locked?: Array<boolean> | null;

    /**
     * Priority of the shift. High priority shifts get assigned more
     */
    priority?: number | null;

    /**
     * Shift rests can define required idle/rest time after the shift.
     */
    rests?: unknown;

    /**
     * Skills required for the shift
     */
    skills?: Array<FillAPI.SkillRequirement> | null;

    /**
     * Shift tags. Used to identify groups of shifts in rules.
     */
    tags?: Array<Shift.Tag> | null;

    value?: number | null;
  }

  export namespace Shift {
    export interface Tag {
      name: string;
    }
  }

  /**
   * The number of employees you need at time intervals defined by `from`/`to`.
   */
  export interface Demand {
    /**
     * The start time of the shift demand
     */
    from: string;

    name: string;

    /**
     * The skills required for the shift demand
     */
    skills: Array<FillAPI.SkillRequirement> | null;

    /**
     * The end time of the shift demand
     */
    to: string;

    /**
     * The maximum number of shifts to create
     */
    max?: number | null;

    /**
     * The minimum number of shifts to create
     */
    min?: number | null;
  }

  /**
   * A FairnessBucket defines a group of Employees that should have fair shifts over
   * the predefined shifts.
   */
  export interface FairnessBucket {
    /**
     * The employees in the fairness bucket
     */
    employees: Array<string>;

    /**
     * The shifts in the fairness bucket
     */
    shifts: Array<string>;

    /**
     * The target value of workload per employee
     */
    target: string;

    /**
     * Period
     */
    period?: FillAPI.Period | null;
  }

  /**
   * Pattern to describe (un)desired series of shifts. Based on a `satisfy` type
   * (`PREFERRED`, `PROHIBITED`, or `UNPREFERRED`)
   */
  export interface Pattern {
    /**
     * List of Pattern Elements describing `ON`/`OFF` for several shifts
     */
    elements?: Array<Pattern.Element> | null;

    /**
     * (`PREFERRED`, `PROHIBITED`, or `UNPREFERRED`)
     */
    satisfy?: 'PREFERRED' | 'PROHIBITED' | 'UNPREFERRED' | null;

    /**
     * `SINGLE_DAY` (spanning shifts in a single days) or `MULTI_DAY` (spanning shifts
     * accross days)
     */
    type?: 'SINGLE_DAY' | 'MULTI_DAY' | null;

    /**
     * Importance (weight) of the Pattern
     */
    weight?: number | null;
  }

  export namespace Pattern {
    /**
     * Single element to describe a shift on/off
     */
    export interface Element {
      /**
       * List of shift tags to include
       */
      tags?: Array<string> | null;

      /**
       * `ON` (doing that shift) or `OFF` (not doing that shift)
       */
      type?: 'ON' | 'OFF' | null;
    }
  }

  /**
   * An optional list of shared resource requirements
   */
  export interface Requirement {
    /**
     * List of shifts that the requirement applies to
     */
    shifts: Array<string>;

    /**
     * The skill this requirement applies to
     */
    skill: string;

    /**
     * The number of shared resources required for this skill.
     */
    value: number;
  }

  /**
   * Rest time before and after shifts
   */
  export interface Rest {
    /**
     * Filter by shift tag excludes
     */
    excludes?: Array<string> | null;

    /**
     * Maximum number of rest periods
     */
    frequency?: number | null;

    /**
     * Maximum duration
     */
    max?: string | null;

    /**
     * Minimum duration
     */
    min?: string | null;

    /**
     * Minimum consecutive duration of a rest.
     */
    minConsecutive?: string | null;

    /**
     * Period
     */
    period?: FillAPI.Period | null;

    /**
     * Rest type (`CONSECUTIVE` or `WEEKLY`)
     */
    periodType?: FillAPI.PeriodType | null;

    /**
     * If the rest needs to be `BEFORE` or `AFTER` a shift (`tags` must be applied as
     * well)
     */
    sequence?: 'BEFORE' | 'AFTER' | null;

    /**
     * Filter by shift tag
     */
    tags?: Array<string> | null;
  }

  /**
   * Input assignment
   */
  export interface Schedule {
    /**
     * Name of the employee
     */
    employee: string;

    /**
     * Name of the shift
     */
    shift: string;

    /**
     * If the shift is locked. Locked shifts cannot be touched by the solver
     */
    locked?: boolean;
  }
}

Fill.Jobs = Jobs;

export declare namespace Fill {
  export {
    type DayOfWeek as DayOfWeek,
    type FillExplanation as FillExplanation,
    type FillOptions as FillOptions,
    type FillRequest as FillRequest,
    type FillWeights as FillWeights,
    type IdleWeekendDefinition as IdleWeekendDefinition,
    type Message as Message,
    type Period as Period,
    type PeriodType as PeriodType,
    type Rule as Rule,
    type ShiftLocation as ShiftLocation,
    type SkillRequirement as SkillRequirement,
    type SolviceStatusJob as SolviceStatusJob,
    type FillEvaluateParams as FillEvaluateParams,
    type FillSolveParams as FillSolveParams,
    type FillSuggestParams as FillSuggestParams,
  };

  export {
    Jobs as Jobs,
    type Score as Score,
    type ShiftAssignmentSolution as ShiftAssignmentSolution,
    type Unresolved as Unresolved,
    type JobExplanationResponse as JobExplanationResponse,
    type JobSolutionResponse as JobSolutionResponse,
  };
}

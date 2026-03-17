// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SolviceShiftSolver from 'solvice-shift-solver';

const client = new SolviceShiftSolver({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fill', () => {
  // Mock server tests are disabled
  test.skip('demo', async () => {
    const responsePromise = client.fill.demo();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('evaluate: only required params', async () => {
    const responsePromise = client.fill.evaluate({
      employees: [{ name: 'name' }],
      shifts: [
        {
          from: '2019-12-27T18:11:19.117Z',
          max: 0,
          min: 0,
          name: 'name',
          to: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('evaluate: required and optional params', async () => {
    const response = await client.fill.evaluate({
      employees: [
        {
          name: 'name',
          availability: [
            {
              from: '2019-12-27T18:11:19.117Z',
              to: '2019-12-27T18:11:19.117Z',
              location: { lat: 51.12042, lon: 4.23054 },
            },
          ],
          constracts: [
            {
              name: 'name',
              earliestShiftStart: '13:45:30.123456789',
              latestShiftEnd: '13:45:30.123456789',
              latestShiftStart: '13:45:30.123456789',
              max: 'P1D',
              maxConsecutiveWorkDays: 0,
              maxShiftLength: 'P1D',
              maxShiftsDay: 0,
              maxWorkingDays: 0,
              min: 'P1D',
              minRest: 'P1D',
              minRestBetweenShiftsSameDay: 0,
              minShiftLength: 'P1D',
            },
          ],
          efficiency: 0,
          home: { lat: 51.12042, lon: 4.23054 },
          hourlyPay: 0,
          periodRules: [
            {
              period: {
                duration: 'P1D',
                excludes: ['2022-03-10'],
                from: '2019-12-27T18:11:19.117Z',
                period: 'P1D',
                to: '2019-12-27T18:11:19.117Z',
                type: 'DAILY',
              },
              earliestShiftStart: '13:45:30.123456789',
              latestShiftEnd: '13:45:30.123456789',
              latestShiftStart: '13:45:30.123456789',
              maxShiftLength: 'P1D',
              maxWeekendsIdle: 0,
              maxWorkingDays: 0,
              maxWorkingDuration: 'P1D',
              minRestDuration: 'P1D',
              minRestDurationBetweenShiftsSameDay: 'P1D',
              minShiftLength: 'P1D',
              minWeekendsIdle: 0,
              minWorkingDays: 0,
              minWorkingDuration: 'P1D',
            },
          ],
          preference: ['string'],
          skills: [
            {
              name: 'name',
              expiry: '2022-03-10',
              period: {
                duration: 'P1D',
                excludes: ['2022-03-10'],
                from: '2019-12-27T18:11:19.117Z',
                period: 'P1D',
                to: '2019-12-27T18:11:19.117Z',
                type: 'DAILY',
              },
              weight: 0,
            },
          ],
        },
      ],
      shifts: [
        {
          from: '2019-12-27T18:11:19.117Z',
          max: 0,
          min: 0,
          name: 'name',
          to: '2019-12-27T18:11:19.117Z',
          blocklist: ['string'],
          cost: 0,
          employees: ['string'],
          location: { lat: 51.12042, lon: 4.23054 },
          locked: [true],
          priority: 0,
          rests: [
            {
              excludes: ['string'],
              frequency: 0,
              max: 'P1D',
              min: 'P1D',
              minConsecutive: 'P1D',
              period: {
                duration: 'P1D',
                excludes: ['2022-03-10'],
                from: '2019-12-27T18:11:19.117Z',
                period: 'P1D',
                to: '2019-12-27T18:11:19.117Z',
                type: 'DAILY',
              },
              periodType: 'DAILY',
              sequence: 'BEFORE',
              tags: ['string'],
            },
          ],
          skills: [
            {
              name: 'name',
              hard: true,
              weight: 0,
            },
          ],
          tags: [{ name: 'name' }],
          value: 0,
        },
      ],
      assignments: [
        {
          employee: 'employee',
          shift: 'shift',
          locked: true,
        },
      ],
      demands: [
        {
          from: '2022-03-10T12:15:50-04:00',
          name: 'name',
          skills: [
            {
              name: 'name',
              hard: true,
              weight: 0,
            },
          ],
          to: '2022-03-10T12:15:50-04:00',
          max: 0,
          min: 0,
        },
      ],
      fairnessBuckets: [
        {
          employees: ['string'],
          shifts: ['string'],
          target: 'PT8H',
          period: {
            duration: 'P1D',
            excludes: ['2022-03-10'],
            from: '2019-12-27T18:11:19.117Z',
            period: 'P1D',
            to: '2019-12-27T18:11:19.117Z',
            type: 'DAILY',
          },
        },
      ],
      hook: 'https://example.com',
      label: 'label',
      options: {
        alwaysScoreSharedSkills: true,
        explanation: { enabled: true, filterHardConstraints: true },
        hardAvailability: true,
        hardBlacklist: true,
        hardSkill: true,
        idleWeekend: {
          fromDayOfWeek: 'MONDAY',
          fromTime: '13:45:30.123456789',
          toDayOfWeek: 'MONDAY',
          toTime: '13:45:30.123456789',
          restTime: 'P1D',
        },
        partialPlanning: true,
        penaliseZeroHours: true,
        useAvailabilityLocations: true,
      },
      patterns: [
        {
          elements: [{ tags: ['string'], type: 'ON' }],
          satisfy: 'PREFERRED',
          type: 'SINGLE_DAY',
          weight: 0,
        },
      ],
      requirements: [
        {
          shifts: ['string'],
          skill: 'skill',
          value: 0,
        },
      ],
      rests: [
        {
          excludes: ['string'],
          frequency: 0,
          max: 'P1D',
          min: 'P1D',
          minConsecutive: 'P1D',
          period: {
            duration: 'P1D',
            excludes: ['2022-03-10'],
            from: '2019-12-27T18:11:19.117Z',
            period: 'P1D',
            to: '2019-12-27T18:11:19.117Z',
            type: 'DAILY',
          },
          periodType: 'DAILY',
          sequence: 'BEFORE',
          tags: ['string'],
        },
      ],
      rules: [
        {
          constraint: 'COUNTER',
          type: 'HOURS_WORKED',
          max: 0,
          min: 0,
          period: {
            duration: 'P1D',
            excludes: ['2022-03-10'],
            from: '2019-12-27T18:11:19.117Z',
            period: 'P1D',
            to: '2019-12-27T18:11:19.117Z',
            type: 'DAILY',
          },
          shifts: ['string'],
        },
      ],
      weights: {
        availability: 'availability',
        blacklist: 'blacklist',
        concurrent: 'concurrent',
        costs: 'costs',
        criticalSkills: 'criticalSkills',
        dayOfWeek: 'dayOfWeek',
        distance: 'distance',
        distanceAL: 'distanceAL',
        efficiency: 'efficiency',
        fairness: 'fairness',
        latestShiftStart: 'latestShiftStart',
        locked: 'locked',
        maxConsecutive: 'maxConsecutive',
        maxHours: 'maxHours',
        maxShift: 'maxShift',
        maxWorkingDays: 'maxWorkingDays',
        minHours: 'minHours',
        minHoursUnassigned: 'minHoursUnassigned',
        minRest: 'minRest',
        minShift: 'minShift',
        pref: 'pref',
        priority: 'priority',
        requirements: 'requirements',
        sameDay: 'sameDay',
        sameDayMinRest: 'sameDayMinRest',
        shiftEnd: 'shiftEnd',
        shiftStart: 'shiftStart',
        skills: 'skills',
        softSkills: 'softSkills',
        softSkillsLevel: 'softSkillsLevel',
        unassigned: 'unassigned',
        wages: 'wages',
        working: 'working',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('solve: only required params', async () => {
    const responsePromise = client.fill.solve({
      employees: [{ name: 'name' }],
      shifts: [
        {
          from: '2019-12-27T18:11:19.117Z',
          max: 0,
          min: 0,
          name: 'name',
          to: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('solve: required and optional params', async () => {
    const response = await client.fill.solve({
      employees: [
        {
          name: 'name',
          availability: [
            {
              from: '2019-12-27T18:11:19.117Z',
              to: '2019-12-27T18:11:19.117Z',
              location: { lat: 51.12042, lon: 4.23054 },
            },
          ],
          constracts: [
            {
              name: 'name',
              earliestShiftStart: '13:45:30.123456789',
              latestShiftEnd: '13:45:30.123456789',
              latestShiftStart: '13:45:30.123456789',
              max: 'P1D',
              maxConsecutiveWorkDays: 0,
              maxShiftLength: 'P1D',
              maxShiftsDay: 0,
              maxWorkingDays: 0,
              min: 'P1D',
              minRest: 'P1D',
              minRestBetweenShiftsSameDay: 0,
              minShiftLength: 'P1D',
            },
          ],
          efficiency: 0,
          home: { lat: 51.12042, lon: 4.23054 },
          hourlyPay: 0,
          periodRules: [
            {
              period: {
                duration: 'P1D',
                excludes: ['2022-03-10'],
                from: '2019-12-27T18:11:19.117Z',
                period: 'P1D',
                to: '2019-12-27T18:11:19.117Z',
                type: 'DAILY',
              },
              earliestShiftStart: '13:45:30.123456789',
              latestShiftEnd: '13:45:30.123456789',
              latestShiftStart: '13:45:30.123456789',
              maxShiftLength: 'P1D',
              maxWeekendsIdle: 0,
              maxWorkingDays: 0,
              maxWorkingDuration: 'P1D',
              minRestDuration: 'P1D',
              minRestDurationBetweenShiftsSameDay: 'P1D',
              minShiftLength: 'P1D',
              minWeekendsIdle: 0,
              minWorkingDays: 0,
              minWorkingDuration: 'P1D',
            },
          ],
          preference: ['string'],
          skills: [
            {
              name: 'name',
              expiry: '2022-03-10',
              period: {
                duration: 'P1D',
                excludes: ['2022-03-10'],
                from: '2019-12-27T18:11:19.117Z',
                period: 'P1D',
                to: '2019-12-27T18:11:19.117Z',
                type: 'DAILY',
              },
              weight: 0,
            },
          ],
        },
      ],
      shifts: [
        {
          from: '2019-12-27T18:11:19.117Z',
          max: 0,
          min: 0,
          name: 'name',
          to: '2019-12-27T18:11:19.117Z',
          blocklist: ['string'],
          cost: 0,
          employees: ['string'],
          location: { lat: 51.12042, lon: 4.23054 },
          locked: [true],
          priority: 0,
          rests: [
            {
              excludes: ['string'],
              frequency: 0,
              max: 'P1D',
              min: 'P1D',
              minConsecutive: 'P1D',
              period: {
                duration: 'P1D',
                excludes: ['2022-03-10'],
                from: '2019-12-27T18:11:19.117Z',
                period: 'P1D',
                to: '2019-12-27T18:11:19.117Z',
                type: 'DAILY',
              },
              periodType: 'DAILY',
              sequence: 'BEFORE',
              tags: ['string'],
            },
          ],
          skills: [
            {
              name: 'name',
              hard: true,
              weight: 0,
            },
          ],
          tags: [{ name: 'name' }],
          value: 0,
        },
      ],
      assignments: [
        {
          employee: 'employee',
          shift: 'shift',
          locked: true,
        },
      ],
      demands: [
        {
          from: '2022-03-10T12:15:50-04:00',
          name: 'name',
          skills: [
            {
              name: 'name',
              hard: true,
              weight: 0,
            },
          ],
          to: '2022-03-10T12:15:50-04:00',
          max: 0,
          min: 0,
        },
      ],
      fairnessBuckets: [
        {
          employees: ['string'],
          shifts: ['string'],
          target: 'PT8H',
          period: {
            duration: 'P1D',
            excludes: ['2022-03-10'],
            from: '2019-12-27T18:11:19.117Z',
            period: 'P1D',
            to: '2019-12-27T18:11:19.117Z',
            type: 'DAILY',
          },
        },
      ],
      hook: 'https://example.com',
      label: 'label',
      options: {
        alwaysScoreSharedSkills: true,
        explanation: { enabled: true, filterHardConstraints: true },
        hardAvailability: true,
        hardBlacklist: true,
        hardSkill: true,
        idleWeekend: {
          fromDayOfWeek: 'MONDAY',
          fromTime: '13:45:30.123456789',
          toDayOfWeek: 'MONDAY',
          toTime: '13:45:30.123456789',
          restTime: 'P1D',
        },
        partialPlanning: true,
        penaliseZeroHours: true,
        useAvailabilityLocations: true,
      },
      patterns: [
        {
          elements: [{ tags: ['string'], type: 'ON' }],
          satisfy: 'PREFERRED',
          type: 'SINGLE_DAY',
          weight: 0,
        },
      ],
      requirements: [
        {
          shifts: ['string'],
          skill: 'skill',
          value: 0,
        },
      ],
      rests: [
        {
          excludes: ['string'],
          frequency: 0,
          max: 'P1D',
          min: 'P1D',
          minConsecutive: 'P1D',
          period: {
            duration: 'P1D',
            excludes: ['2022-03-10'],
            from: '2019-12-27T18:11:19.117Z',
            period: 'P1D',
            to: '2019-12-27T18:11:19.117Z',
            type: 'DAILY',
          },
          periodType: 'DAILY',
          sequence: 'BEFORE',
          tags: ['string'],
        },
      ],
      rules: [
        {
          constraint: 'COUNTER',
          type: 'HOURS_WORKED',
          max: 0,
          min: 0,
          period: {
            duration: 'P1D',
            excludes: ['2022-03-10'],
            from: '2019-12-27T18:11:19.117Z',
            period: 'P1D',
            to: '2019-12-27T18:11:19.117Z',
            type: 'DAILY',
          },
          shifts: ['string'],
        },
      ],
      weights: {
        availability: 'availability',
        blacklist: 'blacklist',
        concurrent: 'concurrent',
        costs: 'costs',
        criticalSkills: 'criticalSkills',
        dayOfWeek: 'dayOfWeek',
        distance: 'distance',
        distanceAL: 'distanceAL',
        efficiency: 'efficiency',
        fairness: 'fairness',
        latestShiftStart: 'latestShiftStart',
        locked: 'locked',
        maxConsecutive: 'maxConsecutive',
        maxHours: 'maxHours',
        maxShift: 'maxShift',
        maxWorkingDays: 'maxWorkingDays',
        minHours: 'minHours',
        minHoursUnassigned: 'minHoursUnassigned',
        minRest: 'minRest',
        minShift: 'minShift',
        pref: 'pref',
        priority: 'priority',
        requirements: 'requirements',
        sameDay: 'sameDay',
        sameDayMinRest: 'sameDayMinRest',
        shiftEnd: 'shiftEnd',
        shiftStart: 'shiftStart',
        skills: 'skills',
        softSkills: 'softSkills',
        softSkillsLevel: 'softSkillsLevel',
        unassigned: 'unassigned',
        wages: 'wages',
        working: 'working',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('suggest: only required params', async () => {
    const responsePromise = client.fill.suggest({
      employees: [{ name: 'name' }],
      shifts: [
        {
          from: '2019-12-27T18:11:19.117Z',
          max: 0,
          min: 0,
          name: 'name',
          to: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('suggest: required and optional params', async () => {
    const response = await client.fill.suggest({
      employees: [
        {
          name: 'name',
          availability: [
            {
              from: '2019-12-27T18:11:19.117Z',
              to: '2019-12-27T18:11:19.117Z',
              location: { lat: 51.12042, lon: 4.23054 },
            },
          ],
          constracts: [
            {
              name: 'name',
              earliestShiftStart: '13:45:30.123456789',
              latestShiftEnd: '13:45:30.123456789',
              latestShiftStart: '13:45:30.123456789',
              max: 'P1D',
              maxConsecutiveWorkDays: 0,
              maxShiftLength: 'P1D',
              maxShiftsDay: 0,
              maxWorkingDays: 0,
              min: 'P1D',
              minRest: 'P1D',
              minRestBetweenShiftsSameDay: 0,
              minShiftLength: 'P1D',
            },
          ],
          efficiency: 0,
          home: { lat: 51.12042, lon: 4.23054 },
          hourlyPay: 0,
          periodRules: [
            {
              period: {
                duration: 'P1D',
                excludes: ['2022-03-10'],
                from: '2019-12-27T18:11:19.117Z',
                period: 'P1D',
                to: '2019-12-27T18:11:19.117Z',
                type: 'DAILY',
              },
              earliestShiftStart: '13:45:30.123456789',
              latestShiftEnd: '13:45:30.123456789',
              latestShiftStart: '13:45:30.123456789',
              maxShiftLength: 'P1D',
              maxWeekendsIdle: 0,
              maxWorkingDays: 0,
              maxWorkingDuration: 'P1D',
              minRestDuration: 'P1D',
              minRestDurationBetweenShiftsSameDay: 'P1D',
              minShiftLength: 'P1D',
              minWeekendsIdle: 0,
              minWorkingDays: 0,
              minWorkingDuration: 'P1D',
            },
          ],
          preference: ['string'],
          skills: [
            {
              name: 'name',
              expiry: '2022-03-10',
              period: {
                duration: 'P1D',
                excludes: ['2022-03-10'],
                from: '2019-12-27T18:11:19.117Z',
                period: 'P1D',
                to: '2019-12-27T18:11:19.117Z',
                type: 'DAILY',
              },
              weight: 0,
            },
          ],
        },
      ],
      shifts: [
        {
          from: '2019-12-27T18:11:19.117Z',
          max: 0,
          min: 0,
          name: 'name',
          to: '2019-12-27T18:11:19.117Z',
          blocklist: ['string'],
          cost: 0,
          employees: ['string'],
          location: { lat: 51.12042, lon: 4.23054 },
          locked: [true],
          priority: 0,
          rests: [
            {
              excludes: ['string'],
              frequency: 0,
              max: 'P1D',
              min: 'P1D',
              minConsecutive: 'P1D',
              period: {
                duration: 'P1D',
                excludes: ['2022-03-10'],
                from: '2019-12-27T18:11:19.117Z',
                period: 'P1D',
                to: '2019-12-27T18:11:19.117Z',
                type: 'DAILY',
              },
              periodType: 'DAILY',
              sequence: 'BEFORE',
              tags: ['string'],
            },
          ],
          skills: [
            {
              name: 'name',
              hard: true,
              weight: 0,
            },
          ],
          tags: [{ name: 'name' }],
          value: 0,
        },
      ],
      assignments: [
        {
          employee: 'employee',
          shift: 'shift',
          locked: true,
        },
      ],
      demands: [
        {
          from: '2022-03-10T12:15:50-04:00',
          name: 'name',
          skills: [
            {
              name: 'name',
              hard: true,
              weight: 0,
            },
          ],
          to: '2022-03-10T12:15:50-04:00',
          max: 0,
          min: 0,
        },
      ],
      fairnessBuckets: [
        {
          employees: ['string'],
          shifts: ['string'],
          target: 'PT8H',
          period: {
            duration: 'P1D',
            excludes: ['2022-03-10'],
            from: '2019-12-27T18:11:19.117Z',
            period: 'P1D',
            to: '2019-12-27T18:11:19.117Z',
            type: 'DAILY',
          },
        },
      ],
      hook: 'https://example.com',
      label: 'label',
      options: {
        alwaysScoreSharedSkills: true,
        explanation: { enabled: true, filterHardConstraints: true },
        hardAvailability: true,
        hardBlacklist: true,
        hardSkill: true,
        idleWeekend: {
          fromDayOfWeek: 'MONDAY',
          fromTime: '13:45:30.123456789',
          toDayOfWeek: 'MONDAY',
          toTime: '13:45:30.123456789',
          restTime: 'P1D',
        },
        partialPlanning: true,
        penaliseZeroHours: true,
        useAvailabilityLocations: true,
      },
      patterns: [
        {
          elements: [{ tags: ['string'], type: 'ON' }],
          satisfy: 'PREFERRED',
          type: 'SINGLE_DAY',
          weight: 0,
        },
      ],
      requirements: [
        {
          shifts: ['string'],
          skill: 'skill',
          value: 0,
        },
      ],
      rests: [
        {
          excludes: ['string'],
          frequency: 0,
          max: 'P1D',
          min: 'P1D',
          minConsecutive: 'P1D',
          period: {
            duration: 'P1D',
            excludes: ['2022-03-10'],
            from: '2019-12-27T18:11:19.117Z',
            period: 'P1D',
            to: '2019-12-27T18:11:19.117Z',
            type: 'DAILY',
          },
          periodType: 'DAILY',
          sequence: 'BEFORE',
          tags: ['string'],
        },
      ],
      rules: [
        {
          constraint: 'COUNTER',
          type: 'HOURS_WORKED',
          max: 0,
          min: 0,
          period: {
            duration: 'P1D',
            excludes: ['2022-03-10'],
            from: '2019-12-27T18:11:19.117Z',
            period: 'P1D',
            to: '2019-12-27T18:11:19.117Z',
            type: 'DAILY',
          },
          shifts: ['string'],
        },
      ],
      weights: {
        availability: 'availability',
        blacklist: 'blacklist',
        concurrent: 'concurrent',
        costs: 'costs',
        criticalSkills: 'criticalSkills',
        dayOfWeek: 'dayOfWeek',
        distance: 'distance',
        distanceAL: 'distanceAL',
        efficiency: 'efficiency',
        fairness: 'fairness',
        latestShiftStart: 'latestShiftStart',
        locked: 'locked',
        maxConsecutive: 'maxConsecutive',
        maxHours: 'maxHours',
        maxShift: 'maxShift',
        maxWorkingDays: 'maxWorkingDays',
        minHours: 'minHours',
        minHoursUnassigned: 'minHoursUnassigned',
        minRest: 'minRest',
        minShift: 'minShift',
        pref: 'pref',
        priority: 'priority',
        requirements: 'requirements',
        sameDay: 'sameDay',
        sameDayMinRest: 'sameDayMinRest',
        shiftEnd: 'shiftEnd',
        shiftStart: 'shiftStart',
        skills: 'skills',
        softSkills: 'softSkills',
        softSkillsLevel: 'softSkillsLevel',
        unassigned: 'unassigned',
        wages: 'wages',
        working: 'working',
      },
    });
  });
});

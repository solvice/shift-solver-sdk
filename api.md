# Fill

Types:

- <code><a href="./src/resources/fill/fill.ts">DayOfWeek</a></code>
- <code><a href="./src/resources/fill/fill.ts">FillRequest</a></code>
- <code><a href="./src/resources/fill/fill.ts">Message</a></code>
- <code><a href="./src/resources/fill/fill.ts">Period</a></code>
- <code><a href="./src/resources/fill/fill.ts">PeriodType</a></code>
- <code><a href="./src/resources/fill/fill.ts">Rule</a></code>
- <code><a href="./src/resources/fill/fill.ts">ShiftLocation</a></code>
- <code><a href="./src/resources/fill/fill.ts">SkillRequirement</a></code>
- <code><a href="./src/resources/fill/fill.ts">SolviceStatusJob</a></code>

Methods:

- <code title="get /v2/fill/demo">client.fill.<a href="./src/resources/fill/fill.ts">demo</a>() -> FillRequest</code>
- <code title="post /v2/fill/evaluate">client.fill.<a href="./src/resources/fill/fill.ts">evaluate</a>({ ...params }) -> SolviceStatusJob</code>
- <code title="post /v2/fill/solve">client.fill.<a href="./src/resources/fill/fill.ts">solve</a>({ ...params }) -> SolviceStatusJob</code>
- <code title="post /v2/fill/suggest">client.fill.<a href="./src/resources/fill/fill.ts">suggest</a>({ ...params }) -> SolviceStatusJob</code>

## Jobs

Types:

- <code><a href="./src/resources/fill/jobs.ts">Score</a></code>
- <code><a href="./src/resources/fill/jobs.ts">ShiftAssignmentSolution</a></code>
- <code><a href="./src/resources/fill/jobs.ts">Unresolved</a></code>
- <code><a href="./src/resources/fill/jobs.ts">JobExplanationResponse</a></code>
- <code><a href="./src/resources/fill/jobs.ts">JobSolutionResponse</a></code>

Methods:

- <code title="get /v2/fill/jobs/{id}">client.fill.jobs.<a href="./src/resources/fill/jobs.ts">retrieve</a>(id) -> FillRequest</code>
- <code title="get /v2/fill/jobs/{id}/explanation">client.fill.jobs.<a href="./src/resources/fill/jobs.ts">explanation</a>(id) -> JobExplanationResponse</code>
- <code title="get /v2/fill/jobs/{id}/solution">client.fill.jobs.<a href="./src/resources/fill/jobs.ts">solution</a>(id) -> JobSolutionResponse</code>
- <code title="get /v2/fill/jobs/{id}/status">client.fill.jobs.<a href="./src/resources/fill/jobs.ts">status</a>(id) -> SolviceStatusJob</code>


# EnergyAustralia Coding Assessment for Integration Quality Engineers

## Description
Submissions for the Integration QE role for Energy Australia, using the specifications [here](https://eacp.energyaustralia.com.au/codingtest/testers).

## Installation & Running
Ensure you have the latest version of [Node.js](https://nodejs.org/en) installed.
Clone the repository, then run:
```bash
npm install
```

Run the tests with:
```bash
npm run test:e2e
```

Then you can create a HTML report with
```bash
npm run generate:report
```
Which can be found under the ```reporting``` folder.

Due to throttling issues, it is advisable to wait between runs of the tests.

If viewing/editing the code, it is recommended to use [Visual Studio Code](https://code.visualstudio.com/) with the Cucumber plug-in installed.


## Technologies Used
- [Typescript](https://www.typescriptlang.org/): As mandated by the specifications. It is also provides code organization over Javascript, which is good to prevent errors in test suites (which are designed to catch errors).
- [Jest](https://jestjs.io/): Test runner and assertion library, chosen for ease of use.
- [Cucumber](https://cucumber.io/): BDD framework that writes in a semi-natural language, allowing non-technical stakeholders to read our tests.
- [Supertest](https://www.npmjs.com/package/supertest): Library for HTTPS API testing.


## Assumptions Made
- Tests are based on the above specifications + the [API documentation](https://eacp.energyaustralia.com.au/codingtest/api-docs/#/festivals) and nothing else. The schema is what is listed, only GET requests are available, and so on.
- The API should return consistent responses with the same data every time.

## Discoveries Made During Testing
- The API endpoint has a throttling issue, where responses may state the throttling error, become blank, or return incomplete data, at inconsistent points. 
No performance tests were made, as there is no clear way to force the API endpoint into the throttling state. 
- A DB library could have been used for the response data checking tests. Due to the limited scope of the assessment, this was not done.


Feature: Manage Festival Data on EnergyAustralia Test API

    Scenario: Verify GET request response
        Given I am a user
        When I send a GET request to "/festivals"
        Then the API should respond with status code 200
        And the response should contain correct data


    Scenario: Verify GET request schema
        Given I am a user
        When I send a GET request to "/festivals"
        Then the API should respond with status code 200
        And the response should match schema


    Scenario: Verify GET request headers
        Given I am a user
        When I send a GET request to "/festivals"
        Then the API should respond with status code 200
        And the response should contain following headers
            | content-type | application/json; charset=utf-8 |
            | server       | nginx                           | 
            | connection   | close                           |

    Scenario: GET request to search specific band won't work
        Given I am a user
        When I send a GET request to "/festivals/1"
        Then the API should respond with status code 404

    Scenario: POST request won't work
        Given I am a user
        When I send a POST request to "/festivals?name=Test%20Band"
        Then the API should respond with status code 404

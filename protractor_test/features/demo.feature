Feature: Demo

  @stubTest
  @integrationTest
  Scenario: Demo Wrong username and password
    When Username and password are inccorect
    Then should show an error

  @stubTest
  Scenario: Demo correct username and password
    When Username and password are correct
    Then login should be succesful

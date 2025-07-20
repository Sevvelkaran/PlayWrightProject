@searchmod
Feature: Search module in OrangeHRM

  Scenario: Search for a module in dashboard
    Given I am on the OrangeHRM login page
    Given I login with valid credentials
    When I click on the search bar
    When I type "PIM"
    Then I should see "PIM" in the search result

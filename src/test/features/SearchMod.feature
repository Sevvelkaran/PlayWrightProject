Feature: Search module in OrangeHRM

  Scenario: Search for a module in dashboard
    Given I am on the OrangeHRM login page
    When I login with valid credentials
    And I click on the search bar
    And I type "PIM"
    Then I should see "PIM" in the search result

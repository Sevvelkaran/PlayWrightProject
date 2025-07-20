Feature: Submit a Claim in OrangeHRM

  Scenario: Show validation error when currency is not selected
    Given I am logged into OrangeHRM
    When I navigate to Submit Claim page
    When I select event as "Accommodation"
    When I click the Create button
    Then I should see a "Required" error message for currency field

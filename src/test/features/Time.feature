Feature: Add Customer in OrangeHRM Time Module

  Scenario: Verify a non-existent customer name fails
    Given I am logged in and navigated to Add Customer page
    When I search for customer "NonExistentCustomer"
    Then I should NOT see customer "NonExistentCustomer" in the table

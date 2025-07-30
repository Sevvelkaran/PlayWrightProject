Feature: Dharani_21JULY2025_OrangeHRM_PIM  
Scenario: Add a new employee
  Given I want to go into OrangeHRM
  When The user enters the username "<username>" and password "<password>" to login
  And the user click the PIM menu
  And the user Add the employee
  Then the employee should be added successfully
    Examples:
  | username | password  |
  | Admin    | admin123  |
  
  Scenario: Add employee with Invalid Credentials
  Given I want to go into OrangeHRM
  When The user enters the username "<username>" and password "<password>" to login
  And the user click the PIM menu
  And the user fills the employee form with invalid credentials
  Then the employee should not be added successfully
  Examples:
  | username | password  |
  | Admin    | admin123  |
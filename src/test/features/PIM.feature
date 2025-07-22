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
  
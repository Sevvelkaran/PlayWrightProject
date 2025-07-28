Feature: Thoushika_20_JULY_2025_OrangeHRM_Performance2

  Background:
    Given I want to go to OrangeHRM
    And The user enters username "Admin" and password "admin123"
    And Clicks on the Login button

@smoke
  Scenario Outline: Verify Job Title and Review Status in My Reviews
    When the user navigates to the Performance > Manage Reviews > My Reviews
    Then the Job Title should be "<Job Title>" and Review Status should be "<Review Status>"

    Examples:
      | Job Title  | Review Status |
      | HR Manager | Activated     |


@smoke
Scenario Outline: Search valid employee in Employee Trackers
  When the user navigates to the Performance > Employee Trackers
  And enters valid employee name "<Employee Name>" and includes all records
  Then the employee "<Employee Name>" should be listed in Employee Trackers

Examples:
  | Employee Name |
  | Gayu  R       |


@smoke
Scenario Outline: Search invalid employee in Employee Trackers
  When the user navigates to the Performance > Employee Trackers
  And enters invalid employee name "<Employee Name>" and includes all records
  And clicks on Search
  Then an error message "<Error Message>" should be displayed

Examples:
  | Employee Name | Error Message   |
  | gjjkk         | Invalid         |


@sanity
Scenario Outline: Add time log in Employee Trackers
  When the user navigates to the Performance > Employee Trackers
  And clicks on the view button for the employee
  And clicks the Add Log button
  And enters "<Log>" and "<Comment>"
  And clicks on the Save button
  Then the log entry should be added successfully

Examples:
  | Log     | Comment           |
  | 3Hours  | Log Done success  |

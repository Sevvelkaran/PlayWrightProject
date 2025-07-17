Feature: OrangeHRM_Dashboard
  I want to go to the dashboard and assert the elements

  @To_Punch_Out
  Scenario: Time at Work
    Given I want to go into OrangeHRM
    When The user enters the username "<username>" and password "<password>" to login
    When The user is on the dashboard and clicks on the clock icon in the Time at Work section
    And The user enters the out time and punches out
    Then Assert that the user is on the Dashboard page
    
  @QuickLaunch_Assert
  Scenario Outline: QuickLaunch Assert
    Given I want to go into OrangeHRM
    When The user enters the username "<username>" and password "<password>" to login
    And The user is on the dashboard and asserts the name Dashboard "<dashboard>"
    Then The user asserts all the quick action "<quick_action>"
    
  Examples: 
    | username | password  | dashboard | quick_action   |
    | Admin    | admin123  | Dashboard  | Assign Leave   |
    | Admin    | admin123  | Dashboard  | Leave List     |
    | Admin    | admin123  | Dashboard  | Timesheets     |
    | Admin    | admin123  | Dashboard  | Apply Leave    |
    | Admin    | admin123  | Dashboard  | My Leave       |
    | Admin    | admin123  | Dashboard  | My Timesheet   |
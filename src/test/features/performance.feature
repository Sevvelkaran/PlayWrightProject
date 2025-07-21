@Performance 
Feature: Thoushika_19_JULY_2025_OrangeHRM_Performance

Background:
  Given I want to go to OrangeHRM
  And The user enters username "Admin" and password "admin123"
  And Clicks on the Login button

@Trackers
Scenario Outline: Add a new performance tracker with reviewers
  When the user navigates to the Performance > Trackers page
  And adds a performance tracker with "<Tracker Name>", "<Employee Name>", and "<Reviewers>"
  Then the tracker "<Tracker Name>" should be successfully added
Examples:
  | Tracker Name | Employee Name | Reviewers  |
  | Sevvel       | Gayu R        | Thoushi F  |

@TrackersNegative
Scenario Outline: Add a tracker with invalid employee details
  When the user navigates to the Performance > Trackers page
  And adds a performance tracker with "<Tracker Name>", "<Employee Name>", and "<Reviewers>"
  Then the system should display an error message "Required"

Examples:
  | Tracker Name | Employee Name | Reviewers  |
  | Sevvel       |               | Thoushi F  |

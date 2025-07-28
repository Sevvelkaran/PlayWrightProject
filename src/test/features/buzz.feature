# Feature: Thoushika_21_JULY_2025_OrangeHRM_Buzz
# @smoke
#   Scenario Outline: Verify posting a Buzz message
#     Given I want to go to OrangeHRM
#     And The user enters username "<username>" and password "<password>"
#     And Clicks on the Login button
#     When The user navigates to the Buzz page
#     And The user posts a message "<message>"
#     Then The message "<message>" should appear in the Buzz feed

#     Examples:
#       | username | password | message          |
#       | Admin    | admin123 | Great job team!  |




Feature: Thoushika_28_JULY_2025_OrangeHRM_Buzz

@smoke
Scenario: Verify posting a Buzz message using JSON
  Given I want to go to OrangeHRM
  And The user enters credentials from JSON
  When The user navigates to the Buzz page
  And The user posts the message from JSON
  Then The posted message should appear in the Buzz feed


@smoke
Scenario Outline: Chech the Post is displayed in the Dashboard
    Given I want to go to OrangeHRM
    And The user enters username "<username>" and password "<password>"
    And Clicks on the Login button
    When The user navigates to the Buzz page
    And The user posts a message "<message>"
    When the user clicks on Dashboard menu
    And Assert The post to check its pressence

    Examples:
      | username | password | message          |
      | Admin    | admin123 | Great job team!  |






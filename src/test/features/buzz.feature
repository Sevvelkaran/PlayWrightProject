Feature: Thoushika_21_JULY_2025_OrangeHRM_Buzz

  Scenario Outline: Verify posting a Buzz message
    Given I want to go to OrangeHRM
    And The user enters username "<username>" and password "<password>"
    And Clicks on the Login button
    When The user navigates to the Buzz page
    And The user posts a message "<message>"
    Then The message "<message>" should appear in the Buzz feed

    Examples:
      | username | password | message          |
      | Admin    | admin123 | Great job team!  |



@Buzz_Post_Check
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






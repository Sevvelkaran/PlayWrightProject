Feature: OrangeHRM_Login
  I want to login into the OrangeHRM WebPage

  

  @LoginScenarios
  Scenario Outline: Login functionality with various credentials
    Given I want to go to OrangeHRM 
    When The user enters username "<username>" and password "<password>"
    And Clicks on the Login button

    Examples:
      | username       | password       | 
      | Admin          | admin123       | 
      | invalidUser    | invalidPass    | 
      |                | invalidPass    | 

  @ForgotPassword
  Scenario: Forgot Password functionality
    Given I want to go to OrangeHRM 
    When The user clicks on the Forgot Password link

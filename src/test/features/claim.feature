# Feature: Submit a Claim in OrangeHRM

# @ClaimScenarios
#   Scenario Outline: Show validation error when currency is not selected
#     Given I want to go to OrangeHRm 
#     When The user enters the Username "<username>" and Password "<password>" to login
#     When I navigate to Submit Claim page
#     When I select event as "Accommodation"
#     When I click the Create button
#     Then I should see a "Required" error message for currency field

#     Examples:
#   | username | password  |
#   | Admin    | admin123  |
# RegisterAppJava-Sprint2
Java, web-based product listing

# SPRINT 4 BLACKBOARD DESCRIPTION
0) What team are you on?
  Respond in your submission to Blackboard
0) What technology stack are you working with: Java, NodeJS, Other?
  Respond in your submission to Blackboard
5) Assign yourself to at least one card/task in Trello. Track your time as comments on the Trello card(s) that you are assigned to.
  Complete in Trello
15) Project planning meeting attendance.
  Professor Phillips will grade this item based on his attendance sheets for the project planning meetings that started Sprints 1-5
6: 2 points/week) Weekly status reports
  Complete in your team’s private channel in Slack
  A status report should be provided by end of day each Thursday of the sprint
  Combine all of the members’ status reports into a single post and tag the graders @Rakib and @Brianna Ciora
  The combined report should include the following for each team member
    Name
    What has been completed
    What is currently being worked on
4) Provide the URL of your initial commit in Github for Sprint 4. The commit should be made to one of the repositories in your team organization. To receive points the timestamp on the commit must be within the first week of Sprint 4 (not including Spring Break).
  Respond in your submission to Blackboard
20) Provide the URL to the commit, or URLs for a group of commits, that represents a significant contribution you have made to your team’s work this sprint.
  Respond in your submission to Blackboard
  If multiple people worked on a single commit then include any additional names in the commit message
  A significant contribution means non-trivial blocks of code
    Example: Most, or all, of the HTML for a view represents a significant contribution
    Example: Complete “command” objects, or similar, represents a significant contribution
    Example: Together, multiple route handlers within a controller represent a significant contribution
    Etc...
    Example: By itself, a few lines of code here or there – like an IF statement or simple loop – does not represent a significant contribution
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
The following bullets are not directly related to Sprint 4. These bullet points indicate how transaction, shopping cart, functionality will be graded in Sprint 5. This information is provided merely as a reference.

  Can search for a product by its lookup code
    (Supports partial search)
  Can add searched for product to transaction
  Can adjust quantity of products in transaction/cart
  Can remove product from transaction/cart
  Transaction summary display
    Display each product in the transaction/cart along with its quantity and price
    Display total product count for the transaction/cart
    Display total price for the transaction/cart
  Upon completing the transaction/cart, details are persisted to the database
    (Doesn't have to be accomplished at the end of the transaction)
  Can cancel a transaction
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Reminders on how to push and pull from command line
$ "git status" will show what files differs from local and master

$ "git add ." will add every file that differs to be uploaded. You can specify specific files or folder to be added, for example this will only add employeeDetail.html "git add .\src\main\resources\templates\employeeDetail.html"

$ "git commit -m "Comment Here"" will commit on github, with your message to explain the changes.

$ "git push -u origin master" will push to the master

If you get a message such as "Updates were rejected because the tip of your current branch is behind its remote
counterpart. Integrate the remote changes (e.g. ‘git pull …’) before pushing again", then "$ git pull" and try again from "$ git add"

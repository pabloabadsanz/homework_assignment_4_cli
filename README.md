In this assignment I've built the command line interface for the Pizza REST API service.

The commands accepted by the application are:
- exit: Kills the CLI
- man: Shows this help page
- help: Alias of the "man" command
- menu: Lists all the ingredients in the menu
- list orders --{hours}: Shows the list of all the orders placed in the last {hours}, default to 24h,
- lookup order --{orderId}: Shows details of a specific order,
- list users --{hours}: Shows the list of all the users who signed up in the last {hours}, default to 24h,
- lookup user --{userId}: Shows details of a specific user

I've had to modify the existing REST API for saving the orders in a file once they're placed.
Every time an order was successfully placed, a new file with a random hashed filename is created, saving its ingredients, the username, and the time it was placed (for further searching orders).
In addition to that, I've also pushed the order key to the user's saved object, for further searching.

When listing orders and users, not only I was querying the last 24 hours orders and registered users, but also accepted a number of hours greater than 24 hours for searching. If the number is lower than 24, or is not specified, I default it to 24 hours.

Regarding the date time, I've had to add the user sign up date to the saved user object, in order to be able to search for users who signed up in the last X hours. I've saved the dates in milliseconds for making the dates comparison easy, instead of saving an already formatted string.

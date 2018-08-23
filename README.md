# express-error-handling-show-and-tell
Examples of how to handle errors in node and express.
Shows: 
- express error handling of sync vs async requests
- express error middleware
- handling uncaught exceptions
- what errors crash the node process and what doesn't


# Demo sequence
1. show crash1 - doesnt break app
2. show crash2 - does break app
3. why does crash2 kill the app and crash1 does not - explain
4. add middlewware 
5. show crash1 handled
6. show crash2 unhandled
7. add uncaughtException
8. show crash1 handled in middleware
9. show crash2 handled in uncaughtException and UI is timing out
10. show next usage with crash3

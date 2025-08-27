# Extra Notes

### JavaScript may seem simple on the surface, but there’s a sophisticated system managing what rus when.

- Call Stack: Executes one function at a time (LIFO).
- Web API’s: Handle async browser taks like timers and network requests.
- Callback Queue: Stores tasks from Web APIs to run after the stack is empty.
- Microtask Queue: Stores higher-priority tasks like Promises and async/await.
- Event Loop: Manages everything - checking queues and moving tasks to the stack when it’s free.

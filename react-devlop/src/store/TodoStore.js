// In Zustand, we update primitive values directly, and for objects or arrays we usually use the spread operator to create a new updated state.
// A selector is a function that selects a specific part of the state from the store.

// Example
// const count = useStore((state) => state.count);

// A selector is a function used to access a specific part of the state from the store.
// prevent unnecessary re-renders because the component subscribes only to the required state.
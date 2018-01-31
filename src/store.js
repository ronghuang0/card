// The ids correspond to each callbacks. The ids are static.
// Each callback updates the corresponding component based on the input.

const store = {
  state: {
    // initial state
  },
  callbacks: {},
  subscribe(id, callback) {
    this.callbacks[id] = callback;
  },
  trigger(id, payload) {
    this.callbacks[id](payload);
  },
};

export default store;

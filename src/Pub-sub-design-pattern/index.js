function Events() {
	this.subscriptionList = new Map();
	this.subscribeOnceList = new Map();
	this.subscribeOnceAsyncList = new Map();

	this.subscribe = function (name, callback) {
		if (!this.subscriptionList.has(name)) {
			this.subscriptionList.set(name, [callback])
		} else {
			const existingCallbacks = this.subscriptionList.get(name);
			this.subscriptionList.set(name, [...existingCallbacks, callback])
		}

		return {
			remove: () => {
				const existingCallbacks = this.subscriptionList.get(name);
				const filtered = existingCallbacks.filter(e => e !== callback)
				this.subscriptionList.set(name, filtered);
			}
		}

	}

	this.subscribeOnce = function (name, callback) {
		if (!this.subscribeOnceList.has(name)) {
			this.subscribeOnceList.set(name, [callback]);
		} else {
			const existingCallbacks = this.subscribeOnceList.get(name);
			this.subscribeOnceList.set(name, [...existingCallbacks, callback]);
		}
	}

	this.subscribeOnceAsync = function (name) {
		return new Promise((res, rej) => {
			if (!this.subscribeOnceAsyncList.has(name)) {
				this.subscribeOnceAsyncList.set(name, [res]);
			} else {
				const existingCallbacks = this.subscribeOnceAsyncList.get(name);
				this.subscribeOnceAsyncList.set(name, [...existingCallbacks, res]);
			}
		})
	}

	this.publish = function (name, data) {
		const callbacks = this.subscriptionList.get(name) || [];
		callbacks.forEach(e => {
			e(data);
		})

		const subscribeOnceCallbacks = this.subscribeOnceList.get(name) || [];
		subscribeOnceCallbacks.forEach(e => {
			e(data);
		})
		this.subscribeOnceList.set(name, []);

		const subscribeOnceAsyncCallbacks = this.subscribeOnceAsyncList.get(name) || [];
		subscribeOnceAsyncCallbacks.forEach(e => {
			e(data);
		})
		this.subscribeOnceAsyncList.set(name, []);
	}

	this.publishAll = function (data) {
		const entries = this.subscriptionList.entries()
		console.log(entries, "entries")
		for (let [key, value] of entries) {
			value.forEach(e => {
				e(data)
			})
		}
	}

}

const events = new Events();

const newUserSubscription = events.subscribe("Phani", function (payload) {
	console.log(`sending data to: ${payload}`);
})

events.publish("Phani", "Kumar")
events.publish("Phani", "Prudhivi")



// const newUserNewsSubscription = events.subscribe("new-user", function (
//   payload
// ) {
//   console.log(`Sending Q1 News to: ${payload}`);
// });

// // events.publish("new-user", "Jhon");

// const newUserNewsSubscription2 = events.subscribe("new-user", function (
//   payload
// ) {
//   console.log(`Sending Q2 News to: ${payload}`);
// });

// // events.publish("new-user", "Doe");

// // newUserNewsSubscription.remove();

// // events.publish("new-user", "Foo");

// events.publishAll("FooBar");

// events.subscribeOnce("new-user", function (payload) {
//   console.log(`I am invoked once ${payload}`);
// });

// events.publish("new-user", "Foo Once");
// events.publish("new-user", "Foo Twice");

// events.subscribeOnceAsync("new-user").then(function (payload) {
//   console.log(`I am invoked once ${payload}`);
// });

// events.publish("new-user", "Foo Once Async");
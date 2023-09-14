function counter() {
	this.count = 0;

	this.increment = () => {
		this.count++;
	}

	this.decrement = () => {
		this.count--;
	}
}

const singleton = (function () {
	let instance;

	return {
		getInstance() {
			if (!instance) {
				instance = new counter()
			}

			return instance
		}
	}
})()

const counter1 = singleton.getInstance();
const counter2 = singleton.getInstance();

console.log(counter1);
console.log(counter2);
console.log(counter1 === counter2);


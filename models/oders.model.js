const db = require("../data/database");

class Order {
	constructor(cart, userData, status = "pending", date, orderId) {
		this.productData = cart;
		this.userData = userData;
		this.status = status;
		this.date = new Date(date);
		if (this.date) {
			this.formattedDate = this.date.toLocaleDateString("en-IN", {
				weekday: "short",
				day: "numeric",
				month: "long",
				year: "numeric",
			});
		}
		this.Id = orderId;
	}

	save() {
		if (this.Id) {
			//updating
		} else {
			const orderDocument = {
				userData: this.userData,
				productData: this.productData,
				date: new Date(),
				status: this.status,
			};

			return db.getDb().collection("orders").insertOne(orderDocument);
		}
	}
}

module.exports = Order;

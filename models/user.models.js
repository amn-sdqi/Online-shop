const bcrypt = require("bcryptjs");
const mongoDb = require("mongodb");
const db = require("../data/database");

class User {
	constructor(email, password, f_name, street, postal, city) {
		this.email = email;
		this.password = password;
		this.name = f_name;
		this.address = {
			street: street,
			postalCode: postal,
			city: city,
		};
	}

	static findById(userId) {
		const uid = new mongoDb.ObjectId(userId);

		return db
			.getDb()
			.collection("users")
			.findOne({ _id: uid }, { password: 0 });
	}

	getUserWithSameEmail() {
		return db.getDb().collection("users").findOne({ email: this.email });
	}

	async existingUser() {
		const existingUser = await this.getUserWithSameEmail();
		if (existingUser) {
			return true;
		}
		return false;
	}

	async signup() {
		const hashedPassword = await bcrypt.hash(this.password, 12);

		await db.getDb().collection("users").insertOne({
			email: this.email,
			password: hashedPassword,
			name: this.name,
			address: this.address,
		});
	}

	hasMatchingPassword(hashedPassword) {
		return bcrypt.compare(this.password, hashedPassword);
	}
}

module.exports = User;

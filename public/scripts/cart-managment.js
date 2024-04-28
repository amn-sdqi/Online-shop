const addToCartBtn = document.querySelector("#product-details button");

const cartBadge = document.querySelector(".nav-items .badge");

async function addToCart() {
	const productId = addToCartBtn.dataset.productId;
	const csrfToken = addToCartBtn.dataset.csrf;

	let response;
	try {
		response = await fetch("/cart/items", {
			method: "post",
			body: JSON.stringify({
				productId: productId,
				_csrf: csrfToken,
			}),

			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		alert("Somthing went wrong");
		return;
	}

	if (!response.ok) {
		alert("Somthing went wrong");
		return;
	}

	const responseData = await response.json();

	const newTotalQuantity = responseData.newTotalItems;

	cartBadge.textContent = newTotalQuantity;
}

addToCartBtn.addEventListener("click", addToCart);

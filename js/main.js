import { Inventory, createInventory } from "./modules.js/inventory.js";
import { createProduct } from "./modules.js/product.js";

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  const price = Number(formData.get("price"));
  const quantity = Number(formData.get("quantity"));

  const product = createProduct(name, price, quantity);

  inventory.addProduct(product);

  inventory.displayInventory();

  event.target.reset();
}
const inventoryList = document.querySelector("#inventory-list");
const inventory = createInventory(inventoryList);

const productForm = document.querySelector("#product-form");

productForm.onsubmit = handleSubmit;

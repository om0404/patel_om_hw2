export class Inventory {
  constructor(inventoryList) {
    this.products = [];
    this.inventoryList = inventoryList;
  }

  addProduct(product) {
    this.products.push(product);
  }

  updateQuantity(name, newQuantity) {
    const product = this.products.find((product) => product.name === name);
    if (product) {
      product.quantity = newQuantity;
    } else {
      console.log(`Product "${name}" not found.`);
    }
  }

  removeProduct(name) {
    this.products = this.products.filter((product) => product.name !== name);
  }

  displayInventory() {
    this.inventoryList.innerHTML = "";

    this.products.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${product.name} - Price: $${product.price} - Quantity: ${product.quantity}`;
      this.inventoryList.appendChild(listItem);
    });
  }
}

export function createInventory(inventoryList) {
  return new Inventory(inventoryList);
}

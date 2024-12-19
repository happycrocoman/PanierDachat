document.addEventListener("DOMContentLoaded", () => {
    // Update the total price
    const updateTotalPrice = () => {
      let total = 0;
      document.querySelectorAll(".card-body").forEach((card) => {
        const unitPrice = parseFloat(
          card.querySelector(".unit-price").textContent.replace("$", "")
        );
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        total += unitPrice * quantity;
      });
      document.querySelector(".total").textContent = `${total} $`;
    };
  
  
    // Increase quantity
    document.querySelectorAll(".fa-plus-circle").forEach((button) => {
      button.addEventListener("click", (event) => {
        let quantity = 0;
        const quantityElement = event.target.parentElement.querySelector(".quantity");
          quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        updateTotalPrice();
      });
    });
  
    // Decrease quantity
    document.querySelectorAll(".fa-minus-circle").forEach((button) => {
      button.addEventListener("click", (event) => {
        const quantityElement =
          event.target.parentElement.querySelector(".quantity");
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantityElement.textContent = quantity - 1;
          updateTotalPrice();
        }
      });
    });
  
    // Delete item
    document.querySelectorAll(".fa-trash-alt").forEach((button) => {
      button.addEventListener("click", (event) => {
        const card = event.target.closest(".card-body");
        card.remove();
        updateTotalPrice();
      });
    });
  
    // Toggle favorite
    document.querySelectorAll(".fa-heart").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.target.classList.toggle("favorite");
        if (event.target.classList.contains("favorite")) {
          event.target.style.color = "red";
        } else {
          event.target.style.color = "black";
        }
      });
    });
  
    // Initialize total price on page load
    updateTotalPrice();
  });
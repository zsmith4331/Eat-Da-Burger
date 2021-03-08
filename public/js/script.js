// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {

    if (event) {
      console.info('DOM loaded');
    }
  
    // Devour Button //
    const devourButton = document.querySelectorAll('.devour');
  
    // On-click event listener for devour button //
    if (devourButton) {
      devourButton.forEach((button) => {

        button.addEventListener("click", (event) => {
          
          const id = event.target.getAttribute("data-id");
            
          const burgerDevoured = {
            devoured: true
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },  
            body: JSON.stringify(burgerDevoured),
          }).then((response) => {
        
            if (response.ok) {
              console.log(`changed to: ${id}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }

          });
        });
      });
    };
  
    // New Burger Button //
    const newBurgerButton = document.getElementById('create-form');

   // On-click event listener for adding new burger button //
    if (newBurgerButton) {
      newBurgerButton.addEventListener('submit', (event) => {
        event.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newBurger = {
          burger_name: document.getElementById('newBurger').value.trim(),
        };
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBurger),
        }).then(() => {

          // Empty the form
          document.getElementById('newBurger').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Added a new burger!');
          location.reload('/');
        });
      });
    };
 });
  
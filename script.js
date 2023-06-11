
    // Get the containers
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');

    // Store the original items of container1
    const originalItems = Array.from(container1.children);

    // Add event listeners to enable dragging
    container1.addEventListener('dragstart', dragStart);

    // Handle drag start event
    function dragStart(event) {
      event.dataTransfer.setData('text/plain', event.target.id);
    }

    // Handle drag over event
    function dragOver(event) {
      event.preventDefault();
    }

    // Handle drop event
    function drop(event) {
      event.preventDefault();
      const itemId = event.dataTransfer.getData('text/plain');
      const item = document.getElementById(itemId);
      if (container2.contains(item)) return; // Prevent dropping back into the second container
      const clonedItem = item.cloneNode(true);
      container2.appendChild(clonedItem);
    }

    // Reset the containers to their original state
    function reset() {
      container2.innerHTML = '';
      originalItems.forEach(item => container1.appendChild(item));
    }
 
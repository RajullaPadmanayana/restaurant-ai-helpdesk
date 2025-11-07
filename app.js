// Restaurant Data
const restaurantData = {
  name: "The Golden Table",
  tableNumber: 1,
  menu: [
    {
      category: "Starters",
      items: [
        { name: "Samosa", description: "Crispy pastry filled with spiced potatoes and peas.", price: 40, image: "samosa.jpeg", dietary: ["vegan"], allergens: [], spicy: 2 },
        { name: "Paneer Tikka", description: "Chunks of paneer marinated in spices and grilled.", price: 120, image: "paneer-tikka.jpeg", dietary: ["vegetarian"], allergens: ["dairy"], spicy: 3 },
        { name: "Papdi Chaat", description: "Crispy wafers with tangy chutneys, potato, yogurt.", price: 70, image: "papdi-chaat.jpeg", dietary: ["vegetarian"], allergens: ["dairy", "gluten"], spicy: 2 },
        { name: "Spring Rolls", description: "Veg rolls with sweet chili sauce.", price: 85, image: "spring-rolls.jpeg", dietary: ["vegan"], allergens: ["gluten"], spicy: 1 },
        { name: "Hara Bhara Kabab", description: "Green veg patties with mint chutney.", price: 90, image: "hara-bhara-kabab.jpeg", dietary: ["vegan"], allergens: [], spicy: 1 },
        { name: "Aloo Tikki", description: "Potato patties with spices and chutney.", price: 65, image: "aloo-tikki.jpeg", dietary: ["vegan"], allergens: [], spicy: 2 },
        { name: "Onion Pakoda", description: "Crispy onion fritters fried golden.", price: 60, image: "onion-pakoda.jpeg", dietary: ["vegan", "gluten-free"], allergens: [], spicy: 2 },
        { name: "Dahi Puri", description: "Semolina balls with yogurt and chutneys.", price: 75, image: "dahi-puri.jpeg", dietary: ["vegetarian"], allergens: ["dairy", "gluten"], spicy: 2 },
        { name: "Seekh Kebab", description: "Minced lamb grilled on skewers.", price: 140, image: "seekh-kebab.jpeg", dietary: [], allergens: [], spicy: 3 },
        { name: "Chicken 65", description: "Spicy South Indian fried chicken.", price: 135, image: "chicken65.jpeg", dietary: [], allergens: [], spicy: 4 },
        { name: "Corn Cheese Balls", description: "Cheesy corn balls, crispy outside.", price: 120, image: "corn-cheese-balls.jpeg", dietary: ["vegetarian"], allergens: ["dairy"], spicy: 1 },
        { name: "Bhalla Papdi", description: "Soft lentil balls with crispy papdi, chutney, and yogurt.", price: 80, image: "bhalla-papdi.jpeg", dietary: ["vegetarian"], allergens: ["dairy", "gluten"], spicy: 1 }
      ]
    },
    {
      category: "Main Course",
      items: [
        { name: "Butter Chicken", description: "Tender chicken in creamy tomato gravy.", price: 280, image: "butter-chicken.jpeg", dietary: [], allergens: ["dairy"], spicy: 2 },
        { name: "Dal Makhani", description: "Slow-cooked black lentils in buttery sauce.", price: 180, image: "dal-makhani.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy"], spicy: 1 },
        { name: "Palak Paneer", description: "Paneer cubes in creamy spinach curry.", price: 200, image: "palak-paneer.jpeg", dietary: ["vegetarian"], allergens: ["dairy"], spicy: 1 },
        { name: "Veg Biryani", description: "Aromatic basmati rice with vegetables and spices.", price: 170, image: "veg-biryani.jpeg", dietary: ["vegan", "gluten-free"], allergens: [], spicy: 2 },
        { name: "Chole Bhature", description: "Spicy chickpeas with fluffy fried bread.", price: 140, image: "chole-bhature.jpeg", dietary: ["vegetarian"], allergens: ["gluten"], spicy: 2 },
        { name: "Paneer Butter Masala", description: "Paneer cubes in smooth, buttery tomato gravy.", price: 210, image: "paneer-butter-masala.jpeg", dietary: ["vegetarian"], allergens: ["dairy"], spicy: 2 },
        { name: "Chicken Biryani", description: "Fragrant rice with spiced chicken.", price: 210, image: "chicken-biryani.jpeg", dietary: [], allergens: [], spicy: 3 },
        { name: "Fish Curry", description: "South Indian-style tangy fish curry.", price: 240, image: "fish-curry.jpeg", dietary: ["gluten-free"], allergens: ["fish"], spicy: 3 },
        { name: "Rajma Masala", description: "Curried kidney beans with spices.", price: 160, image: "rajma.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: [], spicy: 2 },
        { name: "Hyderabadi Dum Biryani", description: "Signature biryani with rich masalas.", price: 220, image: "hyderabadi-biryani.jpeg", dietary: [], allergens: [], spicy: 3 },
        { name: "Matar Paneer", description: "Paneer cubes cooked with peas.", price: 195, image: "matar-paneer.jpeg", dietary: ["vegetarian"], allergens: ["dairy"], spicy: 2 },
        { name: "Baingan Bharta", description: "Smoky mashed eggplant curry.", price: 130, image: "baingan-bharta.jpeg", dietary: ["vegan", "gluten-free"], allergens: [], spicy: 1 }
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Gulab Jamun", description: "Soft milk balls soaked in rose-flavored syrup.", price: 90, image: "gulab-jamun.jpeg", dietary: ["vegetarian"], allergens: ["dairy", "gluten"], spicy: 0 },
        { name: "Rasmalai", description: "Spongy paneer discs in sweet saffron milk.", price: 110, image: "rasmalai.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy"], spicy: 0 },
        { name: "Kheer", description: "Rice pudding cooked with milk and cardamom.", price: 70, image: "kheer.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy"], spicy: 0 },
        { name: "Jalebi", description: "Spiral-shaped syrupy dessert, hot and crunchy.", price: 60, image: "jalebi.jpeg", dietary: ["vegetarian"], allergens: ["gluten"], spicy: 0 },
        { name: "Ice Cream", description: "Classic vanilla, mango or pista Indian ice cream.", price: 80, image: "kulfi.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy"], spicy: 0 },
        { name: "Kulfi", description: "Dense frozen dessert with nuts and saffron.", price: 90, image: "kulfi-pista.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy", "nuts"], spicy: 0 },
        { name: "Besan Ladoo", description: "Sweet balls made with gram flour and ghee.", price: 65, image: "besan-ladoo.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy"], spicy: 0 },
        { name: "Mysore Pak", description: "Rich gram flour and ghee fudge.", price: 85, image: "mysore-pak.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy"], spicy: 0 },
        { name: "Rabri", description: "Thickened sweetened milk with nuts.", price: 100, image: "rabri.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy", "nuts"], spicy: 0 },
        { name: "Malpua", description: "Sweet pancakes in syrup.", price: 80, image: "malpua.jpeg", dietary: ["vegetarian"], allergens: ["dairy", "gluten"], spicy: 0 },
        { name: "Sandesh", description: "Bengali paneer fudge flavored with cardamom.", price: 90, image: "sandesh.jpeg", dietary: ["vegetarian"], allergens: ["dairy"], spicy: 0 }
      ]
    },
    {
      category: "Beverages",
      items: [
        { name: "Masala Chai", description: "Traditional spiced tea with milk.", price: 40, image: "masala-chai.jpeg", dietary: ["vegetarian"], allergens: ["dairy"], spicy: 0 },
        { name: "Sweet Lassi", description: "Chilled yogurt drink, sweet and refreshing.", price: 60, image: "lassi.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy"], spicy: 0 },
        { name: "Filter Coffee", description: "South Indian-style milky strong coffee.", price: 50, image: "filter-coffee.jpeg", dietary: ["vegetarian"], allergens: ["dairy"], spicy: 0 },
        { name: "Nimbu Pani", description: "Fresh lime juice with sugar and salt.", price: 35, image: "nimbu-pani.jpeg", dietary: ["vegan", "gluten-free"], allergens: [], spicy: 0 },
        { name: "Badam Milk", description: "Sweet almond-flavored chilled milk.", price: 55, image: "badam-milk.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy", "nuts"], spicy: 0 },
        { name: "Jaljeera", description: "Tangy spiced lemonade.", price: 40, image: "jaljeera.jpeg", dietary: ["vegan", "gluten-free"], allergens: [], spicy: 1 },
        { name: "Thandai", description: "Spiced cold milk drink popular at Holi.", price: 65, image: "thandai.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy", "nuts"], spicy: 1 },
        { name: "Rooh Afza", description: "Refreshing rose-flavored syrup drink.", price: 45, image: "rooh-afza.jpeg", dietary: ["vegan", "gluten-free"], allergens: [], spicy: 0 },
        { name: "Coconut Water", description: "Natural electrolyte-rich drink.", price: 50, image: "coconut-water.jpeg", dietary: ["vegan", "gluten-free"], allergens: [], spicy: 0 },
        { name: "Mango Shake", description: "Cold milk shake with seasonal mango.", price: 70, image: "mango-shake.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy"], spicy: 0 },
        { name: "Buttermilk", description: "Spiced savory yogurt drink.", price: 40, image: "buttermilk.jpeg", dietary: ["vegetarian", "gluten-free"], allergens: ["dairy"], spicy: 0 }
      ]
    }    
  ]
};

// AI Responses
const aiResponses = {
  vegetarian: "We have several delicious vegetarian options including Caesar Salad, Margherita Pizza, Veggie Burger, and our Vegetable Stir Fry. Would you like to see the full vegetarian menu?",
  vegan: "For vegan guests, I recommend our Bruschetta, Spring Rolls, Vegetable Stir Fry (it's also gluten-free!), Veggie Burger, and Fresh Fruit Bowl. All are 100% plant-based!",
  gluten_free: "Our gluten-free options include Vegetable Stir Fry, Fresh Fruit Bowl, and most of our beverages. Please note that our kitchen does handle gluten, so cross-contamination is possible.",
  specials: "Today's specials are: Grilled Salmon with seasonal vegetables ($24.99) and our Chef's Special Stir Fry ($16.99). Both are highly recommended!",
  allergies: "I can help you with allergen information! Please tell me which allergen you need to avoid (nuts, dairy, eggs, fish, gluten, etc.) and I'll show you safe options.",
  wait_time: "Current average wait time for food is approximately 20-25 minutes. Your order will be prepared fresh!",
  wifi: "Yes! Our WiFi network is 'GoldenTable_Guest' and the password is 'welcome2024'. Enjoy!",
  parking: "We have complimentary parking available in the lot behind the restaurant. Valet service is also available on weekends.",
  kids_menu: "Yes, we have a kids menu with smaller portions. Please ask your waiter or I can have someone bring it to your table!",
  default: "I'm here to help! I can answer questions about our menu, dietary options, allergens, or restaurant services. What would you like to know?"
};

// State Management
let currentView = 'welcomeView';
let cart = [];
let orderPlaced = false;
let orderStatus = 'received';
let currentFilter = 'all';
let currentCategory = 'all';
let ratings = {
  foodQuality: 0,
  service: 0,
  ambiance: 0,
  overall: 0
};

// Initialize App
function init() {
  updateTime();
  setInterval(updateTime, 1000);
  setupEventListeners();
  renderMenu();

  // On initial load, show correct view if hash is present
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    switchView(hash, false);
  } else {
    switchView('welcomeView', false);
  }
}


// Update Time
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('currentTime').textContent = timeString;
}

// Setup Event Listeners
function setupEventListeners() {
  // Navigation
  document.getElementById('homeBtn').addEventListener('click', () => switchView('welcomeView'));
  
  // Action Cards
  document.querySelectorAll('.action-card').forEach(card => {
    card.addEventListener('click', () => {
      const view = card.getAttribute('data-view');
      switchView(view);
    });
  });

  // Back Buttons
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-back');
      switchView(view);
    });
  });

  // Chat
  document.getElementById('chatSendBtn').addEventListener('click', sendMessage);
  document.getElementById('chatInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const question = chip.getAttribute('data-question');
      document.getElementById('chatInput').value = question;
      sendMessage();
    });
  });

  // Menu Filters
  document.getElementById('menuSearch').addEventListener('input', filterMenu);
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderMenu();
    });
  });

  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category');
      renderMenu();
    });
  });

  // Waiter Call
  document.getElementById('callWaiterBtn').addEventListener('click', callWaiter);

  // Feedback
  document.getElementById('submitFeedbackBtn').addEventListener('click', submitFeedback);

  // Star Ratings
  document.querySelectorAll('.star-rating').forEach(ratingContainer => {
    const stars = ratingContainer.querySelectorAll('.star');
    const ratingType = ratingContainer.getAttribute('data-rating');
    
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        ratings[ratingType] = value;
        updateStars(ratingContainer, value);
      });
    });
  });

  // Modal Close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });

  // Dynamic button clicks
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-order-btn')) {
      const itemName = e.target.getAttribute('data-item');
      addToCart(itemName);
    }
    
    if (e.target.getAttribute('data-view')) {
      const view = e.target.getAttribute('data-view');
      switchView(view);
    }
  });
}

// View Management
function switchView(viewId, push = true) {
  document.querySelectorAll('.view').forEach(view => {
    view.style.display = 'none';
  });
  document.getElementById(viewId).style.display = 'block';
  currentView = viewId;

  // Update content based on view
  if (viewId === 'orderView') {
    renderOrderView();
  } else if (viewId === 'billView') {
    renderBillView();
  }

  // Push state to browser history if needed
  if (push) {
    window.history.pushState({viewId: viewId}, "", "#" + viewId);
  }
}


// Chat Functions
function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  
  if (!message) return;

  addChatMessage(message, 'user');
  input.value = '';

  setTimeout(() => {
    const response = getAIResponse(message);
    addChatMessage(response, 'bot');
  }, 500);
}

function addChatMessage(message, type) {
  const messagesContainer = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}-message`;
  
  messageDiv.innerHTML = `
    <div class="message-content">${message}</div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getAIResponse(message) {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('vegetarian')) return aiResponses.vegetarian;
  if (lowerMessage.includes('vegan')) return aiResponses.vegan;
  if (lowerMessage.includes('gluten')) return aiResponses.gluten_free;
  if (lowerMessage.includes('special')) return aiResponses.specials;
  if (lowerMessage.includes('allerg') || lowerMessage.includes('nut')) return aiResponses.allergies;
  if (lowerMessage.includes('wait') || lowerMessage.includes('time')) return aiResponses.wait_time;
  if (lowerMessage.includes('wifi') || lowerMessage.includes('internet')) return aiResponses.wifi;
  if (lowerMessage.includes('park')) return aiResponses.parking;
  if (lowerMessage.includes('kid') || lowerMessage.includes('child')) return aiResponses.kids_menu;

  // Check for specific menu items
  for (const category of restaurantData.menu) {
    for (const item of category.items) {
      if (lowerMessage.includes(item.name.toLowerCase())) {
        return `${item.name} - ${item.description}. Price: $${item.price.toFixed(2)}. ${item.allergens.length > 0 ? 'Contains: ' + item.allergens.join(', ') + '.' : ''}`;
      }
    }
  }

  return aiResponses.default;
}

// Menu Functions
function renderMenu() {
  const menuContainer = document.getElementById('menuItems');
  menuContainer.innerHTML = '';

  const searchTerm = document.getElementById('menuSearch').value.toLowerCase();

  restaurantData.menu.forEach(category => {
    if (currentCategory !== 'all' && currentCategory !== category.category) return;

    category.items.forEach(item => {
      if (!matchesFilter(item)) return;
      if (searchTerm && !item.name.toLowerCase().includes(searchTerm) && !item.description.toLowerCase().includes(searchTerm)) return;

      const itemDiv = document.createElement('div');
      itemDiv.className = 'menu-item';
      
      const spicyIcons = '🌶️'.repeat(item.spicy);
      const dietaryTags = item.dietary.map(d => `<span class="tag">${d}</span>`).join('');
      const allergenText = item.allergens.length > 0 ? `Contains: ${item.allergens.join(', ')}` : 'No common allergens';

      itemDiv.innerHTML = `
        <div class="menu-item-header">
    <img src="${item.image}" class="menu-item-image" alt="${item.name}">
    <h3 class="menu-item-name">${item.name}</h3>
    <span class="menu-item-price">₹${item.price}</span>
   </div>
   <p class="menu-item-description">${item.description}</p>
        ${dietaryTags ? `<div class="menu-item-tags">${dietaryTags}</div>` : ''}
        <p class="menu-item-allergens">${allergenText}</p>
        <div class="menu-item-footer">
          <button class="add-to-order-btn" data-item="${item.name}">Add to Order</button>
          ${spicyIcons ? `<span class="spicy-indicator">${spicyIcons}</span>` : ''}
        </div>
      `;

      menuContainer.appendChild(itemDiv);
    });
  });
}

function matchesFilter(item) {
  if (currentFilter === 'all') return true;
  return item.dietary.includes(currentFilter);
}

function filterMenu() {
  renderMenu();
}

// Cart Functions
function addToCart(itemName) {
  let item = null;
  for (const category of restaurantData.menu) {
    const found = category.items.find(i => i.name === itemName);
    if (found) {
      item = { ...found, category: category.category };
      break;
    }
  }

  if (!item) return;

  const existingItem = cart.find(i => i.name === itemName);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1, notes: '' });
  }

  showToast(`${itemName} added to order!`);
}

function removeFromCart(itemName) {
  cart = cart.filter(item => item.name !== itemName);
  renderOrderView();
}

function updateQuantity(itemName, change) {
  const item = cart.find(i => i.name === itemName);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(itemName);
    } else {
      renderOrderView();
    }
  }
}

function updateNotes(itemName, notes) {
  const item = cart.find(i => i.name === itemName);
  if (item) {
    item.notes = notes;
  }
}

// Order View
function renderOrderView() {
  const orderContent = document.getElementById('orderContent');
  
  if (cart.length === 0 && !orderPlaced) {
    orderContent.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🍽️</span>
        <p>Your order is empty</p>
        <button class="btn btn--primary" data-view="menuView">Browse Menu</button>
      </div>
    `;
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  let orderHTML = '<div class="order-items">';
  
  cart.forEach(item => {
    orderHTML += `
      <div class="order-item">
        <div class="order-item-info">
          <div class="order-item-name">${item.name}</div>
          <div>₹${item.price.toFixed(2)} each</div>
          ${item.notes ? `<div class="order-item-notes">Note: ${item.notes}</div>` : ''}
          <input type="text" class="notes-input" placeholder="Add special instructions..." value="${item.notes}" onchange="updateNotes('${item.name}', this.value)">
        </div>
        <div class="order-item-controls">
          <div class="quantity-control">
            <button class="quantity-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
        </div>
      </div>
    `;
  });
  
  orderHTML += '</div>';

  orderHTML += `
    <div class="order-summary">
      <div class="summary-row">
        <span>Subtotal:</span>
        <span>₹${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Tax (10%):</span>
        <span>₹${tax.toFixed(2)}</span>
      </div>
      <div class="summary-row total">
        <span>Total:</span>
        <span>₹${total.toFixed(2)}</span>
      </div>
    </div>
  `;

  if (!orderPlaced) {
    orderHTML += `
      <div class="order-actions">
        <button class="btn btn--secondary" data-view="menuView">Add More Items</button>
        <button class="btn btn--primary" onclick="placeOrder()">Place Order</button>
      </div>
    `;
  } else {
    orderHTML += renderOrderStatus();
  }

  orderContent.innerHTML = orderHTML;
}

function placeOrder() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }

  orderPlaced = true;
  orderStatus = 'received';
  
  setTimeout(() => {
    orderStatus = 'preparing';
    renderOrderView();
  }, 3000);

  setTimeout(() => {
    orderStatus = 'ready';
    renderOrderView();
    showToast('Your order is ready!');
  }, 8000);

  renderOrderView();
  showToast('Order placed successfully! Estimated time: 20-25 minutes');
}

function renderOrderStatus() {
  const steps = [
    { status: 'received', label: 'Received', icon: '✓' },
    { status: 'preparing', label: 'Preparing', icon: '👨‍🍳' },
    { status: 'ready', label: 'Ready', icon: '🍽️' },
    { status: 'served', label: 'Served', icon: '✓' }
  ];

  const currentIndex = steps.findIndex(s => s.status === orderStatus);

  let statusHTML = `
    <div class="order-status">
      <h3 class="status-header">Order Status</h3>
      <div class="status-steps">
  `;

  steps.forEach((step, index) => {
    const isActive = index <= currentIndex;
    statusHTML += `
      <div class="status-step ${isActive ? 'active' : ''}">
        <div class="status-icon">${step.icon}</div>
        <div class="status-label">${step.label}</div>
      </div>
    `;
  });

  statusHTML += `
      </div>
    </div>
  `;

  return statusHTML;
}

// Bill View
function renderBillView() {
  const billContainer = document.getElementById('billContainer');
  
  if (cart.length === 0) {
    billContainer.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">💳</span>
        <p>No orders placed yet</p>
        <button class="btn btn--primary" data-view="menuView">Browse Menu</button>
      </div>
    `;
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  let tipAmount = 0;
  let tipPercentage = 0;

  let billHTML = `
    <div class="bill-summary">
      <h3>Order Summary</h3>
      <div class="bill-items">
  `;

  cart.forEach(item => {
    billHTML += `
      <div class="bill-item">
        <span>${item.name} x ${item.quantity}</span>
        <span>₹${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `;
  });

  billHTML += `
      </div>
      <div class="summary-row">
        <span>Subtotal:</span>
        <span>₹${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Tax (10%):</span>
        <span>₹${tax.toFixed(2)}</span>
      </div>
    </div>

    <div class="tip-calculator">
      <h3>Add Tip</h3>
      <div class="tip-options">
        <button class="tip-btn" onclick="calculateTip(10)">10%</button>
        <button class="tip-btn" onclick="calculateTip(15)">15%</button>
        <button class="tip-btn" onclick="calculateTip(20)">20%</button>
        <button class="tip-btn" onclick="calculateTip(0)">No Tip</button>
      </div>
      <div class="summary-row" style="margin-top: 16px;">
        <span>Tip Amount:</span>
        <span id="tipAmount">₹0.00</span>
      </div>
    </div>

    <div class="summary-row total">
      <span>Total Amount:</span>
      <span id="totalWithTip">₹${(subtotal + tax).toFixed(2)}</span>
    </div>

    <div class="payment-methods">
      <h3>Payment Method</h3>
      <div class="payment-method">
        <input type="radio" name="payment" id="card" value="card" checked>
        <label for="card">💳 Credit/Debit Card</label>
      </div>
      <div class="payment-method">
        <input type="radio" name="payment" id="wallet" value="wallet">
        <label for="wallet">📱 Digital Wallet</label>
      </div>
      <div class="payment-method">
        <input type="radio" name="payment" id="cash" value="cash">
        <label for="cash">💵 Cash</label>
      </div>
      <div class="payment-method">
        <input type="radio" name="payment" id="split" value="split">
        <label for="split">👥 Split Bill</label>
      </div>
    </div>

    <button class="btn btn--primary btn--full-width" onclick="requestBill()">Request Bill</button>
  `;

  billContainer.innerHTML = billHTML;
}

function calculateTip(percentage) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const tipAmount = subtotal * (percentage / 100);
  const total = subtotal + tax + tipAmount;

  document.getElementById('tipAmount').textContent = `₹${tipAmount.toFixed(2)}`;
  document.getElementById('totalWithTip').textContent = `₹${total.toFixed(2)}`;

  document.querySelectorAll('.tip-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

function requestBill() {
  const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
  showModal(
    'Bill Requested',
    `Your bill has been requested. Payment method: ${paymentMethod}. Your server will bring it to your table shortly. Thank you for dining with us!`
  );
}

// Waiter Call
function callWaiter() {
  const reason = document.getElementById('waiterReason').value;
  const notes = document.getElementById('waiterNotes').value;
  
  showToast(`Waiter called: ${reason}. Someone will be with you in 2-3 minutes.`);
  
  document.getElementById('waiterNotes').value = '';
}

// Feedback
function submitFeedback() {
  const recommend = document.querySelector('input[name="recommend"]:checked').value;
  const comments = document.getElementById('feedbackComments').value;

  if (ratings.overall === 0) {
    showToast('Please provide an overall rating');
    return;
  }

  showModal(
    'Thank You!',
    'Thank you for your valuable feedback! We appreciate you taking the time to share your experience with us. We hope to see you again soon!'
  );

  // Reset form
  ratings = { foodQuality: 0, service: 0, ambiance: 0, overall: 0 };
  document.querySelectorAll('.star-rating').forEach(container => {
    updateStars(container, 0);
  });
  document.getElementById('feedbackComments').value = '';
}

function updateStars(container, rating) {
  const stars = container.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

// UI Helpers
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function showModal(title, body) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = `<p>${body}</p>`;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onpopstate = function(event) {
  if (event.state && event.state.viewId) {
    switchView(event.state.viewId, false); // Don't push new history entry
  } else {
    switchView('welcomeView', false);
  }
};



// Start the app
init();

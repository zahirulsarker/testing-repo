// app.js

// Simple user data simulation
const userData = {
  username: 'user1',
  password: 'password123',
  balance: 10000
};

// Elements
const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const userNameDisplay = document.getElementById('user-name');
const balanceDisplay = document.getElementById('balance');
const transferAmountInput = document.getElementById('transfer-amount');

// Login button click event
document.getElementById('login-btn').addEventListener('click', function() {
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;
  
  // Simple authentication
  if (usernameInput === userData.username && passwordInput === userData.password) {
    loginSection.style.display = 'none'; // Hide login section
    dashboardSection.style.display = 'block'; // Show dashboard
    userNameDisplay.textContent = userData.username;
    balanceDisplay.textContent = `$${userData.balance.toFixed(2)}`;
  } else {
    alert('Invalid credentials');
  }
});

// Transfer button click event
document.getElementById('transfer-btn').addEventListener('click', function() {
  const transferAmount = parseFloat(transferAmountInput.value);
  if (transferAmount > 0 && transferAmount <= userData.balance) {
    userData.balance -= transferAmount; // Deduct balance
    balanceDisplay.textContent = `$${userData.balance.toFixed(2)}`; // Update UI
    alert(`Transferred $${transferAmount}`);
  } else {
    alert('Insufficient funds or invalid amount');
  }
});

// Logout button click event
document.getElementById('logout-btn').addEventListener('click', function() {
  dashboardSection.style.display = 'none'; // Hide dashboard
  loginSection.style.display = 'block'; // Show login section
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  transferAmountInput.value = '';
});

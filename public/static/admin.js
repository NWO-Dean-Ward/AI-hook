// Admin Dashboard JavaScript
let authToken = localStorage.getItem('adminToken');
let currentUser = null;

// Check authentication on load
window.addEventListener('DOMContentLoaded', () => {
  if (authToken) {
    showDashboard();
    loadProjects();
  }
});

// Login functionality
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('loginError');
  
  try {
    const response = await axios.post('/api/admin/auth/login', {
      username,
      password
    });
    
    if (response.data.token) {
      authToken = response.data.token;
      currentUser = response.data.user;
      localStorage.setItem('adminToken', authToken);
      
      // Set default auth header
      axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
      
      showDashboard();
      loadProjects();
    }
  } catch (error) {
    errorDiv.textContent = error.response?.data?.error || 'Login failed';
    errorDiv.classList.remove('hidden');
  }
});

// Show dashboard
function showDashboard() {
  document.getElementById('loginModal').classList.remove('active');
  document.getElementById('dashboard').classList.remove('hidden');
  
  if (currentUser) {
    document.getElementById('userDisplay').textContent = `Hallo, ${currentUser.username}`;
  }
  
  // Set auth header for all requests
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

// Logout
function logout() {
  localStorage.removeItem('adminToken');
  authToken = null;
  currentUser = null;
  location.reload();
}

// Tab switching
function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('border-black', 'text-gray-900');
    btn.classList.add('border-transparent', 'text-gray-500');
  });
  
  event.target.classList.remove('border-transparent', 'text-gray-500');
  event.target.classList.add('border-black', 'text-gray-900');
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  document.getElementById(`${tabName}-tab`).classList.add('active');
  
  // Load content for the tab
  switch(tabName) {
    case 'projects':
      loadProjects();
      break;
    case 'blog':
      loadBlogPosts();
      break;
    case 'media':
      loadMedia();
      break;
    case 'contacts':
      loadContacts();
      break;
  }
}

// Load projects
async function loadProjects() {
  try {
    const response = await axios.get('/api/admin/projects', {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    
    const tbody = document.getElementById('projectsList');
    tbody.innerHTML = '';
    
    response.data.projects.forEach(project => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm font-medium text-gray-900">${project.title_de}</div>
          <div class="text-sm text-gray-500">${project.slug}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${getCategoryLabel(project.category)}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${project.year}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.is_published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}">
            ${project.is_published ? 'Veröffentlicht' : 'Entwurf'}
          </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button onclick="editProject(${project.id})" class="text-indigo-600 hover:text-indigo-900 mr-4">
            <i class="fas fa-edit"></i> Bearbeiten
          </button>
          <button onclick="deleteProject(${project.id})" class="text-red-600 hover:text-red-900">
            <i class="fas fa-trash"></i> Löschen
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

// Load blog posts
async function loadBlogPosts() {
  try {
    const response = await axios.get('/api/admin/blog', {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    
    const tbody = document.getElementById('blogList');
    tbody.innerHTML = '';
    
    response.data.posts.forEach(post => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm font-medium text-gray-900">${post.title_de}</div>
          <div class="text-sm text-gray-500">${post.slug}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${post.category || 'Uncategorized'}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${new Date(post.created_at).toLocaleDateString('de-DE')}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.is_published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}">
            ${post.is_published ? 'Veröffentlicht' : 'Entwurf'}
          </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button onclick="editBlogPost(${post.id})" class="text-indigo-600 hover:text-indigo-900 mr-4">
            <i class="fas fa-edit"></i> Bearbeiten
          </button>
          <button onclick="deleteBlogPost(${post.id})" class="text-red-600 hover:text-red-900">
            <i class="fas fa-trash"></i> Löschen
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error('Error loading blog posts:', error);
  }
}

// Load media
async function loadMedia() {
  try {
    const response = await axios.get('/api/admin/media', {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    
    const grid = document.getElementById('mediaGrid');
    grid.innerHTML = '';
    
    // For now, show placeholder
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 text-gray-500">
        <i class="fas fa-photo-video text-4xl mb-4"></i>
        <p>Medienbibliothek wird bald verfügbar sein</p>
      </div>
    `;
  } catch (error) {
    console.error('Error loading media:', error);
  }
}

// Load contacts
async function loadContacts() {
  try {
    const response = await axios.get('/api/admin/contacts', {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    
    const tbody = document.getElementById('contactsList');
    tbody.innerHTML = '';
    
    // For now, show placeholder
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="px-6 py-12 text-center text-gray-500">
          Kontaktanfragen werden bald verfügbar sein
        </td>
      </tr>
    `;
  } catch (error) {
    console.error('Error loading contacts:', error);
  }
}

// Helper functions
function getCategoryLabel(category) {
  const labels = {
    'kuechen': 'Küchen',
    'badmoebel': 'Badmöbel',
    'ladenbau': 'Ladenbau',
    'gastronomie': 'Gastronomie',
    'buero': 'Büro',
    'outdoor': 'Outdoor'
  };
  return labels[category] || category;
}

// Project modal functions
function openProjectModal(projectId = null) {
  alert('Projekt-Editor wird bald verfügbar sein');
}

function editProject(id) {
  openProjectModal(id);
}

async function deleteProject(id) {
  if (!confirm('Möchten Sie dieses Projekt wirklich löschen?')) return;
  
  try {
    await axios.delete(`/api/admin/projects/${id}`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    loadProjects();
  } catch (error) {
    alert('Fehler beim Löschen des Projekts');
  }
}

// Blog modal functions
function openBlogModal(postId = null) {
  alert('Blog-Editor wird bald verfügbar sein');
}

function editBlogPost(id) {
  openBlogModal(id);
}

async function deleteBlogPost(id) {
  if (!confirm('Möchten Sie diesen Beitrag wirklich löschen?')) return;
  
  try {
    await axios.delete(`/api/admin/blog/${id}`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    loadBlogPosts();
  } catch (error) {
    alert('Fehler beim Löschen des Beitrags');
  }
}

// Media upload
function uploadMedia() {
  alert('Medien-Upload wird bald verfügbar sein');
}

// Change password
document.getElementById('changePasswordForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const currentPassword = document.getElementById('currentPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  if (newPassword !== confirmPassword) {
    alert('Die Passwörter stimmen nicht überein');
    return;
  }
  
  try {
    await axios.post('/api/admin/auth/change-password', {
      currentPassword,
      newPassword
    }, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    
    alert('Passwort erfolgreich geändert');
    e.target.reset();
  } catch (error) {
    alert(error.response?.data?.error || 'Fehler beim Ändern des Passworts');
  }
});
import { Hono } from 'hono'

export const adminDashboardRoute = new Hono()

adminDashboardRoute.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Admin Dashboard - Brandstifter CMS</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
      <style>
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        .modal { display: none; }
        .modal.active { display: flex; }
      </style>
    </head>
    <body class="bg-gray-100">
      <!-- Login Modal -->
      <div id="loginModal" class="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 active">
        <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <h2 class="text-2xl font-bold mb-6">Admin Login</h2>
          <form id="loginForm">
            <div class="mb-4">
              <label class="block text-sm font-medium mb-2">Benutzername oder E-Mail</label>
              <input type="text" id="username" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black" required>
            </div>
            <div class="mb-6">
              <label class="block text-sm font-medium mb-2">Passwort</label>
              <input type="password" id="password" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black" required>
            </div>
            <button type="submit" class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Anmelden
            </button>
            <div id="loginError" class="mt-4 text-red-600 text-sm hidden"></div>
          </form>
        </div>
      </div>

      <!-- Main Dashboard -->
      <div id="dashboard" class="hidden">
        <!-- Header -->
        <nav class="bg-white shadow-sm border-b">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
              <div class="flex items-center">
                <h1 class="text-xl font-semibold">Brandstifter CMS</h1>
              </div>
              <div class="flex items-center space-x-4">
                <span id="userDisplay" class="text-gray-600"></span>
                <button onclick="logout()" class="text-gray-600 hover:text-black">
                  <i class="fas fa-sign-out-alt"></i> Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        <!-- Tabs -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8">
              <button onclick="switchTab('projects')" class="tab-btn py-2 px-1 border-b-2 font-medium text-sm border-black text-gray-900">
                <i class="fas fa-images mr-2"></i> Projekte
              </button>
              <button onclick="switchTab('blog')" class="tab-btn py-2 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                <i class="fas fa-blog mr-2"></i> Blog
              </button>
              <button onclick="switchTab('media')" class="tab-btn py-2 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                <i class="fas fa-photo-video mr-2"></i> Medien
              </button>
              <button onclick="switchTab('contacts')" class="tab-btn py-2 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                <i class="fas fa-envelope mr-2"></i> Kontaktanfragen
              </button>
              <button onclick="switchTab('settings')" class="tab-btn py-2 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                <i class="fas fa-cog mr-2"></i> Einstellungen
              </button>
            </nav>
          </div>

          <!-- Tab Contents -->
          <div class="mt-8">
            <!-- Projects Tab -->
            <div id="projects-tab" class="tab-content active">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold">Projekte verwalten</h2>
                <button onclick="openProjectModal()" class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  <i class="fas fa-plus mr-2"></i> Neues Projekt
                </button>
              </div>
              
              <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titel</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategorie</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jahr</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                    </tr>
                  </thead>
                  <tbody id="projectsList" class="bg-white divide-y divide-gray-200">
                    <!-- Projects will be loaded here -->
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Blog Tab -->
            <div id="blog-tab" class="tab-content">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold">Blog-Beiträge verwalten</h2>
                <button onclick="openBlogModal()" class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  <i class="fas fa-plus mr-2"></i> Neuer Beitrag
                </button>
              </div>
              
              <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titel</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategorie</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                    </tr>
                  </thead>
                  <tbody id="blogList" class="bg-white divide-y divide-gray-200">
                    <!-- Blog posts will be loaded here -->
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Media Tab -->
            <div id="media-tab" class="tab-content">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold">Medienbibliothek</h2>
                <button onclick="uploadMedia()" class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  <i class="fas fa-upload mr-2"></i> Medien hochladen
                </button>
              </div>
              
              <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4" id="mediaGrid">
                <!-- Media items will be loaded here -->
              </div>
            </div>

            <!-- Contacts Tab -->
            <div id="contacts-tab" class="tab-content">
              <h2 class="text-2xl font-bold mb-6">Kontaktanfragen</h2>
              
              <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-Mail</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                    </tr>
                  </thead>
                  <tbody id="contactsList" class="bg-white divide-y divide-gray-200">
                    <!-- Contacts will be loaded here -->
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Settings Tab -->
            <div id="settings-tab" class="tab-content">
              <h2 class="text-2xl font-bold mb-6">Einstellungen</h2>
              
              <div class="bg-white rounded-lg shadow p-6">
                <h3 class="text-lg font-semibold mb-4">Passwort ändern</h3>
                <form id="changePasswordForm" class="max-w-md">
                  <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">Aktuelles Passwort</label>
                    <input type="password" id="currentPassword" class="w-full px-4 py-2 border rounded-lg" required>
                  </div>
                  <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">Neues Passwort</label>
                    <input type="password" id="newPassword" class="w-full px-4 py-2 border rounded-lg" required>
                  </div>
                  <div class="mb-6">
                    <label class="block text-sm font-medium mb-2">Neues Passwort bestätigen</label>
                    <input type="password" id="confirmPassword" class="w-full px-4 py-2 border rounded-lg" required>
                  </div>
                  <button type="submit" class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                    Passwort ändern
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Admin JavaScript -->
      <script src="/static/admin.js"></script>
    </body>
    </html>
  `)
})

export default adminDashboardRoute
import type { Language } from '../lib/i18n'

interface LanguageSwitcherProps {
  currentLang: Language
  switchUrl: (lang: Language) => string
}

export function LanguageSwitcher({ currentLang, switchUrl }: LanguageSwitcherProps) {
  return (
    <>
      <div class="relative group">
        <button class="flex items-center space-x-2 text-gray-700 hover:text-gray-700 transition-colors">
          <i class="fas fa-globe"></i>
          <span class="uppercase text-sm font-medium">{currentLang}</span>
          <i class="fas fa-chevron-down text-xs"></i>
        </button>
        
        <div class="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <a 
            href={switchUrl('de')} 
            class={`flex items-center px-4 py-3 hover:bg-gray-50 transition ${currentLang === 'de' ? 'bg-brand-greige' : ''}`}
            data-lang="de"
          >
            <span class="w-6 h-4 mr-3 bg-gradient-to-b from-black via-red-600 to-yellow-400"></span>
            <span>Deutsch</span>
            {currentLang === 'de' && <i class="fas fa-check ml-auto text-gray-700"></i>}
          </a>
          
          <a 
            href={switchUrl('en')} 
            class={`flex items-center px-4 py-3 hover:bg-gray-50 transition ${currentLang === 'en' ? 'bg-brand-greige' : ''}`}
            data-lang="en"
          >
            <span class="w-6 h-4 mr-3 bg-gradient-to-b from-blue-700 via-white to-red-600"></span>
            <span>English</span>
            {currentLang === 'en' && <i class="fas fa-check ml-auto text-gray-700"></i>}
          </a>
        </div>
      </div>

      {/* Language Switcher Script */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          // Handle language switch with cookie setting
          const langLinks = document.querySelectorAll('[data-lang]');
          langLinks.forEach(link => {
            link.addEventListener('click', function(e) {
              const lang = this.dataset.lang;
              document.cookie = 'language=' + lang + '; max-age=' + (365 * 24 * 60 * 60) + '; path=/; SameSite=Lax';
            });
          });
        });
      `}} />
    </>
  )
}
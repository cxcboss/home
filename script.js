const apps = [
    {
        id: 1,
        name: "效率助手",
        version: "v2.1.0",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
        </svg>`,
        screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        description: "一款强大的效率工具，帮助你管理时间、任务和日程。支持番茄工作法、习惯养成、专注计时等功能，让你的工作和生活更加有序。",
        size: "45.2 MB",
        platforms: ["Windows", "macOS", "Linux", "Android", "iOS"],
        downloadUrl: "#",
        repoUrl: "https://github.com/example/efficiency-helper",
        features: ["番茄工作法", "任务管理", "习惯追踪", "数据同步"]
    },
    {
        id: 2,
        name: "代码笔记",
        version: "v1.8.0",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
        </svg>`,
        screenshot: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
        description: "专为开发者设计的代码笔记应用。支持多种编程语言语法高亮、代码片段管理、Markdown 写作，以及跨设备同步。",
        size: "32.8 MB",
        platforms: ["Windows", "macOS", "Linux", "Web"],
        downloadUrl: "#",
        repoUrl: "https://github.com/example/code-notes",
        features: ["语法高亮", "代码片段", "Markdown", "云同步"]
    },
    {
        id: 3,
        name: "媒体播放器",
        version: "v3.0.0",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>`,
        screenshot: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop",
        description: "一款简洁优雅的媒体播放器，支持几乎所有音频和视频格式。拥有精美的界面、强大的解码能力和流畅的播放体验。",
        size: "68.5 MB",
        platforms: ["Windows", "macOS", "Android", "iOS"],
        downloadUrl: "#",
        repoUrl: "https://github.com/example/media-player",
        features: ["多格式支持", "无损播放", "播放列表", "字幕匹配"]
    }
];

const themeToggle = document.getElementById('themeToggle');
const appsGrid = document.getElementById('appsGrid');
const appModal = document.getElementById('appModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    card.innerHTML = `
        <img class="app-screenshot" src="${app.screenshot}" alt="${app.name} 截图" onerror="this.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'">
        <div class="app-content">
            <div class="app-header">
                <div class="app-icon">
                    ${app.icon}
                </div>
                <div class="app-info">
                    <h3 class="app-name">${app.name}</h3>
                    <span class="app-version">${app.version}</span>
                </div>
            </div>
            <p class="app-description">${app.description}</p>
            <div class="app-meta">
                <span class="meta-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    ${app.size}
                </span>
                <span class="meta-tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                    ${app.platforms[0]}
                </span>
            </div>
            <div class="app-actions">
                <button class="btn btn-primary" onclick="openModal(${app.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    下载应用
                </button>
                <button class="btn btn-secondary" onclick="openModal(${app.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="16" x2="12" y2="12"/>
                        <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                    了解更多
                </button>
            </div>
        </div>
    `;
    return card;
}

function renderApps() {
    appsGrid.innerHTML = '';
    apps.forEach(app => {
        appsGrid.appendChild(createAppCard(app));
    });
}

function openModal(appId) {
    const app = apps.find(a => a.id === appId);
    if (!app) return;

    modalBody.innerHTML = `
        <img class="modal-screenshot" src="${app.screenshot}" alt="${app.name} 截图" onerror="this.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'">
        <div class="modal-header">
            <div class="modal-icon">
                ${app.icon}
            </div>
            <div>
                <h2 class="modal-title">${app.name}</h2>
                <span class="modal-version">${app.version}</span>
            </div>
        </div>
        <p class="modal-description">${app.description}</p>
        <div class="modal-meta">
            <div class="modal-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>大小: ${app.size}</span>
            </div>
            <div class="modal-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <span>平台: ${app.platforms.join(', ')}</span>
            </div>
        </div>
        <div class="modal-actions">
            <a href="${app.downloadUrl}" class="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                下载应用
            </a>
            <a href="${app.repoUrl}" class="btn btn-secondary" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                查看仓库
            </a>
        </div>
    `;
    
    appModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    appModal.classList.remove('active');
    document.body.style.overflow = '';
}

themeToggle.addEventListener('click', toggleTheme);

modalClose.addEventListener('click', closeModal);

appModal.querySelector('.modal-overlay').addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && appModal.classList.contains('active')) {
        closeModal();
    }
});

window.addEventListener('load', () => {
    initTheme();
    renderApps();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});

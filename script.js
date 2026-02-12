const apps = [
    {
        id: 1,
        name: "行为录制精灵",
        version: "v1.0.0",
        icon: `<img src="img/icon 1.png" alt="行为录制精灵图标" style="width: 100%; height: 100%; object-fit: cover;">`,
        screenshot: "img/截图 1.png",
        description: "一款功能强大的 macOS 鼠标宏录制和播放工具。支持录制鼠标移动、点击、拖拽和滚轮事件，自动保存录制内容，支持多种循环播放模式，并完美适配深色模式。",
        size: "约 2.5 MB",
        downloads: {
            "macOS": "https://github.com/cxcboss/MacroRecorder/releases/download/v1.0.0/app.zip"
        },
        repoUrl: "https://github.com/cxcboss/MacroRecorder",
        features: ["鼠标录制", "自动保存", "循环播放", "深色模式"]
    },
    {
        id: 2,
        name: "OPPO主题打包",
        version: "v1.0",
        icon: `<img src="img/icon 2.png" alt="OPPO主题打包图标" style="width: 100%; height: 100%; object-fit: cover;">`,
        screenshot: "img/截图 2.png",
        description: "OPPO 主题文件打包工具。将零散的主题文件打包成可直接安装的 OPPO 主题格式，操作简单，支持批量处理。",
        size: "约 5.2 MB",
        downloads: {
            "macOS": "https://github.com/cxcboss/OPPOthemezip/releases/download/1/OPPO.app.zip"
        },
        repoUrl: "https://github.com/cxcboss/OPPOthemezip",
        features: ["主题打包", "批量处理", "格式转换", "简单易用"]
    },
    {
        id: 3,
        name: "OPPO主题打包解包工具",
        version: "v1.0",
        icon: `<img src="img/icon 3.png" alt="OPPO主题打包解包工具图标" style="width: 100%; height: 100%; object-fit: cover;">`,
        screenshot: "img/截图 3.png",
        description: "OPPO 主题文件的打包与解包工具。支持解包.theme文件和主题文件夹，打包文件夹为.theme格式，兼容传统ZIP格式和新型theme-widget格式主题。",
        size: "约 8.5 MB",
        downloads: {
            "macOS": "https://github.com/cxcboss/OPPOthemetool/releases/download/1/OPPO.app.zip"
        },
        repoUrl: "https://github.com/cxcboss/OPPOthemetool",
        features: ["主题解包", "主题打包", "支持.theme文件", "跨平台兼容"]
    },
    {
        id: 4,
        name: "图标包名提取器",
        version: "v1.0",
        icon: `<img src="img/icon 4.png" alt="图标包名提取器图标" style="width: 100%; height: 100%; object-fit: cover;">`,
        screenshot: "img/截图 4.png",
        description: "一个简洁的 Android 应用，用于获取手机中所有有桌面图标的应用包名和应用名称。自动分类为第三方应用和系统应用，支持保存为文本文件。",
        size: "约 2.8 MB",
        downloads: {
            "Android": "https://release-assets.githubusercontent.com/github-production-release-asset/1156337775/67161496-c09b-4eee-8b3f-07c0438579d6?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-02-12T15%3A25%3A10Z&rscd=attachment%3B+filename%3Ddefault.apk&rsct=application%2Fvnd.android.package-archive&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-02-12T14%3A24%3A19Z&ske=2026-02-12T15%3A25%3A10Z&sks=b&skv=2018-11-09&sig=73UeTKvkFm5DYuvFcuXVCXwxZdUJr6hQDBdN629i%2FtU%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3MDkwODEyNiwibmJmIjoxNzcwOTA3ODI2LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.4mXRu3jR_IfzHogHz8bschoj6JgKFmWxC13ceqqt4bw&response-content-disposition=attachment%3B%20filename%3Ddefault.apk&response-content-type=application%2Fvnd.android.package-archive"
        },
        repoUrl: "https://github.com/cxcboss/iconsname",
        features: ["获取应用包名", "自动分类", "保存文本文件", "暗色主题"]
    }
];

const themeToggle = document.getElementById('themeToggle');
const appsGrid = document.getElementById('appsGrid');
const appModal = document.getElementById('appModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function getUserPlatform() {
    const platform = navigator.platform.toLowerCase();
    if (platform.includes('mac')) return 'macOS';
    if (platform.includes('win')) return 'Windows';
    if (platform.includes('linux')) return 'Linux';
    if (platform.includes('android')) return 'Android';
    if (/(iPad|iPhone|iPod)/.test(navigator.userAgent)) return 'iOS';
    return 'Web';
}

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
    card.style.cursor = 'pointer';
    card.onclick = () => openModal(app.id);
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
                    ${Object.keys(app.downloads)[0]}
                </span>
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

    const userPlatform = getUserPlatform();
    const platforms = Object.keys(app.downloads);
    const recommendedPlatform = platforms.includes(userPlatform) ? userPlatform : platforms[0];

    let platformOptions = platforms.map(platform => {
        const isRecommended = platform === recommendedPlatform;
        return `<button class="platform-btn ${isRecommended ? 'active' : ''}" data-platform="${platform}">${platform}</button>`;
    }).join('');

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
        <div class="app-features">
            <h4 style="font-size: 0.875rem; font-weight: 600; margin-bottom: 12px; color: var(--text-secondary);">功能特性</h4>
            <div class="features-list">
                ${app.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
        </div>
        <div class="modal-meta">
            <div class="modal-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>大小: ${app.size}</span>
            </div>
        </div>
        <div class="platform-selector">
            <label>选择版本:</label>
            <div class="platform-options">
                ${platformOptions}
            </div>
        </div>
        <div class="modal-actions">
            <a href="${app.downloads[recommendedPlatform]}" class="btn btn-primary" id="downloadBtn" onclick="trackDownload('${app.name}', '${recommendedPlatform}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                下载 for ${recommendedPlatform}
            </a>
            <a href="${app.repoUrl}" class="btn btn-secondary" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                查看仓库
            </a>
        </div>
    `;

    document.querySelectorAll('.platform-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const platform = e.target.dataset.platform;
            document.querySelectorAll('.platform-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const downloadBtn = document.getElementById('downloadBtn');
            downloadBtn.href = app.downloads[platform];
            downloadBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                下载 for ${platform}
            `;
        });
    });

    appModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function trackDownload(appName, platform) {
    console.log(`Download: ${appName} for ${platform}`);
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

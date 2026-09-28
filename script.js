// 通过 GitHub Releases 分发。更新版本时同步更新 downloads 与 version/date 字段。
const apps = [
    {
        id: 1,
        name: "搬运蚁 AntBot",
        version: "v1.3.9",
        date: "2026-09-25",
        size: "约 300 MB",
        tag: "视频自动化",
        icon: `<span class="icon-emoji">🐜</span>`,
        banner: { gradient: "linear-gradient(135deg, #F686ED 0%, #764ba2 100%)", icon: `<span class="banner-emoji">🐜</span>` },
        description: "视频自动化工作台：下载 → AI 字幕/剪辑/配音 → 多平台发布一条龙。支持手机远程操控、任务批量队列与一键自更新，整合 8+ 平台同步发布。",
        downloads: {
            "macOS": "https://github.com/cxcboss/AntBot-releases/releases/download/v1.3.9/antbot-macos-arm64.zip",
            "Windows": "https://github.com/cxcboss/AntBot-releases/releases/download/v1.3.9/AntBot-1.3.9-win-x64.exe"
        },
        repoUrl: "https://github.com/cxcboss/AntBot-releases",
        features: ["视频下载", "AI 字幕", "AI 剪辑配音", "多平台发布", "手机远程操控", "批量队列"]
    },
    {
        id: 2,
        name: "视频发布助手",
        version: "v2.10.0",
        date: "2026-08-12",
        size: "约 66 KB",
        tag: "浏览器扩展",
        icon: `<img src="img/icon-vpe.png" alt="视频发布助手图标">`,
        banner: { gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", icon: `<img src="img/icon-vpe.png" alt="">` },
        description: "AI 驱动的 Chrome 扩展，自动发布视频到抖音和视频号。支持 AI 生成话题标签与文案、定时发布、批量队列发布，发布中断可断点恢复。",
        downloads: {
            "Chrome": "https://github.com/cxcboss/video-publish-extension/releases/download/v2.10.0/chrome-extension-v2.10.0.zip"
        },
        repoUrl: "https://github.com/cxcboss/video-publish-extension",
        features: ["双平台发布", "AI 生成文案", "定时发布", "批量发布", "断点恢复", "失败重发"]
    },
    {
        id: 3,
        name: "行为录制精灵",
        version: "v1.0.0",
        date: "2026-01-30",
        size: "约 0.5 MB",
        tag: "macOS 工具",
        icon: `<img src="img/icon 1.png" alt="行为录制精灵图标">`,
        banner: { img: "img/截图 1.png" },
        description: "macOS 鼠标宏录制和播放工具，精确记录鼠标移动、点击、拖拽和滚轮事件，自动保存录制内容，支持多种循环播放模式，完美适配深色模式。",
        downloads: {
            "macOS": "https://github.com/cxcboss/MacroRecorder/releases/download/v1.0.0/app.zip"
        },
        repoUrl: "https://github.com/cxcboss/MacroRecorder",
        features: ["鼠标录制", "自动保存", "循环播放", "深色模式"]
    },
    {
        id: 4,
        name: "ClipboardTool",
        version: "v1.0",
        date: "2026-03-22",
        size: "约 176 KB",
        tag: "macOS 工具",
        icon: `<img src="img/icon-clipboard.png" alt="ClipboardTool 图标">`,
        banner: { gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", icon: `<img src="img/icon-clipboard.png" alt="">` },
        description: "macOS 剪贴板管理工具，自动记录复制历史，支持全局热键快速唤出窗口一键粘贴。数据本地存储保护隐私，支持开机自启动。",
        downloads: {
            "macOS": "https://github.com/cxcboss/ClipboardTool/releases/download/1/app.zip"
        },
        repoUrl: "https://github.com/cxcboss/ClipboardTool",
        features: ["复制历史", "全局热键", "一键粘贴", "本地存储", "开机自启"]
    },
    {
        id: 5,
        name: "图缩 Zipic",
        version: "v1.0.1",
        date: "2026-05-07",
        size: "约 1.1 MB",
        tag: "macOS 工具",
        icon: `<img src="img/icon-zipic.png" alt="图缩 Zipic 图标">`,
        banner: { gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", icon: `<img src="img/icon-zipic.png" alt="">` },
        description: "原生 macOS 图片压缩工具（图缩），基于 SwiftUI + AppKit + ImageIO。支持批量压缩多种图片格式，可按压缩强度或目标文件大小压缩，原生支持 Apple Silicon。",
        downloads: {
            "macOS": "https://github.com/cxcboss/Zipic/releases/download/v1.0.1/Zipic-arm64.zip"
        },
        repoUrl: "https://github.com/cxcboss/Zipic",
        features: ["批量压缩", "按强度压缩", "目标大小压缩", "多格式支持", "Apple Silicon"]
    },
    {
        id: 6,
        name: "OPPO 主题工具",
        version: "v1.0",
        date: "2026-02-01",
        size: "约 105 KB",
        tag: "macOS 工具",
        icon: `<img src="img/icon 3.png" alt="OPPO 主题工具图标">`,
        banner: { img: "img/截图 3.png" },
        description: "OPPO 主题文件的解包与打包工具，支持解包 .theme 文件和主题文件夹，打包文件夹为 .theme 格式，兼容传统 ZIP 格式和新型 theme-widget 格式主题。",
        downloads: {
            "macOS": "https://github.com/cxcboss/OPPOthemetool/releases/download/1/OPPO.app.zip"
        },
        repoUrl: "https://github.com/cxcboss/OPPOthemetool",
        features: ["主题解包", "主题打包", "支持 .theme 文件", "拖放操作"]
    },
    {
        id: 7,
        name: "OPPO 主题打包",
        version: "v1.0",
        date: "2026-01-30",
        size: "约 246 KB",
        tag: "macOS 工具",
        icon: `<img src="img/icon 2.png" alt="OPPO 主题打包图标">`,
        banner: { img: "img/截图 2.png" },
        description: "OPPO 主题文件打包工具。将零散的主题文件夹快速打包成可直接安装的 OPPO 主题格式，拖放操作，简单易用。",
        downloads: {
            "macOS": "https://github.com/cxcboss/OPPOthemezip/releases/download/1/OPPO.app.zip"
        },
        repoUrl: "https://github.com/cxcboss/OPPOthemezip",
        features: ["主题打包", "拖放操作", "格式转换", "简单易用"]
    },
    {
        id: 8,
        name: "图标包名提取器",
        version: "v1.0",
        date: "2026-02-12",
        size: "约 5.9 MB",
        tag: "Android 工具",
        icon: `<img src="img/icon 4.png" alt="图标包名提取器图标">`,
        banner: { img: "img/截图 4.png" },
        description: "Android 应用图标包名提取器，获取手机中所有有桌面图标的应用包名和应用名称，自动分类为第三方应用和系统应用，支持导出为文本文件。",
        downloads: {
            "Android": "https://github.com/cxcboss/iconsname/releases/download/1.0/default.apk"
        },
        repoUrl: "https://github.com/cxcboss/iconsname",
        features: ["获取应用包名", "自动分类", "导出文本文件", "暗色主题"]
    },
    {
        id: 9,
        name: "晕车检测器",
        version: "在线版",
        date: "",
        size: "网页应用，无需下载",
        tag: "Web 工具",
        icon: `<span class="icon-emoji">🚗</span>`,
        banner: { img: "img/banner-msd.webp" },
        description: "驾驶舒适度实时检测工具，基于手机传感器检测晕车程度并给出预警。打开网页即用，无需安装任何应用。",
        downloads: {
            "Web": "https://onebugmanai.online/"
        },
        repoUrl: "https://github.com/cxcboss/motion-sickness-detector",
        features: ["实时检测", "手机传感器", "晕车预警", "免安装"]
    }
];

const themeToggle = document.getElementById('themeToggle');
const appsGrid = document.getElementById('appsGrid');
const appModal = document.getElementById('appModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const searchInput = document.getElementById('searchInput');
const filterChips = document.getElementById('filterChips');
const statApps = document.getElementById('statApps');
const statPlatforms = document.getElementById('statPlatforms');

let activePlatform = '全部';

const PLATFORM_LABELS = { "Web": "在线使用", "Chrome": "下载扩展" };

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

function renderBanner(app, className) {
    if (app.banner.img) {
        return `<img class="${className}" src="${app.banner.img}" alt="${app.name} 截图" onerror="this.outerHTML='<div class=&quot;app-banner banner-fallback&quot;>🖥️</div>'">`;
    }
    return `<div class="app-banner ${className}" style="background:${app.banner.gradient}"><div class="banner-icon">${app.banner.icon}</div></div>`;
}

function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    card.style.cursor = 'pointer';
    card.onclick = () => openModal(app.id);
    card.innerHTML = `
        ${renderBanner(app, 'app-screenshot')}
        <div class="app-content">
            <div class="app-header">
                <div class="app-icon">
                    ${app.icon}
                </div>
                <div class="app-info">
                    <h3 class="app-name">${app.name}</h3>
                    <span class="app-version">${app.version}${app.date ? ' · ' + app.date : ''}</span>
                </div>
                <span class="app-tag">${app.tag}</span>
            </div>
            <p class="app-description">${app.description}</p>
            <div class="app-meta">
                ${Object.keys(app.downloads).map(p => `<span class="platform-chip">${p}</span>`).join('')}
                <span class="meta-tag">${app.size}</span>
            </div>
        </div>
    `;
    return card;
}

function getFilteredApps() {
    const kw = (searchInput?.value || '').trim().toLowerCase();
    return apps.filter(app => {
        const platformOk = activePlatform === '全部' || Object.keys(app.downloads).includes(activePlatform);
        const text = `${app.name} ${app.description} ${app.features.join(' ')} ${app.tag}`.toLowerCase();
        return platformOk && (!kw || text.includes(kw));
    });
}

function renderApps() {
    const list = getFilteredApps();
    appsGrid.innerHTML = '';
    if (!list.length) {
        appsGrid.innerHTML = `<div class="empty-state">🔍 没有找到匹配的应用，换个关键词试试</div>`;
        return;
    }
    list.forEach(app => {
        appsGrid.appendChild(createAppCard(app));
    });
}

function renderFilterChips() {
    const platforms = ['全部', ...new Set(apps.flatMap(a => Object.keys(a.downloads)))];
    filterChips.innerHTML = platforms.map(p =>
        `<button class="chip ${p === activePlatform ? 'active' : ''}" data-platform="${p}">${p}</button>`
    ).join('');
    filterChips.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            activePlatform = chip.dataset.platform;
            renderFilterChips();
            renderApps();
        });
    });
}

function renderStats() {
    statApps.textContent = apps.length;
    statPlatforms.textContent = new Set(apps.flatMap(a => Object.keys(a.downloads))).size;
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

    const actionLabel = (p) => PLATFORM_LABELS[p] || `下载 for ${p}`;

    modalBody.innerHTML = `
        ${renderBanner(app, 'modal-screenshot')}
        <div class="modal-header">
            <div class="modal-icon">
                ${app.icon}
            </div>
            <div>
                <h2 class="modal-title">${app.name}</h2>
                <span class="modal-version">${app.version}${app.date ? ' · 更新于 ' + app.date : ''}</span>
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
                <span>${app.size}</span>
            </div>
        </div>
        ${platforms.length > 1 ? `
        <div class="platform-selector">
            <label>选择版本:</label>
            <div class="platform-options">
                ${platformOptions}
            </div>
        </div>` : ''}
        <div class="modal-actions">
            <a href="${app.downloads[recommendedPlatform]}" class="btn btn-primary" id="downloadBtn" ${recommendedPlatform === 'Web' ? 'target="_blank"' : ''} onclick="trackDownload('${app.name}', '${recommendedPlatform}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                ${actionLabel(recommendedPlatform)}
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
                ${actionLabel(platform)}
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

searchInput?.addEventListener('input', renderApps);

window.addEventListener('load', () => {
    document.getElementById('footerYear').textContent = new Date().getFullYear();
    initTheme();
    renderStats();
    renderFilterChips();
    renderApps();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});

#!/bin/bash
# ============================================
# 一键部署到 GitHub Pages
# 部署后获得永久 HTTPS 链接，手机/平板/电脑都能访问
# PWA 自动生效：可添加到桌面、离线可用
# ============================================
set -e
cd "$(dirname "$0")"

echo "🚀 学习工作台 - GitHub Pages 部署脚本"
echo ""

# 1. 检查 GitHub 认证
if ! gh auth status 2>/dev/null | grep -qi "logged in"; then
  echo "⚠️  还未登录 GitHub，请先认证："
  echo ""
  echo "   运行: gh auth login"
  echo ""
  echo "   按提示选择："
  echo "     ✓ What account: GitHub.com"
  echo "     ✓ Protocol: HTTPS"
  echo "     ✓ Authenticate Git: Yes"
  echo "     ✓ How: Login with a web browser"
  echo ""
  echo "   会显示一个 8 位 code，打开 https://github.com/login/device 输入"
  echo "   认证完成后，重新运行: bash deploy.sh"
  exit 1
fi

USER=$(gh api user --jq '.login')
echo "✅ 已登录 GitHub: $USER"

# 2. 创建仓库并推送
REPO_NAME="study-workbench"
if gh repo view "$USER/$REPO_NAME" 2>/dev/null; then
  echo "📦 仓库已存在，推送更新..."
  git remote add origin "https://github.com/$USER/$REPO_NAME.git" 2>/dev/null || git remote set-url origin "https://github.com/$USER/$REPO_NAME.git"
  git push -u origin main
else
  echo "📦 创建新仓库 $REPO_NAME ..."
  gh repo create "$REPO_NAME" --public --source=. --push
fi

echo ""
echo "🌐 启用 GitHub Pages ..."
# 3. 启用 GitHub Pages
gh api "repos/$USER/$REPO_NAME/pages" -X POST \
  -f "source[branch]=main" \
  -f "source[path]=/" 2>/dev/null || \
gh api "repos/$USER/$REPO_NAME/pages" -X PUT \
  -f "source[branch]=main" \
  -f "source[path]=/" 2>/dev/null || true

echo ""
echo "⏳ GitHub Pages 首次部署需要 1-3 分钟..."
echo ""
echo "============================================"
echo "✅ 部署完成！你的永久链接："
echo ""
echo "   https://$USER.github.io/$REPO_NAME/"
echo ""
echo "============================================"
echo ""
echo "📱 使用方法："
echo "   1. 手机/平板/电脑浏览器打开上面链接"
echo "   2. 首次打开会自动缓存（联网一次）"
echo "   3. 之后断网也能用（离线PWA）"
echo "   4. 浏览器菜单 → 添加到主屏幕 → 像App一样使用"
echo ""
echo "查看部署状态: gh api repos/$USER/$REPO_NAME/pages --jq '.html_url'"

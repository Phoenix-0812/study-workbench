/* 图片小组件模块 */
const Widget = {
  render() {
    const images = Storage.get(Storage.KEYS.WIDGET_IMAGES, []);

    let html = `
      <div class="page-header">
        <div>
          <div class="page-title">🎀 图片收藏小组件</div>
          <div class="page-subtitle">收藏(G)I-DLE图片，轮播激励学习</div>
        </div>
      </div>

      <div class="widget-container">
        <div class="widget-carousel" id="carousel">
          <div class="carousel-track" id="carouselTrack">
            ${this.renderSlides(images)}
          </div>
          <div class="carousel-controls">
            <button class="carousel-btn" id="prevSlide">‹</button>
            <button class="carousel-btn" id="nextSlide">›</button>
          </div>
          <div class="carousel-dots" id="carouselDots">
            ${this.renderDots(images.length)}
          </div>
        </div>

        <div class="widget-upload" id="uploadBtn">
          <div class="widget-upload-icon">📤</div>
          <div class="widget-upload-text">点击上传图片（支持多张）</div>
          <input type="file" id="fileInput" accept="image/*" multiple style="display:none;">
        </div>

        <div class="home-section-title">📁 我的收藏（${images.length}张）</div>
        <div class="widget-gallery" id="gallery">
          ${this.renderGallery(images)}
        </div>
      </div>
    `;

    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();

    setTimeout(() => {
      let currentSlide = 0;
      const track = wrap.querySelector('#carouselTrack');
      const dots = wrap.querySelector('#carouselDots');
      const totalSlides = Math.max(images.length, 1);

      const goToSlide = (idx) => {
        currentSlide = (idx + totalSlides) % totalSlides;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.querySelectorAll('.carousel-dot').forEach((d, i) => {
          d.classList.toggle('active', i === currentSlide);
        });
      };

      wrap.querySelector('#prevSlide').addEventListener('click', () => goToSlide(currentSlide - 1));
      wrap.querySelector('#nextSlide').addEventListener('click', () => goToSlide(currentSlide + 1));

      // Auto-play
      let autoPlay = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 4000);

      wrap.querySelector('#carousel').addEventListener('mouseenter', () => clearInterval(autoPlay));
      wrap.querySelector('#carousel').addEventListener('mouseleave', () => {
        autoPlay = setInterval(() => goToSlide(currentSlide + 1), 4000);
      });

      // Dot click
      dots.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.addEventListener('click', () => goToSlide(i));
      });

      // Upload
      const uploadBtn = wrap.querySelector('#uploadBtn');
      const fileInput = wrap.querySelector('#fileInput');
      uploadBtn.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        this.handleUpload(files);
      });

      // Gallery delete
      wrap.querySelector('#gallery').addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove');
        if (removeBtn) {
          const idx = parseInt(removeBtn.dataset.idx);
          this.removeImage(idx);
        }
      });
    }, 0);

    return wrap;
  },

  renderSlides(images) {
    if (images.length === 0) {
      return `<div class="carousel-slide" style="background:linear-gradient(135deg,var(--pink-light),var(--purple));"><div style="text-align:center;color:#fff;padding:20px;"><div style="font-size:48px;margin-bottom:8px;">🎀</div><div style="font-size:14px;">上传你的第一张收藏图片吧！</div></div></div>`;
    }
    return images.map(src => `<div class="carousel-slide"><img src="${src}" alt="收藏图片" loading="lazy"/></div>`).join('');
  },

  renderDots(count) {
    if (count <= 1) return '';
    return Array.from({ length: count }, (_, i) => `<div class="carousel-dot ${i === 0 ? 'active' : ''}"></div>`).join('');
  },

  renderGallery(images) {
    if (images.length === 0) {
      return '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted);">还没有收藏图片</div>';
    }
    return images.map((src, i) => `
      <div class="widget-thumb" data-idx="${i}">
        <img src="${src}" alt="收藏 ${i + 1}" loading="lazy"/>
        <button class="remove" data-idx="${i}" title="删除">✕</button>
      </div>
    `).join('');
  },

  handleUpload(files) {
    const images = Storage.get(Storage.KEYS.WIDGET_IMAGES, []);
    let processed = 0;
    const total = files.length;

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Compress image
        this.compressImage(e.target.result, 800, 0.8, (compressed) => {
          images.push(compressed);
          processed++;
          if (processed === total) {
            Storage.set(Storage.KEYS.WIDGET_IMAGES, images);
            UI.showToast(`成功上传${total}张图片！`);
            UI.navigate('widget');
          }
        });
      };
      reader.readAsDataURL(file);
    });
  },

  compressImage(src, maxSize, quality, callback) {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > height && width > maxSize) {
        height = height * (maxSize / width);
        width = maxSize;
      } else if (height > maxSize) {
        width = width * (maxSize / height);
        height = maxSize;
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      callback(canvas.toDataURL('image/jpeg', quality));
    };
    img.src = src;
  },

  removeImage(idx) {
    const images = Storage.get(Storage.KEYS.WIDGET_IMAGES, []);
    if (idx >= 0 && idx < images.length) {
      images.splice(idx, 1);
      Storage.set(Storage.KEYS.WIDGET_IMAGES, images);
      UI.showToast('图片已删除');
      UI.navigate('widget');
    }
  }
};

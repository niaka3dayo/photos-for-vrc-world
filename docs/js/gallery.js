document.addEventListener('DOMContentLoaded', () => {
  const scriptElement = document.querySelector('script[src$="gallery.js"]');
  const jsonFile = scriptElement ? scriptElement.dataset.json : 'data/images.json';
  const galleryContainer = document.querySelector('.gallery');

  fetch(jsonFile)
    .then(response => {
      if (!response.ok) throw new Error('JSONファイルのロードに失敗しました');
      return response.json();
    })
    .then(data => {
      for (const image of data.images) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        // 解像度表示用の要素
        const resolutionBox = document.createElement('div');
        resolutionBox.classList.add('resolution-box');

        img.addEventListener('load', () => {
          resolutionBox.textContent = `${img.naturalWidth} x ${img.naturalHeight}`;
        });

        const urlBox = document.createElement('input');
        urlBox.type = 'text';
        urlBox.classList.add('url-box');
        urlBox.readOnly = true;

        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-button');
        copyButton.textContent = 'コピー';

        const absoluteUrl = new URL(image.src, window.location.href).href;
        urlBox.value = absoluteUrl;

        img.addEventListener('click', () => {
          const lightbox = document.createElement('div');
          lightbox.className = 'lightbox-overlay';
          setTimeout(() => lightbox.classList.add('active'), 10);

          const lightboxContent = document.createElement('div');
          lightboxContent.className = 'lightbox-content';
          lightboxContent.addEventListener('click', (e) => e.stopPropagation());

          const closeBtn = document.createElement('button');
          closeBtn.className = 'lightbox-close';
          closeBtn.innerHTML = '&times;';

          const lightboxImg = document.createElement('img');
          lightboxImg.src = image.src;
          lightboxImg.alt = image.alt;

          const resolutionInfo = document.createElement('div');
          resolutionInfo.className = 'lightbox-resolution';
          resolutionInfo.textContent = resolutionBox.textContent;

          const copyButton = document.createElement('button');
          copyButton.className = 'lightbox-copy';
          copyButton.textContent = 'URLをコピー';

          lightboxContent.appendChild(closeBtn);
          lightboxContent.appendChild(lightboxImg);
          lightboxContent.appendChild(resolutionInfo);
          lightboxContent.appendChild(copyButton);

          copyButton.addEventListener('click', async () => {
            try {
              await navigator.clipboard.writeText(absoluteUrl);
              alert(`URLをコピーしました:\n${absoluteUrl}`);
            } catch (err) {
              console.error('コピー失敗:', err);
              alert('手動でコピーしてください');
            }
          });
          lightbox.appendChild(lightboxContent);
          document.body.appendChild(lightbox);

          // 閉じる処理
          const closeLightbox = () => {
            document.body.removeChild(lightbox);
          };

          closeBtn.addEventListener('click', closeLightbox);
          lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
          });
          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
          });
        });

        copyButton.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(urlBox.value);
            alert(`URLをコピーしました:\n${urlBox.value}`);
          } catch (err) {
            console.error('コピー失敗:', err);
            alert('手動でコピーしてください');
          }
        });

        galleryItem.appendChild(img);
        galleryItem.appendChild(resolutionBox); // 解像度表示を追加
        galleryItem.appendChild(urlBox);
        galleryItem.appendChild(copyButton);
        galleryContainer.appendChild(galleryItem);
      }
    })
    .catch(error => {
      console.error('エラー:', error);
      galleryContainer.innerHTML = '<p>画像読み込みエラー</p>';
    });
});

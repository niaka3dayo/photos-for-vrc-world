document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery');

  // JSONファイルから画像データをロード
  fetch('data/images.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('JSONファイルのロードに失敗しました');
      }
      return response.json();
    })
    .then(data => {
      for (const image of data.images) {
        // ギャラリー項目の作成
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        // 画像要素の作成
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        // テキストボックスの作成
        const urlBox = document.createElement('input');
        urlBox.type = 'text';
        urlBox.classList.add('url-box');
        urlBox.readOnly = true;

        // コピーボタンの作成
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-button');
        copyButton.textContent = 'コピー';

        // 画像の絶対URLを取得してテキストボックスに設定
        const absoluteUrl = new URL(image.src, window.location.href).href;
        urlBox.value = absoluteUrl;

        // 画像をクリックしたらURLをコピー
        img.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(absoluteUrl);
            alert(`画像のURLがクリップボードにコピーされました:\n${absoluteUrl}`);
          } catch (err) {
            console.error('クリップボードへのコピーに失敗しました:', err);
            alert('URLのコピーに失敗しました。手動でコピーしてください。');
          }
        });

        // コピーボタンをクリックしたらURLをコピー
        copyButton.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(urlBox.value);
            alert(`画像のURLがクリップボードにコピーされました:\n${urlBox.value}`);
          } catch (err) {
            console.error('クリップボードへのコピーに失敗しました:', err);
            alert('URLのコピーに失敗しました。手動でコピーしてください。');
          }
        });

        // ギャラリー項目に要素を追加
        galleryItem.appendChild(img);
        galleryItem.appendChild(urlBox);
        galleryItem.appendChild(copyButton);
        galleryContainer.appendChild(galleryItem);
      }
    })
    .catch(error => {
      console.error('エラーが発生しました:', error);
      galleryContainer.innerHTML = '<p>画像を読み込めませんでした。</p>';
    });
});

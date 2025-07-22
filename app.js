// 簡單語言切換功能
document.querySelectorAll('.lang-btn').forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if(lang === 'zh') {
      // 中文內容示例 — 這裡你可擴充其他中文內容切換
      document.querySelector('.hero-overlay h1').textContent = '明基博芮資本';
      document.querySelector('.hero-overlay p').textContent = '您值得信賴的資產管理夥伴';
    } else if(lang === 'en') {
      // 英文內容示例
      document.querySelector('.hero-overlay h1').textContent = 'Mingkey Bouri Capital';
      document.querySelector('.hero-overlay p').textContent = 'Your Trusted Asset Management Partner';
    }
  });
});

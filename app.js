// CepHane İletişim - Esenyurt Resmi İşlem & WhatsApp Motoru
// WhatsApp & Tel: 0530 354 34 65 | Pınar Mah. Sivas Kongre Cad. No:54/A Esenyurt
const CEPHANE_PHONE = '905303543465';

// KAPSAMLI TELEFON MARKA VE MODEL VERİ TABANI (APPLE, SAMSUNG, XIAOMI, DİĞERLERİ)
const PHONE_DATABASE = {
  'Apple (iPhone)': [
    { name: 'iPhone 16 Pro Max', base: 77000 },
    { name: 'iPhone 16 Pro', base: 70000 },
    { name: 'iPhone 16 Plus', base: 54000 },
    { name: 'iPhone 16', base: 49500 },
    { name: 'iPhone 15 Pro Max', base: 61500 },
    { name: 'iPhone 15 Pro', base: 53500 },
    { name: 'iPhone 15 Plus', base: 42500 },
    { name: 'iPhone 15', base: 39500 },
    { name: 'iPhone 14 Pro Max', base: 47500 },
    { name: 'iPhone 14 Pro', base: 42500 },
    { name: 'iPhone 14 Plus', base: 33500 },
    { name: 'iPhone 14', base: 31500 },
    { name: 'iPhone 13 Pro Max', base: 36500 },
    { name: 'iPhone 13 Pro', base: 32000 },
    { name: 'iPhone 13', base: 26000 },
    { name: 'iPhone 13 mini', base: 21500 },
    { name: 'iPhone 12 Pro Max', base: 27500 },
    { name: 'iPhone 12 Pro', base: 23500 },
    { name: 'iPhone 12', base: 18500 },
    { name: 'iPhone 12 mini', base: 15500 },
    { name: 'iPhone 11 Pro Max', base: 19000 },
    { name: 'iPhone 11 Pro', base: 16000 },
    { name: 'iPhone 11', base: 13500 },
    { name: 'iPhone XS Max', base: 11000 },
    { name: 'iPhone XS / X / XR', base: 8500 },
    { name: 'iPhone SE (2020 / 2022)', base: 8500 },
    { name: 'iPhone 8 Plus / 8 / 7', base: 5000 },
    { name: 'Diğer iPhone Modeli (Elle Yazacağım)', base: 10000 }
  ],
  'Samsung': [
    { name: 'Samsung Galaxy S24 Ultra', base: 54000 },
    { name: 'Samsung Galaxy S24+ / S24', base: 35000 },
    { name: 'Samsung Galaxy S23 Ultra', base: 39500 },
    { name: 'Samsung Galaxy S23+ / S23 / FE', base: 24500 },
    { name: 'Samsung Galaxy S22 Ultra', base: 26500 },
    { name: 'Samsung Galaxy S22+ / S22', base: 18500 },
    { name: 'Samsung Galaxy S21 Ultra / S21', base: 14500 },
    { name: 'Samsung Galaxy S20 Ultra / S20 FE', base: 9500 },
    { name: 'Samsung Galaxy Z Fold 6 / Fold 5', base: 48000 },
    { name: 'Samsung Galaxy Z Fold 4 / Fold 3', base: 26000 },
    { name: 'Samsung Galaxy Z Flip 6 / Flip 5', base: 31000 },
    { name: 'Samsung Galaxy Z Flip 4 / Flip 3', base: 16000 },
    { name: 'Samsung Galaxy Note 20 Ultra / Note 10', base: 13500 },
    { name: 'Samsung Galaxy A55 / A54 5G', base: 13000 },
    { name: 'Samsung Galaxy A35 / A34 / A25', base: 9500 },
    { name: 'Samsung Galaxy A15 / A14 / A05', base: 5500 },
    { name: 'Diğer Samsung Modeli (Elle Yazacağım)', base: 8000 }
  ],
  'Xiaomi / Redmi / POCO': [
    { name: 'Xiaomi 14 Ultra / 14', base: 38000 },
    { name: 'Xiaomi 13 Ultra / 13 Pro / 13', base: 26000 },
    { name: 'Xiaomi 13T Pro / 13T', base: 20000 },
    { name: 'Xiaomi 12 Pro / 12 / 12T', base: 14000 },
    { name: 'Redmi Note 13 Pro+ 5G', base: 15500 },
    { name: 'Redmi Note 13 Pro / Note 13', base: 10500 },
    { name: 'Redmi Note 12 Pro 5G / Note 12', base: 8500 },
    { name: 'Redmi Note 11 Pro / Note 11', base: 6000 },
    { name: 'Redmi 13C / 12 / 10', base: 4500 },
    { name: 'POCO X6 Pro 5G / X6', base: 14500 },
    { name: 'POCO F5 Pro / F5', base: 15000 },
    { name: 'POCO X5 Pro / X4 GT / F4', base: 9500 },
    { name: 'Diğer Xiaomi / POCO Modeli (Elle Yazacağım)', base: 6500 }
  ],
  'Huawei / Oppo / Diğer': [
    { name: 'Huawei P60 Pro / Mate 50 Pro', base: 25000 },
    { name: 'Huawei P50 Pro / Nova 11 / 10', base: 14000 },
    { name: 'Oppo Reno 11 Pro / Reno 10', base: 15000 },
    { name: 'Oppo Reno 8 / Reno 7', base: 9000 },
    { name: 'Realme GT 2 / 11 Pro+ / 10 Pro', base: 11000 },
    { name: 'Vivo V29 / V25 / Y36', base: 9500 },
    { name: 'Tecno Camon 30 / 20 / Spark', base: 7500 },
    { name: 'Infinix Note 30 / Zero / Hot', base: 7000 },
    { name: 'Diğer Marka & Model (Elle Yazacağım)', base: 7000 }
  ]
};

document.addEventListener('DOMContentLoaded', () => {

  // -----------------------------------------------------------
  // TELEFON AÇILIŞ BOOT SEREMONİSİ (CYBER-OLED PRELOADER)
  // -----------------------------------------------------------
  const phoneBootScreen = document.getElementById('phoneBootScreen');
  const bootProgressFill = document.getElementById('bootProgressFill');
  const bootStatusText = document.getElementById('bootStatusText');

  if (phoneBootScreen && bootProgressFill && bootStatusText) {
    // 1. Aşama: Donanım testi (%30)
    setTimeout(() => {
      bootProgressFill.style.width = '30%';
      bootStatusText.textContent = 'Biyometrik Donanım Taranıyor...';
    }, 200);

    // 2. Aşama: Teknik Servis & Parça (%75)
    setTimeout(() => {
      bootProgressFill.style.width = '75%';
      bootStatusText.textContent = '30 Dk Servis & Değerleme Modülü Aktif...';
    }, 800);

    // 3. Aşama: Tamamlandı (%100)
    setTimeout(() => {
      bootProgressFill.style.width = '100%';
      bootStatusText.textContent = 'Sistem Hazır • CepHane İletişim';
    }, 1500);

    // 4. Kilit Açılma & Siteye Geçiş
    const unlockPhone = () => {
      phoneBootScreen.classList.add('boot-unlocked');
      setTimeout(() => {
        if (phoneBootScreen.parentNode) {
          phoneBootScreen.remove();
        }
      }, 600);
    };

    setTimeout(unlockPhone, 2200);

    // Kullanıcı beklemek istemezse ekrana dokunup anında geçebilir
    phoneBootScreen.addEventListener('click', unlockPhone);
  }

  // -----------------------------------------------------------
  // MOBİL DRAWER MENÜ
  // -----------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });
  }

  // -----------------------------------------------------------
  // TEYİT VE ONAY MODALI (WHATSAPP DİREKT AÇICI)
  // -----------------------------------------------------------
  const confirmModal = document.getElementById('confirmModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalSummaryBox = document.getElementById('modalSummaryBox');
  const modalWaLink = document.getElementById('modalWaLink');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openConfirmation(title, summaryHtml, desc, waUrl) {
    if (!confirmModal) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalSummaryBox) modalSummaryBox.innerHTML = summaryHtml;
    if (modalDesc) modalDesc.innerHTML = desc;
    if (modalWaLink) modalWaLink.href = waUrl;
    
    confirmModal.classList.add('active');

    // WhatsApp'ı doğrudan açmayı dene
    try {
      window.open(waUrl, '_blank');
    } catch (_) {}
  }

  if (modalCloseBtn && confirmModal) {
    modalCloseBtn.addEventListener('click', () => {
      confirmModal.classList.remove('active');
    });
    confirmModal.addEventListener('click', (e) => {
      if (e.target === confirmModal) confirmModal.classList.remove('active');
    });
  }

  // -----------------------------------------------------------
  // 1. ANINDA DEĞERLEME & NAKİT FİYAT ALMA FORMU (TEK KARTLI)
  // -----------------------------------------------------------
  const valuationForm = document.getElementById('valuationForm');
  const valBrand = document.getElementById('valBrand');
  const valModel = document.getElementById('valModel');
  const valModelCustom = document.getElementById('valModelCustom');
  const valStorage = document.getElementById('valStorage');
  const valBattery = document.getElementById('valBattery');
  const valScreen = document.getElementById('valScreen');
  const valBody = document.getElementById('valBody');
  const valBoxInvoice = document.getElementById('valBoxInvoice');
  const valLivePrice = document.getElementById('valLivePrice');

  // Markaya göre modelleri doldur
  function populateModels(brandKey) {
    if (!valModel) return;
    valModel.innerHTML = '';

    const models = PHONE_DATABASE[brandKey] || PHONE_DATABASE['Apple (iPhone)'];
    models.forEach((item, index) => {
      const opt = document.createElement('option');
      opt.value = item.name;
      opt.textContent = item.name;
      if (index === 0) opt.selected = true;
      valModel.appendChild(opt);
    });

    checkCustomModelVisibility();
  }

  function checkCustomModelVisibility() {
    if (!valModel || !valModelCustom) return;
    if (valModel.value.includes('Elle Yazacağım')) {
      valModelCustom.style.display = 'block';
      valModelCustom.focus();
    } else {
      valModelCustom.style.display = 'none';
    }
  }

  // Marka seçildiğinde modelleri yükle
  if (valBrand) {
    valBrand.addEventListener('change', (e) => {
      populateModels(e.target.value);
    });
  }

  // Model seçildiğinde özel kutuyu kontrol et
  if (valModel) {
    valModel.addEventListener('change', () => {
      checkCustomModelVisibility();
    });
  }

  // İlk açılışta modelleri doldur
  if (valBrand) {
    populateModels(valBrand.value);
  }

  // Değerleme Formu Submit
  if (valuationForm) {
    valuationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const brand = valBrand ? valBrand.value : 'Apple';
      let model = valModel ? valModel.value : 'iPhone 15';
      if (model.includes('Elle Yazacağım') && valModelCustom && valModelCustom.value.trim() !== '') {
        model = valModelCustom.value.trim();
      }

      const storage = valStorage ? valStorage.value : '128 GB';
      const battery = valBattery ? valBattery.value : '%90 - %100';
      const screen = valScreen ? valScreen.value : 'Orijinal & Çiziksiz';
      const body = valBody ? valBody.value : 'Sıfır Ayarında';
      const box = valBoxInvoice ? valBoxInvoice.value : 'Kutulu ve Faturalı';
      const name = document.getElementById('valCustomerName').value.trim();
      const phone = document.getElementById('valCustomerPhone').value.trim();

      const msg = 
`📱 *CEPHANE İLETİŞİM - İKİNCİ EL CİHAZ NAKİT SATIŞ VE FİYAT TALEBİ* 📱
----------------------------------------
👤 *Müşteri:* ${name}
📞 *Telefon:* ${phone}

📱 *Marka & Model:* ${brand} - ${model}
💾 *Hafıza Kapasitesi:* ${storage}
🔋 *Pil Sağlığı:* ${battery}
🖥️ *Ekran Durumu:* ${screen}
🛡️ *Kasa Kozmetiği:* ${body}
📦 *Kutu & Fatura:* ${box}
📍 *Şube:* CepHane İletişim (Esenyurt / Sivas Kongre Cad. No:54/A)
----------------------------------------
💬 _Merhaba CepHane İletişim, sitemizden cihazım için ekspertiz bilgilerini doldurdum. Bu cihaz kondisyonuna göre en yüksek nakit teklifinizi bekliyorum._`;

      const waUrl = `https://wa.me/${CEPHANE_PHONE}?text=${encodeURIComponent(msg)}`;

      const summaryHtml = `
        <strong>Müşteri:</strong> ${name} (${phone})<br>
        <strong>Cihaz:</strong> ${brand} - ${model} (${storage})<br>
        <strong>Kozmetik / Ekran:</strong> ${body} • ${screen}<br>
        <strong>Kutu & Pil:</strong> ${box} • Pil: ${battery}
      `;

      openConfirmation(
        'Cihaz Bilgileriniz Hazırlandı! 📱',
        summaryHtml,
        `Sayın <strong>${name}</strong>, cihazınızın eksiksiz durum raporu oluşturuldu.<br><br>
        WhatsApp üzerinden doğrudan <strong>CepHane İletişim merkez hattımıza</strong> yönlendiriliyorsunuz. Ekibimiz anında en yüksek nakit teklifini iletecektir.`,
        waUrl
      );
    });
  }

  // -----------------------------------------------------------
  // 2. İNTERAKTİF TAMİR KATALOĞU VE TEKNİK SERVİS FORMU
  // -----------------------------------------------------------
  const repIssueSelect = document.getElementById('repIssue');
  const repTimeEst = document.getElementById('repTimeEst');
  const repairCatCards = document.querySelectorAll('.repair-catalog-card');

  function updateRepairDuration(issueText) {
    if (!repTimeEst) return;
    if (issueText.includes('~20 Dk')) {
      repTimeEst.textContent = '~20 Dakika (Göz Önünde)';
    } else if (issueText.includes('~30 Dk')) {
      repTimeEst.textContent = '~30 Dakika (Göz Önünde)';
    } else if (issueText.includes('~45 Dk')) {
      repTimeEst.textContent = '~45 Dakika (Lazer Laboratuvarı)';
    } else if (issueText.includes('Anakart') || issueText.includes('Sıvı')) {
      repTimeEst.textContent = 'Aynı Gün İnceleme (Mikroskop Altı)';
    } else {
      repTimeEst.textContent = '~20 - 30 Dakika (Göz Önünde)';
    }
  }

  if (repairCatCards.length > 0) {
    repairCatCards.forEach(card => {
      card.addEventListener('click', () => {
        repairCatCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const issue = card.getAttribute('data-issue');
        const time = card.getAttribute('data-time');

        if (repIssueSelect && issue) {
          repIssueSelect.value = issue;
        }
        if (repTimeEst && time) {
          repTimeEst.textContent = time;
        }

        // Forma kaydır ve odaklan
        const targetInput = document.getElementById('repModel');
        if (targetInput) {
          targetInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(() => {
            targetInput.focus();
          }, 400);
        }
      });
    });
  }

  if (repIssueSelect) {
    repIssueSelect.addEventListener('change', (e) => {
      const selectedVal = e.target.value;
      updateRepairDuration(selectedVal);

      // Kartları eşle
      repairCatCards.forEach(card => {
        const cardIssue = card.getAttribute('data-issue');
        card.classList.toggle('active', cardIssue === selectedVal);
      });
    });
  }

  // Teknik Servis Formu Submit
  const repairForm = document.getElementById('repairForm');
  if (repairForm) {
    repairForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const model = document.getElementById('repModel').value.trim();
      const issue = document.getElementById('repIssue').value;
      const day = document.getElementById('repDay').value;
      const time = document.getElementById('repTime').value;
      const name = document.getElementById('repName').value.trim();
      const phone = document.getElementById('repPhone').value.trim();
      const duration = repTimeEst ? repTimeEst.textContent : '~30 Dakika (Göz Önünde)';

      const msg = 
`⚙️ *CEPHANE İLETİŞİM - TEKNİK SERVİS RANDEVUSU* ⚙️
----------------------------------------
👤 *Müşteri Adı:* ${name}
📞 *Telefon:* ${phone}

📱 *Cihaz Modeli:* ${model}
🔧 *İşlem / Arıza:* ${issue}
⏱️ *Tahmini Süre:* ${duration}
📅 *Randevu Günü:* ${day}
⏰ *Saat Aralığı:* ${time}
🛡️ *Servis Güvencesi:* 6 Ay CepHane Firma Garantili
📍 *Servis Şubesi:* CepHane İletişim (Esenyurt / Sivas Kongre Cad.)
----------------------------------------
💬 _Merhaba CepHane İletişim, internet sitenizden teknik servis randevusu aldım. Cihazımı gözümün önünde yaptırmak için uygun saati teyit etmenizi rica ederim._`;

      const waUrl = `https://wa.me/${CEPHANE_PHONE}?text=${encodeURIComponent(msg)}`;

      const summaryHtml = `
        <strong>Müşteri:</strong> ${name} (${phone})<br>
        <strong>Cihaz & İşlem:</strong> ${model} • ${issue}<br>
        <strong>Süre & Garanti:</strong> ${duration} • 6 Ay Kaşeli Garanti<br>
        <strong>Randevu Zamanı:</strong> ${day} günü, saat ${time} aralığında
      `;

      openConfirmation(
        'Randevu Talebiniz CepHane Ekibine İletildi! 🛠️',
        summaryHtml,
        `Sayın <strong>${name}</strong>, <strong>${model}</strong> cihazınız için randevu talebiniz başarıyla oluşturuldu.<br><br>
        <strong>15 dakika içerisinde</strong> teknik servis ekibimiz WhatsApp üzerinden randevu saatinizi teyit edecektir.`,
        waUrl
      );
    });
  }

  /* -------------------------------------------------------------
     HOLOGRAPHIC CYBER CORE - 3D PARALLAX & TILT INTERACTION
     ------------------------------------------------------------- */
  const heroEl = document.getElementById('hero');
  const holoCoreEl = document.getElementById('heroCyberCore');
  const holoEmblemEl = document.getElementById('cyberHoloEmblem');

  if (heroEl && holoCoreEl && window.matchMedia('(min-width: 768px)').matches) {
    let targetX = 0, targetY = 0;
    let currX = 0, currY = 0;

    heroEl.addEventListener('mousemove', (e) => {
      const rect = heroEl.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = relX * 36;
      targetY = relY * 26;
    });

    heroEl.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });

    function updateHoloParallax() {
      currX += (targetX - currX) * 0.08;
      currY += (targetY - currY) * 0.08;

      if (holoCoreEl) {
        holoCoreEl.style.transform = `translate(calc(-50% + ${currX}px), calc(-50% + ${currY}px))`;
      }
      if (holoEmblemEl) {
        holoEmblemEl.style.transform = `perspective(800px) rotateY(${currX * 0.35}deg) rotateX(${-currY * 0.35}deg)`;
      }

      requestAnimationFrame(updateHoloParallax);
    }
    requestAnimationFrame(updateHoloParallax);
  }

});


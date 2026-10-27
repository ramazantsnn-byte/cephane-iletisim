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
    if (issueText.includes('Batarya')) {
      repTimeEst.textContent = '~20 Dakika (Göz Önünde)';
    } else if (issueText.includes('Ekran')) {
      repTimeEst.textContent = '~30 Dakika (Göz Önünde)';
    } else if (issueText.includes('Arka Cam') || issueText.includes('Kasa')) {
      repTimeEst.textContent = '~3 - 4 Saat (Lazer & Pres Kuruma Süresi)';
    } else if (issueText.includes('Anakart') || issueText.includes('Sıvı') || issueText.includes('Entegre')) {
      repTimeEst.textContent = '~3 - 4 Saat (Ultrasonik Havuz & Mikro Lehimleme)';
    } else if (issueText.includes('Kamera')) {
      repTimeEst.textContent = '~3 - 4 Saat (OIS Kalibrasyon & Lazer Pres)';
    } else if (issueText.includes('Soket') || issueText.includes('Ahize') || issueText.includes('Mikrofon')) {
      repTimeEst.textContent = '~3 - 4 Saat (Detaylı Bord & Ses Odası)';
    } else {
      repTimeEst.textContent = '~3 - 4 Saat (Detaylı Kalibrasyon & Test)';
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

  /* =============================================================
     BÖLÜM 2.5: CEPHANE DİJİTAL SERVİS LABORATUVARI MOTORLARI
     ============================================================= */

  // 1. Lab Switcher Tabs
  const labTabs = document.querySelectorAll('.lab-tab-btn');
  const labPanels = document.querySelectorAll('.lab-panel');

  labTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      labTabs.forEach(t => t.classList.remove('active'));
      labPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // 2. Hoparlör Su & Toz Çıkarma Aracı (Web Audio API)
  let audioCtx = null;
  let oscillator = null;
  let gainNode = null;
  let lfo = null;
  let isSpeakerRunning = false;
  let countdownTimer = null;
  let selectedFrequency = 165;

  const btnSpeakerAction = document.getElementById('btnSpeakerAction');
  const btnSpeakerText = document.getElementById('btnSpeakerText');
  const speakerCone = document.getElementById('speakerCone');
  const speakerDot = document.getElementById('speakerDot');
  const speakerStatusLabel = document.getElementById('speakerStatusLabel');
  const freqPills = document.querySelectorAll('.freq-pill');

  freqPills.forEach(pill => {
    pill.addEventListener('click', () => {
      freqPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedFrequency = parseInt(pill.getAttribute('data-freq'), 10) || 165;
      if (isSpeakerRunning) {
        stopSpeakerSound();
      }
    });
  });

  function stopSpeakerSound() {
    isSpeakerRunning = false;
    clearInterval(countdownTimer);

    if (oscillator) {
      try { oscillator.stop(); oscillator.disconnect(); } catch (e) {}
      oscillator = null;
    }
    if (lfo) {
      try { lfo.stop(); lfo.disconnect(); } catch (e) {}
      lfo = null;
    }
    if (audioCtx && audioCtx.state !== 'closed') {
      try { audioCtx.close(); } catch (e) {}
      audioCtx = null;
    }

    if (speakerCone) speakerCone.classList.remove('playing');
    if (speakerDot) speakerDot.classList.remove('playing');
    if (btnSpeakerAction) {
      btnSpeakerAction.classList.remove('playing');
      btnSpeakerAction.innerHTML = '<i class="fa-solid fa-play"></i> Sesi Başlat & Suyu Tahliye Et (15 Sn)';
    }
    if (speakerStatusLabel) {
      speakerStatusLabel.textContent = 'Tahliye Tamamlandı • Hoparlör Kurulandı';
    }
  }

  function startSpeakerSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) {
        alert('Tarayıcınız Web Audio ses motorunu desteklemiyor.');
        return;
      }
      audioCtx = new AudioContext();

      oscillator = audioCtx.createOscillator();
      gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(selectedFrequency, audioCtx.currentTime);

      // Acoustic Excursion Pulse: 4.5Hz LFO tremolo
      lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(4.5, audioCtx.currentTime);
      lfoGain.gain.setValueAtTime(0.4, audioCtx.currentTime);
      lfo.connect(gainNode.gain);
      lfo.start();

      gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.95, audioCtx.currentTime + 0.1);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();

      isSpeakerRunning = true;
      if (speakerCone) speakerCone.classList.add('playing');
      if (speakerDot) speakerDot.classList.add('playing');
      if (btnSpeakerAction) {
        btnSpeakerAction.classList.add('playing');
      }

      let timeLeft = 15;
      if (btnSpeakerText) btnSpeakerText.textContent = `Tahliye Ediliyor... (${timeLeft} Sn) • Durdur`;
      if (speakerStatusLabel) speakerStatusLabel.textContent = `Yüksek Genlikli ${selectedFrequency}Hz Ses Çalıyor...`;

      countdownTimer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
          stopSpeakerSound();
        } else {
          if (btnSpeakerText) btnSpeakerText.textContent = `Tahliye Ediliyor... (${timeLeft} Sn) • Durdur`;
        }
      }, 1000);

    } catch (err) {
      console.error('Audio init error:', err);
      alert('Ses motoru başlatılamadı, lütfen ekrana dokunun.');
    }
  }

  if (btnSpeakerAction) {
    btnSpeakerAction.addEventListener('click', () => {
      if (isSpeakerRunning) {
        stopSpeakerSound();
      } else {
        startSpeakerSound();
      }
    });
  }

  // 3. Canlı Tamir Takip Portalı
  const trackerInput = document.getElementById('trackerInput');
  const btnQueryTracker = document.getElementById('btnQueryTracker');
  const demoTags = document.querySelectorAll('.demo-tag');
  const trackTicketCode = document.getElementById('trackTicketCode');
  const trackDeviceTitle = document.getElementById('trackDeviceTitle');
  const trackTime = document.getElementById('trackTime');
  const trackStatusBadge = document.getElementById('trackStatusBadge');
  const trackEstTime = document.getElementById('trackEstTime');
  const trackWhatsAppBtn = document.getElementById('trackWhatsAppBtn');
  const repairStepper = document.getElementById('repairStepper');

  const mockTickets = {
    'CPH-8429': {
      device: 'iPhone 14 Pro — Orijinal Ekran Değişimi',
      time: 'Bugün, 14:15',
      status: 'Onarım Bankoda Devam Ediyor',
      step: 3,
      est: '~15 Dakika (Göz Önünde)',
      tech: 'Murat Usta'
    },
    'CPH-5120': {
      device: 'iPhone 13 — Orijinal Çipli Batarya Değişimi',
      time: 'Bugün, 15:30',
      status: '12 Nokta Kalibrasyon & Pil Testi',
      step: 4,
      est: '~10 Dakika (Göz Önünde)',
      tech: 'Emre Usta'
    },
    'CPH-9044': {
      device: 'iPhone 15 Pro Max — Arka Cam & Kasa Onarımı',
      time: 'Bugün, 12:00',
      status: 'Teslimata Hazır (Kaşeli Garanti)',
      step: 5,
      est: 'Hemen Teslim Alabilirsiniz (Toplam 3.5 Saat)',
      tech: 'Murat Usta'
    }
  };

  function updateTrackerUI(ticketCode, data) {
    if (!data) {
      data = {
        device: 'Kayıtlı Cihaz — Donanım İncelemesi',
        time: 'Bugün, 15:00',
        status: 'Cihaz Kabulü Yapıldı • Sıraya Alındı',
        step: 2,
        est: '~3 - 4 Saat (Detaylı Kalibrasyon)',
        tech: 'Teknik Servis Ekibi'
      };
    }

    if (trackTicketCode) trackTicketCode.textContent = ticketCode;
    if (trackDeviceTitle) trackDeviceTitle.textContent = data.device;
    if (trackTime) trackTime.textContent = data.time;
    if (trackEstTime) trackEstTime.textContent = data.est;
    if (trackStatusBadge) {
      trackStatusBadge.innerHTML = `<span class="pulse-dot"></span> ${data.status}`;
    }

    if (repairStepper) {
      const items = repairStepper.querySelectorAll('.step-item');
      items.forEach((item, idx) => {
        const stepNum = idx + 1;
        item.classList.remove('step-completed', 'step-active');
        if (stepNum < data.step) {
          item.classList.add('step-completed');
          item.querySelector('.step-node').innerHTML = '<i class="fa-solid fa-check"></i>';
        } else if (stepNum === data.step) {
          item.classList.add('step-active');
          item.querySelector('.step-node').innerHTML = '<span class="step-pulse-ring"></span><i class="fa-solid fa-screwdriver-wrench"></i>';
        } else {
          item.querySelector('.step-node').textContent = stepNum;
        }
      });
    }

    if (trackWhatsAppBtn) {
      const waText = encodeURIComponent(`Merhaba CepHane İletişim, ${ticketCode} numaralı cihazımın son durumu hakkında bilgi almak istiyorum.`);
      trackWhatsAppBtn.href = `https://wa.me/${CEPHANE_PHONE}?text=${waText}`;
    }
  }

  if (btnQueryTracker && trackerInput) {
    btnQueryTracker.addEventListener('click', () => {
      const val = trackerInput.value.trim().toUpperCase();
      if (!val) {
        alert('Lütfen servis fiş numaranızı veya telefon numaranızı yazın.');
        trackerInput.focus();
        return;
      }
      const data = mockTickets[val] || null;
      updateTrackerUI(val, data);
    });

    trackerInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') btnQueryTracker.click();
    });
  }

  demoTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const code = tag.getAttribute('data-code');
      if (trackerInput) trackerInput.value = code;
      const data = mockTickets[code];
      updateTrackerUI(code, data);
    });
  });

  // 4. Akıllı Arıza Teşhis Sihirbazı
  const diagData = {
    'ekran': {
      title: 'Ekran & Dokunmatik',
      symptoms: [
        {
          symptom: 'Sadece ön cam çatlak, iç görüntü net ve dokunmatik sorunsuz basıyor',
          diagnosis: 'İç OLED Panel Sağlam • Yalnızca Dış Ön Cam Hasarlı',
          action: 'OLED ekran değişmeden yalnızca kırık ön camın orijinal vakumlu presle değişimi.',
          duration: '25 - 30 Dakika Göz Önünde',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez, TrueTone & Renk profili korunur.'
        },
        {
          symptom: 'Görüntü var ama dokunmatik kendi kendine basıyor (hayalet dokunma) veya bazı yerler basmıyor',
          diagnosis: 'Dokunmatik Sayısallaştırıcı (Digitizer) Katmanı Arızalı',
          action: 'Orijinal dokunmatik sensör katmanının veya panelinin kalibrasyonlu değişimi.',
          duration: '30 Dakika Göz Önünde',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez.'
        },
        {
          symptom: 'Ekranda mor mürekkep lekesi, yeşil dikey çizgiler veya tamamen siyah ekran',
          diagnosis: 'İç OLED / AMOLED Panel Darbe Hasarı',
          action: 'Komple orijinal 120Hz OLED ekran değişimi (TrueTone ve Face ID aktarımıyla).',
          duration: '25 - 30 Dakika Göz Önünde',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez.'
        }
      ]
    },
    'sarj': {
      title: 'Batarya & Şarj Almama',
      symptoms: [
        {
          symptom: 'Pil sağlığı %75 altına düştü, şarjı yarım günde bitiyor veya aniden kapanıyor',
          diagnosis: 'Lityum-İyon Batarya Ömrü Tükenmiş',
          action: 'Orijinal TI çipli, yüksek akım korumalı batarya değişimi.',
          duration: '20 Dakika Göz Önünde',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez.'
        },
        {
          symptom: 'Şarj kablosunu takınca temassızlık yapıyor, kabloyu bükünce alıyor',
          diagnosis: 'Şarj Soket Yuvası Pamuk/Toz Tıkanması veya Lehim Çatlağı',
          action: 'Mikroskobik soket temizliği veya orijinal Lightning / Type-C soket değişimi.',
          duration: '3 - 4 Saat (Detaylı Bord & Temas Testi)',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez.'
        },
        {
          symptom: 'Telefon şarj kablosunu hiç görmüyor, açılmıyor ve aşırı ısınıyor',
          diagnosis: 'U2 Tristar / Hydra Şarj Yönetim Entegresi Arızası',
          action: 'Mikro lehimleme istasyonunda anakart şarj entegresi onarımı.',
          duration: '3 - 4 Saat (Mikro Lehimleme & Anakart Testi)',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez.'
        }
      ]
    },
    'kamera': {
      title: 'Kamera & Cam Çatlağı',
      symptoms: [
        {
          symptom: 'Kamera net çekiyor fakat dışındaki yuvarlak lens camı kırıldı',
          diagnosis: 'Yalnızca Dış Kamera Safir Camı Kırık',
          action: 'Cihazın içi ve kasası açılmadan lazerle dış safir cam değişimi.',
          duration: '3 - 4 Saat (Lazer Çıkarma & Pres Kuruma)',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez.'
        },
        {
          symptom: 'Kamerayı açınca titriyor, cızlama sesi geliyor veya odaklanmıyor',
          diagnosis: 'OIS (Optik Görüntü Sabitleyici) Motoru Darbe Hasarı',
          action: 'Orijinal kamera sensör modülü değişimi ve odaklama testi.',
          duration: '3 - 4 Saat (Orijinal Modül Montaj & Kalibrasyon)',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez.'
        }
      ]
    },
    'sivi': {
      title: 'Sıvı Teması / Açılmıyor',
      symptoms: [
        {
          symptom: 'Telefona çay/su döküldü veya suya düştü, çalışıyor ama içi nemli',
          diagnosis: 'Acil Sıvı Teması • Oksitlenme Riski',
          action: 'Ultrasonik kimyasal havuzda anakart temizliği ve korozyon giderimi (Acil Müdahale!).',
          duration: '3 - 4 Saat (Kimyasal Havuz & Kurutma Fırını)',
          warranty: 'Servis Güvencesi',
          security: 'Cihazı şarja takmadan acilen getirin.'
        },
        {
          symptom: 'Telefon elma logosunda kalıyor, açılıp kapanıyor (bootloop)',
          diagnosis: 'NAND Hafıza Doluluğu veya Yazılımsal Çökme',
          action: 'Veri kaybı yaşanmadan profesyonel yazılım onarımı ve sistem kurtarma.',
          duration: '3 - 4 Saat (NAND Bellek & Yazılım Kurtarma)',
          warranty: 'Kaşeli Firma Garantisi',
          security: 'Öncelik verilerinizin kurtarılmasıdır.'
        }
      ]
    },
    'ses': {
      title: 'Ses / Ahize & Mikrofon',
      symptoms: [
        {
          symptom: 'Telefonla konuşurken karşı tarafın sesi çok boğuk veya az geliyor',
          diagnosis: 'Akustik Ahize Izgarası Korozyonu & Toz Tıkanıklığı',
          action: 'Ultrasonik ahize ızgarası temizliği veya orijinal ahize hoparlör değişimi.',
          duration: '3 - 4 Saat (Akustik Temizlik & Montaj)',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez.'
        },
        {
          symptom: 'Konuşurken karşı taraf sesimi duyamıyor veya ses kaydı cızırtılı çıkıyor',
          diagnosis: 'Gürültü Engelleyici Alt Mikrofon Bordu Arızalı',
          action: 'Orijinal mikrofon filmi değişimi ve 3 noktalı ses testi.',
          duration: '3 - 4 Saat (Anakart Flex & Test)',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez.'
        }
      ]
    },
    'sebeke': {
      title: 'Şebeke & WiFi / Bluetooth',
      symptoms: [
        {
          symptom: 'SIM kart takılı olmasına rağmen "Servis Yok" veya "SIM Yok" diyor',
          diagnosis: 'Baseband Şebeke Çipi veya SIM Yuvası Temassızlığı',
          action: 'Mikroskop altında baseband şebeke işlemcisi kontrolü ve onarımı.',
          duration: '3 - 4 Saat (Mikroskop Altında Çip Onarımı)',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez.'
        },
        {
          symptom: 'Ayarlarda WiFi butonu gri (sönük) kalıyor ve açılamıyor',
          diagnosis: 'WiFi / Bluetooth Modül Entegresi Arızası',
          action: 'Anakart üzerinde WiFi çip onarımı ve reballing işlemi.',
          duration: '3 - 4 Saat (Anakart Reballing & Isı Testi)',
          warranty: '6 Ay Kaşeli Firma Garantisi',
          security: 'Verileriniz silinmez, şifre gerekmez.'
        }
      ]
    }
  };

  const diagStep1 = document.getElementById('diagStep1');
  const diagStep2 = document.getElementById('diagStep2');
  const diagStep3 = document.getElementById('diagStep3');
  const diagCatCards = document.querySelectorAll('.diag-cat-card');
  const btnDiagBack = document.getElementById('btnDiagBack');
  const btnDiagRestart = document.getElementById('btnDiagRestart');
  const diagSelectedCatName = document.getElementById('diagSelectedCatName');
  const diagSymptomContainer = document.getElementById('diagSymptomContainer');
  const diagReportTitle = document.getElementById('diagReportTitle');
  const diagReportAction = document.getElementById('diagReportAction');
  const diagReportDuration = document.getElementById('diagReportDuration');
  const diagReportWarranty = document.getElementById('diagReportWarranty');
  const btnDiagWhatsApp = document.getElementById('btnDiagWhatsApp');

  diagCatCards.forEach(card => {
    card.addEventListener('click', () => {
      const catKey = card.getAttribute('data-cat');
      const catData = diagData[catKey];
      if (!catData) return;

      if (diagSelectedCatName) diagSelectedCatName.textContent = catData.title;

      if (diagSymptomContainer) {
        diagSymptomContainer.innerHTML = '';
        catData.symptoms.forEach(item => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'symptom-option-btn';
          btn.innerHTML = `<span>${item.symptom}</span> <i class="fa-solid fa-chevron-right"></i>`;
          btn.addEventListener('click', () => {
            showDiagnosticReport(catData.title, item);
          });
          diagSymptomContainer.appendChild(btn);
        });
      }

      diagStep1.classList.add('d-none');
      diagStep2.classList.remove('d-none');
      diagStep3.classList.add('d-none');
    });
  });

  if (btnDiagBack) {
    btnDiagBack.addEventListener('click', () => {
      diagStep1.classList.remove('d-none');
      diagStep2.classList.add('d-none');
      diagStep3.classList.add('d-none');
    });
  }

  if (btnDiagRestart) {
    btnDiagRestart.addEventListener('click', () => {
      diagStep1.classList.remove('d-none');
      diagStep2.classList.add('d-none');
      diagStep3.classList.add('d-none');
    });
  }

  function showDiagnosticReport(catTitle, item) {
    if (diagReportTitle) diagReportTitle.textContent = item.diagnosis;
    if (diagReportAction) diagReportAction.textContent = item.action;
    if (diagReportDuration) diagReportDuration.textContent = item.duration;
    if (diagReportWarranty) diagReportWarranty.textContent = item.warranty;

    if (btnDiagWhatsApp) {
      const waMsg = `Merhaba CepHane İletişim, sitenizdeki Akıllı Teşhis aracını kullandım.
Cihazımdaki Kategori: ${catTitle}
Yaşadığım Sorun: ${item.symptom}
Önerilen İşlem: ${item.diagnosis}
Bu onarım için dükkanınıza gelip gözümün önünde yaptırmak istiyorum. Uygun randevu saatini ve fiyatını teyit eder misiniz?`;
      btnDiagWhatsApp.href = `https://wa.me/${CEPHANE_PHONE}?text=${encodeURIComponent(waMsg)}`;
    }

    diagStep1.classList.add('d-none');
    diagStep2.classList.add('d-none');
    diagStep3.classList.remove('d-none');
  }

  // ==========================================
  // SIFIR KAPALI KUTU CİHAZ YAPILANDIRICI & ANINDA FİYAT MOTORU
  // ==========================================
  const sifirModelPills = document.querySelectorAll('#sifirModelPills .cfg-pill');
  const sifirCapPills = document.querySelectorAll('#sifirCapacityPills .cfg-pill');
  const sifirColorSwatches = document.querySelectorAll('#sifirColorSwatches .color-swatch');
  const sifirWarrantyPills = document.querySelectorAll('#sifirWarrantyPills .cfg-pill');
  const chkSifirTradeIn = document.getElementById('chkSifirTradeIn');
  const inputSifirOldModel = document.getElementById('inputSifirOldModel');
  const sifirColorName = document.getElementById('sifirColorName');
  const btnSifirQuoteWhatsApp = document.getElementById('btnSifirQuoteWhatsApp');

  let currentSifirModel = 'iPhone 16 Pro';
  let currentSifirCap = '128 GB';
  let currentSifirColor = 'Çöl Titanyum (Desert)';
  let currentSifirWarranty = 'Apple Türkiye (2 Yıl Garantili)';

  function updateSifirWhatsAppUrl() {
    let msg = `Merhaba CepHane İletişim, sitenizden sıfır kapalı kutu cihaz için güncel spot fiyat ve stok teyidi almak istiyorum.

📦 *Talep Edilen Sıfır Cihaz:*
• Model: *${currentSifirModel}*
• Dahili Hafıza: *${currentSifirCap}*
• Renk: *${currentSifirColor}*
• Garanti Tipi: *${currentSifirWarranty}*`;

    if (chkSifirTradeIn && chkSifirTradeIn.checked) {
      const oldModelVal = (inputSifirOldModel && inputSifirOldModel.value.trim()) ? inputSifirOldModel.value.trim() : 'Mevcut telefonumu takasa verip üzerine ödeme yapmak istiyorum';
      msg += `\n\n🔄 *Takas (Eskiyi Getir Yeniyi Götür):*
• Takasa Verilecek Cihaz: *${oldModelVal}*`;
    }

    msg += `\n\n💬 _Esenyurt şubenizde bu cihazın kapalı kutu anlık nakit/havale spot fiyatını ve teslimat durumunu öğrenebilir miyim?_`;

    if (btnSifirQuoteWhatsApp) {
      btnSifirQuoteWhatsApp.href = `https://wa.me/${CEPHANE_PHONE}?text=${encodeURIComponent(msg)}`;
    }
  }

  if (sifirModelPills.length > 0) {
    sifirModelPills.forEach(pill => {
      pill.addEventListener('click', () => {
        sifirModelPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentSifirModel = pill.getAttribute('data-model') || pill.textContent.trim();
        updateSifirWhatsAppUrl();
      });
    });
  }

  if (sifirCapPills.length > 0) {
    sifirCapPills.forEach(pill => {
      pill.addEventListener('click', () => {
        sifirCapPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentSifirCap = pill.getAttribute('data-cap') || pill.textContent.trim();
        updateSifirWhatsAppUrl();
      });
    });
  }

  if (sifirColorSwatches.length > 0) {
    sifirColorSwatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        sifirColorSwatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        currentSifirColor = swatch.getAttribute('data-color') || 'Belirtilmedi';
        if (sifirColorName) {
          sifirColorName.textContent = currentSifirColor;
        }
        updateSifirWhatsAppUrl();
      });
    });
  }

  if (sifirWarrantyPills.length > 0) {
    sifirWarrantyPills.forEach(pill => {
      pill.addEventListener('click', () => {
        sifirWarrantyPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentSifirWarranty = pill.getAttribute('data-warranty') || pill.textContent.trim();
        updateSifirWhatsAppUrl();
      });
    });
  }

  if (chkSifirTradeIn) {
    chkSifirTradeIn.addEventListener('change', () => {
      if (inputSifirOldModel) {
        if (chkSifirTradeIn.checked) {
          inputSifirOldModel.classList.remove('d-none');
          inputSifirOldModel.focus();
        } else {
          inputSifirOldModel.classList.add('d-none');
        }
      }
      updateSifirWhatsAppUrl();
    });
  }

  if (inputSifirOldModel) {
    inputSifirOldModel.addEventListener('input', () => {
      updateSifirWhatsAppUrl();
    });
  }

  // İlk yüklemede WhatsApp butonunu hazırla
  updateSifirWhatsAppUrl();

});



/* ================================================================
   KUIS PINTAR NUSANTARA — SCRIPT.JS
   Semua logika: kuis, timer, skor, leaderboard, sertifikat,
   dark mode, animasi, sound effect, local storage
   ================================================================ */

"use strict";

/* ----------------------------------------------------------------
   1. DATABASE SOAL
   ---------------------------------------------------------------- */
const quizData = {

  /* ── MATEMATIKA ── */
  matematika: {
    label: "Matematika",
    icon:  "🧮",
    questions: [
      {
        q: "Berapakah hasil dari 25 × 4?",
        options: ["90", "100", "95", "85"],
        answer: 1
      },
      {
        q: "Berapakah hasil dari 1/2 + 1/4?",
        options: ["2/6", "3/4", "1/3", "2/4"],
        answer: 1
      },
      {
        q: "Keliling persegi dengan panjang sisi 8 cm adalah …",
        options: ["24 cm", "32 cm", "16 cm", "64 cm"],
        answer: 1
      },
      {
        q: "Berapakah hasil dari 72 ÷ 8?",
        options: ["7", "8", "9", "10"],
        answer: 2
      },
      {
        q: "Berapakah hasil dari 15²?",
        options: ["175", "215", "225", "200"],
        answer: 2
      },
      {
        q: "Luas persegi panjang dengan panjang 12 cm dan lebar 5 cm adalah …",
        options: ["34 cm²", "60 cm²", "17 cm²", "70 cm²"],
        answer: 1
      },
      {
        q: "Nilai dari 3/4 × 80 adalah …",
        options: ["55", "60", "65", "70"],
        answer: 1
      },
      {
        q: "FPB dari 24 dan 36 adalah …",
        options: ["6", "9", "12", "18"],
        answer: 2
      },
      {
        q: "Jika x + 15 = 40, maka nilai x adalah …",
        options: ["20", "25", "30", "35"],
        answer: 1
      },
      {
        q: "Volume kubus dengan rusuk 5 cm adalah …",
        options: ["75 cm³", "100 cm³", "125 cm³", "150 cm³"],
        answer: 2
      }
    ]
  },

  /* ── IPA ── */
  ipa: {
    label: "IPA",
    icon:  "🔬",
    questions: [
      {
        q: "Organ pernapasan utama pada manusia adalah …",
        options: ["Jantung", "Paru-paru", "Hati", "Lambung"],
        answer: 1
      },
      {
        q: "Planet terbesar di tata surya adalah …",
        options: ["Saturnus", "Uranus", "Bumi", "Jupiter"],
        answer: 3
      },
      {
        q: "Sumber energi utama bagi kehidupan di Bumi adalah …",
        options: ["Bulan", "Bintang", "Matahari", "Angin"],
        answer: 2
      },
      {
        q: "Hewan berikut yang berkembang biak dengan bertelur adalah …",
        options: ["Kucing", "Kelinci", "Ayam", "Kambing"],
        answer: 2
      },
      {
        q: "Fungsi utama akar pada tumbuhan adalah …",
        options: [
          "Membuat makanan",
          "Menyerap air dan mineral",
          "Menghasilkan oksigen",
          "Menyimpan biji"
        ],
        answer: 1
      },
      {
        q: "Proses perubahan air menjadi uap air disebut …",
        options: ["Kondensasi", "Presipitasi", "Evaporasi", "Infiltrasi"],
        answer: 2
      },
      {
        q: "Bagian sel yang mengandung klorofil dan berfungsi untuk fotosintesis adalah …",
        options: ["Mitokondria", "Kloroplas", "Nukleus", "Vakuola"],
        answer: 1
      },
      {
        q: "Gaya yang bekerja pada benda yang jatuh ke bawah disebut …",
        options: ["Gaya magnet", "Gaya gesek", "Gaya listrik", "Gaya gravitasi"],
        answer: 3
      },
      {
        q: "Hewan yang mengalami metamorfosis sempurna adalah …",
        options: ["Belalang", "Kecoa", "Kupu-kupu", "Jangkrik"],
        answer: 2
      },
      {
        q: "Zat yang diperlukan tumbuhan untuk melakukan fotosintesis adalah …",
        options: [
          "Oksigen dan air",
          "Karbon dioksida dan air",
          "Oksigen dan karbon dioksida",
          "Air dan nitrogen"
        ],
        answer: 1
      }
    ]
  },

  /* ── BAHASA INDONESIA ── */
  bahasa: {
    label: "Bahasa Indonesia",
    icon:  "📖",
    questions: [
      {
        q: "Antonim (lawan kata) dari kata \"besar\" adalah …",
        options: ["Luas", "Kecil", "Tinggi", "Tebal"],
        answer: 1
      },
      {
        q: "Kalimat yang penulisannya benar sesuai EYD adalah …",
        options: [
          "saya pergi ke sekolah",
          "Saya pergi kesekolah.",
          "Saya pergi ke sekolah.",
          "saya Pergi ke Sekolah."
        ],
        answer: 2
      },
      {
        q: "Ide pokok dalam sebuah paragraf disebut …",
        options: ["Kalimat penjelas", "Kalimat utama", "Kalimat penutup", "Kalimat tanya"],
        answer: 1
      },
      {
        q: "Sinonim (persamaan kata) dari kata \"indah\" adalah …",
        options: ["Jelek", "Kotor", "Cantik", "Buruk"],
        answer: 2
      },
      {
        q: "Jenis teks yang berisi langkah-langkah atau petunjuk cara melakukan sesuatu disebut …",
        options: ["Teks narasi", "Teks deskripsi", "Teks prosedur", "Teks persuasi"],
        answer: 2
      },
      {
        q: "Kata \"berlari\" termasuk jenis kata …",
        options: ["Kata benda", "Kata kerja", "Kata sifat", "Kata keterangan"],
        answer: 1
      },
      {
        q: "Tanda baca yang digunakan untuk mengakhiri kalimat tanya adalah …",
        options: ["Titik (.)", "Koma (,)", "Tanda seru (!)", "Tanda tanya (?)"],
        answer: 3
      },
      {
        q: "Kumpulan beberapa kalimat yang membentuk satu topik bahasan disebut …",
        options: ["Paragraf", "Bab", "Subbab", "Alinea judul"],
        answer: 0
      },
      {
        q: "Kata \"kemerdekaan\" berasal dari kata dasar …",
        options: ["Merdekaan", "Merdeka", "Ke-merdeka", "Deka"],
        answer: 1
      },
      {
        q: "Teks yang bertujuan memengaruhi pembaca untuk setuju dengan pendapat penulis disebut …",
        options: ["Teks eksposisi", "Teks narasi", "Teks persuasi", "Teks laporan"],
        answer: 2
      }
    ]
  }
};

/* ----------------------------------------------------------------
   2. STATE APLIKASI (variabel global)
   ---------------------------------------------------------------- */
let currentSubject    = null;   // 'matematika' | 'ipa' | 'bahasa'
let currentQuestion   = 0;      // indeks soal aktif (0–9)
let userAnswers       = [];     // array jawaban user [-1 = belum jawab]
let score             = 0;      // skor sementara
let timerInterval     = null;   // referensi interval timer
let timeLeft          = 900;    // detik (15 menit)
let studentName       = "";     // nama siswa
let quizStarted       = false;  // flag kuis sudah dimulai
let currentTab        = "all";  // tab aktif leaderboard

/* ----------------------------------------------------------------
   3. DOM ELEMENT REFERENCES
   ---------------------------------------------------------------- */
const $ = (id) => document.getElementById(id);

const DOM = {
  header:             $("header"),
  darkModeBtn:        $("darkModeBtn"),
  darkModeIcon:       $("darkModeIcon"),
  hamburger:          $("hamburger"),
  nav:                $("nav"),
  startBtn:           $("startBtn"),
  leaderboardBtn:     $("leaderboardBtn"),

  // Sections
  heroSection:        $("hero"),
  subjectsSection:    $("subjects"),
  quizSection:        $("quizSection"),
  resultSection:      $("resultSection"),
  leaderboardSection: $("leaderboardSection"),
  aboutSection:       $("about"),

  // Name Modal
  nameModal:          $("nameModal"),
  studentNameInput:   $("studentName"),
  subjectSelected:    $("subjectSelected"),
  selectedSubjectName:$("selectedSubjectName"),
  startQuizBtn:       $("startQuizBtn"),
  cancelQuizBtn:      $("cancelQuizBtn"),

  // Quiz Area
  quizArea:           $("quizArea"),
  quizSubjectBadge:   $("quizSubjectBadge"),
  quizStudentName:    $("quizStudentName"),
  quizTimer:          $("quizTimer"),
  timerDisplay:       $("timerDisplay"),
  questionCounter:    $("questionCounter"),
  scoreDisplay:       $("scoreDisplay"),
  progressBar:        $("progressBar"),
  questionCard:       $("questionCard"),
  questionNumber:     $("questionNumber"),
  questionText:       $("questionText"),
  optionsGrid:        $("optionsGrid"),
  prevBtn:            $("prevBtn"),
  nextBtn:            $("nextBtn"),
  quizDots:           $("quizDots"),
  submitQuizBtn:      $("submitQuizBtn"),

  // Result
  resultEmoji:        $("resultEmoji"),
  resultStudentName:  $("resultStudentName"),
  resultSubjectBadge: $("resultSubjectBadge"),
  ringProgress:       $("ringProgress"),
  finalScore:         $("finalScore"),
  resultCategory:     $("resultCategory"),
  correctCount:       $("correctCount"),
  wrongCount:         $("wrongCount"),
  percentCount:       $("percentCount"),
  retryBtn:           $("retryBtn"),
  backHomeBtn:        $("backHomeBtn"),
  certificateBtn:     $("certificateBtn"),

  // Leaderboard
  leaderboardBody:    $("leaderboardBody"),
  backFromLeaderboard:$("backFromLeaderboard"),
  clearLeaderboard:   $("clearLeaderboard"),

  // Toast
  toast:              $("toast"),

  // Certificate
  certOverlay:        $("certOverlay"),
  certCanvas:         $("certCanvas"),
  downloadCertBtn:    $("downloadCertBtn"),
  closeCertBtn:       $("closeCertBtn"),
};

/* ----------------------------------------------------------------
   4. AUDIO — Sound Effects menggunakan Web Audio API
   ---------------------------------------------------------------- */

/** Membuat AudioContext secara lazy (dibuat sekali saat pertama dipakai) */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

/**
 * Memainkan nada sederhana (beep)
 * @param {number} freq        - Frekuensi Hz
 * @param {number} duration    - Durasi detik
 * @param {string} type        - OscillatorType: 'sine' | 'square' | 'triangle'
 * @param {number} gainValue   - Volume 0–1
 */
function playTone(freq, duration, type = "sine", gainValue = 0.3) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(gainValue, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    /* Abaikan jika browser tidak mendukung */
  }
}

/** Sound: jawaban benar */
function soundCorrect() {
  playTone(523, 0.12, "sine");         // C5
  setTimeout(() => playTone(659, 0.15, "sine"), 100); // E5
  setTimeout(() => playTone(784, 0.20, "sine"), 200); // G5
}

/** Sound: jawaban salah */
function soundWrong() {
  playTone(300, 0.15, "square", 0.2);
  setTimeout(() => playTone(220, 0.25, "square", 0.2), 120);
}

/** Sound: kuis selesai */
function soundFinish() {
  const notes = [523, 659, 784, 1047];
  notes.forEach((note, i) => {
    setTimeout(() => playTone(note, 0.25, "sine", 0.25), i * 120);
  });
}

/* ----------------------------------------------------------------
   5. TOAST NOTIFICATION
   ---------------------------------------------------------------- */
let toastTimeout = null;

/**
 * Menampilkan pesan toast sementara
 * @param {string} msg   - Teks pesan
 * @param {string} type  - 'correct-toast' | 'wrong-toast' | 'info-toast'
 * @param {number} dur   - Durasi tampil (ms), default 2200
 */
function showToast(msg, type = "info-toast", dur = 2200) {
  const t = DOM.toast;
  t.textContent = msg;
  t.className = `toast ${type} show`;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    t.className = "toast";
  }, dur);
}

/* ----------------------------------------------------------------
   6. DARK MODE
   ---------------------------------------------------------------- */

/** Menginisialisasi tema dari localStorage */
function initTheme() {
  const saved = localStorage.getItem("kpn_theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateDarkModeIcon(saved);
}

/** Memperbarui ikon tombol dark mode */
function updateDarkModeIcon(theme) {
  DOM.darkModeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

/** Toggle dark/light mode */
function toggleDarkMode() {
  const current = document.documentElement.getAttribute("data-theme");
  const next    = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("kpn_theme", next);
  updateDarkModeIcon(next);
}

/* ----------------------------------------------------------------
   7. HAMBURGER MENU (Mobile)
   ---------------------------------------------------------------- */
function toggleNav() {
  DOM.hamburger.classList.toggle("active");
  DOM.nav.classList.toggle("open");
}

function closeNav() {
  DOM.hamburger.classList.remove("active");
  DOM.nav.classList.remove("open");
}

/* ----------------------------------------------------------------
   8. SECTION VISIBILITY HELPERS
   ---------------------------------------------------------------- */

/** Menyembunyikan semua section utama */
function hideAllSections() {
  DOM.quizSection.style.display        = "none";
  DOM.resultSection.style.display      = "none";
  DOM.leaderboardSection.style.display = "none";
  DOM.nameModal.style.display          = "none";
  DOM.quizArea.style.display           = "none";
}

/** Menampilkan hero + subjects (halaman beranda) */
function showHome() {
  hideAllSections();
  DOM.heroSection.style.display     = "";
  DOM.subjectsSection.style.display = "";
  DOM.aboutSection.style.display    = "";
  $("footer").style.display         = "";
}

/** Scroll halus ke section kuis */
function scrollToQuiz() {
  DOM.quizSection.scrollIntoView({ behavior: "smooth" });
}

/* ----------------------------------------------------------------
   9. NAMA MODAL — Input nama siswa sebelum kuis
   ---------------------------------------------------------------- */

/**
 * Membuka modal input nama untuk mata pelajaran tertentu
 * @param {string} subject - 'matematika' | 'ipa' | 'bahasa'
 */
function openNameModal(subject) {
  currentSubject = subject;
  const label = quizData[subject].label;

  DOM.selectedSubjectName.textContent = `${quizData[subject].icon} ${label}`;
  DOM.studentNameInput.value = "";

  // Tampilkan quiz section & name modal
  hideAllSections();
  DOM.heroSection.style.display     = "";
  DOM.subjectsSection.style.display = "";
  DOM.aboutSection.style.display    = "";
  $("footer").style.display         = "";
  DOM.quizSection.style.display     = "block";
  DOM.nameModal.style.display       = "flex";

  scrollToQuiz();
  setTimeout(() => DOM.studentNameInput.focus(), 400);
}

/* ----------------------------------------------------------------
   10. TIMER
   ---------------------------------------------------------------- */

/** Memulai countdown timer */
function startTimer() {
  timeLeft = 900; // reset ke 15 menit
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    // Warna merah + blink ketika ≤ 60 detik
    if (timeLeft <= 60) {
      DOM.quizTimer.classList.add("urgent");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showToast("⏰ Waktu habis! Kuis otomatis diselesaikan.", "info-toast", 3000);
      submitQuiz(true); // auto submit
    }
  }, 1000);
}

/** Menghentikan timer */
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

/** Memperbarui tampilan timer */
function updateTimerDisplay() {
  const m = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const s = (timeLeft % 60).toString().padStart(2, "0");
  DOM.timerDisplay.textContent = `${m}:${s}`;
}

/* ----------------------------------------------------------------
   11. QUIZ DOTS (Indikator Nomor Soal)
   ---------------------------------------------------------------- */

/** Membuat dot indikator sebanyak jumlah soal */
function buildDots(total) {
  DOM.quizDots.innerHTML = "";
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.dataset.index = i;
    dot.addEventListener("click", () => goToQuestion(i));
    DOM.quizDots.appendChild(dot);
  }
}

/** Memperbarui status dot */
function updateDots() {
  const dots = DOM.quizDots.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.className = "dot";
    if (userAnswers[i] !== -1)  dot.classList.add("answered");
    if (i === currentQuestion)  dot.classList.add("active");
  });
}

/* ----------------------------------------------------------------
   12. RENDER SOAL
   ---------------------------------------------------------------- */

/**
 * Menampilkan soal ke-n dengan animasi
 * @param {number} index - Indeks soal (0-based)
 */
function renderQuestion(index) {
  const questions = quizData[currentSubject].questions;
  const total     = questions.length;
  const q         = questions[index];

  // Animasi slide in
  DOM.questionCard.classList.remove("animate-in");
  void DOM.questionCard.offsetWidth; // force reflow
  DOM.questionCard.classList.add("animate-in");

  // Isi nomor soal
  DOM.questionNumber.textContent = `SOAL ${String(index + 1).padStart(2, "0")}`;
  // Isi teks soal
  DOM.questionText.textContent = q.q;

  // Render pilihan jawaban
  const labels = ["A", "B", "C", "D"];
  DOM.optionsGrid.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-label">${labels[i]}</span><span>${opt}</span>`;
    btn.dataset.index = i;

    // Tandai jawaban yang sudah dipilih sebelumnya
    if (userAnswers[index] === i) {
      btn.classList.add("selected");
    }

    btn.addEventListener("click", () => selectAnswer(i));
    DOM.optionsGrid.appendChild(btn);
  });

  // Update counter & progress bar
  DOM.questionCounter.textContent = `Soal ${index + 1} / ${total}`;
  DOM.progressBar.style.width     = `${((index + 1) / total) * 100}%`;

  // Update tombol prev/next
  DOM.prevBtn.disabled = index === 0;
  DOM.nextBtn.disabled = index === total - 1;

  // Update dots
  updateDots();
}

/* ----------------------------------------------------------------
   13. PILIH JAWABAN
   ---------------------------------------------------------------- */

/**
 * Menangani klik pilihan jawaban
 * @param {number} optionIndex - Indeks opsi yang dipilih (0–3)
 */
function selectAnswer(optionIndex) {
  // Catat jawaban
  userAnswers[currentQuestion] = optionIndex;

  // Update visual pilihan (hapus semua, set yang dipilih)
  const btns = DOM.optionsGrid.querySelectorAll(".option-btn");
  btns.forEach((btn, i) => {
    btn.classList.remove("selected");
    if (i === optionIndex) btn.classList.add("selected");
  });

  // Update dots
  updateDots();

  // Update skor display (hitung ulang)
  updateScoreDisplay();
}

/** Menghitung skor berdasarkan jawaban yang sudah diisi */
function calculateScore() {
  const questions = quizData[currentSubject].questions;
  let correct = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) correct++;
  });
  return correct;
}

/** Memperbarui tampilan skor sementara */
function updateScoreDisplay() {
  const correct = calculateScore();
  DOM.scoreDisplay.textContent = `Skor: ${correct * 10}`;
}

/* ----------------------------------------------------------------
   14. NAVIGASI SOAL
   ---------------------------------------------------------------- */

/** Pindah ke soal tertentu (dari klik dot) */
function goToQuestion(index) {
  currentQuestion = index;
  renderQuestion(currentQuestion);
}

/** Soal berikutnya */
function nextQuestion() {
  const total = quizData[currentSubject].questions.length;
  if (currentQuestion < total - 1) {
    currentQuestion++;
    renderQuestion(currentQuestion);
  }
}

/** Soal sebelumnya */
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion(currentQuestion);
  }
}

/* ----------------------------------------------------------------
   15. MEMULAI KUIS
   ---------------------------------------------------------------- */

/** Memulai kuis setelah nama diinput */
function startQuiz() {
  const name = DOM.studentNameInput.value.trim();
  if (!name) {
    showToast("⚠️ Masukkan namamu terlebih dahulu!", "wrong-toast");
    DOM.studentNameInput.focus();
    return;
  }
  if (!currentSubject) {
    showToast("⚠️ Pilih mata pelajaran terlebih dahulu!", "wrong-toast");
    return;
  }

  studentName   = name;
  quizStarted   = true;
  currentQuestion = 0;
  userAnswers   = new Array(quizData[currentSubject].questions.length).fill(-1);
  score         = 0;

  // Isi header kuis
  DOM.quizSubjectBadge.textContent = `${quizData[currentSubject].icon} ${quizData[currentSubject].label}`;
  DOM.quizStudentName.textContent  = `👤 ${studentName}`;
  DOM.quizTimer.classList.remove("urgent");

  // Sembunyikan modal, tampilkan area kuis
  DOM.nameModal.style.display = "none";
  DOM.quizArea.style.display  = "block";

  // Bangun dots
  buildDots(quizData[currentSubject].questions.length);
  // Render soal pertama
  renderQuestion(0);
  updateScoreDisplay();

  // Mulai timer
  startTimer();

  scrollToQuiz();
  showToast(`🚀 Kuis dimulai! Semangat, ${studentName}!`, "info-toast", 2500);
}

/* ----------------------------------------------------------------
   16. SUBMIT & HITUNG HASIL KUIS
   ---------------------------------------------------------------- */

/**
 * Menyelesaikan kuis dan menampilkan hasil
 * @param {boolean} autoSubmit - true jika dipicu oleh habisnya waktu
 */
function submitQuiz(autoSubmit = false) {
  if (!quizStarted) return;

  // Konfirmasi jika masih ada soal yang belum dijawab (kecuali auto submit)
  if (!autoSubmit) {
    const unanswered = userAnswers.filter(a => a === -1).length;
    if (unanswered > 0) {
      const ok = confirm(
        `Masih ada ${unanswered} soal yang belum dijawab.\nApakah kamu yakin ingin menyelesaikan kuis?`
      );
      if (!ok) return;
    }
  }

  stopTimer();
  quizStarted = false;

  // Hitung skor final
  const questions  = quizData[currentSubject].questions;
  let correctCount = 0;
  let wrongCount   = 0;

  questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) correctCount++;
    else if (userAnswers[i] !== -1) wrongCount++;
  });

  const finalScore    = correctCount * 10;
  const percent       = Math.round((correctCount / questions.length) * 100);
  const categoryData  = getCategory(finalScore);

  // Simpan ke leaderboard
  saveToLeaderboard(studentName, currentSubject, finalScore, categoryData.label);

  // Sound finish
  soundFinish();

  // Tampilkan section hasil
  showResultSection(finalScore, correctCount, wrongCount, percent, categoryData);
}

/* ----------------------------------------------------------------
   17. KATEGORI NILAI
   ---------------------------------------------------------------- */

/**
 * Menentukan kategori berdasarkan skor
 * @param {number} score - Nilai 0–100
 * @returns {{ label: string, cls: string, emoji: string }}
 */
function getCategory(score) {
  if (score >= 90) return { label: "Sangat Baik 🌟",  cls: "cat-sangat-baik",   emoji: "🏆" };
  if (score >= 80) return { label: "Baik 👍",          cls: "cat-baik",          emoji: "🎉" };
  if (score >= 70) return { label: "Cukup 😊",         cls: "cat-cukup",         emoji: "👏" };
  return                   { label: "Perlu Belajar Lagi 📚", cls: "cat-perlu-belajar", emoji: "💪" };
}

/* ----------------------------------------------------------------
   18. SECTION HASIL
   ---------------------------------------------------------------- */

/**
 * Mengisi dan menampilkan halaman hasil kuis
 */
function showResultSection(finalScore, correctCount, wrongCount, percent, categoryData) {
  // Sembunyikan elemen lain
  DOM.quizSection.style.display        = "block";
  DOM.quizArea.style.display           = "none";
  DOM.nameModal.style.display          = "none";
  DOM.resultSection.style.display      = "block";

  // Isi data hasil
  DOM.resultEmoji.textContent        = categoryData.emoji;
  DOM.resultStudentName.textContent  = studentName;
  DOM.resultSubjectBadge.textContent = `${quizData[currentSubject].icon} ${quizData[currentSubject].label}`;
  DOM.finalScore.textContent         = finalScore;
  DOM.correctCount.textContent       = correctCount;
  DOM.wrongCount.textContent         = wrongCount;
  DOM.percentCount.textContent       = `${percent}%`;

  // Set kategori
  DOM.resultCategory.textContent  = categoryData.label;
  DOM.resultCategory.className    = `result-category ${categoryData.cls}`;

  // Animasi ring skor
  animateScoreRing(percent);

  // Tampilkan tombol sertifikat jika skor ≥ 80
  if (finalScore >= 80) {
    DOM.certificateBtn.style.display = "inline-flex";
  } else {
    DOM.certificateBtn.style.display = "none";
  }

  // Scroll ke hasil
  DOM.resultSection.scrollIntoView({ behavior: "smooth" });
}

/** Animasi lingkaran skor SVG */
function animateScoreRing(percent) {
  const circumference = 2 * Math.PI * 54; // r=54 → ~339.29
  const offset        = circumference - (percent / 100) * circumference;

  // Reset dulu
  DOM.ringProgress.style.strokeDashoffset = circumference;
  DOM.ringProgress.style.stroke = "url(#scoreGrad)";

  // Inject gradient ke SVG jika belum ada
  ensureSvgGradient();

  setTimeout(() => {
    DOM.ringProgress.style.strokeDashoffset = offset;
  }, 300);
}

/** Memastikan SVG gradient sudah ada di DOM */
function ensureSvgGradient() {
  if ($("scoreGrad")) return;
  const svg  = DOM.ringProgress.closest("svg");
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#2563EB" />
      <stop offset="100%" stop-color="#7C3AED" />
    </linearGradient>
  `;
  svg.prepend(defs);
}

/* ----------------------------------------------------------------
   19. LOCAL STORAGE — LEADERBOARD
   ---------------------------------------------------------------- */
const LS_KEY = "kpn_leaderboard";

/**
 * Menyimpan hasil kuis ke localStorage
 */
function saveToLeaderboard(name, subject, score, category) {
  const data = getLeaderboardData();
  data.push({
    name,
    subject,
    subjectLabel: quizData[subject].label,
    score,
    category,
    date: new Date().toLocaleDateString("id-ID", {
      day:   "2-digit",
      month: "short",
      year:  "numeric"
    })
  });
  // Urutkan descending berdasarkan skor
  data.sort((a, b) => b.score - a.score);
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}

/** Mengambil data leaderboard dari localStorage */
function getLeaderboardData() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || [];
  } catch {
    return [];
  }
}

/** Menghapus semua data leaderboard */
function clearLeaderboardData() {
  if (confirm("Apakah kamu yakin ingin menghapus semua riwayat nilai?")) {
    localStorage.removeItem(LS_KEY);
    renderLeaderboard(currentTab);
    showToast("🗑️ Riwayat nilai berhasil dihapus.", "info-toast");
  }
}

/* ----------------------------------------------------------------
   20. RENDER LEADERBOARD
   ---------------------------------------------------------------- */

/**
 * Merender tabel leaderboard berdasarkan filter tab
 * @param {string} filter - 'all' | 'matematika' | 'ipa' | 'bahasa'
 */
function renderLeaderboard(filter = "all") {
  let data = getLeaderboardData();
  if (filter !== "all") {
    data = data.filter(d => d.subject === filter);
  }

  if (data.length === 0) {
    DOM.leaderboardBody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-row">
          Belum ada data untuk kategori ini. Mulai kuis sekarang!
        </td>
      </tr>`;
    return;
  }

  const categoryColorMap = {
    "Sangat Baik 🌟":       "#22C55E",
    "Baik 👍":              "#2563EB",
    "Cukup 😊":             "#F59E0B",
    "Perlu Belajar Lagi 📚":"#EF4444"
  };

  DOM.leaderboardBody.innerHTML = data.map((row, i) => {
    const rankIcon  = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}`;
    const color     = categoryColorMap[row.category] || "#64748B";
    const subIcon   = quizData[row.subject]?.icon || "📚";
    return `
      <tr>
        <td><span class="rank-badge">${rankIcon}</span></td>
        <td><strong>${escapeHtml(row.name)}</strong></td>
        <td>${subIcon} ${row.subjectLabel}</td>
        <td><span class="score-badge-table">${row.score}</span></td>
        <td style="color:${color};font-weight:600;">${row.category}</td>
        <td style="color:var(--text-muted);font-size:0.82rem;">${row.date}</td>
      </tr>
    `;
  }).join("");
}

/** Escape HTML untuk keamanan */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Menampilkan section leaderboard */
function showLeaderboard() {
  hideAllSections();
  DOM.heroSection.style.display     = "none";
  DOM.subjectsSection.style.display = "none";
  DOM.aboutSection.style.display    = "none";
  $("footer").style.display         = "";
  DOM.leaderboardSection.style.display = "block";

  currentTab = "all";
  // Aktifkan tab 'all'
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === "all");
  });
  renderLeaderboard("all");
  DOM.leaderboardSection.scrollIntoView({ behavior: "smooth" });
}

/* ----------------------------------------------------------------
   21. SERTIFIKAT DIGITAL (Canvas)
   ---------------------------------------------------------------- */

/** Menghasilkan dan menampilkan sertifikat di canvas */
function generateCertificate() {
  const canvas  = DOM.certCanvas;
  const ctx     = canvas.getContext("2d");
  const W       = canvas.width;   // 900
  const H       = canvas.height;  // 620

  // ── Background Gradient ──
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0,   "#EFF6FF");
  bg.addColorStop(0.5, "#F5F3FF");
  bg.addColorStop(1,   "#FEF9C3");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // ── Border Dekoratif ──
  ctx.strokeStyle = "#2563EB";
  ctx.lineWidth   = 8;
  ctx.strokeRect(20, 20, W - 40, H - 40);

  ctx.strokeStyle = "#FACC15";
  ctx.lineWidth   = 3;
  ctx.strokeRect(30, 30, W - 60, H - 60);

  // ── Corner Ornament ──
  drawCornerStar(ctx, 50,  50,  "#2563EB");
  drawCornerStar(ctx, W - 50, 50,  "#FACC15");
  drawCornerStar(ctx, 50,  H - 50, "#FACC15");
  drawCornerStar(ctx, W - 50, H - 50, "#2563EB");

  // ── Logo / Ikon ──
  ctx.font      = "56px serif";
  ctx.textAlign = "center";
  ctx.fillText("🎓", W / 2, 105);

  // ── Judul Sertifikat ──
  ctx.fillStyle = "#2563EB";
  ctx.font      = "bold 32px 'Arial', sans-serif";
  ctx.textAlign = "center";
  ctx.letterSpacing = "6px";
  ctx.fillText("SERTIFIKAT PENGHARGAAN", W / 2, 158);
  ctx.letterSpacing = "0px";

  // ── Garis Bawah Judul ──
  const gradLine = ctx.createLinearGradient(W / 2 - 200, 0, W / 2 + 200, 0);
  gradLine.addColorStop(0,   "#2563EB");
  gradLine.addColorStop(0.5, "#7C3AED");
  gradLine.addColorStop(1,   "#FACC15");
  ctx.strokeStyle = gradLine;
  ctx.lineWidth   = 3;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 220, 170);
  ctx.lineTo(W / 2 + 220, 170);
  ctx.stroke();

  // ── Sub Judul ──
  ctx.fillStyle = "#64748B";
  ctx.font      = "16px Arial, sans-serif";
  ctx.fillText("Kuis Pintar Nusantara — Platform Edukasi SD & SMP", W / 2, 198);

  // ── Teks "Diberikan Kepada" ──
  ctx.fillStyle = "#475569";
  ctx.font      = "italic 17px Georgia, serif";
  ctx.fillText("Dengan bangga diberikan kepada:", W / 2, 248);

  // ── Nama Siswa ──
  const nameGrad = ctx.createLinearGradient(W / 2 - 200, 0, W / 2 + 200, 0);
  nameGrad.addColorStop(0,   "#1D4ED8");
  nameGrad.addColorStop(1,   "#7C3AED");
  ctx.fillStyle = nameGrad;
  ctx.font      = "bold 46px Georgia, serif";
  ctx.fillText(studentName, W / 2, 305);

  // ── Garis di Bawah Nama ──
  ctx.strokeStyle = "#FACC15";
  ctx.lineWidth   = 2;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 180, 318);
  ctx.lineTo(W / 2 + 180, 318);
  ctx.stroke();

  // ── Teks Pencapaian ──
  const subjectLabel = quizData[currentSubject].label;
  const subjectIcon  = quizData[currentSubject].icon;
  const correctAns   = parseInt(DOM.correctCount.textContent);
  const totalScore   = parseInt(DOM.finalScore.textContent);
  const category     = DOM.resultCategory.textContent;

  ctx.fillStyle = "#334155";
  ctx.font      = "16px Arial, sans-serif";
  ctx.fillText(
    `Telah berhasil menyelesaikan Kuis ${subjectIcon} ${subjectLabel}`,
    W / 2, 358
  );
  ctx.fillText(
    `dengan menjawab ${correctAns} soal benar dari 10 soal`,
    W / 2, 382
  );

  // ── Kotak Skor ──
  const scoreBoxX = W / 2 - 130;
  const scoreBoxY = 405;

  const scoreBoxGrad = ctx.createLinearGradient(scoreBoxX, scoreBoxY, scoreBoxX + 260, scoreBoxY + 60);
  scoreBoxGrad.addColorStop(0, "#2563EB");
  scoreBoxGrad.addColorStop(1, "#7C3AED");
  ctx.fillStyle = scoreBoxGrad;
  roundRect(ctx, scoreBoxX, scoreBoxY, 260, 58, 14, true, false);

  ctx.fillStyle = "#fff";
  ctx.font      = "bold 24px Arial, sans-serif";
  ctx.fillText(`Skor: ${totalScore} / 100 — ${category}`, W / 2, 441);

  // ── Tanggal ──
  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day:     "numeric",
    month:   "long",
    year:    "numeric"
  });
  ctx.fillStyle = "#64748B";
  ctx.font      = "14px Arial, sans-serif";
  ctx.fillText(today, W / 2, 492);

  // ── Footer Sertifikat ──
  ctx.strokeStyle = "#E2E8F0";
  ctx.lineWidth   = 1;
  ctx.beginPath();
  ctx.moveTo(60, 515);
  ctx.lineTo(W - 60, 515);
  ctx.stroke();

  ctx.fillStyle = "#94A3B8";
  ctx.font      = "12px Arial, sans-serif";
  ctx.fillText("© 2026 Kuis Pintar Nusantara — Belajar lebih mudah, cerdas, dan menyenangkan.", W / 2, 538);

  // ── Stempel / Seal ──
  drawSeal(ctx, W - 130, H - 120);

  // ── Tanda Tangan (Dekoratif) ──
  ctx.strokeStyle = "#2563EB";
  ctx.lineWidth   = 2;
  ctx.beginPath();
  ctx.moveTo(150, 560);
  ctx.quadraticCurveTo(185, 545, 200, 560);
  ctx.quadraticCurveTo(220, 575, 250, 558);
  ctx.stroke();

  ctx.fillStyle = "#475569";
  ctx.font      = "12px Arial, sans-serif";
  ctx.fillText("Tim Kuis Pintar Nusantara", 200, 578);

  // Tampilkan overlay
  DOM.certOverlay.style.display = "flex";
}

/** Menggambar bintang kecil di sudut sertifikat */
function drawCornerStar(ctx, x, y, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = color;
  ctx.font = "22px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("✦", 0, 0);
  ctx.restore();
}

/** Menggambar stempel bulat */
function drawSeal(ctx, x, y) {
  ctx.save();
  ctx.translate(x, y);

  // Lingkaran luar
  ctx.strokeStyle = "#2563EB";
  ctx.lineWidth   = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 45, 0, Math.PI * 2);
  ctx.stroke();

  // Lingkaran dalam
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, 38, 0, Math.PI * 2);
  ctx.stroke();

  // Ikon tengah
  ctx.font      = "28px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🎓", 0, 0);

  // Teks melingkar (simulasi)
  ctx.fillStyle = "#2563EB";
  ctx.font      = "bold 8px Arial";
  ctx.textBaseline = "alphabetic";
  const text    = "KUIS PINTAR NUSANTARA · 2026 ·";
  const radius  = 32;
  const letters = text.split("");
  const total   = letters.length;
  letters.forEach((letter, i) => {
    const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
    ctx.save();
    ctx.translate(
      radius * Math.cos(angle),
      radius * Math.sin(angle)
    );
    ctx.rotate(angle + Math.PI / 2);
    ctx.fillText(letter, 0, 0);
    ctx.restore();
  });

  ctx.restore();
}

/** Helper: menggambar rect dengan sudut membulat */
function roundRect(ctx, x, y, w, h, r, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  if (fill)   ctx.fill();
  if (stroke) ctx.stroke();
}

/** Mengunduh sertifikat sebagai file PNG */
function downloadCertificate() {
  const canvas   = DOM.certCanvas;
  const link     = document.createElement("a");
  const subject  = quizData[currentSubject].label.replace(/\s+/g, "_");
  link.download  = `Sertifikat_${studentName.replace(/\s+/g, "_")}_${subject}.png`;
  link.href      = canvas.toDataURL("image/png");
  link.click();
  showToast("✅ Sertifikat berhasil diunduh!", "correct-toast");
}

/* ----------------------------------------------------------------
   22. EVENT LISTENERS
   ---------------------------------------------------------------- */
function initEventListeners() {

  /* ── Dark Mode ── */
  DOM.darkModeBtn.addEventListener("click", toggleDarkMode);

  /* ── Hamburger (Mobile) ── */
  DOM.hamburger.addEventListener("click", toggleNav);

  /* ── Klik link nav ── */
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      const subject = link.dataset.subject;
      closeNav();
      if (subject) {
        e.preventDefault();
        openNameModal(subject);
      }
    });
  });

  /* ── Tombol "Mulai Belajar" di hero ── */
  DOM.startBtn.addEventListener("click", () => {
    DOM.subjectsSection.scrollIntoView({ behavior: "smooth" });
  });

  /* ── Tombol "Papan Skor" di hero ── */
  DOM.leaderboardBtn.addEventListener("click", showLeaderboard);

  /* ── Klik kartu mata pelajaran ── */
  document.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", () => {
      const subject = card.dataset.subject;
      openNameModal(subject);
    });
  });

  /* ── Tombol Mulai Kuis (di modal) ── */
  DOM.startQuizBtn.addEventListener("click", startQuiz);

  /* ── Enter pada input nama ── */
  DOM.studentNameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") startQuiz();
  });

  /* ── Tombol Batal (tutup modal) ── */
  DOM.cancelQuizBtn.addEventListener("click", () => {
    DOM.quizSection.style.display = "none";
    DOM.nameModal.style.display   = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ── Navigasi soal ── */
  DOM.nextBtn.addEventListener("click", nextQuestion);
  DOM.prevBtn.addEventListener("click", prevQuestion);

  /* ── Submit kuis ── */
  DOM.submitQuizBtn.addEventListener("click", () => submitQuiz(false));

  /* ── Tombol Coba Lagi ── */
  DOM.retryBtn.addEventListener("click", () => {
    DOM.resultSection.style.display = "none";
    openNameModal(currentSubject);
  });

  /* ── Tombol Beranda (dari hasil) ── */
  DOM.backHomeBtn.addEventListener("click", () => {
    DOM.resultSection.style.display = "none";
    DOM.quizSection.style.display   = "none";
    showHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ── Tombol Unduh Sertifikat ── */
  DOM.certificateBtn.addEventListener("click", generateCertificate);

  /* ── Tombol Kembali dari Leaderboard ── */
  DOM.backFromLeaderboard.addEventListener("click", () => {
    DOM.leaderboardSection.style.display = "none";
    showHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ── Tombol Hapus Leaderboard ── */
  DOM.clearLeaderboard.addEventListener("click", clearLeaderboardData);

  /* ── Tab Leaderboard ── */
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTab = btn.dataset.tab;
      renderLeaderboard(currentTab);
    });
  });

  /* ── Tutup & Unduh Sertifikat ── */
  DOM.downloadCertBtn.addEventListener("click", downloadCertificate);
  DOM.closeCertBtn.addEventListener("click", () => {
    DOM.certOverlay.style.display = "none";
  });

  /* ── Klik di luar sertifikat untuk menutup ── */
  DOM.certOverlay.addEventListener("click", (e) => {
    if (e.target === DOM.certOverlay) {
      DOM.certOverlay.style.display = "none";
    }
  });

  /* ── Keyboard shortcut: Escape untuk menutup overlay ── */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      DOM.certOverlay.style.display = "none";
      if (DOM.nav.classList.contains("open")) closeNav();
    }
  });

  /* ── Header scroll shadow ── */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      DOM.header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.10)";
    } else {
      DOM.header.style.boxShadow = "none";
    }
  });
}

/* ----------------------------------------------------------------
   23. INISIALISASI APLIKASI
   ---------------------------------------------------------------- */
function init() {
  initTheme();          // Terapkan tema tersimpan
  initEventListeners(); // Daftarkan semua event
  showHome();           // Tampilkan halaman beranda
  console.log("✅ Kuis Pintar Nusantara — Siap digunakan!");
}

/* Jalankan saat DOM siap */
document.addEventListener("DOMContentLoaded", init);

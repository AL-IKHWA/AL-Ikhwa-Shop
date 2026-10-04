// عناصر القرآن
const quranAudio = document.getElementById('quranAudio');
const quranPlayBtn = document.getElementById('quranPlayBtn');
const surahSelect = document.getElementById('surahSelect');
const quranVolume = document.getElementById('quranVolume');

// عناصر المطر
const rainAudio = document.getElementById('rainAudio');
const rainPlayBtn = document.getElementById('rainPlayBtn');
const rainVolume = document.getElementById('rainVolume');

// تعيين الروابط الافتتاحية
quranAudio.src = surahSelect.value;

// تشغيل/إيقاف القرآن
quranPlayBtn.addEventListener('click', () => {
    if (quranAudio.paused) {
        quranAudio.play();
        quranPlayBtn.textContent = 'إيقاف القرآن';
        quranPlayBtn.classList.add('playing');
    } else {
        quranAudio.pause();
        quranPlayBtn.textContent = 'تشغيل القرآن';
        quranPlayBtn.classList.remove('playing');
    }
});

// تغيير السورة عند اختيار سورة جديدة
surahSelect.addEventListener('change', () => {
    quranAudio.src = surahSelect.value;
    quranAudio.play();
    quranPlayBtn.textContent = 'إيقاف القرآن';
    quranPlayBtn.classList.add('playing');
});

// تحكم بمستوى صوت القرآن
quranVolume.addEventListener('input', (e) => {
    quranAudio.volume = e.target.value;
});

// تشغيل/إيقاف صوت المطر
rainPlayBtn.addEventListener('click', () => {
    if (rainAudio.paused) {
        rainAudio.play();
        rainPlayBtn.textContent = 'إيقاف المطر';
        rainPlayBtn.classList.add('playing');
    } else {
        rainAudio.pause();
        rainPlayBtn.textContent = 'تشغيل المطر';
        rainPlayBtn.classList.remove('playing');
    }
});

// تحكم بمستوى صوت المطر
rainVolume.addEventListener('input', (e) => {
    rainAudio.volume = e.target.value;
});

// ضبط الصوت الافتراضي
quranAudio.volume = quranVolume.value;
rainAudio.volume = rainVolume.value;
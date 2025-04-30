const ads = [
    {
        title: "Jadilah BOS Merek Parfum Anda Sendiri",
        description: "Maklon parfum langsung ke pabriknya, legalitas BPOM & HKI, biaya lebih terjangkau!",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/zealin.png"
    },

    {
        title: "Panduan Live Steaming Youtube",
        description: "Materi & Tools + Bonus Bikin RDP Windows Sendiri.",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/yt-live-streaming.webp"
    },

    {
        title: "Konten Youtube Alur Cerita Film",
        description: "Bikin konten alur cerita film enggak pake ribet !!!",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/youtube-mastery.webp"
    },

    {
        title: "Video TikTok Tanpa Sample Produk",
        description: "Bikin video affiliate tiktok dengan AI - tidak perlu sample produk.",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/video-ai-tiktok.webp"
    },

    {
        title: "Jualan Video & Image AI ke situs Microstock",
        description: "Panduan membuat video & image AI agar layak jual ke situs Microstock",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/microstock.png"
    },

    {
        title: "Cara Menghasilkan Cuan dari Music AI",
        description: "Panduan lengkap cara menghasilkan cuan dari music AI",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/microstock.png"
    },

    {
        title: "Deep Learning Dengan Bantuan AI",
        description: "Membantu guru menyusun tujuan pembelajaran, asesmen, dan aktivitas secara otomatis",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/deep-learning.webp"
    },

    {
        title: "Bikin Animasi 3D Menggunakan AI",
        description: "Menciptakan animasi 3D menggunakan AI secara gratis",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/animasi-3d.jpg"
    },

    {
        title: "Sering Stuck Saat Cari Ide Konten?",
        description: "Eksplor ide konten dari pilar konten sampai ke narasi",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/ide-konten.jpg"
    },

    {
        title: "Menulis Buku dengan Bantuan AI",
        description: "Memanfaatkan AI untuk membuat buku berkualitas",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/menulis-buku.jpg"
    },

    {
        title: "Membuat Karakter Sejarah Ultra Realistis",
        description: "Membuat karakter tokoh sejarah dengan kualitas ultra realistis menggunakan AI",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/gajah-mada.webp"
    },

    {
        title: "Membuat Animasi Konten Fakta Unik",
        description: "Lejitkan follower dengan animasi konten fakta unik cukup pakai HP",
        url: "https://www.profitableratecpm.com/xvhra0f9t?key=1dae90880a70a09a6d8255745884edb7",
        image: "banner/fakta-unik.webp"
    },
    
];
  

function renderAds() {
    const adsContainer = document.getElementById("adsContainer");
    if (!adsContainer) return;

    adsContainer.classList.replace("opacity-100", "opacity-0");

    setTimeout(() => {

        adsContainer.innerHTML = "";

        const shuffled = ads.sort(() => 0.5 - Math.random()).slice(0, 2);
        shuffled.forEach(ad => {
        const wrapper = document.createElement("a");
        wrapper.href = ad.url;
        wrapper.target = "_blank";
        wrapper.className = "flex items-center gap-3 p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition";

        wrapper.innerHTML = `
            <img src="${ad.image}" alt="Ad" class="w-12 h-12 rounded object-cover" />
            <div>
            <h3 class="text-sm font-semibold text-gray-800">${ad.title}</h3>
            <p class="text-xs text-gray-600">${ad.description}</p>
            </div>
        `;
        adsContainer.appendChild(wrapper);
        });

        adsContainer.classList.replace("opacity-0", "opacity-100");

    }, 500); 
}

renderAds();
setInterval(renderAds, 20000);

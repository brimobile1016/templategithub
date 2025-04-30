const templates = {
    content_creation: {
        copywriting: {
            fields: [
                { id: "produk", label: "Nama Produk", placeholder: "Sabun Muka Organik", type: "text" },
                { id: "manfaat", label: "Manfaat Utama", placeholder: "Membersihkan dan mencerahkan kulit", type: "text" },
                { id: "target", label: "Target Audience", placeholder: "Remaja usia 18-25", type: "text" },
                { id: "gaya", label: "Gaya Bahasa", placeholder: "Santai dan persuasif", type: "text" },
                { id: "headline_tone", label: "Nada Judul", placeholder: "Menggugah rasa ingin tahu", type: "text" },
                { id: "call_to_action", label: "Ajakan/Tindakan (CTA)", placeholder: "Beli Sekarang", type: "text" },
                { id: "panjang", label: "Panjang Teks (kata)", placeholder: "100", type: "number" },
                { id: "tambahan", label: "Catatan Tambahan", placeholder: "Highlight bahan alami", type: "text" }
            ],
            generate: (values) =>
                `Buatkan copywriting promosi untuk produk "${values.produk}". Fokus pada manfaat: ${values.manfaat}. 
                Target audience: ${values.target}. Gaya bahasa: ${values.gaya}. Nada judul: ${values.headline_tone}. 
                Call-to-action: ${values.call_to_action}. Panjang teks: ${values.panjang} kata.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },

        cerita_pendek: {
            fields: [
                { id: "judul", label: "Judul Cerita", placeholder: "Cinta di Musim Hujan", type: "text" },
                { id: "genre", label: "Genre Cerita", placeholder: "Romantis", type: "text" },
                { id: "tema", label: "Tema Cerita", placeholder: "Pertemuan tak terduga", type: "text" },
                { id: "panjang", label: "Panjang Cerita (kata)", placeholder: "1000", type: "number" }
            ],
            generate: (values) =>
                `Buatkan cerita pendek berjudul "${values.judul}" dengan genre ${values.genre} dan tema ${values.tema}. 
                Panjang cerita: ${values.panjang} kata.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },

        narasi_video_affiliate_tiktok: {
            fields: [
                { id: "produk", label: "Nama Produk", placeholder: "Sepatu futsal", type: "text" },
                { id: "kategori", label: "Kategori Produk", placeholder: "Sepatu olahraga", type: "text" },
                { id: "target", label: "Target Audience", placeholder: "Remaja putra", type: "text" },
                { id: "manfaat", label: "Manfaat Utama", placeholder: "Kuat dan tahan lama", type: "text" },
                { id: "masalah", label: "Masalah yang Diselesaikan", placeholder: "Sepatu mudah jebol", type: "text" },
                { id: "tone", label: "Gaya Narasi", placeholder: "Lucu", type: "text" },
                { id: "durasi", label: "Durasi Video (detik)", placeholder: "15", type: "text" },
                { id: "cta", label: "Ajakan/Tindakan (CTA)", placeholder: "Cek keranjang kuning", type: "text" },
            ],
            generate: (values) =>
                `Buatkan narasi video promosi TikTok untuk produk: "${values.produk}" dengan kategori: ${values.kategori}. 
                Target audience: ${values.target}. Manfaat utama produk: ${values.manfaat}. 
                Masalah yang diselesaikan: ${values.masalah}. Dengan tone/gaya narasi: ${values.tone}. 
                Ajakan tindakan (CTA): ${values.cta}. Durasi video: ${values.durasi} detik.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },

        naskah_video_pendek: {
            fields: [
                { id: "tema", label: "Tema Cerita", placeholder: "Sepenggal kisah dalam perang dunia ke dua", type: "text" },
                { id: "background", label: "Background Cerita", placeholder: "Suasana perang dunia ke dua", type: "text" },
                { id: "tujuan", label: "Tujuan Video", placeholder: "Edukasi", type: "text" },
                { id: "target", label: "Target Audience", placeholder: "Semua umur", type: "text" },
                { id: "durasi", label: "Durasi Video (menit)", placeholder: "3", type: "number" },
                { id: "tone", label: "Gaya Bahasa", placeholder: "Mencekam", type: "text" },
            ],
            generate: (values) =>
                `Buat naskah video pendek maksimal berdurasi: ${values.durasi} menit, dengan tema: ${values.tema}. 
                Background cerita: ${values.background}. Target audience: ${values.target}. Tujuan video: ${values.tujuan}. 
                Menggunakan tone/gaya bahasa: ${values.tone}. 
                Gunakan narasi yang kuat, emosional, dan cocok untuk video sinematik pendek.
                Tampilkan naskah dalam format per-scene (tiap scane berdurasi 5-10 detik), dengan keterangan visual, audio, dan narasi (voice over) untuk tiap scene.
                Di akhir berikan pesan moral dari cerita yang ada.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },

        social_media_post: {
            fields: [
                { id: "platform", label: "Platform Media Sosial", placeholder: "Instagram", type: "text" },
                { id: "tema", label: "Tema Postingan", placeholder: "Kesehatan dan kebugaran", type: "text" },
                { id: "audience", label: "Target Audience", placeholder: "Orang yang tertarik dengan gaya hidup sehat", type: "text" },
                { id: "pesan", label: "Pesan Utama", placeholder: "Jaga kesehatan tubuh dengan rutin berolahraga", type: "text" },
                { id: "hashtag", label: "Hashtag", placeholder: "#SehatBersama #OlahragaSetiapHari", type: "text" },
                { id: "panjang", label: "Panjang Teks (kata)", placeholder: "200", type: "number" },
                { id: "call_to_action", label: "Ajakan/Tindakan (CTA)", placeholder: "Ikuti untuk tips sehat lainnya", type: "text" }
            ],
            generate: (values) =>
                `Buatkan postingan media sosial untuk platform "${values.platform}" dengan tema "${values.tema}". 
                Target audience: ${values.audience}. Pesan utama: ${values.pesan}. Hashtag: ${values.hashtag}. 
                Panjang teks: ${values.panjang} kata. Call-to-action: ${values.call_to_action}.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },
    },

    programming: {
        unit_testing: {
            fields: [
                { id: "fitur", label: "Fitur yang Diuji", placeholder: "Login user", type: "text" },
                { id: "bahasa", label: "Bahasa Pemrograman", placeholder: "PHP", type: "text" },
                { id: "framework", label: "Framework yang Digunakan", placeholder: "Laravel", type: "text" }
            ],
            generate: (values) =>
                `Buatkan unit test untuk fitur "${values.fitur}" menggunakan ${values.bahasa}, 
                dengan framework ${values.framework}.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },

      api_endpoint: {
        fields: [
            { id: "endpoint", label: "Nama Endpoint API", placeholder: "/users/login", type: "text" },
            { id: "metode", label: "Metode HTTP", placeholder: "POST", type: "text" },
            { id: "parameter", label: "Parameter yang Dibutuhkan", placeholder: "email, password", type: "text" },
            { id: "bahasa", label: "Bahasa Pemrograman", placeholder: "PHP", type: "text" },
            { id: "framework", label: "Framework yang Digunakan", placeholder: "Laravel", type: "text" }
        ],
        generate: (values) =>
            `Buatkan endpoint API "${values.endpoint}" dengan metode HTTP ${values.metode}. 
            Parameter yang dibutuhkan: ${values.parameter} menggunakan ${values.bahasa} dengan framework ${values.framework}.`
            .replace(/\s{2,}/g, ' ')
            .trim()
      },

      refactor_kode: {
        fields: [
            { id: "kode", label: "Kode yang Ingin Direfaktor", placeholder: "function tambah(a, b) { return a + b; }", type: "textarea" },
            { id: "tujuan", label: "Tujuan Refactoring", placeholder: "Meningkatkan keterbacaan dan efisiensi", type: "text" },
            { id: "bahasa", label: "Bahasa Pemrograman", placeholder: "PHP", type: "text" },
            { id: "framework", label: "Framework yang Digunakan", placeholder: "Laravel", type: "text" }
        ],
        generate: (values) =>
            `Tolong refaktor kode berikut:\n"${values.kode}"\nTujuan refactoring: ${values.tujuan} 
            menggunakan ${values.bahasa} dengan framework ${values.framework}.`
            .replace(/\s{2,}/g, ' ')
            .trim()
      }
    },

    design_creative: {
        desain_logo: {
            fields: [
                { id: "nama_perusahaan", label: "Nama Perusahaan", placeholder: "TechNova", type: "text" },
                { id: "gaya", label: "Gaya Desain (minimalis, modern, dll)", placeholder: "Minimalis dan futuristik", type: "text" },
                { id: "warna", label: "Warna Utama Logo", placeholder: "Biru dan putih", type: "text" },
                { id: "elemen", label: "Elemen Khusus (jika ada)", placeholder: "Ikon berbentuk petir", type: "text" }
            ],
            generate: (values) =>
                `Buatkan logo untuk perusahaan "${values.nama_perusahaan}" dengan gaya desain ${values.gaya}. 
                Warna utama ${values.warna}. Tambahkan elemen: ${values.elemen}.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },

        ilustrasi_pemandangan: {
            fields: [
                { id: "jenis", label: "Jenis Pemandangan", placeholder: "Pegunungan", type: "text" },
                { id: "waktu", label: "Waktu (pagi, siang, sore, malam)", placeholder: "Senja", type: "text" },
                { id: "elemen", label: "Elemen yang Diharapkan", placeholder: "Kabut tipis dan sinar matahari", type: "text" }
            ],
            generate: (values) =>
                `Buatkan gambar pemandangan ${values.jenis} pada waktu ${values.waktu}, dengan elemen: ${values.elemen}.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },
        
        ilustrasi_karakter: {
            fields: [
                { id: "nama_karakter", label: "Nama Karakter", placeholder: "Aldren", type: "text" },
                { id: "jenis", label: "Jenis Karakter (manusia, hewan, makhluk fantasi)", placeholder: "Manusia", type: "text" },
                { id: "ciri", label: "Ciri-ciri Fisik", placeholder: "Rambut pirang, mata tajam, tubuh tinggi", type: "text" }
            ],
            generate: (values) =>
                `Buatkan karakter bernama "${values.nama_karakter}", jenis ${values.jenis}, dengan ciri-ciri: ${values.ciri}.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },

        realistik_avatar_full_body: {
            fields: [
                { id: "gender", label: "Jenis Kelamin", placeholder: "Wanita", type: "text" },
                { id: "usia", label: "Usia (tahun)", placeholder: "21", type: "number" },
                { id: "etnis", label: "Etnis/Suku", placeholder: "Indonesia Jawa", type: "text" },
                { id: "postur", label: "Postur Tubuh", placeholder: "Langsing", type: "text" },
                { id: "wajah", label: "Ciri Wajah", placeholder: "mata bulat, hidung mungil, lesung pipi", type: "text" },
                { id: "rambut", label: "Ciri Rambut", placeholder: "panjang, iklal, hitam", type: "text" },
                { id: "ekspresi", label: "Ekspresi Wajah", placeholder: "Imut dan ceria", type: "text" },
                { id: "pakaian", label: "Pakaian", placeholder: "Kaos kasual +jeans", type: "text" },
                { id: "gesture", label: "Gesture/Pose", placeholder: "Menjelaskan dengan semangat", type: "text" },
                { id: "background", label: "Background", placeholder: "Transparan", type: "text" },
                { id: "makeup", label: "Makeup", placeholder: "Natural", type: "text" },
                { id: "aksesoris", label: "Aksesoris", placeholder: "Anting, Kacamata, Jam tangan", type: "text" },
                { id: "lighting", label: "Lighting", placeholder: "Cinematic lighting", type: "text" },
                { id: "rasio", label: "Rasio", placeholder: "9:16", type: "text" },
            ],
            generate: (values) =>
                `Foto ultra realistik seluruh badan dari seorang ${values.gender}. 
                usia ${values.usia}. etnis: ${values.etnis}. postur: ${values.postur}.
                wajah: ${values.wajah}. rambut: ${values.rambut}. ekspresi: ${values.ekspresi}.
                pakaian: ${values.pakaian}. gesture: ${values.gesture}. background: ${values.background},
                makeup: ${values.makeup}. aksesoris: ${values.aksesoris}. lighting: ${values.lighting}.
                rasio: ${values.rasio}. tekstur kulit halus, resolusi ultra tinggi 8K.
                pastikan ada ruang di sekitar tubuh agar tidak terpotong`
                .replace(/\s{2,}/g, ' ')
                .trim()
        }

    },

    artikel_seo: {
        seo_title: {
            fields: [
                { id: "judul", label: "Judul Artikel", placeholder: "Cara Memutihkan Gigi Secara Alami", type: "text" },
                { id: "kata_kunci", label: "Kata Kunci SEO", placeholder: "memutihkan gigi", type: "text" },
                { id: "panjang", label: "Panjang Judul (karakter)", placeholder: "60", type: "number" }
            ],
            generate: (values) =>
                `Buatkan SEO title untuk artikel "${values.judul}" dengan kata kunci "${values.kata_kunci}". 
                Panjang judul: ${values.panjang} karakter.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },

        meta_description: {
            fields: [
                { id: "judul", label: "Judul Artikel", placeholder: "Cara Memutihkan Gigi Secara Alami", type: "text" },
                { id: "kata_kunci", label: "Kata Kunci SEO", placeholder: "memutihkan gigi", type: "text" },
                { id: "deskripsi", label: "Deskripsi Singkat", placeholder: "Tips alami untuk memutihkan gigi dengan cepat dan aman", type: "text" }
            ],
            generate: (values) =>
                `Buatkan meta description untuk artikel "${values.judul}" dengan kata kunci "${values.kata_kunci}". 
                Deskripsi: ${values.deskripsi}.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },

        keywords: {
            fields: [
                { id: "keyword", label: "Keyword Utama", placeholder: "Khasiat minyak zaitun", type: "text" },
            ],
            generate: (values) =>
                `Buatkan daftar long tail keyword, related keyword, branded keyword, geo targeted keyword, 
                transactional keyword, dan question based keyword untuk keyword utama "${values.keyword}"`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },

        artikel_blog: {
            fields: [
                { id: "topik", label: "Topik Utama", placeholder: "Cara kerja blockchain", type: "text" },
                { id: "target", label: "Target Pembaca", placeholder: "Pemula di bidangtekologi", type: "text" },
                { id: "tone", label: "Gaya Penulisan", placeholder: "Profesional dan meyakinkan", type: "text" },
                { id: "panjang", label: "Panjang Artikel (kata)", placeholder: "1000", type: "number" },
                { id: "struktur", label: "Struktur Artikel", placeholder: "pembuka, penjelasan utama, studi kasus, kesimpulan, CTA, FAQ", type: "text" },
                { id: "angle", label: "Sudut Pandang", placeholder: "Perspektip investor", type: "text" },
                { id: "keyword", label: "Keyword Utama", placeholder: "cara kerja blockchain", type: "text" },
                { id: "bahasa", label: "Bahasa yang Digunakan pada Artikel", placeholder: "Indonesia", type: "text" }
            ],
            generate: (values) =>
                `Buatkan artikel dalam bahasa ${values.bahasa} yang SEO friendly untuk topik utama 
                "${values.topik}" dengan target pembaca ${values.target}. 
                Menggunakan tone/gaya penulisan: ${values.tone}. Panjang artikel: ${values.panjang} kata. 
                Struktur artikel: ${values.struktur}. Artikel ditulis menggunakan sudut pandang: ${values.angle}. 
                Keywords yang utama yang dibidik: ${values.keyword}. PERHATIAN: Masukkan semua jenis keyword strategis 
                secara natural ke dalam isi artikel (bukan hanya dicantumkan di akhir), 
                termasuk: Long tail keyword, Related keyword, Branded keyword, Geo targeted keyword, 
                Transactional keyword, Question based keyword. Gunakan pendekatan copywriting
                yang SEO-friendly, dengan fokus pada integrasi natural dan kontekstual dari semua keyword ke dalam 
                setiap bagian artikel.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        }
    },

    business_productivity: {
        email_newsletter: {
            fields: [
                { id: "judul", label: "Judul Newsletter", placeholder: "Update Fitur Terbaru April 2025", type: "text" },
                { id: "audience", label: "Target Audience", placeholder: "Pengguna aktif aplikasi", type: "text" },
                { id: "konten", label: "Konten Utama", placeholder: "Penjelasan fitur baru dan link akses", type: "textarea" }
            ],
            generate: (values) =>
                `Buatkan email newsletter dengan judul "${values.judul}", ditujukan untuk ${values.audience}, 
                dan konten utama: ${values.konten}.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        },

        proposal: {
            fields: [
                { id: "judul", label: "Judul Proposal", placeholder: "Kerja Sama Distribusi Produk", type: "text" },
                { id: "tujuan", label: "Tujuan Proposal", placeholder: "Menjalin kemitraan distribusi regional", type: "text" },
                { id: "konten", label: "Konten Proposal", placeholder: "Detail proposal dan keuntungan kemitraan", type: "textarea" }
            ],
            generate: (values) =>
                `Buatkan proposal dengan judul "${values.judul}", bertujuan untuk ${values.tujuan},
                dengan konten utama: ${values.konten}.`
                .replace(/\s{2,}/g, ' ')
                .trim()
        }
    }
};
  
const categorySelector = document.getElementById("categorySelector");
const templateSelector = document.getElementById("templateSelector");
const inputFields = document.getElementById("inputFields");
const generateButton = document.getElementById("generateButton");
const generatedPrompt = document.getElementById("generatedPrompt");

function populateCategorySelector() {
    categorySelector.innerHTML = "";

    const firstOption = document.createElement("option");
    firstOption.textContent = "Pilih Kategori";
    firstOption.disabled = true;
    firstOption.selected = true;
    categorySelector.appendChild(firstOption);

    // Ambil semua key dari 'templates' dan urutkan berdasarkan teks
    const sortedKeys = Object.keys(templates).sort((a, b) => formatCategoryLabel(a).localeCompare(formatCategoryLabel(b)));

    // Tambahkan opsi yang sudah diurutkan
    sortedKeys.forEach(key => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = formatCategoryLabel(key); // Optional formatting
        categorySelector.appendChild(option);
    });
}


function formatCategoryLabel(key) {
    return key
        .replace(/_/g, " ")  // Ganti underscore dengan spasi
        .replace(/\b\w/g, (c) => c.toUpperCase());  // Kapitalisasi setiap kata
}


function updateTemplateOptions(category) {
    templateSelector.innerHTML = '';
    inputFields.innerHTML = '';
    generatedPrompt.textContent = '';

    const firstOption = document.createElement("option");
    firstOption.textContent = "Pilih Template";
    firstOption.disabled = true;
    firstOption.selected = true;
    templateSelector.appendChild(firstOption);

    const templatesInCategory = Object.keys(templates[category]);

    templatesInCategory.forEach(template => {
        const option = document.createElement("option");
        option.value = template;
        option.textContent = template
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        templateSelector.appendChild(option);
    });
}


function updateForm(template) {
    const fields = templates[categorySelector.value][template].fields;

    inputFields.innerHTML = '';
    generatedPrompt.textContent = '';

    fields.forEach(field => {
    let input;

    if (field.type === "textarea") {
        // Membuat textarea jika tipe adalah textarea
        input = document.createElement("textarea");
        input.id = field.id;
        input.name = field.id;
        input.placeholder = field.placeholder || "";
        input.classList.add("w-full", "p-3", "bg-gray-700", "text-white", "rounded-md", "mb-4", "h-40");
    } else {
        // Membuat input biasa untuk tipe lainnya
        input = document.createElement("input");
        input.type = field.type || "text"; // Default ke 'text' jika tidak ada tipe
        input.id = field.id;
        input.name = field.id;
        input.placeholder = field.placeholder || "";
        input.classList.add("w-full", "p-3", "bg-gray-700", "text-white", "rounded-md", "mb-4");
    }

    const label = document.createElement("label");
    label.textContent = field.label;
    label.setAttribute("for", field.id);
    label.classList.add("block", "text-lg");

    inputFields.appendChild(label);
    inputFields.appendChild(input);
    });
}


function generatePrompt() {
    const selectedTemplate = templateSelector.value;
    const values = {};

    templates[categorySelector.value][selectedTemplate].fields.forEach(field => {
        const input = document.getElementById(field.id);
        values[field.id] = input.value;
    });

    const prompt = templates[categorySelector.value][selectedTemplate].generate(values);
    generatedPrompt.textContent = prompt;
}

categorySelector.addEventListener("change", () => {
    updateTemplateOptions(categorySelector.value);
    templateSelector.disabled = false;
    updateForm(templateSelector.value);
});

templateSelector.addEventListener("change", () => {
    updateForm(templateSelector.value);
});

generateButton.addEventListener("click", generatePrompt);

const copyButton = document.getElementById("copyButton");
const copyFeedback = document.getElementById("copyFeedback");

copyButton.addEventListener("click", () => {
    const textToCopy = generatedPrompt.value;
    generatedPrompt.select();
    generatedPrompt.setSelectionRange(0, 99999); // Untuk perangkat mobile

    try {
        document.execCommand("copy");
        copyFeedback.classList.remove("hidden");
        setTimeout(() => {
            copyFeedback.classList.add("hidden");
        }, 2000);
    } catch (err) {
        console.error("Gagal menyalin dengan execCommand:", err);
    }
});


populateCategorySelector();
updateTemplateOptions(categorySelector.value);

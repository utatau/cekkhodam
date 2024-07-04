document.getElementById('button').addEventListener('click', function () {
    const nama = document.getElementById('namaUser').value;
    const birthDate = document.getElementById('tglultah').value;

    let pesan = [];

    if (!nama) {
        Swal.fire({
            icon: 'hasil cek',
            title: 'jangan di kosongin',
            text: 'masukin dulu namalu'
        });
        return;
    }

    const kodamaArray = [
        'Harimau Salju', 'Gajah Awan', 'Sepatu pantopel', 'Rusa Kristal', 'Serigala Bayangan', 'Macan Angin',
        'Kamar mandi biu', 'Burung Phoenix', 'Dajjal', 'Anjing Gaib', 'Bungkus rokok', 'Singa Angkasa',
        'Rasengan', 'Chidori', 'Kaleng Khon-quan', 'Katak Guntur', 'Bebek Pelangi', 'Kambing Awan',
        'Kecoa berponi', 'Kumbang Komet', 'Asbes rumah', 'Singa Laut Galaksi', 'Mie ayam', 'Banteng Petir',
        'Honda varop', 'Rokok monte carlo', 'Mantan anda sendiri', 'Yajuj majuj', 'Terompet sangkakala', 'Belut sawah', 'Ultramen', 'Ironman', 'Batman', 'Bayem', 'Singkong',
        'Singa pengkor', 'Celana jeans', 'Tikus jalanan', 'Ikan teri', 'Ikan lele', 'Ikan cere', 'Oppa korea', 'Keripik singkong', 'Padil kopling', 'Hp advan', 'Kalajengking kayang', 'Doraemon', 'Asep britden', 'Jael pargoy',
        'Cassan Thinkpad', 'Syntax Java', 'Bebek racing', 'Honda megapro', 'Jemuran emak', 'Kangkung', 'kupu-kupu', 'Kadal beranak', 'pinguin',
        'Hordeng warteh', 'Honda sigra', 'Paddle pop', 'Ac LG', 'Kecoa pincang', 'Monas', 'Sepeda ontel', 'Becak mogok', 'SUpra fit', 'Cacing terbang', 'Chopper jokowo', 'Ronaldo wati', 'Linux kernel', 'Cimori',
        'Sigit rendang', 'Slamet kopling', 'Singa putih', 'Harimau albino', 'Tali rapia', 'Sundel bolong', 'Jambu aer', 'Kungfu panda', 'Master cifu', 'Spiderman hitam'
    ];
    if (birthDate) {
        const arrayKodam = parseInt(birthDate.replace(/-/g, '').slice(4, 8), 10) % kodamaArray.length;
        const kodam = kodamaArray[arrayKodam];

        pesan = [
            `${nama}, kodam yg ada di elu itu ${kodam}.`,
            `${nama}, menurut tanggal lahir lu, gada khodam di dalam dirilu.`,
            `khodam ${kodam} sedang bersemayam di dalam dirilu, ${nama}.`,
            `kodam lu kosong ${nama}.`
        ];
    } else {
        const randomIndex = Math.floor(Math.random() * kodamaArray.length);
        const kodam = kodamaArray[randomIndex];

        pesan = [
            `ya ${nama}, kodam yg ada di elu itu ${kodam}.`,
            `ga ${nama}, menurut tanggal lahir lu, gada khodam di dalam dirilu.`,
            `khodam ${kodam} sedang bersemayam di dalam dirilu, ${nama}.`,
            `kodam lu kosong ${nama}.`
        ];
    }

    const randomPesanIndex = Math.floor(Math.random() * pesan.length);
    const hasilCek = pesan[randomPesanIndex];

    Swal.fire({
        title: 'hasil cek',
        text: hasilCek,
        icon: 'info'
    });
});
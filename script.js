document.getElementById('button').addEventListener('click', function () {
    const nama = document.getElementById('namaUser').value;
    const birthDate = document.getElementById('tglultah').value;

    let pesan = [];

    if (!nama) {
        Swal.fire({
            icon: 'hasil cek',
            title: 'dongo',
            text: 'Masukin dulu namalu'
        });
        return;
    }

    const kodamaArray = [
        'Harimau Salju', 'Gajah Awan', 'Sepatu pantopel', 'Rusa Kristal', 'Serigala Bayangan', 'Macan Angin',
        'Kamar mandi biu', 'Burung Phoenix', 'Dajjal', 'Anjing Gaib', 'Bungkus rokok', 'Singa Angkasa',
        'Rasengan', 'Chidori', 'Kalen Khon-quan', 'Katak Guntur', 'Bebek Pelangi', 'Kambing Awan',
        'Kecoa berponi', 'Kumbang Komet', 'Asbes', 'Singa Laut Galaksi', 'IMie ayam', 'Banteng Petir',
        'Honda varop', 'Rokok monte carlo', 'Mantan anda sendiri', 'Yajuj majuj', 'Terompet sangkakala', 'Belut', 'Ultramen', 'Ironman', 'Batman', 'Bayem', 'Singkong',
        'Singa pengkor', 'Celana jeans', 'Tikus jalanan', 'Ikan teri', 'Ikan lele', 'Ikan cere', 'Oppa korea', 'Keripik singkong',
        'Cassan Thinkpad', 'Syntax Java', 'Bebek racing', 'Honda megapro', 'Jemuran emak', 'Kangkung', 'kupu'
    ];

    if (birthDate) {
        const arrayKodam = parseInt(birthDate.replace(/-/g, '').slice(4, 8), 10) % kodamaArray.length;
        const kodam = kodamaArray[arrayKodam];

        pesan = [
            `ya ${nama}, kodam yg ada di elu itu ${kodam}.`,
            `ga ${nama}, menurut tanggal lahir lu, gada khodam di dalam dirilu.`,
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
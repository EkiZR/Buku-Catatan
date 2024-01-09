const getInitialData = () => ([
  {
    id: 1,
    title: "IG : ekizr_",
    body: "Buku Catatan adalah sebuah program atau aplikasi yang memungkinkan pengguna untuk membuat, menyimpan catatan-catatan secara digital. Tujuan utama dari aplikasi catatan adalah memberikan sarana untuk pengguna agar dapat mencatat informasi, ide, tugas, atau hal-hal penting lainnya dengan mudah dan teratur.",
    createdAt: 'Kamis, 5 Juni 2023',
    archived: false,
  },
/*   {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: 'Jumat, 6 Juni 2023',
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: 'Sabtu, 7 Juni 2023',
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: 'Minggu, 8 Juni 2023',
    archived: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: 'Senin, 9 Juni 2023',
    archived: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: 'Selasa, 10 Juni 2023',
    archived: false,
  }, */
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };

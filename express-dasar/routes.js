import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        "fullname": "Kavish Ghazali",
        "nickname": "Kavish",
    });
});

router.get('/book', (req, res) => {
    res.status(200).json({
        "daftar buku catatan": {
            "status code": 200,
            "judul buku": "Laut Bercerita",
            "penulis buku": "Leila Chudori",
        }
    })
})


/*tugas
buatlah sebuah operasi matematika ketika route 'operasi-matematika' di akses lakukan operasi matematika seperti penjumlahan, pengurangan, perkalian, dan pembagian*/

export default router;
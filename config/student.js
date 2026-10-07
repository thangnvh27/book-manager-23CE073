const MSSV = process.env.MSSV || '23CE073';

module.exports = {
  HO_TEN: process.env.HO_TEN || 'NGUYEN VAN HOANG THANG',
  MSSV,
  PREFIX: MSSV.slice(-3),                 // 3 số cuối: "073"
  VAT: Number(MSSV.slice(-1)) + 6         // chữ số cuối + 6 = 9 (%)
};
export function dashboardData({ range, period }) {
  return {
    series: [
      { name: 'Tombol', data: [22, 28, 35, 41, 48, 55, 62, 70, 78] },
      { name: 'Form', data: [14, 16, 20, 24, 27, 30, 33, 36, 40] },
      { name: 'Tabel', data: [9, 12, 14, 17, 21, 25, 28, 32, 36] },
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep'],
    table: [],
  }
}

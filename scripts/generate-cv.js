const fs = require('fs');

const streamText = `BT
/F1 18 Tf
50 730 Td
(MUHAMMAD FIRDAN AZHARI) Tj
/F1 11 Tf
0 -24 Td
(Full-Stack Developer | Kudus, Jawa Tengah | muhammadfirdanazhari@gmail.com) Tj
/F1 10 Tf
0 -36 Td
(RINGKASAN PROFIL) Tj
0 -16 Td
(Full-Stack Developer dengan keahlian Flutter, Laravel, Next.js, dan TypeScript.) Tj
0 -16 Td
(Membangun produk digital secara utuh dari UI di Figma hingga REST API dan deployment.) Tj
0 -30 Td
(PENGALAMAN KERJA) Tj
0 -16 Td
(Mobile Developer - Digital Code [CV. Bahagia Putra] | Mar 2024 - Mar 2025) Tj
0 -16 Td
(- Mengembangkan & memelihara aplikasi mobile Flutter dan integrasi REST API.) Tj
0 -16 Td
(- Optimalisasi performa dan persiapan rilis aplikasi ke lingkungan produksi.) Tj
0 -30 Td
(PRESTASI & PROYEK) Tj
0 -16 Td
(- Satu Desa: Juara 3 Nasional GENETIC 2025 [Flutter, Laravel, MySQL]) Tj
0 -16 Td
(- Notula: Asisten rapat mobile dengan chunked & resumable upload) Tj
0 -16 Td
(- NUSAVERSE: Platform eksplorasi budaya digital Indonesia [Next.js, TypeScript]) Tj
0 -16 Td
(- LadangNusa: Platform pertanian cerdas berbasis AI [Next.js 14, Tailwind]) Tj
0 -30 Td
(KETERAMPILAN) Tj
0 -16 Td
(Flutter, Dart, Laravel, PHP, REST API, MySQL, Next.js, React, TypeScript, Tailwind) Tj
ET`;

const obj5 = `5 0 obj\n<< /Length ${Buffer.byteLength(streamText)} >>\nstream\n${streamText}\nendstream\nendobj\n`;

const parts = [
  '%PDF-1.4\n',
  '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
  '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
  '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n',
  '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
  obj5
];

let pdf = parts[0];
const offsets = [0];
for (let i = 1; i < parts.length; i++) {
  offsets.push(pdf.length);
  pdf += parts[i];
}

const startxref = pdf.length;
let xref = `xref\n0 ${offsets.length}\n0000000000 65535 f \n`;
for (let i = 1; i < offsets.length; i++) {
  xref += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
}

pdf += xref;
pdf += `trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

fs.writeFileSync('public/muhammad-firdan-azhari-cv.pdf', pdf);
console.log('PDF written successfully. Size:', pdf.length);


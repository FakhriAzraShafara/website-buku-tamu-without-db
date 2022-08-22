// run `node index.js` in the terminal

console.info('Buku Tamu');

// function isi buku tamu
const isiBukuTamu = () => {
  // tangkap element tbody
  let tbody = document.getElementById('tbody');

  // input data tamu
  let namalengkap = prompt('Masukkan Nama Lengkap : ');
  let alamat = prompt('Masukkan Alamat : ');
  let keterangan = prompt('Masukkan keterangan : ');

  // console.log(namalengkap, alamat, keterangan);

  //dapatkan total dari child tbody
  let totalData = tbody.childElementCount;

  //render string to html
  tbody.innerHTML += `
  <tr>
    <td  style="text-align: center">${totalData + 1}</td>
    <td  style="text-align: center">${namalengkap}</td>
    <td  style="text-align: center">${alamat}</td>
    <td style="text-align: center">${keterangan}</td>
  </tr>
  `;
};

<?php
include "koneksi.php";
//kirimkan variabel
$nama = $_POST['nama'];
$email = $_POST['email'];
$pesan = $_POST['pesan'];

//input data ke table
$input = "INSERT INTO contact (nama, email, pesan)
VALUES ('$nama', '$email', '$pesan')";
$query_input = mysql_query($input);
if ($query_input) {
    //jika sukses
?>
<script language="Javascript">
    alert('Data Berhasil diinput');
    document.location='contactus.html'
</script>
<?php
}
else {
    echo "Data gagal diinput!";
}
//tutup koneksi engine mysql
mysql_close($Open);
?>
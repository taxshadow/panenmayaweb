<?php
    $Open = mysql_connect("localhost", "root", "");
        if (!$Open){
           die ("Koneksi ke Engine MySQL server Gagal !");
        }
    $Koneksi = mysql_select_db("panenmaya");
 if (!$Koneksi){
            die ("Koneksi ke Database Gagal !");
 }
?>
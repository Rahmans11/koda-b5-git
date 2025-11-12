# PRAKTEK GIT

##  Inisialisasi Git
```sh
$ git init
```

## Perubahan Sementara(Staging)
menyimpan perubahan sementara dari working directory ke dalam staging area
```sh
$ git add <...dir_file>
$ git add <...dir_folder>
```

## Perubahan Permanen (commit)
menyimpan seluruh staging area menjadi permanen, pesan commit berdasarkan [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/), untuk tipe commit bisa mengacu ke [angular convention](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
```sh
$ git commit
$ git commit -m<message>
```
note: opsi 1 -> i untuk edit, esc untuk quit edit, : + wq untuk save & quit

note: opsi 1 -> untuk pesan pendek

note: ikuti standar / conventional commit "ex conventionalcommitc.1.0.0"

## Pengecekan Status Working Direktory
Bisa digunakan untuk melihat status baik yang sudah di staging area maupun belum
```sh
$ git status
```
Bisa digunakan untuk melihat riwayat/history commit
```sh
$ git log
```

## Manajemen git remote
```sh
$ git remote <command> <argument>
``` 
digunakan untuk menghubungkan antara git yang di komputer lokal dengan git yang ada pada layanan git(github/gitlab).

```sh
$ git remote add <alias_remote> <link_alamat_repo>
```
digunakan untuk melihat list remote
```sh
$ git remote [-v]
```
digunakan untuk melihat isi dari alias remote
```sh
$ git remote get-url <alias-remote>
```

## Sinkronisasi
digunakan untuk sinkronisasi dari lokal ke remote
```sh
$ git push [-u] <tujuan_remote> <branch_lokal>
```
digunakan untuk sinkronisasi dari remote ke lokal
```sh
$ git pull <target_remote> <branch_remote>
```

## Copy Remote Repository to Local Computer
Digunakan untuk mengkloning remote repo
```sh
$ git clone <link_remote> [<custom_name>]
```
ketika di clone, link_remote langsung diset menjadi remote origin
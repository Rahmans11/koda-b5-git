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
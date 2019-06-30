# Okyanus geliştirmek için klasör hazırlamak

Okyanus'un yapım scriptleri, kendi kodunuzu kullanabilmeniz için belirli bir
klasör şekli bekliyor.

Bu şekli yaratmak için, ilk başta boş bir klasör açın. O klasöre girin ve şu
üç `git` komudunu çalıştırın:

```
$ git clone https://github.com/okyanus-mc/loader
$ git clone https://github.com/okyanus-mc/api
$ git clone https://github.com/okyanus-mc/runtime
```

::: warning
Lütfen hiç bir klasörün adını **değiştirmeyin**
:::

## Okyanus orijinal modlarını geliştirmek

::: tip
Sadece küçük bir hata düzetlmek, veya zaten Okyanus'da bulunan bir şey eklemek
istiyorsanız, bunları yapmanıza gerek yok. Direkt kaynakları indirip kodlamaya
başlayabilrsiniz.

Bu, sadece Okyanus'u düzenleyip o düzenlemeleri mod kodunda kullanacak kişiler
içindir.
:::

İlk başta, klasörlerinizi hazırlayın (sadece `api`'yi klonlamak modlar için
yeterlidir, fakat büyük ihtimalle `runtime` ve `loader` da size gerekecektir)

Klonladığınız klasörlerin olduğu klasöre gelin, ve içine yeni bir klasör daha açın
ismi farketmez, `modlar`, `pluginler` herhangi bir şey seçebilirsiniz. Ama yeni
klasör açmanız önemlidir.

O klasörün içine girin, ve mod kodlarını klonlayın. Artık hazırsınız!

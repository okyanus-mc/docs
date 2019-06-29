# İlk Okyanus modunuz

Bu sayfanın sonuna geldiğinizde, elinizde çalışan basit bir Okyanus modu
olacaktır.

## Kurulum

Kurulum için [Okyanus mod yapımı](getting-started.md) sayfasını takip ediniz.

## Ana sınıf

Şablonun `club.issizler.template.TemplateMod` sınıfında örnek bir komut var,
fakat öğrenmek amacı ile baştan yapmamız bize daha yararlı olur. O yüzden o
dosyayı silin, ve yenisini yapın.

Modumuzun bir ana sınıfa ihtiyacı var. Bu sınıfı belirlemek için iki şey
yapmamız gerekmektedir.

- Class'ımızda [`Mod`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/Mod.html)
  araüyüzünü tanımlamak.
- `okyanus.json` dosyasındaki `entrypoints.server` listesine sınıf'ımızın tam
  ismini eklemek.

::: tip NOT
Tek bir mod içinde birden fazla ana sınıf olabilir.
:::

Ana sınıfımızı yaptıktan sonra, komut eklemeye başlayabiliriz.

## İlk komut

Bir sınıf daha açın, ismi `MerhabaKomudu` olabilir, mesela. O sınıfa
[`CommandRunnable`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/cmd/CommandRunnable.html)
arayüzünü tanımlayın ve otomatik olarak yaratılan metoda basit bir
`System.out.println` koyun.

Komut sınıfımızı yaptıktan sonra, o sınıfı kayıt etmemiz gerekmektedir. Ana
sınıfınızın `init` metoduna gelin, ve aşağıdaki gibi komudunuzu kayıt edin.

```java
CommandManager.getInstance().register(
    new CommandBuilder()
        .name("merhaba")
        .run(new MerhabaKomudu());
    })
);
```

Şimdi modunuzu derleyin, ve sunucunuzun `mods/` klasörüne atın.

Sunucunuzu çalıştırdığınızda, `/merhaba` komudunu kullanabilir olacaksınız.

## Komut argümanları

Komudunuza argümen ekleyebilmek için, ilk başta o argümanı kayıt ederken
belirleyin.

```java
CommandManager.getInstance().register(
    new CommandBuilder()
        .name("merhaba")
        .arg("kisi", ArgumentType.PLAYER)
        .run(new MerhabaKomudu());
    })
);
```

Argümanınızı belirledikten sonra, komut sınıfınızın metoduna geçin, ve şu
şekilde argümanın değerini alın:

```java
Player p = source.getArgPlayer("kisi")
```

Ve şimdi o kişinin ismini metodunuzdaki println'ye eklemeyi deneyin.

## Olaylar

Şimdi gelin oyuncuların mesajlarını düzenleyelim, ne dersiniz?

Yeni bir sınıf açın, ve o sınıfa
[`EventHandler`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/event/EventHandler.html)[`<ChatEvent>`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/event/ChatEvent.html)
arayüzünü tanımlayın.

Şimdi, otomatik olarak yaratılan metodda, [`setMessage`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/event/ChatEvent.html#setMessage-java.lang.String-)
ile mesajın içeriğini değiştirebilirsiniz, deneyin isterseniz.

İstediğinizi yaptıktan sonra, bu sınıfı da kayıt etmemiz gerekmektedir. Ana
sınıfınıza gelin ve sınıfınızı şu şekilde kayıt edin:

```java
EventManager.getInstance().register(new ChatListener()); // ChatListener sizin sınıfınızın adı olacaktır
```

Şimdi eğer modunuzu derlerseniz ve test ederseniz, yeni mesajınızı görebilmeniz lazım.

## Olay listesi?

Okyanus'da bulunan bütün olayları [bu adreste](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/event/package-summary.html),
`This event fires whenever...` ile açıklanan classlar olarak görebilirsiniz.

## Ayarlar?

Ayar sistemi olarak, [Night Config](https://github.com/TheElectronWill/Night-Config)
kütüphanesini bulundurmaktayız. O kütüphane'nin kullanımına bakmanız önerilmektedir.

::: tip NOT
Lütfen bütün ayarlarınızı `<sunucu klasörü>/config/` klasörü içinde yapınız,
bu sayede bütün ayar dosyaları organize olur. Gerekirse o klasör içinde kendinize
bir klasör açabilirsiniz.
:::

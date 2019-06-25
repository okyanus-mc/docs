# Okyanus mod yapımı

Bu sayfa, Okyanus mod yapımı için gerekli şeyleri ayarlamayı gösterecektir.

## Gereksinimler

- Java bilgisi
- Java kodlama ortamı
- Az da olsa terminal bilgisi

## Şablon kurulumu

İlk başta, [buradaki](https://github.com/okyanus-mc/template) şablonu kurmanız
gerekmekteir.

`Clone or download` veya `Use this template` tuşlarını kullanabilirsiniz. Biri,
direkt olarak indirmenizi, öbürü ise direkt bir GitHub reposu açabilmenizi sağlar.

İkisinden birini kullanın, ve bütün dosyaları bir klasöre kaydedin.

## İlk yapımı çalıştırmak

Gereksinimlerin yüklenebilmesi için bir kez yapım komudunu çalıştırmanız
gerekecektir.

Terminalinizden şablonun bulunduğu klasöre gelin, ve şu komudu çalıştırın:

```
$ ./gradlew build
```

Veya Windows kullanıyorsanız:

```
C:\> gradlew build
```

Eğer size `BUILD SUCCEEDED` demez ise, şablon sayfasında bir hata bildirimi
açabilirsiniz.

## Ve bu kadar

Hazırlıklarınız bu kadar. Çoğu IDE Gradle destekleyeceğinden, direkt olarak o
klasörü açarak kodlamaya başlayabilirsiniz!

Lütfen aşağıdaki dosyalardaki mod bilgilerini değiştirmeyi unutmayın:

- `build.gradle`
- `settings.gradle`
- `src/main/resources/okyanus.json`

## Javadoc

API Javadoclarını [bu adresten](https://okyanus-mc.github.io/api/) okuyabilirsiniz.

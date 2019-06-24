# Okyanus ile başlamak

Okyanus'u kurmak kolaydır. Yapmanız gerekenler:

- [okyanus-loader](https://github.com/okyanus-mc/loader/releases)'ı indirin.
- `java -jar okyanus-x.y.z.jar` ile sunucuyu çalıştırın.
- Okyanus bir iki hazırlık yapacaktır, ve sunucunuz açılacaktır.

Sunucu'yu indirmek bu kadar kolay olabilir, ama çoğu eklenti **Okyanus Runtime**
gerektirecektir. Onu da aşağıdaki gibi kurabilirsiniz:

- [Okyanus Runtime](https://github.com/okyanus-mc/runtime/releases)'ı indirin.
- `mods` klasörüne koyun.

Ve tamamen hazırsınız! Sunucunuza konsoldan `/mods` komudunu yazarak, her şeyi
doğru kurduğunuza emin olabilirsiniz.

Lütfen sunucunuzu ve Okyanus Runtime'ı arada bir güncellemeyi unutmayın.

## Önerilen Java argümanları

Sunucunuzu çalıştırırken aşaığdaki Java argümenlarını ilave etmenizi öneriyoruz:

```
-XX:+UseG1GC
-XX:+UnlockExperimentalVMOptions
-XX:MaxGCPauseMillis=100
-XX:+DisableExplicitGC
-XX:TargetSurvivorRatio=90
-XX:G1NewSizePercent=50
-XX:G1MaxNewSizePercent=80
-XX:G1MixedGCLiveThresholdPercent=35
-XX:+AlwaysPreTouch
-XX:+ParallelRefProcEnabled
```

Kaynak: [Aikar](https://mcflags.emc.gs)

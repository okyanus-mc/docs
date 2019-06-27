# Getting started with Okyanus

It's really easy to install Okyanus. All you have to do is the following:

- Download [okyanus-loader](https://scripts.issizler.club/okyanus.php?repo=loader)
- Run the server with `java -jar okyanus-x.y.z.jar`
- It will do some preparation, and your server will be up and running.

While installing the server itself is that easy, most mods will require the
**Okyanus Runtime**. Installing that is even easier, though.

- Download [Okyanus Runtime](https://scripts.issizler.club/okyanus.php?repo=runtime)
- Place it in your `mods` folder.

And you should be fully set up! Run your server and execute the `/okyanus` command
to check.

Please make sure to regularly update both your server, and runtime.

## Recommended Java arguments

We recommend you to use the following Java arguments when starting your server:

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

Source: [Aikar](https://mcflags.emc.gs)

# Developing Okyanus mods

This is a guide on setting up a development environment for Okyanus Mods

## Assumptions made

- You have knowledge of Java
- You have a Java development environment set up
- You can get around with the terminal

## Downloading the template

First, you'll want to download the Okyanus mod template from
[here](https://github.com/okyanus-mc/template)

You can either do it from the `Clone or download` button, or you can click the
`Use this template` button to create a GitHub repository from the template. In
any case, you should get these files into your computer somehow.

## Running the first build

You'll want to run a build before doing everything, just so all the dependencies
can be initialized. Open your template folder in a terminal, and run the following:

```
$ ./gradlew build
```

Or if you're on Windows:

```
C:\> gradlew build
```

If it doesn't tell you `BUILD SUCCEEDED`, feel free to create an issue on the
template repo.

## You're done

And that's it. Most IDEs will have Gradle support, so you should be able to just
import the folder and start coding away.

Please don't forget to change your mod information in the following files:

- `build.gradle`
- `settings.gradle`
- `src/main/resources/okyanus.json`

## Javadoc

You can read our API javadocs [here](https://okyanus-mc.github.io/api/).

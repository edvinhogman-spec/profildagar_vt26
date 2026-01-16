# Habit Tracker

Edvin Högman, Omed Ghousy

### Tävlar i kategori: 

Bästa helhetslösning, Bästa användarupplevelse (UX/UI)

## Projekt & Teknisk- beskrivning

Här skriver ni vad ni har gjort, försök att formulera det så att det blir relevant för kategorin ni tänker att ni tävlar i.
T.ex. om ni har fokuserat på just UI/UX så är det mer relevant än om ni 

Det ska även ingå en tekniskt beskrivning, där ni beskriver en eller flera tekniska lösningar i projektet. Ni skall beskriva funktionen av den tekniska lösningen och hur den används i projektet. Ju tydligare beskrivning desto enklare att bedöma den tekniska lösningen. Beskrivningen skall vara förståelig även för personer som inte kan programmera.

### Externt producerade komponenter

- NextJS
    * Vi valde att använda next.js eftersom det går snabbt att starta ett projekt och för att det har flera dx förbättringar jämfört med vanilla react. Det är nextjs som är skelettet till vårat projekt.
- TailwindCSS
    * Anledningen att vi använde tailwind istället för standard css är för att det är förbyggt med massa användbara klasser. Man får också auto-complete på allt man skriver och slipper flytta mellan css och tsx filer så ofta. Utan tailwind hade projektet inte blivit klart lika snabbt.
- TailwindMerge
    * Ett bibliotek som tar in flera tailwind klasser och ger tillbaka en kombinerad sträng. Detta är användbart för dynamiska saker som beror på data eller varianter.
- Biome
    * Är en linter och formatter som hjälper att skriva bättre kod. Den behövs inte för att köra programmet, men den hjälper till att få saker gjorda snabbare.

### Install
- Systemkrav: node.js måste vara installerat. 
- Installation: `npm i` i terminalen i samma mapp som webbsidan.
- Körning: `npm run dev` i terminalen i samma mapp som webbsidan.
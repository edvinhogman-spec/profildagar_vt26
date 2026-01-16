https://i.imgur.com/TsqpquN.png

# Habit Tracker

Edvin Högman, Omed Ghousy

### Tävlar i kategori: 

Bästa helhetslösning, Bästa användarupplevelse (UX/UI)

## Projekt & Teknisk- beskrivning

Här skriver ni vad ni har gjort, försök att formulera det så att det blir relevant för kategorin ni tänker att ni tävlar i.
T.ex. om ni har fokuserat på just UI/UX så är det mer relevant än om ni 

Det ska även ingå en tekniskt beskrivning, där ni beskriver en eller flera tekniska lösningar i projektet. Ni skall beskriva funktionen av den tekniska lösningen och hur den används i projektet. Ju tydligare beskrivning desto enklare att bedöma den tekniska lösningen. Beskrivningen skall vara förståelig även för personer som inte kan programmera.

### Externt producerade komponenter
- Google Icons
    * Alla ikoner i projektet är skapade av Google. De är gratis för vem som helst att använda. Ingen licens krävs. Vi använde deras ikoner för att de se bättre ut än vad vi någonsin kunde göra.

- NextJS
    * Next.js är projektets grund och fungerar som det ramverk som håller samman hela webbsidan. Vi valde Next.js framför vanlig React främst på grund av en bättre dx. Genom inbyggt routing och snabb set-up kunde vi påbörja projektet på direkten. Ramverket är ett måste för projektet då det hanterar både rendering och routing.

- TailwindCSS
    * För styling har vi använt TailwindCSS. Det är ett verktyg som använder sig av inbygga utility klasser. Istället för att skriva traditionell CSS direkt i separata filer, använder vi TailwindCSS för att styla webbsidan direkt i våra tsx filer. Detta hjälpte oss bli mycket mer effektiva. Dessutom har den en inbyggd auto-complete vilket hjälper oss skriva snabbare. Tailwind har hjälpt oss bli klara med projektet inom 24 timmar.

- TailwindMerge
    * Ett bibliotek som tar in flera tailwind klasser och ger tillbaka en kombinerad sträng. TailwindMerge är nödvändigt för dynamiska saker som beror på data eller varianter.

- Biome
    * Är en linter och formatter som hjälper att skriva bättre kod. Den behövs inte för att köra webbsidan, men den hjälper till att utveckla den snabbare.

### Install
- Systemkrav
    * Node.js måste vara installerat. 
- Installation
    * Kör `npm i` i terminalen i samma mapp som webbsidan.
- Körning
    * Kör `npm run dev` i terminalen i samma mapp som webbsidan.
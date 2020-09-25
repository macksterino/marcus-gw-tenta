<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

## 🚀 Create or develop a Gatsby site

**Prerequisites:**
- Node.JS
- Git Bash (if using Git)

## Using the Gatsby CLI to create a new site, specifying the hello-world starter:
1.     
```shell
# installing the Gatsby CLI
npm install -g gatsby-cli
```
2. 
```shell
# create a new Gatsby site using the hello-world starter
gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
```

## Using the Git CLI to clone a site, specifying my project:
1. 
```shell
# running my project
git clone https://github.com/macksterino/marcus-gw-tenta && cd marcus-gw-tenta && code .
```
2.  
```shell
# installing all the project dependencies
npm install
```

## Start developing

Navigate into your new site’s directory and start it up.

```shell
cd my-new-project/
gatsby develop
```

OR

```shell
cd my-new-project/
npm run develop
```

## 🎓 Tentamen
- **Se samband och värdera alternativa lösningar vid val av programmeringsteknik vid utveckling av dynamiska webbplatser**

Till en början var alla webbsidor statiska och för att göra en ändring behövde man gå in direkt i HTML-filen och redigera.
Dynamiska webbsidor innebär sidor som innehåller program- eller skriptkod som webbläsaren inte förstår. En sådan sida måste
därför köras på servern så att webbläsaren förstår.

Källa: *[Dynamiska webbsidor, LIU](https://www.diva-portal.org/smash/get/diva2:19374/FULLTEXT01.pdf)*

I vår senaste kurs skapade vi en blogg med React.JS samt MDX.
React är ett ramverk som visar vyer med återanvändbara komponenter som framställs i HTML element.
Vi använde oss utav förskapade MDX artiklar. Men om vi visar förskapade artiklar på en webbsida, är den dynamisk eller statisk?
Eftersom vi låter vårat skript generera artiklarna på sidan, där vi också kan specifiera hur många artiklar som syns per sida och
exakt vilken information vi vill visa på sidan, så är det en dynamisk webbsida. En statisk webbsida hade varit all vår information i MDX filen
direkt inuti en HTML fil.

Källa: *Egen bearbetning*

React används dock endast för att visa information, inte hantera resten av webbapplikationens logik.
Andra programspråk såsom ASP.NET, PHP etc. kan hantera båda fronter. Informationen som skickas emellan kan vara
via en MDX fil eller servas via ett API som hämtar från en databas. Med React är det vanligast med ett API
skrivet i JavaScript eller TypeScript som hanterar allt bakom kulisserna.

Källa: *[Quora m.fl](https://www.quora.com/Is-ReactJS-suitable-for-dynamic-websites)*

Men hur väljer man en över den andra? Statisk eller dynamisk webbsida?
Dynamiska webbsidor kräver mer arbete då vissa sidor visar annat innehåll för olika användare.
En statisk webbsida är perfekt om du har ett förbestämt antal sidor eller där innehållet är begränsat.
Dynamiska webbsidor är alltid trevligare att titta på och ökar upplevelsen för användaren men är som sagt krångligare då
då troligen måste använda dig av mer komplex verktyg, organisera kod mm. Uppsidan är att i slutändan blir det lättare att lägga till
nytt innehåll och upprätthålla webbapplikationen.

Källa: *[Amelia](https://wpamelia.com/static-vs-dynamic-website/)*

<!-- AUTO-GENERATED-CONTENT:END -->

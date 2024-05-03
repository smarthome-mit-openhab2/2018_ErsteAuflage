*This repository is archived.*

# Erste Auflage (September 2018)
Hier ist das Material zur im September 2018 erschienenen ersten Auflage von „Smart Home mit openHAB 2“.

## Korrekturen
Trotz eingehenden Redigierens können sich kleine Fehlerteufel einschleichen; diese Sammle ich [in einer eigenen Datei](doc/Korrekturen.md), um euch die Arbeit mit dem Buch trotz allem zu erleichtern.

## Hinweis zu Kap. 6.3: YAHOO! stellt die Weather-API ein
**Kap. 6.3** (ab S. 116) stützt sich auf die Verwendung des Weather-Bindings in Kombination mit der `YAHOO! Weather API`; eine übliche Kombination, die zum Zeitpunkt der Drucklegung fehlerfrei funktionierte.
Nachdem YAHOO! im November 2018 [bekanntgab, diesen Service zukünftig nicht mehr anbieten zu wollen](https://developer.yahoo.com/weather/), ist nun (Stand 27. Dezember 2018) die Rede von einem alternativen Angebot, für dessen Nutzung Zugangsdaten per Email angefordert werden müssen. Hier ist offenbar einiges in Bewegung, und fest steht lediglich: so, wie es zum Zeitpunkt der Drucklegung funktionierte, funktioniert es nun nicht mehr – und das ist bedauerlich.

Aber leider nicht unüblich: jeder Cloud-Anbieter kann seine Dienste jederzeit einstellen oder deren Nutzung beschränken, und im Zweifelsfall *hat man den Salat* und muss irgendwie damit umgehen. Das Kapitel  basierte übrigens ursprünglich auf der Nutzung von [WeatherUnderground](https://www.wunderground.com/weather/api/) und musste komplett umgeschrieben werden, als diese im Sommer 2018 ebenfalls den Dienst einstellten – Sie sehen, mit Herausforderungen dieser Art sieht man sich potentiell häufiger konfrontiert.

Es kann von meiner Seite keine Korrektur des betreffenden Kapitels geben – es ist ja nicht per se fehlerhaft, YAHOO! hat schlicht den Stecker gezogen. Es gibt aber alternative Möglichkeiten, dennoch mit dem Binding zu arbeiten und mit den grundlegenden Ideen, die das Kapitel vermitteln soll. Zwei Beispiele: 

* [DarkSky](https://darksky.net/) (ehemals `forecast.io`): per Webinterface fordern Sie einen API-Key an, die Konfiguration erfolgt analog zu der auf S. 118 genannten
```
apikey.ForecastIo=<IHR_API_KEY>
location.Rheinwerk.name=Rheinwerk-Verlag
location.Rheinwerk.latitude=50.717326
location.Rheinwerk.longitude=7.153704
location.Rheinwerk.provider=ForecastIo
location.Rheinwerk.language=de
location.Rheinwerk.updateInterval=15
```
* [OpenWeatherMap](https://openweathermap.org/api): auch hier müssen Sie sich zuerst registrieren und einen API-Key anfordern; und auch dieser Dienst lässt sich mit dem im Buch genutzten [Weather Binding](https://www.openhab.org/addons/bindings/weather1/) nutzen, die Konfiguration erfolgt analog:
```
apikey.OpenWeatherMap=<IHR_API_KEY>
location.Rheinwerk.name=Rheinwerk-Verlag
location.Rheinwerk.latitude=50.717326
location.Rheinwerk.longitude=7.153704
location.Rheinwerk.provider=OpenWeatherMap
location.Rheinwerk.language=de
location.Rheinwerk.updateInterval=15
```
Wer möchte, kann natürlich auch beide Dienste kombinieren.

Bezüglich der [Item-Definitionen](items/0603-Wetter.items) bin ich unsicher, welche Werte der jeweilige Dienst bereitstellt – bedenken Sie, dass diese Abschaltung der API mich genauso überraschend getroffen wie Sie selbst. So scheint DarkSky beispielsweise durchaus valide Werte für das Item `Windgeschwindigkeit` bereitzustellen, nicht aber für das Item `Windrichtung`; hier hilft nur Ausprobieren.

Und zuletzt: Anbieter, die APIs kappen, Systeme, die nach Upgrades verrückt spielen – von Problemen dieser Art sind üblicherweise immer mehrere betroffen, und [die openHAB-Community](https://community.openhab.org/) bietet Hilfestellung und Austausch.

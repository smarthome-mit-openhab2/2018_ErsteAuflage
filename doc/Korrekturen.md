## Ein paar Korrekturen...
Ich kann euch gar nicht sagen, wie oft alleine **ich** das Manuskript durchgegangen bin – wieder und wieder und wieder, und dann kamen die Korrektoren, die Lektoren, sie alle... und doch hat sich der ein oder andere Fehlerteufel eingeschlichen.

Das sei unvermeidbar, habe ich mir sagen lassen; genervt bin ich trotzdem :unamused: Um es für euch, meine lieben Leser, möglichst transparent zu halten gibt es nun diese Datei als Referenz. Meldet, wenn euch etwas auffällt: gerne im [Issue Tracker](https://github.com/smarthome-mit-openhab2/2018_ErsteAuflage/issues) oder erstellt, wenn ihr möchtet, [Pull Requests](https://github.com/smarthome-mit-openhab2/2018_ErsteAuflage/pulls) – schlussendlich hilft das allen.

Im Code werde ich die Korrekturen natürlich ebenfalls vornehmen; die Seitenzahlen beziehen sich jeweils auf die gedruckte Ausgabe des Buches.

### Kapitel 6
#### Listing 6.19 (S. 129)
```diff
rule "Status Summary Aktuell"
when
  Item Aussentemperatur changed or
  Item Wetterlage changed
then
  var Number temp = ((Aussentemperatur.state as DecimalType).floatValue)
- var lage = transform("MAP", "Wetterlage.map", Vorhersage_Wetterlage.state.toString)
+ var lage = transform("MAP", "Wetterlage.map", Wetterlage.state.toString)
  var String Ausgabe = String::format("%s bei %.1f°C", lage, temp)
  SummaryStateAktuell.postUpdate(Ausgabe)
end
```
<small>*(Dank an Frank S.)*</small>

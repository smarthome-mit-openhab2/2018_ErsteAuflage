/etc/openhab2/rules
===================

* Endung der Dateien immer `.rules`, also beispielsweise `Wetter.rules`
* Regelwerke sind das Herzstück von openHAB 2
* Mehrere Regeln **innerhalb einer Datei** teilen sich einen Ausführungskontext, also beispielsweise globale Variablen

Format
------
```
rule "Hier den Namen des Regelwerks einfuegen"
when
  // beliebige Menge an Auslösern,
  // zumindest jedoch einer
then
  // es folgen die gewünschten Anweisungen
end
```

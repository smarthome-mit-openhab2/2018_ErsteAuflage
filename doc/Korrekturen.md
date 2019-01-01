## Ein paar Korrekturen...
Ich kann euch gar nicht sagen, wie oft alleine **ich** das Manuskript durchgegangen bin – wieder und wieder und wieder, und dann kamen die Korrektoren, die Lektoren, sie alle... und doch hat sich der ein oder andere Fehlerteufel eingeschlichen.

Das sei unvermeidbar, habe ich mir sagen lassen; genervt bin ich trotzdem :unamused: Um es für euch, meine lieben Leser, möglichst transparent zu halten gibt es nun diese Datei als Referenz. Meldet, wenn euch etwas auffällt: gerne im [Issue Tracker](https://github.com/smarthome-mit-openhab2/2018_ErsteAuflage/issues) oder erstellt, wenn ihr möchtet, [Pull Requests](https://github.com/smarthome-mit-openhab2/2018_ErsteAuflage/pulls) – schlussendlich hilft das allen.

Im Code werde ich die Korrekturen natürlich ebenfalls vornehmen; die Seitenzahlen beziehen sich jeweils auf die gedruckte Ausgabe des Buches.

### Kapitel 2
#### 2.7 Sprache und Systemzeit (S. 55)
Beachtet bitte, dass Änderungen an der Datei `/etc/default/openhab2` unbedingt `root`-Rechte erfordern, denn nur `root` darf diese Datei beschreiben – eine Information, die ihr jederzeit mit `ls -l` verifizieren könnt. 
```
# ls -la /etc/default/openhab2
-rw-r--r-- 1 root root 2140 Feb 16  2018 /etc/default/openhab2
```

#### 2.7 Sprache und Systemzeit (S. 55)
```diff
- Erweitern Sie hierzu die Datei /etc/defaults/openhab2 um eine Zeile.
+ Erweitern Sie hierzu die Datei /etc/default/openhab2 um eine Zeile.
```
<small>*(Dank an Alejo A.)*</small>

```diff
- systemctl restart openhab2.service
+ sudo systemctl restart openhab2.service
```
<small>*(Dank an Michael P.)*</small>

### Kapitel 4
#### Links auf S. 83
Hier macht sich der Fehlerteufel in Form von Zeilentrennung bemerkbar – was natürlich zuschlägt, sobald man aus dem Ebook heraus einen Link einfach aufrufen möchte.

```diff
- https://git-hub.com/kubawolanin
+ https://github.com/kubawolanin
```

```diff
- https://code.visualstudio.com/down-load
+ https://code.visualstudio.com/download
```

```diff
- https://marketplace.visualstudio.com/items?item-Name=openhab.openhab
+ https://marketplace.visualstudio.com/items?itemName=openhab.openhab
```

### Kapitel 6
#### 6.1.1 Die Items (S. 96)
```diff
- [...] und fügen Sie ihn in eine Datei namens Demohaus.items ein, die Sie in /etc/openhab/items ablegen:
+ [...] und fügen Sie ihn in eine Datei namens Demohaus.items ein, die Sie in /etc/openhab2/items ablegen:
```
<small>*(Dank an Daniel)*</small>

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

### Kapitel 8
#### Listing 8.9 (S. 156)
```diff
Text item=fbDslStatus label="FRITZ!Box [%s]" {
  // FRAME Anwesenheit
  // FRAME Anrufbeantworter

  Frame label="Leitungswerte" {
-   Text item=fbExterneIp
+   Text item=fbExternalIp
     label="Externe IP-Adresse [%s]"
     icon="line"
     visibility=[fbDslStatus == "Up"]

-   Text item=fbDslExterneIp
+   Text item=fbExternalIp
     label="Keine DSL-Verbindung [⛔️]"
     icon="error"
     visibility=[fbDslStatus != "Up"]

   Text item=fbDslUpstream
     label="Upstream [%s mbit/s]
     icon="line"
     visibility=[fbDslStatus == "Up"]

   Text item=fbDslUpstream
     label="Upstream N/A []"
     icon="error"
     visibility=[fbDslStatus != "Up"]

   Text item=fbDslDownstream
     label="Downstream [%s mbit/s]"
     icon="line"
     visibility=[fbDslStatus == "Up"]

   Text item=fbDslDownstream
     label="Downstream N/A []"
     icon="error"
     visibility=[fbDslStatus != "Up"]
  } // END Frame Leitungswerte
} // END FRITZ!Box
```
<small>*(Dank an Michael G.)*</small>


### Kapitel 25: Das System auf einer externen Platte betreiben (ab S. 453)
<small>*(Dank an Thomas D.)*</small>
In diesem Kapitel fehlt ganz klar der Hinweis: die Befehle, die hier zur Ausführung kommen, benötigen alle `root`-Rechte – es muss also jeweils ein `sudo` vorangestellt werden, das im Buch jedoch unterschlagen wurde.
```diff
- dmesg
+ sudo dmesg
```

#### 25.1 Partitionierung (S. 454)
```diff
- fdisk /dev/sda
+ sudo fdisk /dev/sda
```

#### 25.2 Dateisystem (S. 454)
```diff
- mkfs.ext4 /dev/sda1
+ sudo mkfs.ext4 /dev/sda1
```

#### 25.3 Ins System einbinden (S. 454 & 455)
```diff
- mkdir /mnt/neueplatte
+ sudo mkdir /mnt/neueplatte

- mount -t ext4 /dev/sda1 /mnt/neueplatte
+ sudo mount -t ext4 /dev/sda1 /mnt/neueplatte
```

#### 25.4 Kopieren der Daten (S. 455)
```diff
- rsync -avzxS / /mnt/neueplatte
+ sudo rsync -avzxS / /mnt/neueplatte
```
Sie übertragen mit diesem Befehl das laufende System auf eine andere Partition; üblicherweise hat der folgende Hinweis keine negativen Auswirkungen auf den Vorgang – es kommt aber darauf an, *welche* Dateien nicht übertragen werden konnten.
```
rsync warning: some files vanished before they could be transferred (code 24) at main.c(1196) [sender=3.1.2]
```

#### 25.5 Anpassen der `cmdline.txt` (S. 455)
```diff
- Öffnen Sie also jetzt die Datei mit dem Editor Ihrer Wahl und ändern Sie...
+ Öffnen Sie also jetzt die Datei mit dem Editor Ihrer Wahl, stellen Sie dem Aufruf ein sudo voran und ändern Sie...
```

#### 25.6 Neustart
```diff
- Durch die Eingabe des Befehls reboot veranlassen Sie Ihr System final zum Neustart.
+ Durch die Eingabe des Befehls sudo reboot veranlassen Sie Ihr System final zum Neustart.

- mount -o remount,ro /boot
+ sudo mount -o remount,ro /boot

- touch /boot/test
+ sudo touch /boot/test

- Öffnen Sie /etc/fstab mit dem Editor Ihrer Wahl.
+ Öffnen Sie /etc/fstab mit dem Editor Ihrer Wahl und stellen Sie dem Aufruf ein sudo voran, um die Datei mit root-Rechten bearbeiten zu können.

- mount -o remount,rw /boot
+ sudo mount -o remount,rw /boot
```

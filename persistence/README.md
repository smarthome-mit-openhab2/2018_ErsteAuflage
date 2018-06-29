/etc/openhab2/persistence
=========================

* Konfiguration der einzelnen *Persistence Services*
* Der Dateiname orientiert sich am verwendeten Service:
  * also beispielsweise `influxdb.persist` für InfluxDB
  * oder `mapdb.persist` für MapDB

Format
------
```
Strategies {
  ...
  default = ... 
}

Items {
  ...
}
```

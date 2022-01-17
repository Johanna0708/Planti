# Planti GmbH
### Frontend für die App Planti
***
Diese App hilft dem Nutzer den Wasserbedarf seiner Pflanze zu bestimmen.
Der Nutzer benötigt dafür einen Feuchtigkeitssensor, den er über The Things Network (https://eu1.cloud.thethings.network/console/applications) registriert.
Nach der Registrierung auf TTN kann der Sensor auf Planti eingetragen werden.
Der Sensor wird anschließend in die Blumenerde neben der Pflanze gesteckt und die App ruft nun über TTN die empfangenen Sensordaten ab.
Der Nutzer erhält immer dann eine Gieß-Info in der App, wenn die Pflanze nicht genug Wasser hat.

## Technologien
***
* Framework: Ionic Vue
* Plugin für die Mehrsprachigkeit: Vue-i18n
* Plugin für die Datenanalyse: Vue3-Highcharts

## Setup
***
Um dieses Projekt auszuführen, installieren Sie es lokal mit npm
`$ npm install -g @ionic/cli`;<br/>
Führen Sie das Projekt mit `ionic serve` aus

## Aufbau der App
***
* um die Daten aus der Datenbank abrufen zu können, muss das Backend "BackendPlanti" (https://github.com/Johanna0708/BackendPlanti.git) gestartet werden

1. Tab:
   * neue Pflanzen können durch den Add-Button hinzugefügt werden
   * Anzeige, welche Pflanze mit welchem Sensor bereits vorhanden ist
   * Meldung erscheint, wenn eine Pflanze gegossen werden muss
   * Anzeigen des Bewässerungsverlaufs für die Pflanzen
    
2. Tab:
   * Datenbank mit allen Pflanzen
   * durch Klicken auf die Pflanzen werden Details zu diesen dargestellt
    
3. Tab:
   * Impressum mit Details zum Unternehmen
   * Kartendarstellung (GoogleMaps API)
   * Anmelde- bzw. Abmelde-Funktion /Registrierungsmöglichkeit


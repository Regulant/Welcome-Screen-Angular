# User Story - WelcomeScreen - Hilfe

## Beschreibung:

Es sollen bereits 2 Accounts in der Datenbank voreingestellt werden. 
Einmal "welcome@clear-group.de" mit dem Passwort "welcome2clear" und "admin@clear-group.de" mit dem Passwort "admin@welcome".
Beide Accounts haben vollen Zugriff auf die Anwendung.
Es sollen keine weiteren Accounts erstellt werden können. Man benötigt nur eine Anmelde- und Abmeldefunktion, wenn bereits angemeldet.

Wenn keine Anmeldung erfolgt, soll die Aufforderung kommen, dass man sich anmelden soll.
Ist der Benutzer nicht angemeldet, so hat er nur die Funktion die Anzeige für den TV zu sehen.

Termine etc. sollen nur mit dem Login erfolgen.



## Akzeptanzkriterien:

- Zwei voreingestellte Benutzer siehe oben
- Beide Benutzer haben vollen Zugriff - keine Einschränkung zwischen Benutzer Admin und Welcome
- Es kann kein neuer Benutzer angelegt werden über die Oberfläche
- Wenn nicht angemeldet, nur Zugriff auf die Ansicht des TV
- Wenn angemeldet können Termine etc. erfasst / bearbeitet / gelöscht werden
# STYLEGUIDE – Nikos Skartsolias Portfolio

## 1. Ziel des Styleguides

Dieser Styleguide dokumentiert die Gestaltung des persönlichen Fussball-Portfolios von Nikos Skartsolias. Ziel ist es, ein einheitliches Designsystem zu beschreiben, damit die Website professionell, modern und konsistent wirkt.

Der Styleguide hilft dabei, Farben, Typografie, Layouts und Komponenten nachvollziehbar zu machen.

---

## 2. Designidee

Die Website soll wie ein hochwertiges Sportportfolio wirken. Sie orientiert sich an:

- modernen Sportmarken
- persönlichen Athleten-Websites
- Fussballakademien
- Premium-Portfolios
- dunklen, hochwertigen UI-Designs

Die Website soll folgende Wirkung erzeugen:

- professionell
- sportlich
- ambitioniert
- modern
- hochwertig
- übersichtlich

---

## 3. Farbkonzept

Die Website verwendet ein dunkles Farbschema mit goldenen Akzenten.

| Farbe | Hex | Verwendung |
|---|---|---|
| Schwarz | `#050505` | Haupt-Hintergrund |
| Dunkelgrau | `#111113` | Cards, Sektionen |
| Hellgrau | `#b9b9b9` | Fliesstext |
| Weiss | `#ffffff` | Headlines, wichtige Texte |
| Gold | `#c8a85a` | Akzente, Buttons, Tags |

### Bedeutung der Farben

**Schwarz** steht für Eleganz, Fokus und Premium-Design.

**Gold** steht für Leistung, Erfolg und Exzellenz.

**Weiss** sorgt für klare Lesbarkeit.

**Grau** wird verwendet, damit Fliesstexte nicht zu hart wirken.

---

## 4. Typografie

Die Website verwendet eine moderne serifenlose Schrift.

### Schriftart

- **Inter**
- Fallback: Arial, sans-serif

### Headlines

Headlines sind gross, fett und teilweise eng gesetzt. Dadurch wirken sie modern und stark.

Beispiele:

- Seitenüberschriften
- Hero-Titel
- Abschnittstitel

### Fliesstext

Fliesstext ist heller Grau-Ton und besitzt genügend Zeilenhöhe. Dadurch bleibt er auch auf dunklem Hintergrund gut lesbar.

---

## 5. Layoutsystem

Die Website nutzt ein responsives Grid-System.

### Desktop

Auf Desktop werden häufig mehrere Spalten verwendet:

- 2-Spalten-Layout für Text und Bild
- 3-Spalten-Layout für Cards
- 4-Spalten-Layout für Statistiken
- Masonry-ähnliches Grid für Media

### Tablet

Auf Tablet werden Layouts reduziert:

- 2-Spalten-Cards
- weniger breite Tabellen
- gestapelte Inhalte bei komplexen Bereichen

### Mobile

Auf Mobile wird fast alles untereinander dargestellt:

- Navigation als Hamburger-Menü
- Cards untereinander
- Tabellen horizontal scrollbar
- Bilder in voller Breite
- Buttons einfacher bedienbar

---

## 6. Komponenten

### 6.1 Header

Der Header ist sticky/fixed und bleibt beim Scrollen sichtbar. Er enthält:

- Logo / Name
- Navigation
- Hamburger-Menü auf Mobile

Der Header verwendet einen dunklen halbtransparenten Hintergrund.

---

### 6.2 Buttons

Buttons sind rund und klar sichtbar.

Es gibt zwei Haupttypen:

- Primärbutton mit Gold
- Sekundärbutton mit dunklem Hintergrund

Hover-Effekte verbessern die Interaktivität.

---

### 6.3 Cards

Cards sind ein zentrales Element der Website.

Sie verwenden:

- abgerundete Ecken
- dunklen Hintergrund
- dezente Borders
- weiche Schatten
- teilweise Glassmorphism

Cards erscheinen unter anderem auf:

- Home
- About
- Performance
- Highlights
- Statistics
- Games

---

### 6.4 Media Cards

Die Media-Seite verwendet ein Grid mit Bildern. Die Bilder füllen die Cards vollständig aus.

Wichtige CSS-Eigenschaften:

```css
object-fit: cover;
object-position: center;
```

Bei einzelnen Bildern wurde `object-position` angepasst, damit der wichtigste Bildausschnitt sichtbar bleibt.

---

### 6.5 Tabellen

Die Games-Seite verwendet Tabellen für:

- Spielplan
- Resultate
- Rangliste

Die Tabellen sind auf Mobile horizontal scrollbar. Dadurch bleibt die Darstellung übersichtlich und bricht nicht.

---

### 6.6 Formulare

Formulare befinden sich auf der Kontaktseite und Newsletter-Bereichen.

Formulare verwenden:

- dunkle Inputs
- helle Schrift
- abgerundete Ecken
- klare Abstände
- Betreff-Dropdown

---

## 7. Bildsprache

Die Bilder sollen sportlich und persönlich wirken.

Bildarten:

- Matchbilder
- Training
- Team
- Fokus
- Highlights

Die Bilder unterstützen die sportliche Identität der Website.

---

## 8. Responsive Regeln

Die wichtigsten Breakpoints sind:

| Breakpoint | Zweck |
|---|---|
| `1200px` | kleinere Desktop-Ansichten |
| `980px` | Tablet |
| `720px` | Mobile Navigation |
| `430px` | kleine Smartphones |

### Wichtige Responsive-Entscheidungen

- Navigation wird zu Hamburger-Menü
- Cards wechseln von mehreren Spalten auf eine Spalte
- Tabellen werden scrollbar
- Hero-Texte werden kleiner
- Bilder erhalten feste Höhen für bessere Darstellung

---

## 9. Designentscheidungen

### Dark Theme

Das dunkle Theme wurde gewählt, weil es sportlich, hochwertig und modern wirkt.

### Gold-Akzente

Gold wurde verwendet, um wichtige Elemente hervorzuheben und Exzellenz zu symbolisieren.

### Grosse Typografie

Grosse Headlines erzeugen Wirkung und geben der Website einen professionellen Charakter.

### Glassmorphism

Glassmorphism sorgt für Tiefe und moderne UI-Wirkung.

---

## 10. Fazit

Der Styleguide stellt sicher, dass die Website ein einheitliches Erscheinungsbild besitzt. Durch Farben, Typografie, Cards, Grids und responsive Regeln entsteht ein modernes und hochwertiges Portfolio.

# Progetto Turismo Digitale

## Descrizione del Progetto

Questo progetto è una piattaforma di turismo digitale progettata per promuovere la regione Lazio in Italia e fornire informazioni dettagliate ai turisti. Offre una vasta gamma di funzionalità, tra cui:

*   **Informazioni sulle località:** Dettagli su varie città e paesi del Lazio, come Fiuggi, Paliano, Segni, Montecompatri e Genazzano.
*   **Itinerari turistici:** Suggerimenti per percorsi turistici che consentono agli utenti di esplorare diverse aree della regione.
*   **Informazioni sul team:** Presentazione dei membri del team di sviluppo.
*   **Chatbot:** Un assistente virtuale per rispondere alle domande frequenti degli utenti.
*   **Feedback degli utenti:** Un sistema per raccogliere feedback e suggerimenti dai visitatori del sito.

## Tecnologie Utilizzate

*   **HTML:** Utilizzato per strutturare le pagine web e definire il contenuto.
*   **CSS:** Utilizzato per stilizzare le pagine web e migliorare l'aspetto visivo.
*   **Bootstrap:** Un framework CSS che facilita la creazione di layout responsive e mobile-first.
*   **JavaScript:** Utilizzato per aggiungere interattività alle pagine web e gestire la logica del client-side.
*   **Fuse.js:** Una libreria JavaScript per implementare la ricerca fuzzy nel chatbot, consentendo agli utenti di trovare informazioni anche con errori di battitura o query imprecise.
*   **EmailJS:** Un servizio per inviare email direttamente dal browser, utilizzato per gestire il sistema di feedback degli utenti.

## Istruzioni di Setup

Segui questi passaggi per configurare ed eseguire il progetto:

1.  **Clona il repository:** Clona il repository sul tuo computer locale utilizzando Git:

    ```bash
    git clone <URL_del_repository>
    ```

2.  **Apri il file `index.html`:** Apri il file `index.html` nel tuo browser web preferito per visualizzare la home page del sito.

3.  **Verifica i percorsi dei file:** Assicurati che tutti i file CSS e JavaScript collegati nel file `index.html` abbiano i percorsi relativi corretti. In caso contrario, modifica i percorsi per puntare ai file corretti.

4.  **Configura il chatbot:**
    *   Verifica che il file `FAQ_Da_Inserire.json` sia presente e accessibile. Questo file contiene le domande e risposte utilizzate dal chatbot.
    *   Assicurati che il file JSON sia formattato correttamente e che contenga dati validi.

5.  **Configura il sistema di feedback:**
    *   Iscriviti a EmailJS e ottieni il tuo ID utente e le credenziali del servizio.
    *   Apri il file `feedback.html` e inserisci il tuo ID utente e le credenziali di EmailJS nel codice JavaScript.

## Struttura del Progetto

La directory principale del progetto contiene i seguenti file e directory:

*   `index.html`: La pagina principale del sito web.
*   `Fiuggi.html`, `Paliano.html`, `Segni.html`, `Montecompatri.html`, `Genazzano.html`: Pagine dedicate a specifiche località nella regione Lazio.
*   `itinerario.html`: Pagina contenente informazioni sugli itinerari turistici consigliati.
*   `staff.html`: Pagina con informazioni sui membri del team di sviluppo.
*   `feedback.html`: Pagina per la raccolta dei feedback degli utenti.
*   `home.css`, `city.css`, `prova.css`: Fogli di stile CSS per la personalizzazione dell'aspetto del sito web.
*   `FAQ_Da_Inserire.json`: File JSON contenente i dati delle FAQ per il chatbot.
*   `immagini/`: Directory contenente le immagini utilizzate nel sito web.

## Funzionalità Principali

*   **Chatbot:** Il chatbot utilizza la libreria Fuse.js per la ricerca fuzzy, consentendo agli utenti di trovare risposte anche se commettono errori di battitura o utilizzano query imprecise. Per aggiungere o modificare le domande e risposte del chatbot, modifica il file `FAQ_Da_Inserire.json`.
*   **Feedback degli utenti:** Il sistema di feedback utilizza EmailJS per inviare email direttamente dal browser. Questo semplifica la gestione delle comunicazioni con gli utenti e consente di rispondere rapidamente alle loro domande e suggerimenti.
*   **Design Responsive:** Il sito web è progettato con Bootstrap per garantire un layout responsive e una presentazione coerente su diversi dispositivi, come computer desktop, tablet e smartphone.

## Note Aggiuntive

*   Prima di pubblicare il sito web, assicurati di testare tutte le funzionalità, tra cui il chatbot e il sistema di feedback, per verificare che funzionino correttamente.
*   Per personalizzare l'aspetto del sito web, modifica i file CSS nella directory principale.
*   Per aggiungere nuove località o itinerari turistici, crea nuovi file HTML e collegali al menu di navigazione principale.
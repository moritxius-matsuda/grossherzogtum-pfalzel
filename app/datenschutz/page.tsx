import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/site/section-heading"
import { GOVID_URL, imprint } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Wie das Großherzogtum Pfalzel personenbezogene Daten verarbeitet – Register, GovID, Staatsbank und Staatsportal.",
}

const STAND = "28. November 2026"
const MAIL = "info@pfalzel.gd"

const Mail = () => (
  <a href={`mailto:${MAIL}`} className="font-medium text-ink underline decoration-gold underline-offset-2">
    {MAIL}
  </a>
)

type Abschnitt = { id: string; titel: string; inhalt: React.ReactNode }

const abschnitte: Abschnitt[] = [
  {
    id: "verantwortlicher",
    titel: "Verantwortlicher",
    inhalt: (
      <>
        <p>Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
        <address className="not-italic">
          {imprint.name}
          <br />
          {imprint.street}, {imprint.city}, {imprint.country}
          <br />
          E-Mail: <Mail />
        </address>
        <p>Für alle Fragen zum Datenschutz und zur Ausübung Ihrer Rechte erreichen Sie uns unter dieser Adresse.</p>
      </>
    ),
  },
  {
    id: "geltungsbereich",
    titel: "Geltungsbereich",
    inhalt: (
      <p>
        Diese Erklärung gilt für pfalzel.gd und alle zugehörigen Seiten und Dienste: Staatsportal, Websites der
        Ministerien und Behörden, GovID, Pfalzeler Staatsbank, Gesetzesportal, Behördenverzeichnis und das nicht
        öffentliche Zentralregister.
      </p>
    ),
  },
  {
    id: "besuch",
    titel: "Besuch der Seiten",
    inhalt: (
      <>
        <p>
          Beim Aufruf der Seiten verarbeitet unser Hoster technische Daten (IP-Adresse, Zeitpunkt, aufgerufene Seite,
          Browserinformationen) in Server-Logs. Grundlage ist unser berechtigtes Interesse an einem sicheren Betrieb
          und an der Fehleranalyse (Art. 6 Abs. 1 lit. f DSGVO). Die Logs werden spätestens nach 30 Tagen gelöscht.
        </p>
        <p>
          <strong>Reichweitenmessung:</strong> Auf dem Staatsportal nutzen wir Vercel Web Analytics. Es setzt keine
          Cookies und erstellt keine Profile. Gezählt werden Seitenaufrufe mit Herkunftsseite, Land, Gerätetyp und
          Browser. Ihre IP-Adresse wird dafür nicht gespeichert. Besucher werden nur über einen Tageswert
          unterschieden, der nach 24 Stunden verworfen wird. Grundlage ist unser berechtigtes Interesse, die Nutzung
          der Seiten zu verstehen (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          <strong>Karten:</strong> Einige Seiten (etwa die Landkarte und die Fahrplanauskunft) laden Kartenbilder von
          OpenStreetMap (OpenStreetMap Foundation, Vereinigtes Königreich). Dabei erhält die OpenStreetMap Foundation
          Ihre IP-Adresse. Für das Vereinigte Königreich besteht ein Angemessenheitsbeschluss der EU-Kommission.
          Grundlage ist unser berechtigtes Interesse an einer anschaulichen Darstellung (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          <strong>Übersetzung:</strong> Wenn Sie über das Sprachmenü eine andere Sprache wählen, werden die Texte der
          Seite zusammen mit Ihrer IP-Adresse an den Übersetzungsdienst MyMemory (Translated S.r.l., Italien)
          übermittelt. Das geschieht nur auf Ihre Auswahl hin (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          <strong>Live-Daten:</strong> Wetter, Verkehr, Luftraum, Wechselkurse und ähnliche Angaben rufen unsere Server
          selbst bei den jeweiligen Quellen ab. Ihre IP-Adresse wird dabei nicht an diese Anbieter übermittelt. Den Kurs
          der Pfalzeler Krone lädt die Staatsbank-Seite direkt von unserer eigenen Kursschnittstelle (api.moritxius.de).
        </p>
        <p>
          <strong>Schriften</strong> liefern wir von unseren eigenen Servern aus. Es wird keine Verbindung zu Google
          oder anderen Schriftanbietern hergestellt.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    titel: "Cookies und lokale Speicherung",
    inhalt: (
      <p>
        Das Staatsportal setzt keine Cookies. GovID, die Staatsbank und das Zentralregister verwenden für die
        Anmeldung technisch notwendige Cookies unseres Anmeldedienstes Clerk. Ohne sie ist eine sichere Anmeldung nicht
        möglich (§ 25 Abs. 2 Nr. 2 TDDDG). Ihre Auswahl des hellen oder dunklen Designs speichern wir nur in Ihrem
        Browser. Eine Einwilligung ist dafür nicht erforderlich, deshalb zeigen wir kein Cookie-Banner.
      </p>
    ),
  },
  {
    id: "kontakt",
    titel: "E-Mail-Kontakt",
    inhalt: (
      <p>
        Wenn Sie uns schreiben, verarbeiten wir Ihre Angaben, um Ihre Anfrage zu beantworten (Art. 6 Abs. 1 lit. b
        und f DSGVO). Die E-Mails werden auf unserem Mailserver gespeichert. Wir löschen die Korrespondenz 6 Monate
        nach Abschluss der Anfrage, auf Wunsch früher. Unaufgefordert zugesandte Unterlagen, die wir nicht benötigen
        (zum Beispiel Ausweiskopien), löschen wir umgehend.
      </p>
    ),
  },
  {
    id: "registrierung",
    titel: "Registrierung bei GovID und Staatsbank",
    inhalt: (
      <>
        <p>
          Für GovID und die Staatsbank können Sie sich online registrieren. Dabei verarbeitet unser Anmeldedienst Clerk
          Ihre E-Mail-Adresse, Ihren Namen, Ihr Passwort (nur verschlüsselt als Prüfwert) sowie Geräte- und
          Sitzungsdaten zum Schutz vor Missbrauch. Bei der Staatsbank wird mit der Registrierung ein Girokonto auf Ihren
          Namen eröffnet. Grundlage ist die Bereitstellung des von Ihnen gewünschten Dienstes (Art. 6 Abs. 1 lit. b
          DSGVO).
        </p>
        <p>
          Mit Ihrem GovID-Profil verbinden Sie sich erst dann mit dem Personen- und Melderegister, wenn Sie eingebürgert
          sind und Ihre Personennummer verknüpfen. Ihr Konto können Sie jederzeit selbst löschen (Abschnitt 14).
        </p>
      </>
    ),
  },
  {
    id: "einbuergerung",
    titel: "Einbürgerungsantrag und Einwilligung",
    inhalt: (
      <>
        <p>
          Die Einbürgerung beantragen Sie persönlich mit einem schriftlichen Antrag. Vorher erhalten Sie diese
          Datenschutzerklärung. Mit Ihrer eigenhändigen Unterschrift willigen Sie ausdrücklich in die Verarbeitung
          Ihrer Daten ein (Art. 6 Abs. 1 lit. a DSGVO). Wir bewahren das unterschriebene Formular auf, um die
          Einwilligung nachweisen zu können (Art. 7 Abs. 1 DSGVO). Sie erhalten eine Kopie.
        </p>
        <p>
          Ihre Identität prüfen wir durch Einsicht in einen Ausweis, ohne ihn zu kopieren. Bei Personen unter 18 Jahren
          unterschreiben zusätzlich die Erziehungsberechtigten.
        </p>
        <p>
          Die Einbürgerung und die Angabe Ihrer Daten sind freiwillig. Ohne die Angaben ist eine Einbürgerung jedoch
          nicht möglich. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Die bis dahin
          erfolgte Verarbeitung bleibt rechtmäßig. Ein Widerruf führt zur Löschung nach Abschnitt 14.
        </p>
        <p>E-Mails zur Terminvereinbarung löschen wir spätestens nach 90 Tagen, falls kein Termin zustande kommt.</p>
      </>
    ),
  },
  {
    id: "registerdaten",
    titel: "Registerdaten nach der Einbürgerung",
    inhalt: (
      <>
        <p>
          Nach abgeschlossener Einbürgerung legen wir Sie im Zentralregister an und richten Ihr GovID-Profil ein. Wir
          verarbeiten dann:
        </p>
        <ul>
          <li>
            <strong>Personenregister:</strong> Familienname, Vornamen, Geburtsname, Geburtsdatum und -ort, Geschlecht,
            Familienstand, Staatsangehörigkeit, gegebenenfalls Adelstitel, Augenfarbe und Körpergröße (für den
            Ausweis), Foto und Unterschrift sowie die vom Großherzogtum vergebene Personennummer und Ausweisnummer.
            Diese Nummern sind unabhängig von deutschen Ausweisdokumenten.
          </li>
          <li>
            <strong>Melderegister:</strong> Ihre Anschriften mit Meldezeiträumen.
          </li>
          <li>
            <strong>Weitere Register, soweit Sie sie nutzen:</strong> Fahrzeuge, Haustiere, Führerschein, diplomatischer
            Status und öffentliche Ämter.
          </li>
          <li>
            <strong>Anträge</strong>, die Sie in GovID stellen, sowie daraus erstellte Auszüge und Urkunden.
          </li>
          <li>
            <strong>Staatsbank</strong>, falls Sie ein Konto eröffnen: Kontodaten, Kontostand und Umsätze. Die
            Pfalzeler Krone ist eine Spielwährung und nicht in Euro einlösbar.
          </li>
        </ul>
        <p>
          Zweck ist die Führung der Register, die Ausstellung von Ausweisen und Urkunden und die Kontoführung.
          Grundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>
      </>
    ),
  },
  {
    id: "oeffentlich",
    titel: "Veröffentlichung von Amtsträgern",
    inhalt: (
      <p>
        Übernehmen Sie ein öffentliches Amt, zum Beispiel in der Regierung, veröffentlichen wir auf dem Staatsportal
        Ihren Namen, Ihr Amt, Ihr Ressort, die Amtszeit und gegebenenfalls Ihre Parteizugehörigkeit. Die
        Parteizugehörigkeit gehört zu den besonderen Kategorien personenbezogener Daten. Wir veröffentlichen sie nur mit
        Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a, Art. 9 Abs. 2 lit. a DSGVO). Diese Einwilligung können
        Sie unabhängig von Ihrer Staatsangehörigkeit jederzeit widerrufen. Sonst werden keine Registerdaten
        veröffentlicht.
      </p>
    ),
  },
  {
    id: "empfaenger",
    titel: "Zugriff, Empfänger und Dienstleister",
    inhalt: (
      <>
        <p>
          Auf das Zentralregister haben nur Amtsträger Zugriff, denen der Großherzog dafür eine Berechtigung erteilt
          hat, und zwar nur auf die Bereiche ihrer Berechtigung. Zugriffe und Änderungen werden protokolliert. Wir geben
          Ihre Daten nicht an Dritte weiter, auch nicht an deutsche Behörden, soweit wir nicht gesetzlich dazu
          verpflichtet sind. Wir verkaufen keine Daten.
        </p>
        <p>Für den technischen Betrieb setzen wir folgende Auftragsverarbeiter ein (Art. 28 DSGVO):</p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong> (USA): Hosting aller Seiten, Server-Logs, Reichweitenmessung, Bildspeicher
          </li>
          <li>
            <strong>Clerk Inc.</strong> (USA): Anmeldung für GovID, Staatsbank und Zentralregister (E-Mail-Adresse,
            Name, Anmeldedaten, Geräte- und Sitzungsdaten)
          </li>
          <li>
            <strong>Neon</strong> (Databricks Inc., USA): Datenbank der Register und der Staatsbank
          </li>
        </ul>
        <p>
          Bei diesen Anbietern können Daten in die USA übermittelt werden. Grundlage ist der Angemessenheitsbeschluss zum
          EU-US Data Privacy Framework (Art. 45 DSGVO), soweit der Anbieter danach zertifiziert ist. Im Übrigen gelten
          die Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).
        </p>
      </>
    ),
  },
  {
    id: "speicherdauer",
    titel: "Speicherdauer",
    inhalt: (
      <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-[16rem_1fr]">
        {[
          ["Registerdaten", "bis zu Ihrem Antrag auf Löschung"],
          ["GovID-Profil und Staatsbank-Konto", "bis Sie das Konto löschen"],
          ["Unterschriebener Antrag", "solange Sie im Register geführt werden"],
          ["Einwilligungsblatt", "solange Sie im Register geführt werden, danach wie in Abschnitt 14 beschrieben"],
          ["E-Mail-Korrespondenz", "6 Monate nach Abschluss der Anfrage"],
          ["Terminanfragen ohne Termin", "90 Tage"],
          ["Server-Logs", "höchstens 30 Tage"],
          ["Sicherungskopien", "höchstens 30 Tage"],
          ["Löschnachweis", "3 Jahre ab Ende des Jahres der Löschung"],
        ].map(([was, wie]) => (
          <div key={was} className="contents">
            <dt className="font-medium text-ink">{was}</dt>
            <dd>{wie}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    id: "einsicht",
    titel: "Einsicht in Ihre Daten und Auszüge",
    inhalt: (
      <p>
        In{" "}
        <a href={GOVID_URL} className="font-medium text-ink underline decoration-gold underline-offset-2">
          GovID
        </a>{" "}
        sehen Sie Ihre persönlichen Daten, Meldeadressen und Anträge. Über „Auszug anfordern“ können Sie einen Auszug
        aus dem Melde- oder Personenregister beantragen. Dieser wird als eigene Akte erstellt und erscheint nicht
        automatisch in Ihrem Profil. GovID zeigt daher nicht jede über Sie gespeicherte Information. Eine vollständige
        Auskunft nach Art. 15 DSGVO erhalten Sie kostenlos unter <Mail />. Unter „Datenschutz“ in GovID können Sie Ihre
        Daten außerdem jederzeit selbst löschen.
      </p>
    ),
  },
  {
    id: "rechte",
    titel: "Ihre Rechte",
    inhalt: (
      <>
        <p>
          Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
          Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20 DSGVO). Ihre Einwilligung können Sie jederzeit mit
          Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO), zum Beispiel in GovID oder per E-Mail an <Mail />.
        </p>
        <p className="rounded-xl border border-line bg-paper-2/60 p-4">
          <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Soweit wir Daten auf Grundlage unseres berechtigten
          Interesses verarbeiten (Server-Logs, Reichweitenmessung, Karten), können Sie aus Gründen, die sich aus Ihrer
          besonderen Situation ergeben, jederzeit widersprechen.
        </p>
        <p>Wir treffen keine automatisierten Entscheidungen und erstellen keine Profile (Art. 22 DSGVO).</p>
      </>
    ),
  },
  {
    id: "loeschung",
    titel: "Löschung und Anonymisierung",
    inhalt: (
      <>
        <p>
          Sie können die Löschung Ihrer Daten jederzeit in GovID unter „Datenschutz“ → „Daten löschen“ oder per E-Mail an{" "}
          <Mail /> beantragen. In GovID bestätigen Sie die Löschung mit Ihrem Passwort bzw. einem Anmeldecode. Danach
          erfolgt sie sofort. Bei einem Antrag per E-Mail prüfen wir zum Schutz vor Missbrauch Ihre Identität und
          löschen innerhalb eines Monats (Art. 12 Abs. 3 DSGVO).
        </p>
        <p>
          <strong>Gelöscht werden</strong> Ihre Einträge im Personen- und Melderegister (einschließlich Foto,
          Unterschrift, Personennummer, Ausweisnummer und Anschriften) und Ihre Einträge in allen weiteren Registern.
          Ebenso gelöscht werden Ihre Anträge, Ihr GovID-Profil, Ihr Staatsbank-Konto und alle Akten zu Ihrer Person,
          etwa Registerauszüge und Urkunden. Damit erlischt auch Ihre Staatsangehörigkeit. Ein Guthaben auf Ihrem
          Staatsbank-Konto verfällt ersatzlos.
        </p>
        <p>
          <strong>Anonymisiert werden</strong> Protokolleinträge und die Überweisungen anderer Nutzer an Sie oder von
          Ihnen. Dabei werden Ihr Name und alle Angaben, die auf Sie verweisen, unumkehrbar entfernt. Anonymisierte
          Einträge sind keine personenbezogenen Daten mehr. In Sicherungskopien können Ihre Daten noch höchstens 30 Tage
          verbleiben und werden dann überschrieben.
        </p>
        <p>
          <strong>Aufbewahrt werden</strong> nur zwei Dinge. Das papierne Antragsblatt vernichten wir, das
          Einwilligungsblatt bewahren wir noch drei Jahre ab Ende des Jahres der Löschung auf. So können wir uns gegen
          mögliche Ansprüche verteidigen (Art. 17 Abs. 3 lit. e, Art. 6 Abs. 1 lit. f DSGVO). Außerdem speichern wir
          einen Löschnachweis mit Nachweisnummer, den Aktenzeichen der gelöschten Akten und dem Datum der Löschung,
          ohne Ihren Namen. Beides verwenden wir für keinen anderen Zweck und vernichten es nach Ablauf der Frist.
        </p>
      </>
    ),
  },
  {
    id: "sicherheit",
    titel: "Datensicherheit",
    inhalt: (
      <p>
        Alle Verbindungen sind verschlüsselt (HTTPS). Der Zugriff auf die Register ist nach Rollen beschränkt und wird
        protokolliert. Vor der Löschung in GovID ist eine erneute Anmeldung nötig. Unterschriebene Formulare werden
        verschlossen aufbewahrt.
      </p>
    ),
  },
  {
    id: "beschwerde",
    titel: "Beschwerderecht",
    inhalt: (
      <>
        <p>
          Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren (Art. 77 DSGVO). Für uns zuständig ist:
        </p>
        <address className="not-italic">
          Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz
          <br />
          Hintere Bleiche 34, 55116 Mainz
          <br />
          <a
            href="https://www.datenschutz.rlp.de"
            className="font-medium text-ink underline decoration-gold underline-offset-2"
            rel="noopener noreferrer"
          >
            www.datenschutz.rlp.de
          </a>
        </address>
      </>
    ),
  },
  {
    id: "stand",
    titel: "Änderungen und Stand",
    inhalt: (
      <p>
        Stand: {STAND}. Ändert sich die Verarbeitung, passen wir diese Erklärung an. Betrifft die Änderung Ihre
        Einwilligung, informieren wir Sie vorher und holen bei Bedarf eine neue Einwilligung ein.
      </p>
    ),
  },
]

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        intro="Registerdaten verarbeiten wir erst mit Ihrem persönlichen Einbürgerungsantrag und Ihrer unterschriebenen Einwilligung. Hier steht, was wir speichern, wer darauf zugreift und wie Sie Ihre Daten löschen."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[16rem_1fr] lg:px-8">
        <nav aria-label="Inhalt" className="hidden lg:block">
          <div className="sticky top-24">
            <p className="eyebrow">Inhalt</p>
            <ol className="mt-4 space-y-1.5 text-sm">
              {abschnitte.map((a, i) => (
                <li key={a.id}>
                  <a href={`#${a.id}`} className="flex gap-2 text-ink-soft hover:text-ink">
                    <span className="w-5 shrink-0 tabular-nums">{i + 1}.</span>
                    {a.titel}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="min-w-0 max-w-3xl space-y-12">
          {abschnitte.map((a, i) => (
            <section key={a.id} id={a.id} className="scroll-mt-24">
              <h2 className="font-serif text-2xl font-medium tracking-tight">
                <span className="mr-2 text-gold-ink">{i + 1}.</span>
                {a.titel}
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                {a.inhalt}
              </div>
            </section>
          ))}
          <p className="border-t border-line pt-6 text-sm text-ink-soft">
            Siehe auch das{" "}
            <Link href="/impressum" className="underline underline-offset-2 hover:text-ink">
              Impressum
            </Link>
            .
          </p>
        </article>
      </section>
    </>
  )
}

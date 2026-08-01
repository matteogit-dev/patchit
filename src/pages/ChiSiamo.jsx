import { usePageMeta } from '../hooks/usePageMeta'

function ChiSiamo() {

  usePageMeta('Chi sono', 'La storia dietro PatchIT e le traduzioni amatoriali di videogiochi PC.')
  
  return (
    <section className="section" style={{ paddingTop: '48px', maxWidth: '760px' }}>
      <div className="eyebrow">CHI SONO</div>
      <h1 className="about-statement">
        Non aspetto più che qualcuno traduca<br />
        i giochi che amo. <span className="accent">Li traduco io.</span>
      </h1>

      <div className="stats-card" style={{ marginTop: '40px' }}>
        <div className="stats-titlebar">
          <div className="dot"></div><div className="dot"></div><div className="dot"></div>
          <span className="stats-filename">chi-sono.md</span>
        </div>
        <div className="about-body">
          <p>
            PatchIT nasce da una frustrazione semplice: scoprire un gioco che sembra fatto
            apposta per te, e trovarlo solo in inglese — senza sottotitoli, senza menu, senza
            niente in italiano.
          </p>
          <p>
            Prendo i file del gioco, li apro con gli strumenti giusti, e traduco io stesso —
            un menu, una riga di dialogo, una descrizione alla volta. Non è un lavoro, è un
            progetto personale portato avanti nel tempo libero, gioco per gioco.
          </p>
          <p>
            Le patch che trovi qui sono gratuite e lo resteranno sempre. Se una traduzione ti
            è stata utile, il modo migliore per ringraziare è parlarne a chi potrebbe averne
            bisogno.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ChiSiamo
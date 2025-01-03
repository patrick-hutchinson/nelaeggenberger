import React from "react";
import { useEffect, useState, useRef } from "react";

import styles from "./Home.module.css";

const LeftPanel = () => {
  return (
    <div id="left-panel">
      <div className="title_about">
        <div className="menusection-content">
          <p>
            <span className="bold">Nela Eggenberger</span> studied Art History at the University of Vienna. Since 2013 she has
            been Chief Editor of
            <a target="_blank" rel="noopener noreferrer" href="https://www.eikon.at/">
              EIKON–International Magazine for Photography and Media Art
            </a>
            , a quality international quarterly established in 1991 and published by the
            <span className="italics">Austrian Institute of Photography and Media Art</span> (Österreichisches Institut für
            Photographie und Medienkunst), which she is directing as well.
          </p>
          <p>
            As the Artistic Director she is also responsible for programming further activities of the institute (among them
            <a target="_blank" rel="noopener noreferrer" href="https://www.eikon.at/content/en/news_schaufenster.php">
              EIKON Schauraum
            </a>
            ,
            <a target="_blank" rel="noopener noreferrer" href="https://www.eikon.at/content/en/edition.php">
              Edition EIKON
            </a>
            ,
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.eikon.at/content/en/zeitschrift_sonderpublikationen.php"
            >
              EIKON publications
            </a>
            ).
          </p>
          <p>
            She has been a juror for various photo prizes and artist-in-residence programs. Beyond that, she realizes exhibitions
            with a focus on photo-related art and projects with
            <a target="_blank" rel="noopener noreferrer" href="https://www.eggenberger.studio/">
              Studio Eggenberger
            </a>
            .
          </p>
        </div>
      </div>

      <div className="title_contact">
        <br />
        <div className="menusection-content">
          <div className="menupoints">
            <div className="email">
              <a href="mailto:nela@eggenberger.studio">nela(at)eggenberger.studio</a>
            </div>
            Based in Vienna, AT
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="textcontent">
        <div className="title_texts-talks">
          <div className="menusection-content">
            <div className="titelschrift-kleiner">TEXTS AND TALKS</div>
            <br />
            <br />

            <div className="subcategory-title">Selected Essays</div>
            <br />

            <li>
              <span className="italics">Culture versus Unculture: Nick Block’s Oil Paintings</span>, in:
              <span className="italics">Ten by Ten</span>, FotoFest exh.cat., Houston 2022
            </li>
            <li>
              <span className="italics">In the Green Box: Felicity Hammond’s Brave New World</span>, in: EIKON #112 (11/2020)
            </li>
            <li>
              <span className="italics">ab_bilden: Drei fotografische Reaktionen auf Hans Hollein</span>, text written with Jan
              Stradtmann, in:
              <a
                target="”_blank"
                href="https://kulturforumberlin.at/101/wp-content/uploads/2020/09/Kosmos-%C3%96sterreich-Kultur-und-Wissenschaft.pdf"
              >
                Kosmos Österreich #65
              </a>
              , Austrian Cultural Forum Berlin 2020
            </li>
            <li>
              <span className="italics">Jürgen Klauke: Formalisation of Boredom, 1980/81</span>, in:
              <a target="”_blank" href="https://exitmedia.net/EXIT/en/exit/242-exit-76-your-favourite-photograph.html">
                EXIT #76
              </a>
              (11/2019)
            </li>
            <li>
              <span className="italics">Jaakko Kahilaniemi: 100 Hectares of Understanding</span>, in: EIKON #99 (9/2017)
            </li>
            <li>
              <span className="italics">Ephemeral Fictions: On Photographs by Noémie Goudal</span>, in: EIKON #96 (11/2016)
            </li>

            <br />
            <br />

            <div className="subcategory-title">Selected Interviews</div>
            <br />

            <li>
              <span className="italics">Fueling the Rocket So That It Ignites: The Launch of the Foto Arsenal Wien</span>,
              interview with Felix Hoffmann, in: EIKON #120 (11/2022)
            </li>
            <li>
              <span className="italics">Breaking Taboos as an Elixir of Life: Margot Pilz</span>, in: EIKON #116 (11/2021)
            </li>
            <li>
              <span className="italics">
                I have the opportunity of celebrating my birthday next year: VALIE EXPORT in conversation
              </span>
              , in: EIKON #110/111 (9/2020)
            </li>
            <li>
              <span className="italics">No preconceived images in mind</span>, interview with Michael Höpfner, in:
              <a
                target="”_blank"
                href="https://www.mqw.at/en/mq-journal/2020/michael-hoepfner-and-nela-eggenberger-in-conversation"
              >
                mqw.at
              </a>
              (12/5/2020)
            </li>
            <li>
              <span className="italics">From Vision to Institution: 40 Years of Ars Electronica</span>, interview with Gerfried
              Stocker, EIKON #107 (9/2019)
            </li>
            <li>
              <span className="italics">There’s this faith, that photography will solve some problems in the world</span>,
              interview with Valter Ventura, in:
              <a target="”_blank" href="https://www.mqw.at/mq-journal/2019/interview-with-valter-ventura">
                mqw.at
              </a>{" "}
              (8/2/2019)
            </li>
            <li>
              <span className="italics">
                150 Years of University of Applied Arts Vienna: A Conversation with Gerald Bast and Patrick Werkner
              </span>
              , in: EIKON #99 (9/2017)
            </li>

            <br />
            <br />

            <div className="subcategory-title">Selected Talks</div>
            <br />

            <li>
              <span className="italics">Roundtable: State of the Art(ist)</span>, panel discussion with Christl Baur, Nela
              Eggenberger, Simon Mraz and Gerfried Stocker, (
              <a target="”_blank" href="https://www.viennaartweek.at/de/">
                VIENNA ART WEEK
              </a>
              , 24/11/2022)
            </li>
            <li>
              <span className="italics">
                Aus den Institutionen II: Fotografische Sammlungen in Österreich – Wie eng ist das Feld der Kunst gesteckt, oder:
                Wie weit reicht die Fotografie?
              </span>
              , as part of
              <span className="italics">FOTO WIEN Symposium: Wie hältst du’s mit dem Material? Vom Umgang mit Fotografie(n)</span>
              , moderation of the panel discussion with Kurt Kaindl, Walter Moser, Gerald Piffl, Thorsten Sadowsky, Alfred
              Weidinger (FOTO WIEN, Atelier Augarten, Vienna, 18/3/2022)
            </li>
            <li>
              <span className="italics">Stillleben. Ein Genre erfindet sich neu?</span>, moderation of the panel discussion with
              Manuel Gorkiewicz and Bettina Leidl (
              <a target="”_blank" href="https://www.viennacontemporary.at/de/">
                viennacontemporary
              </a>
              , 28/9/2018)
            </li>
            <li>
              <span className="italics">WOMEN WHO WORRY</span>, moderation of the panel discussion on the occasion of the
              International Women’s Day with Margot Pilz and Ursula Maria Probst (
              <a target="”_blank" href="https://www.k-haus.at/">
                Künstlerhaus Wien
              </a>
              , Vienna, 8/3/2018)
            </li>
            <li>
              <span className="italics">Young + creative = successful... and then?</span>, moderation of the talk with Gabriele
              Schor and Karin Fisslthaler (
              <a target="”_blank" href="https://www.viennacontemporary.at/de/">
                viennacontemporary
              </a>
              , 22/9/2017)
            </li>
            <li>
              <span className="italics">On Publishing (Photography) II</span>, panel discussion with Arno Gisinger, Abigail
              Solomon-Godeau, Sabine Weier and Nela Eggenberger (
              <a target="”_blank" href="https://www.rencontres-arles.com/">
                Les Rencontres de la photographie
              </a>
              , Arles, 7/7/2017)
            </li>
            <li>
              <span className="italics">On Publishing (Photography) I</span>, lecture (
              <a target="”_blank" href="https://www.le-bal.fr/le-bal">
                Le Bal
              </a>
              , Paris, 4/5/2017)
            </li>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="titelschrift-kleiner">PROJECTS</div>
        <br />
        <br />

        <div className="title_projects">
          <div className="menusection-content">
            <div className="subcategory-title">Selected Exhibitions</div>
            <br />
            <li>
              <span className="italics">ab_bilden (de_pict): Gregor Eggenberger, Claudia Larcher, Sinta Werner</span>, curated
              with Jan Stradtmann, Austrian Cultural Forum/Austrian Embassy Berlin, 2020/21
            </li>
            <li>
              <span className="italics">EIKON Award (45+): Katrín Elvarsdóttir, Gabriele Rothemann, Susan MacWilliam</span>,
              Künstlerhaus Wien, Vienna, 2018
            </li>
            <li>
              <span className="italics">Pas de Deux</span>, curated with Anja Manfredi, KUNST HAUS WIEN, Vienna, 2015
            </li>
            <li>
              <span className="italics">Crossers: Markus Oberndorfer, Gregor Sailer</span>, Loris, Berlin, 2014
            </li>
            <li>
              <span className="italics">UNFRAMED</span>, conception with Josephine Wagner, Galerie Raum mit Licht, Vienna, 2014
            </li>
            <li>
              <span className="italics">Fragile. An experimental approach to an exhibition</span>, curated with Gregor
              Eggenberger, BAWAG P.S.K. Contemporary, Vienna, 2013
            </li>

            <br />
            <br />

            <div className="subcategory-title">Other Projects</div>
            <br />

            <li>
              <span className="bold">EIKON Award (45+)</span>
              <br />
              Europe-wide award under the patronage of VALIE EXPORT | for women photographers and media artists aged 45 and older
              | on the occasion of the 100th issue of EIKON, 2017
              <br />
            </li>
            <li>
              <span className="bold">5 × 5. Photo Tracks</span> <br />
              special publication on the occasion of EIKON’s 25th anniversary | with contributions by David Bate, Linde B.
              Lehtinen, Steffen Siegel, Abigail Solomon-Godeau and Urs Stahel, 2016
              <br />
            </li>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="titelschrift-kleiner">FURTHER ACTIVITIES</div>
        <br />
        <br />

        <div className="title_further-activities">
          <div className="menusection-content">
            <div className="subcategory-title">Jurying</div>
            <br />
            <div className="einzug">
              Passage AiR, 2023
              <br />
              Wolf Suschitzky Photography Prize, 2023
              <br />
              OÖ Landespreise für Kultur und OÖ Talentförderungsprämien, 2022
              <br />
              Landskrona Foto & Breadfield Dummy Award, 2022
              <br />
              f/12.2 scholarship of Kunststiftung DZ Bank, 2021/22
              <br />
              C/O Berlin Talent Award (category: theory), 2021
              <br />
              land niederösterreich kulturpreise, 2020
              <br />
              Q21 viennacontemporary Artist-in-Residence Prize, 2018, 2019, 2020
              <br />
              Critic-in-Residence, studio das weisse haus, 2018
              <br />
              land niederösterreich kulturpreise, 2017
              <br />
              Artproof Grant Vienna, 2016
            </div>

            <br />
            <br />

            <div className="subcategory-title">Mentoring</div>
            <br />
            <div className="einzug">
              <a target="”_blank" href="https://www.akbild.ac.at/en">
                Academy of Fine Arts Vienna
              </a>
              , art mentoring program, 2022/23
            </div>
            <br />
            <br />

            <div className="subcategory-title">Portfolio Reviews</div>
            <br />
            <div className="einzug">
              <a target="”_blank" href="https://artmarketbudapest.hu/artphotobudapest/">
                Art Photo Budapest
              </a>{" "}
              (HU)
              <br />
              <a target="”_blank" href="https://www.photofestival.gr/">
                Athens Photo Festival
              </a>{" "}
              (GR)
              <br />
              <a target="”_blank" href="https://backlight.fi">
                Backlight Photo Festival
              </a>{" "}
              (Tampere, FI)
              <br />
              Eyes On – Monat der Fotografie Wien (Vienna, AT)
              <br />
              <a target="”_blank" href="https://fotofest.org/">
                FotoFest Meeting Place
              </a>{" "}
              (Houston, US)
              <br />
              <a target="”_blank" href="https://fotofestiwal.com/2022/">
                Fotofestiwal
              </a>{" "}
              (Łódź, PL)
              <br />
              <a target="”_blank" href="https://calling.fotohof.at/">
                FOTOHOF calling
              </a>{" "}
              (Salzburg, AT)
              <br />
              Fotopub (Novo Mesto, SI)
              <br />
              FOTO WIEN (Vienna, AT)
              <br />
              <a target="”_blank" href="https://helsinkiphotofestival.com">
                HELPHOTO
              </a>{" "}
              (Helsinki, FI)
              <br />
              <a target="”_blank" href="https://www.kabk.nl/en/">
                KABK | The Royal Academy of Art
              </a>{" "}
              (The Hague, NL)
              <br />
              <a target="”_blank" href="https://www.boutographies.com/">
                Les Boutographies
              </a>{" "}
              (Montpellier, FR)
              <br />
              Photonic Moments (Ljubljana, SI)
              <br />
              <a target="”_blank" href="https://tipf.is/">
                The Icelandic Photo Festival
              </a>{" "}
              (Reykjavík, IS)
              <br />
              <a target="”_blank" href="https://unseenamsterdam.com/">
                unseen Amsterdam
              </a>{" "}
              (NL)
              <br />
              ViennaPhotoBookFestival (AT)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RightPanel = () => {
  return (
    <div id="right-panel">
      <img src="./mat/img/nela-eggenberger-01.jpeg" title="ab_bilden: exhibition at Austrian Cultural Forum Berlin, 2020/21" />
      <img src="./mat/img/nela-eggenberger-02.jpeg" title="5 × 5. Photo Tracks: EIKON jubilee publication, 2016" />
      <img
        src="./mat/img/nela-eggenberger-03.jpeg"
        title="EIKON Award (45+): prize winners exhibition at Künstlerhaus Wien, Vienna, 2018"
      />
    </div>
  );
};

const Copyright = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className="copyrighttext">
      (1) ab_bilden: Exhibition at Austrian Cultural Forum Berlin, 2020/21 <br />
      Photo © Studio Eggenberger
      <br />
      (2) 5 × 5. Photo Tracks: EIKON jubilee publication, 2016
      <br />
      (3) EIKON Award (45+): prize winners exhibition at Künstlerhaus Wien, Vienna, 2018
      <br />
      Photo © Studio Eggenberger
      <br />
      <br />
      This website does not store any personal or private data as defined by Austrian and European law. This website does not use
      cookies.
      <br />
      <br />© Nela Eggenberger, <span className="currentYear">{currentYear}</span>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <LeftPanel />
      <RightPanel />
      <Copyright />
    </>
  );
}

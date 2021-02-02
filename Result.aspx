<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Result.aspx.cs" Inherits="Bestuivers.Result" %>
<!DOCTYPE html>
<html lang="nl">
  <head>

    <meta name="description" content="Tips en advies om terreinen geschikter te maken voor bijen en zweefvliegen (voedselaanbod, nestelplekken en beheer)">
    <meta property="og:title" content="Hulp voor bestuivers: Advies op maat om bijen en zweefvliegen te helpen overleven in Nederland" />
    <meta property="og:url" content="http://www.hulpvoorbestuivers.nl" />
    <meta property="og:description" content="Tips en advies om terreinen geschikter te maken voor bijen (voedselaanbod, nestelplekken en beheer)">
    <meta property="og:image" content="./assets/hulpvoorbestuivers.png">
    <meta property="og:type" content="website" />

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/global.css" media="screen" />
    <link rel="stylesheet" href="css/results.css" media="screen" />
    <link rel="stylesheet" href="css/details.css" media="screen" />
    <link rel="stylesheet" href="css/print.css" media="print" />

    <script src="./js/jquery-1.3.2.min.js"></script>
    <script src="./js/global.js" defer></script>
    <script src="./js/chart.library.js" defer></script>
    <script src="./js/results.js" defer></script>
    <script src="./js/details.js" defer></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=URLSearchParams%2CArray.prototype.forEach%2CArray.from%2CNodeList.prototype.forEach"></script>
    <script defer>
        window.MSInputMethodContext && document.documentMode && document.write('<script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"><\x2fscript>');
    </script>
    <!-- generics -->
    <link rel="icon" href="./assets/favicons/favicon-32.png" sizes="32x32" />
    <link rel="icon" href="./assets/favicons/favicon-57.png" sizes="57x57" />
    <link rel="icon" href="./assets/favicons/favicon-76.png" sizes="76x76" />
    <link rel="icon" href="./assets/favicons/favicon-96.png" sizes="96x96" />
    <link rel="icon" href="./assets/favicons/favicon-128.png" sizes="128x128" />
    <link rel="icon" href="./assets/favicons/favicon-192.png" sizes="192x192" />
    <link rel="icon" href="./assets/favicons/favicon-228.png" sizes="228x228" />

    <!-- Android -->
    <link
      rel="shortcut icon"
      sizes="196x196"
      href="./assets/favicons/favicon-196.png"
    />

    <!-- iOS -->
	<link rel="apple-touch-icon" href="./assets/favicons/favicon-120.png" sizes="120x120">
	<link rel="apple-touch-icon" href="./assets/favicon-152.png" sizes="152x152">
	<link rel="apple-touch-icon" href="./assets/favicon-180.png" sizes="180x180">

    <!-- Windows 8 IE 10-->
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta
      name="msapplication-TileImage"
      content="./assets/favicons/favicon-144.png"
    />

    <!-- Windows 8.1 + IE11 and above -->
    <meta
      name="msapplication-config"
      content="./assets/favicons/browserconfig.xml"
    />

    <title>Hulp voor bestuivers</title>
  </head>
  <body>
    <div class="loader">
      <img src="./assets/logo.svg" alt="" />
    </div>

    <div class="print">Dit is voor de afdruk</div>

    <div class="layout">
      <!-- header navgation -->
      <div class="nav_logo-flag">
        <img src="./assets/logo.svg" alt="logo" class="nav_logo" />
        <h3 class="nav_flag">Hulp voor bestuivers</h3>
      </div>

      <header class="header">
        <nav class="header_nav">
          <ul class="nav_list">
              <li class="nav_item active"><a class="nav_item_link" href="index.html">Advies</a></li>
              <li class="nav_item"><a class="nav_item_link" href="landschapstypen.html">Landschapstypen</a> </li>
              <li class="nav_item"><a class="nav_item_link" href="verantwoording.html">Verantwoording</a> </li>
          </ul>
        </nav>
      </header>

      <!-- hero -->
      <section class="hero">
        <div class="hero_logo-flag">
          <img src="./assets/logo.svg" alt="logo" class="hero_logo" />
          <h3 class="hero_flag">HULP VOOR BESTUIVERS</h3>
        </div>
        <div class="hero_description">
          <h3>
            Advies op maat om bijen en zweefvliegen te helpen overleven in
            Nederland
          </h3>
        </div>
      </section>

      <!-- content section -->
      <section class="content">
        <div class="print-box">
          <h3 class="content_title"><%= _situatie_ %></h3>
          <div class="content_chosen-params">
              <%= _gekozen_parameters_ %>
              <a href="index.html" class="content_edit-btn">
              <img src="./assets/edit-icon.svg" alt="edit" />
            </a>
          </div>
        </div>
        <div class="print-box">
            <%= _diagram_ %>
        </div>
        <p class="content_introduction text">
          <%= _introductie_ %>
        </p>

        <div class="main_content">
          <%= _lijst_van_maatregelen_ %>
          <div class="content_details">
            <div class="go-back" hidden>
              <input type="checkbox" class="section_title_input" />
              <div class="sm-box section_dropdown">
                <img src="./assets/arrow.svg" alt="arrow" />
              </div>
              <label class="section_title">Naar overzicht</label>
            </div>
            <div class="content_measure_details" id="measure_content">
                <%= _measure_content_ %>
                <!-- hier komt content -->
            </div>
          </div>
        </div>
      </section>

      <!-- spotlight -->
      <section class="spotlight">
        <div class="title-bar">
          <h3>IN UW REGIO</h3>
        </div>
      </section>

      <!-- footer -->
      <footer class="footer">
        <div class="footer_links">
          <a href="http://kennisimpulsbestuivers.nl">Een initiatief van</a>
          <a href="http://kennisimpulsbestuivers.nl"
            >Kennisimpulsbestuivers.nl</a>
        </div>
        <div class="footer_sponsors">
          <a href="https://www.wur.nl" class="footer_sponsor-link">
            <img
              src="./assets/footer-logo-1-wur.svg"
              alt=""
              class="footer_sponsor-img"
            />
          </a>
          <a href="https://www.naturalis.nl" class="footer_sponsor-link">
            <img
              src="./assets/footer-logo-2-naturalis.svg"
              alt=""
              class="footer_sponsor-img"
          /></a>
          <a href="https://www.eis-nederland.nl" class="footer_sponsor-link"
            ><img
              src="./assets/footer-logo-3-eis.svg"
              alt=""
              class="footer_sponsor-img"
            />
          </a>
          <a
            href="https://www.rijksoverheid.nl/ministeries/ministerie-van-landbouw-natuur-en-voedselkwaliteit"
            class="footer_sponsor-link"
          >
            <img
              src="./assets/footer-logo-4-lnv.svg"
              alt=""
              class="footer_sponsor-img"
            />
          </a>
          <a
            href="https://www.bestuivers.nl/nationalebijenstrategie"
            class="footer_sponsor-link"
          >
            <img
              src="./assets/footer-logo-5-nb.svg"
              alt=""
              class="footer_sponsor-img"
            />
          </a>
        </div>
      </footer>
    </div>
  </body>
</html>

/*
  Inline details: when you click a site, its details open right under it.
  This file only changes how things are shown. Your data stays in app.js.
*/
(function () {
  document.body.classList.add("inline-mode");
  function columnCount() {
    var cols = getComputedStyle(list).gridTemplateColumns.split(" ").filter(Boolean).length;
    return cols || 1;
  }

  function cardHTML(site) {
    return `
    <button class="site-card ${site.id === selectedId ? "active" : ""}" data-id="${site.id}" aria-expanded="${site.id === selectedId}">
      <span class="tower" aria-hidden="true">⌁</span>
      <span>
        <strong>${safeText(site.name)}</strong>
        <small>⌖ ${safeText(site.area)}</small>
      </span>
      <span class="card-arrow" aria-hidden="true">${site.id === selectedId ? "⌃" : "›"}</span>
    </button>`;
  }

  function detailsHTML(site) {
    var phoneHref = "tel:" + String(site.phone).replace(/[^+\d]/g, "");
    return `
    <div class="site-inline">
      <div class="inline-head"><span>⌖ &nbsp; Site Details</span><button class="inline-close" type="button" aria-label="Close">×</button></div>
      <div class="details-content">
        <div class="detail-site">
          <span class="tower" aria-hidden="true">⌁</span>
          <div><h3>${safeText(site.name)}</h3><p>${safeText(site.area)}</p></div>
        </div>
        <div class="detail-row"><span class="detail-label">Contact name</span><span class="detail-value">${safeText(site.contactName)}</span></div>
        <div class="detail-row"><span class="detail-label">Phone number</span><span class="detail-value"><a class="phone-link" href="${safeText(phoneHref)}">${safeText(site.phone)}</a></span></div>
        ${site.note ? `<div class="detail-row"><span class="detail-label">Note</span><span class="detail-value">${safeText(site.note)}</span></div>` : ""}
        <div class="detail-row"><span class="detail-label">Location</span><span class="detail-value"><a class="map-link" href="${safeText(site.locationUrl)}" target="_blank" rel="noopener noreferrer">View on Google Maps ↗</a></span></div>
        <a class="open-location" href="${safeText(site.locationUrl)}" target="_blank" rel="noopener noreferrer">⌖ &nbsp; OPEN LOCATION</a>
      </div>
    </div>`;
  }

  var lastCols = 0;

  window.renderList = function () {
    var query = searchInput.value.trim().toLowerCase();
    var filtered = SITES.filter(function (site) {
      return [site.name, site.area, site.contactName, site.phone].join(" ").toLowerCase().includes(query);
    });
    document.getElementById("site-count").textContent = SITES.length;
    document.getElementById("result-count").textContent = filtered.length + " shown";

    var cols = lastCols = columnCount();
    var sel = filtered.findIndex(function (s) { return s.id === selectedId; });
    // the details go after the last card of the selected card's row
    var after = sel === -1 ? -1 : Math.min(filtered.length - 1, (Math.floor(sel / cols) + 1) * cols - 1);

    list.innerHTML = filtered.map(function (site, i) {
      return cardHTML(site) + (i === after ? detailsHTML(filtered[sel]) : "");
    }).join("");
    document.getElementById("empty-state").classList.toggle("hidden", filtered.length !== 0);
  };

  // the old side panel is not used any more
  window.renderDetails = function () {};

  list.addEventListener("click", function (e) {
    var close = e.target.closest(".inline-close");
    var card = e.target.closest(".site-card");
    if (!close && !card) return;
    var id = close ? null : Number(card.dataset.id);
    selectedId = (close || id === selectedId) ? null : id;
    window.renderList();
    var open = list.querySelector(".site-inline");
    if (open) open.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  window.addEventListener("resize", function () {
    if (columnCount() !== lastCols) window.renderList();
  });

  selectedId = null;
  window.renderList();
})();

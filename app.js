/*
  EDIT YOUR COMPANY AND SITES HERE.
  For each site, use a Google Maps URL or a maps.google.com link in `locationUrl`.
  This is a static website: changes made here must be committed to GitHub again.
*/
const COMPANY_NAME = "Web Net";

const SITES = [
  {
    id: 1,
    name: "Hawler School 2",
    area: "Bnaslawa",
    contactName: "Shakar",
    phone: "0750 000 0000",
    locationUrl: "https://www.google.com/maps",
    note: ""
  },
  {
    id: 2,
    name: "Site 02",
    area: "Ankawa",
    contactName: "Customer Name",
    phone: "0750 000 0000",
    locationUrl: "https://www.google.com/maps",
    note: ""
  },
  {
    id: 3,
    name: "Site 03",
    area: "Sami Abdulrahman Park",
    contactName: "Customer Name",
    phone: "0750 000 0000",
    locationUrl: "https://www.google.com/maps",
    note: ""
  }
  ,
  {
    id: 4,
    name: "Site 04",
    area: "Ankawa",
    contactName: "Customer Name",
    phone: "0750 000 0000",
    locationUrl: "https://www.google.com/maps",
    note: ""
  }
];

document.getElementById("company-name").textContent = COMPANY_NAME;
document.getElementById("footer-company").textContent = COMPANY_NAME;
document.title = `${COMPANY_NAME} | Sites`;

const list = document.getElementById("site-list");
const details = document.getElementById("details-panel");
const searchInput = document.getElementById("search-input");
let selectedId = SITES.length ? SITES[0].id : null;

function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function renderList() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = SITES.filter(site =>
    [site.name, site.area, site.contactName, site.phone].join(" ").toLowerCase().includes(query)
  );

  document.getElementById("site-count").textContent = SITES.length;
  document.getElementById("result-count").textContent = `${filtered.length} shown`;
  list.innerHTML = filtered.map(site => `
    <button class="site-card ${site.id === selectedId ? "active" : ""}" data-id="${site.id}">
      <span class="tower" aria-hidden="true">⌁</span>
      <span>
        <strong>${safeText(site.name)}</strong>
        <small>⌖ ${safeText(site.area)}</small>
      </span>
      <span class="card-arrow" aria-hidden="true">›</span>
    </button>
  `).join("");

  document.getElementById("empty-state").classList.toggle("hidden", filtered.length !== 0);
  list.querySelectorAll(".site-card").forEach(button => {
    button.addEventListener("click", () => {
      selectedId = Number(button.dataset.id);
      renderList();
      renderDetails();
    });
  });
}

function renderDetails() {
  const site = SITES.find(item => item.id === selectedId);
  if (!site) {
    details.innerHTML = `<div class="details-empty"><div class="pin-icon">⌖</div><h3>No site selected</h3><p class="muted">Add site information in app.js.</p></div>`;
    return;
  }

  const phoneHref = `tel:${String(site.phone).replace(/[^+\d]/g, "")}`;
  details.innerHTML = `
    <div class="details-title">⌖ &nbsp; Site Details</div>
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
  `;
}

searchInput.addEventListener("input", () => {
  renderList();
  const visible = SITES.filter(site =>
    [site.name, site.area, site.contactName, site.phone].join(" ").toLowerCase().includes(searchInput.value.trim().toLowerCase())
  );
  if (visible.length && !visible.some(site => site.id === selectedId)) selectedId = visible[0].id;
  renderList();
  renderDetails();
});

renderList();
renderDetails();

/* Splash screen: show the logo for 5 seconds, then reveal the site */
setTimeout(() => {
  const splash = document.getElementById("splash");
  document.body.classList.remove("loading");
  splash.classList.add("done");
  setTimeout(() => splash.remove(), 600);
}, 5000);

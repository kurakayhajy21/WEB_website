/*
  EDIT YOUR COMPANY AND SITES HERE.
  For each site, use a Google Maps URL or a maps.google.com link in `locationUrl`.
  This is a static website: changes made here must be committed to GitHub again.
*/
const COMPANY_NAME = "Web Net";

const SITES =
 [
  {
    id: 1,
    name: "Hawler School 2",
    area: "Bnaslawa",
    contactName: "Shakar",
    phone: "0750 190 4780",
    locationUrl: "https://maps.app.goo.gl/zhAA6JKbskvL2KkR8",
    note: ""
  },
  {
    id: 2,
    name: "White base",
    area: "Timar",
    contactName: "mohemmed",
    phone: "0751 821 1353",
    locationUrl: "https://maps.app.goo.gl/SZV3U9kFC5YC9pUa9",
    note: ""
  },
  {
    id: 3,
    name: "media school",
    area: "Baxtyary",
    contactName: "mohemmed",
    phone: "0750 309 9009",
    locationUrl: "https://maps.app.goo.gl/mFZBzRSyQRGRFyjY7?g_st=awb",
    note: ""
  }
  ,
  {
    id: 4,
    name: "Pardasan",
    area: "sna3ay jnuby",
    contactName: "sardar",
    phone: "0750 480 5224",
    locationUrl: "https://maps.app.goo.gl/vvhTie6EbdYX7ZAt6",
    note: ""
  } 
,
{
  id:5,
  name:"elite1",
  area:"Shorsh road",
  contactname:"Abdulla",
  phone:"0771 507 1535",
  locationUrl:"https://maps.app.goo.gl/UvqzojPj1NuUscUx9",
  note:""
}
,
{
  id:6,
  name:"elite2",
  area:"32park tanisht rbclass",
  contactname:"Dany",
  phone:"0000 000 0000",
  locationUrl:"https://maps.app.goo.gl/wFiJfC22w4Y2o6bQ9",
  note:""
} 
,
{
  id:7,
  name:"elite3",
  area:"32park ",
  contactname:"Dany",
  phone:"0000 000 0000",
  locationUrl:"https://maps.app.goo.gl/VXh46SbYYjZm8hMP6",
  note:""
} 
,
{
  id:8,
  name:"Roze erbil hotel",
  area:"brayaty ",
  contactname:"roze erbil",
  phone:"0750 663 7733",
  locationUrl:"https://maps.app.goo.gl/zHdRmpqRabWZDTJJ6?g_st=iwb",
  note:""
}
,
{
  id:9,
  name:"Royal palace hotel 2",
  area:"60m",
  contactname:"royal palace",
  phone:"0751 047 2613",
  locationUrl:"https://maps.app.goo.gl/QGUTYZoj98AiGgEz5?g_st=iwb",
  note:""
}
,
{
  id:10,
  name:"Bashqal hotel",
  area:"30m",
  contactName:"Farhad",
  phone:"0750 452 3000",
  locationUrl:"ttps://maps.app.goo.gl/5EgKG4hWmZMGe9e46",
  note:""
}
,
{
  id:11,
  name:"Kany institute",
  area:"xadamy 120m",
  contactName:"krekar",
  phone:"0750 467 7660",
  locationUrl:"https://maps.app.goo.gl/YeQdnBhzCHKJW3TQ6",
  note:""
}
,
{
  id:12,
  name:"Velmora",
  area:"30m",
  contactName:"Bilal",
  phone:"0773 304 3441",
  locationUrl:"https://maps.app.goo.gl/2dgAjVr9YTWX5Q1c8",
  note:""
}
,
{
  id:13,
  name:"Sever hotel",
  area:"60m",
  contactName:"sever hotel",
  phone:"0000 000 0000",
  locationUrl:"https://maps.app.goo.gl/5qxvE4CdskKf2RbE9?g_st=iwb",
  note:""
}
,
{
  id:14,
  name:"best inn erbil hotel",
  area:"ankawa road",
  contactName:"shwan",
  phone:"0750 452 0019",
  locationUrl:"https://maps.app.goo.gl/sKP5E2EuESdqnG657",
  note:""
}
,
{
  id:15,
  name:"umkalthum",
  area:"iskan ",
  contactName:"muhamad",
  phone:"0750 644 3009",
  locationUrl:"https://maps.app.goo.gl/s1LnvFae5gzXHe8BA",
  note:""
}
,
{
  id:16,
  name:"kodo school",
  area:"32 park",
  contactName:"Abdulla",
  phone:"0751 006 1565",
  locationUrl:"https://maps.app.goo.gl/ccv3DaYDYUpAzug66",
  note:""
}
,
{
  id:17,
  name:"Dream erbil hotel",
  area:"60m",
  contactName:"dream erbil",
  phone:"0773 692 9406",
  locationUrl:"https://maps.app.goo.gl/ohMC8Bm6GfDsvaYRA",
  note:""
}
,
{
  id:19,
  name:"Agreen market",
  area:"rey gwer",
  contactName:"agreen market",
  phone:"0751 708 2358",
  locationUrl:"https://goo.gl/maps/PpRz1xsEumGy6DtG9",
  note:""
}
,
{
  id:20,
  name:"Delave factory",
  area:"Rey karkuk",
  contactName:"Ala",
  phone:"0750 218 5030",
  locationUrl:"https://maps.app.goo.gl/SxqYVgBTZUxkeNgj6",
  note:""
}
,
{
  id:21,
  name:"Kabab najar",
  area:"32 park",
  contactName:"Esam",
  phone:"0750 432 2553",
  locationUrl:"https://maps.app.goo.gl/sPQ5k4BEzVwRuUF99",
  note:""
}
,
{
  id:22,
  name:"Sky shaqlawa",
  area:"Shaqlawa",
  contactName:"goran",
  phone:"0771 157 7151",
  locationUrl:"https://maps.app.goo.gl/biJZwVWNf3cu8Sjn9",
  note:""
}
,
{
  id:23,
  name:"Aghati hotel",
  area:"30m saydawa",
  contactName:"goran",
  phone:"0771 157 7151",
  locationUrl:"https://maps.app.goo.gl/p1tRwwhbqc2XEtxy5",
  note:""
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


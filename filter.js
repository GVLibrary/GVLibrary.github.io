// checkboxes
const chkAll          = document.getElementById("chk-all");
const chkChildren     = document.getElementById("chk-children");
const chkAdult        = document.getElementById("chk-adult");
const chkFiction      = document.getElementById("chk-fiction");
const chkNonFiction   = document.getElementById("chk-nonfiction");
const chkEnglish      = document.getElementById("chk-english");
const chkIndian       = document.getElementById("chk-indian");
const chkClassic      = document.getElementById("chk-classic");
const chkBiography    = document.getElementById("chk-biography");
const chkEducation    = document.getElementById("chk-education");
const chkGerman       = document.getElementById("chk-german");
const chkSpanish      = document.getElementById("chk-spanish");
const chkAcademic     = document.getElementById("chk-academic");
const chkTamil        = document.getElementById("chk-tamil");
const chkHindi        = document.getElementById("chk-hindi");
const chkSpirituality = document.getElementById("chk-spirituality");
const chkSelfHelp     = document.getElementById("chk-selfhelp");
const chkScience      = document.getElementById("chk-science");


const allCheckboxes = [chkAll, chkChildren, chkAdult, chkFiction, chkNonFiction,
    chkEnglish, chkIndian, chkClassic, chkBiography, chkEducation, chkGerman,
    chkSpanish, chkAcademic, chkTamil, chkHindi, chkSpirituality,
    chkSelfHelp, chkScience
];

const otherCheckboxes = [chkChildren, chkAdult, chkFiction, chkNonFiction,
    chkEnglish, chkIndian, chkClassic, chkBiography, chkEducation, chkGerman,
    chkSpanish, chkAcademic, chkTamil, chkHindi, chkSpirituality,
    chkSelfHelp, chkScience
];

const rows = document.querySelectorAll('#bookTable tbody tr');

const rowCategories = new Map(); // labels for each row

// populate rowCategories map.
rows.forEach( row => {
    const categories = row.getAttribute("categories").split(';');
    rowCategories.set(row, categories);
    console.log(categories);
});
console.log(rowCategories);

const categoryCheckbox = new Map();
categoryCheckbox.set("Children", chkChildren);
categoryCheckbox.set("Adult", chkAdult);
categoryCheckbox.set("Fiction", chkFiction);
categoryCheckbox.set("Non-Fiction", chkNonFiction);
categoryCheckbox.set("English", chkEnglish);
categoryCheckbox.set("Indian", chkIndian);
categoryCheckbox.set("Classic", chkClassic);
categoryCheckbox.set("Biography", chkBiography);
categoryCheckbox.set("Education", chkEducation);
categoryCheckbox.set("German", chkGerman);
categoryCheckbox.set("Spanish", chkSpanish);
categoryCheckbox.set("Academic", chkAcademic);
categoryCheckbox.set("Tamil", chkTamil);
categoryCheckbox.set("Hindi", chkHindi);
categoryCheckbox.set("Spirituality", chkSpirituality);
categoryCheckbox.set("Self-Help", chkSelfHelp);
categoryCheckbox.set("Science", chkScience);


function showRows() {
    /*
      for each row r, check its categories.
      If the checkbox corresponding to any of the categories is checked, make this row visible.
      If none of the checkboxes corresponding to the categories is checked, make this row invisible.
    */
    console.log("showRows called.");
    rows.forEach( row => {
      const categories = rowCategories.get(row);
      console.log('categories = ', categories);
      categories.forEach(category => console.log(category));
      const visible = categories.some(category =>
        categoryCheckbox.get(category).checked
      );
      row.style.display = visible? '': 'none';
    });
}

function onclick_chkAll() {
    if(chkAll.checked == true) {
        otherCheckboxes.forEach(chk => chk.checked = true);
    }
    else {
        otherCheckboxes.forEach(chk => chk.checked = false);
    }
    showRows();
}

function onclick_others() {
    // if all other checkboxes are checked, check chkAll too.
    chkAll.checked = otherCheckboxes.every(c => c.checked);
    showRows();
}

chkAll.addEventListener('change', onclick_chkAll);
otherCheckboxes.forEach(chk => chk.addEventListener('change', onclick_others));


// ui.js — Android-first UI, localization, editable wheel tables and saved designs.
const I18N = {
  ar:{
    tagline:"حاسبة البيفوت الزراعي", idea:"فكرة البرنامج", verse:"آية كريمة", about:"تعريف بالتطبيق", theme:"الوضع الداكن",
    eyebrow:"CENTER PIVOT", mainTitle:"حاسبة مساحة البيفوت ومعدلات الزراعة والحصاد",
    heroDesc:"واجهة مريحة للموبايل مع تعديل مباشر للجرر وحفظ التصميمات والعمل دون اتصال.", offlineReady:"جاهز للعمل أوفلاين", installApp:"تثبيت التطبيق",
    tabArea:"حساب المساحة", tabPlant:"معدل الزراعة", tabHarvest:"معدل الحصاد", tabNeeds:"احتياجات الزراعة والحصاد",
    inputsKicker:"بيانات أساسية", pivotInputs:"بيانات البيفوت", pivotArea:"مساحة البيفوت (فدان)", brand:"ماركة البيفوت", spanWidth:"عرض الجرة (متر)",
    autoFill:"ملء تلقائي", clear:"مسح الجرر", saveDesign:"حفظ التصميم", save:"حفظ", radius:"نصف القطر", totalTracks:"الجرر المحسوبة", trackUnit:"جرة",
    towerLength:"طول البرج", tracksPerWheel:"جرر/عجلة", activeWheels:"العجلات", pivotAreaResult:"التوتال", summaryTable:"ملخص الحساب",
    editableTracksTitle:"توزيع الجرر — قابل للتعديل", editable:"تعديل مباشر", editTracksHint:"امسح أي خلية واكتب عدد الجرر الذي تريده. الحساب والمساحة يتحدثان فورًا.",
    wheelNo:"العجلة", tracksNo:"عدد الجرر", wheelArea:"المساحة (فدان)", distance:"البعد (م)", tableTotal:"التوتال", newDesign:"تصميم جديد",
    halfArea:"مساحة نصف البيفوت", areaNote:"المساحات محسوبة لنصف البيفوت وفق معادلة بيرو في ملف Excel المرجعي، والتوتال الكامل يساوي المساحة المدخلة.",
    savedDesignsTitle:"التصميمات المحفوظة", designName:"اسم التصميم", editDesign:"تعديل", loadDesign:"فتح", deleteDesign:"حذف نهائي", noSavedDesigns:"لا توجد تصميمات محفوظة بعد.",
    savedAt:"آخر حفظ", editingNow:"جاري تعديل التصميم:", savedOk:"تم حفظ التصميم.", deletedOk:"تم حذف التصميم نهائيًا.", confirmDeleteDesign:"هل تريد حذف هذا التصميم نهائيًا؟",
    customKicker:"اختيار آخر", customTitle:"تخصيص أطوال الأبراج أو عدد الجرر", customName:"اسم الماركة", customMode:"طريقة الإدخال", modeTracks:"عدد الجرر", modeLength:"طول البرج (متر)",
    customHint:"يمكنك تعديل كل الخلايا، والعجلة الأخيرة تُعرض كالمتبقي عند استخدام الحفظ المخصص.", saveContinue:"حفظ ومتابعة", cancel:"إلغاء", deleteBrand:"حذف الماركة",
    infoTitle:"تعريف بالتطبيق", ideaTitle:"فكرة البرنامج", verseTitle:"آية كريمة", minArea:"أدخل مساحة صحيحة أكبر من صفر.", minSpan:"أدخل عرض جرة صحيحًا أكبر من صفر.",
    customNameRequired:"اكتب اسم الماركة أولًا.", noTracks:"لا توجد جرر محسوبة لهذه المساحة.", confirmDelete:"هل تريد حذف هذه الماركة؟", savedBrandPrefix:"★ ",
    manualInputs:"مدخلات يدوية", plantRateTitle:"معدل الزراعة", avgJumboWeight:"متوسط وزن الجامبو (طن)", totalJumbos:"إجمالي عدد الجامبوهات", persistentInputs:"هذه المدخلات لا تُمسح عند إعادة حساب مساحة البيفوت.",
    outputs:"المخرجات", plantResults:"نتائج الزراعة", seedQty:"إجمالي كمية التقاوي المنزرعة", ton:"طن", plantRate:"معدل الزراعة", tonFeddan:"طن/فدان", usesArea:"يعتمد تلقائيًا على إجمالي مساحة البيفوت من التبويب الأول.",
    harvestBox:"الحاصد", harvestRateTitle:"معدل الحصاد", harvestedJumbos:"عدد الجامبوهات المحصودة", harvestRate:"معدل الحصاد", jumboFeddan:"جامبو/فدان",
    needsPlant:"احتياجات الزراعة", plantNeedsTitle:"حساب احتياجات الزراعة", avgWeightTon:"متوسط وزن الجامبو (طن)", areaFeddan:"المساحة (فدان)", plantRateTonFeddan:"معدل الزراعة (طن/فدان)",
    jumbosForArea:"عدد الجامبوهات للمساحة", quantityTon:"الكمية", needsHarvest:"احتياجات الحصاد", harvestNeedsTitle:"حساب احتياجات الحصاد", harvestRateInput:"معدل الحصاد (جامبو/فدان)", harvestRateTonInput:"معدل الحصاد (طن/فدان)", harvestJumboWeight:"متوسط وزن الجامبو (طن)", harvestTargetMode:"طريقة تحديد المطلوب", targetJumbos:"عدد الجامبوهات", targetTrucks:"عدد العربيات", targetHarvestJumbos:"الجامبوهات المطلوبة", targetHarvestTrucks:"عدد العربيات المطلوبة", truckCapacity:"حمولة العربية (جامبو)", harvestJumbos:"عدد الجامبوهات", harvestTargetTons:"إجمالي الطن المطلوب", requiredHarvestArea:"مساحة الحصاد المطلوبة", feddanUnit:"فدان", trucks:"عدد السيارات",
    designer:"تصميم مهندس محمد إبراهيم (فرمينو)", equationFooter:"جميع المعادلات مبنية على معادلة بيرو", call:"اتصال", contactNote:"الروابط الرسمية تحاول فتح التطبيق المثبت، وإلا تفتح نسخة الويب المتاحة للخدمة.",
    biroTitle:"معادلة بيرو المستخدمة", formulaNote:"حيث θ = asin(d / R)، والمساحات المتتابعة = المساحة التراكمية الحالية − السابقة.",
    customExplain:"صفحة الاختيار المخصص تسمح بتحديد عدد الجرر أو طول البرج لكل عجلة. يمكنك حفظ التصميم ثم تعديله أو حذفه لاحقًا.",
    infoBody:`<p><strong>PivotCalc</strong> يحوّل الحسابات المرجعية إلى أداة تفاعلية للمساحة وتوزيع الجرر ومعدلات الزراعة والحصاد.</p><h3>المعادلات</h3><ul><li>نصف القطر: <code>R = √(المساحة × 4200 ÷ π)</code>.</li><li>جرر نصف البيفوت: <code>R ÷ عرض الجرة</code> ثم التقريب.</li><li>الجرر القياسية للعجلة: <code>طول البرج ÷ عرض الجرة</code> ثم التقريب.</li><li>المساحة التراكمية: <code>(2 × θ × A ÷ 360) + (G × d ÷ 4200)</code>.</li><li>مساحة العجلة = التراكمية الحالية − السابقة.</li><li>معدل الزراعة = (الجامبوهات × وزن الجامبو) ÷ المساحة.</li><li>معدل الحصاد = الجامبوهات المحصودة ÷ المساحة.</li></ul><p>تعمل ملفات التطبيق دون اتصال بعد تحميلها أول مرة على استضافة تدعم PWA.</p>`
  },
  en:{
    tagline:"Center Pivot Calculator", idea:"Program idea", verse:"Verse", about:"About", theme:"Dark mode", eyebrow:"CENTER PIVOT",
    mainTitle:"Pivot Area, Planting & Harvest Calculator", heroDesc:"Android-first interface with direct track editing, saved designs and offline support.", offlineReady:"Offline ready", installApp:"Install app",
    tabArea:"Area", tabPlant:"Planting rate", tabHarvest:"Harvest rate", tabNeeds:"Planting & harvest needs", inputsKicker:"Basic data", pivotInputs:"Pivot data", pivotArea:"Pivot area (Feddan)", brand:"Pivot brand", spanWidth:"Track width (m)",
    autoFill:"Auto-fill", clear:"Clear tracks", saveDesign:"Save design", save:"Save", radius:"Radius", totalTracks:"Calculated tracks", trackUnit:"tracks", towerLength:"Tower length", tracksPerWheel:"Tracks / wheel", activeWheels:"Wheels", pivotAreaResult:"Total", summaryTable:"Calculation summary",
    editableTracksTitle:"Track distribution — editable", editable:"Live edit", editTracksHint:"Clear any cell and enter any track count. Area and totals update instantly.", wheelNo:"Wheel", tracksNo:"Tracks", wheelArea:"Area (Feddan)", distance:"Distance (m)", tableTotal:"Total", newDesign:"New design",
    halfArea:"Half-pivot area", areaNote:"Areas are calculated for the half pivot using the reference Excel Biro equation; full-pivot total remains equal to the entered area.", savedDesignsTitle:"Saved designs", designName:"Design name", editDesign:"Edit", loadDesign:"Open", deleteDesign:"Delete permanently", noSavedDesigns:"No saved designs yet.", savedAt:"Saved", editingNow:"Editing design:", savedOk:"Design saved.", deletedOk:"Design deleted permanently.", confirmDeleteDesign:"Delete this design permanently?",
    customKicker:"Other / Custom", customTitle:"Customize tower lengths or track counts", customName:"Brand name", customMode:"Input mode", modeTracks:"Number of tracks", modeLength:"Tower length (m)", customHint:"You can edit every cell. The last wheel is the remainder when using the custom save mode.", saveContinue:"Save & continue", cancel:"Cancel", deleteBrand:"Delete brand",
    infoTitle:"About the app", ideaTitle:"Program idea", verseTitle:"Verse", minArea:"Enter an area greater than zero.", minSpan:"Enter a track width greater than zero.", customNameRequired:"Enter a brand name first.", noTracks:"No tracks are calculated for this area.", confirmDelete:"Delete this brand?", savedBrandPrefix:"★ ",
    manualInputs:"Manual inputs", plantRateTitle:"Planting rate", avgJumboWeight:"Average jumbo weight (ton)", totalJumbos:"Total jumbos", persistentInputs:"These inputs are preserved when pivot area is recalculated.", outputs:"Outputs", plantResults:"Planting results", seedQty:"Total planted seed quantity", ton:"ton", plantRate:"Planting rate", tonFeddan:"ton/Feddan", usesArea:"Uses total pivot area automatically.",
    harvestBox:"Harvester", harvestRateTitle:"Harvest rate", harvestedJumbos:"Harvested jumbos", harvestRate:"Harvest rate", jumboFeddan:"jumbos/Feddan", needsPlant:"Planting needs", plantNeedsTitle:"Planting requirements", avgWeightTon:"Average jumbo weight (ton)", areaFeddan:"Area (Feddan)", plantRateTonFeddan:"Planting rate (ton/Feddan)", jumbosForArea:"Jumbos for area", quantityTon:"Quantity", needsHarvest:"Harvest needs", harvestNeedsTitle:"Harvest requirements", harvestRateInput:"Harvest rate (jumbos/Feddan)", harvestRateTonInput:"Harvest rate (ton/Feddan)", harvestJumboWeight:"Average jumbo weight (ton)", harvestTargetMode:"Target method", targetJumbos:"Number of jumbos", targetTrucks:"Number of trucks", targetHarvestJumbos:"Required jumbos", targetHarvestTrucks:"Required trucks", truckCapacity:"Truck capacity (jumbos)", harvestJumbos:"Jumbos", harvestTargetTons:"Required tons", requiredHarvestArea:"Required harvest area", feddanUnit:"Feddan", trucks:"Trucks",
    designer:"Designed by Eng. Mohamed Ibrahim (Fermineo)", equationFooter:"All equations are based on the Biro equation", call:"Call", contactNote:"Official links try the installed app first, otherwise the web version.", biroTitle:"Biro equation used", formulaNote:"θ = asin(d / R), and each wheel area is current cumulative area minus the previous cumulative area.", customExplain:"The custom page lets you set tracks or tower length for each wheel, then save, edit or delete the design.",
    infoBody:`<p><strong>PivotCalc</strong> turns the reference calculations into an interactive tool for area, track distribution, planting and harvest rates.</p><h3>Equations</h3><ul><li>Radius: <code>R = √(area × 4200 ÷ π)</code>.</li><li>Half-pivot tracks: <code>R ÷ track width</code>, rounded.</li><li>Standard wheel tracks: <code>tower length ÷ track width</code>, rounded.</li><li>Cumulative area: <code>(2 × θ × A ÷ 360) + (G × d ÷ 4200)</code>.</li><li>Wheel area = current cumulative area − previous.</li><li>Planting rate = (jumbos × weight) ÷ area.</li><li>Harvest rate = harvested jumbos ÷ area.</li></ul><p>The app works offline after its first load on a PWA host.</p>`
  }
};

let currentLang = localStorage.getItem("pivotcalc-lang") || "ar";
let currentTheme = localStorage.getItem("pivotcalc-theme") || "light";
let previousBrand = localStorage.getItem("pivotcalc-brand") || "zimmatic";
let customEditId = null;
let customDraftTracks = [];
let customMode = "tracks";
let editingDesignId = localStorage.getItem("pivotcalc-editing-design") || null;

function t(k){return I18N[currentLang][k] ?? k}
function format(v,dec=3){return Number.isFinite(v)?v.toFixed(dec):"—"}
function openModal(id){const e=document.getElementById(id);if(e){e.classList.add("active");e.setAttribute("aria-hidden","false")}}
function closeModal(id){const e=document.getElementById(id);if(e){e.classList.remove("active");e.setAttribute("aria-hidden","true")}}
function setManualTracks(arr, source="manual"){
  window.pivotcalcManualTracks=Array.isArray(arr)?arr.map(v=>Math.max(0,roundInt(n(v)))):null;
  window.pivotcalcManualTracksSource=source;
  try{
    localStorage.setItem("pivotcalc-manual-tracks",JSON.stringify(window.pivotcalcManualTracks));
    localStorage.setItem("pivotcalc-manual-source",source);
  }catch(e){}
}
function loadManualTracks(){
  try{const a=JSON.parse(localStorage.getItem("pivotcalc-manual-tracks")||"null"); if(Array.isArray(a)) window.pivotcalcManualTracks=a;
    window.pivotcalcManualTracksSource=localStorage.getItem("pivotcalc-manual-source")||"manual";}catch(e){}
}
function ensureVisibleRows(){
  const a=window.pivotcalcManualTracks;
  if(!Array.isArray(a)) setManualTracks(buildStandardCounts(appSnapshot().totalTracksRounded,appSnapshot().tracksPerWheel||1));
  if(Array.isArray(window.pivotcalcManualTracks) && window.pivotcalcManualTracks.length<MIN_VISIBLE_WHEELS){
    window.pivotcalcManualTracks.push(...Array(MIN_VISIBLE_WHEELS-window.pivotcalcManualTracks.length).fill(0));
  }
}

function applyLanguage(){
  document.documentElement.lang=currentLang;document.documentElement.dir=currentLang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(I18N[currentLang][k]!==undefined)el.textContent=I18N[currentLang][k]});
  document.querySelectorAll("[data-i18n-title]").forEach(el=>{const k=el.dataset.i18nTitle;if(I18N[currentLang][k]!==undefined)el.title=I18N[currentLang][k]});
  const lang=document.getElementById("langBtn");if(lang)lang.textContent=currentLang==="ar"?"EN":"ع";
  renderBrandOptions();renderAll();renderSavedDesigns();renderCustomGrid();
}
function applyTheme(){document.documentElement.dataset.theme=currentTheme==="dark"?"dark":"";const b=document.getElementById("themeBtn");if(b)b.textContent=currentTheme==="dark"?"☀️":"🌙"}

function renderBrandOptions(){
  const sel=document.getElementById("brandSelect");if(!sel)return;
  const current=sel.value||previousBrand;sel.innerHTML="";
  Object.entries(BRANDS).forEach(([id,b])=>{const o=document.createElement("option");o.value=id;o.textContent=currentLang==="ar"?`${b.nameAr} — ${b.length} م`:`${b.nameEn} — ${b.length} m`;sel.appendChild(o)});
  const savedBrands=loadSavedBrands();
  savedBrands.forEach(b=>{const o=document.createElement("option");o.value="saved:"+b.id;o.textContent=t("savedBrandPrefix")+b.name;sel.appendChild(o)});
  const custom=document.createElement("option");custom.value="custom";custom.textContent=currentLang==="ar"?"اختيار آخر…":"Other / Custom…";sel.appendChild(custom);
  if([...sel.options].some(o=>o.value===current))sel.value=current;else sel.value="zimmatic";
  const tools=document.getElementById("savedBrandTools");
  if(tools){
    tools.innerHTML="";
    if(savedBrands.length){
      savedBrands.forEach(b=>{
        const row=document.createElement("div"); row.className="saved-brand-tool";
        row.innerHTML=`<span>★ ${escapeHtml(b.name)}</span><div><button type="button" class="btn tiny" data-brand-edit="${b.id}">✏️</button><button type="button" class="btn tiny danger" data-brand-delete="${b.id}">🗑</button></div>`;
        tools.appendChild(row);
      });
      tools.querySelectorAll("[data-brand-edit]").forEach(btn=>btn.addEventListener("click",()=>openCustom(btn.dataset.brandEdit)));
      tools.querySelectorAll("[data-brand-delete]").forEach(btn=>btn.addEventListener("click",()=>deleteSavedBrand(btn.dataset.brandDelete)));
    }
  }
}

function renderAll(){
  const areaEl=document.getElementById("pivotArea");if(!areaEl)return;
  const snap=appSnapshot();ensureVisibleRows();
  const displayCounts=window.pivotcalcManualTracks||snap.counts||[];
  const rows=calculateWheelRows(snap.area,snap.spanWidth,displayCounts,snap.tracksPerWheel);
  const active=rows.reduce((last,r,i)=>r.tracks>0?i:last,-1)+1;
  document.getElementById("radiusOut").textContent=format(snap.radius,3);
  document.getElementById("totalTracksOut").textContent=String(snap.totalTracksRounded);
  document.getElementById("towerLengthOut").textContent=snap.towerLength?format(snap.towerLength,1):"—";
  document.getElementById("tracksPerWheelOut").textContent=snap.tracksPerWheel?String(snap.tracksPerWheel):"—";
  document.getElementById("activeWheelsOut").textContent=String(active);
  const half=rows.length?rows[rows.length-1].cumulativeArea:0;
  document.getElementById("halfAreaOut").textContent=format(half,3);
  document.getElementById("totalAreaOut").textContent=format(snap.area,3);

  const body=document.getElementById("wheelTableBody");if(!body)return;body.innerHTML="";
  const visible=Math.max(MIN_VISIBLE_WHEELS,displayCounts.length,active);
  while(displayCounts.length<visible)displayCounts.push(0);
  for(let i=0;i<visible;i++){
    const r=rows[i]||{wheel:i+1,tracks:0,area:0,distance:(displayCounts.slice(0,i+1).reduce((a,b)=>a+b,0)*snap.spanWidth)};
    const tr=document.createElement("tr");if(r.tracks>0)tr.classList.add("active-row");
    tr.innerHTML=`<td><strong>${i+1}</strong></td><td><input class="track-input" data-track-index="${i}" data-max-tracks="${r.maxTracks||0}" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" value="${r.tracks||""}" aria-label="${t("tracksNo")} ${i+1}"></td><td class="calc-cell">${format(r.area,4)}</td>`;
    body.appendChild(tr);
  }
  body.querySelectorAll(".track-input").forEach(input=>{input.addEventListener("input",onTrackInput);input.addEventListener("focus",()=>{try{input.select()}catch(e){}});});
  const sumTracks=displayCounts.reduce((s,v)=>s+Math.max(0,roundInt(n(v))),0);
  const sumArea=rows.reduce((s,r)=>s+r.area,0);
  document.getElementById("sumTracks").textContent=String(sumTracks);
  document.getElementById("sumHalfArea").textContent=format(sumArea,4);
  renderPlanting();renderHarvest();renderNeeds();renderSavedDesigns();
}
function onTrackInput(e){
  const i=Number(e.currentTarget.dataset.trackIndex);
  const raw=String(e.currentTarget.value ?? '').replace(/[^0-9]/g,'');
  const snap=appSnapshot();
  const limits=calculateWheelRows(snap.area,snap.spanWidth,[],snap.tracksPerWheel);
  const max=limits[i]?.maxTracks || 0;
  let value=raw===''?0:Math.max(0,parseInt(raw,10)||0);
  if(max>0) value=Math.min(value,max);
  e.currentTarget.value=raw===''?'':String(value);
  ensureVisibleRows();
  window.pivotcalcManualTracks[i]=value;
  window.pivotcalcManualTracksSource='manual';
  try{localStorage.setItem('pivotcalc-manual-tracks',JSON.stringify(window.pivotcalcManualTracks));localStorage.setItem('pivotcalc-manual-source','manual')}catch(err){}
  updateTrackTableInPlace();
}
function updateTrackTableInPlace(){
  const snap=appSnapshot();
  ensureVisibleRows();
  const counts=window.pivotcalcManualTracks||[];
  const rows=calculateWheelRows(snap.area,snap.spanWidth,counts,snap.tracksPerWheel);
  const body=document.getElementById('wheelTableBody');
  if(!body)return;
  const visible=Math.max(MIN_VISIBLE_WHEELS,counts.length,rows.length);
  if(body.querySelectorAll('.track-input').length!==visible){renderAll();return;}
  const inputs=body.querySelectorAll('.track-input');
  const trs=body.querySelectorAll('tr');
  for(let i=0;i<visible;i++){
    const r=rows[i]||{tracks:0,area:0,maxTracks:0};
    const tr=trs[i];
    if(tr){
      tr.classList.toggle('active-row',r.tracks>0);
      const cells=tr.querySelectorAll('td');
      if(cells[2])cells[2].textContent=format(r.area,4);
    }
    if(inputs[i]){
      inputs[i].dataset.maxTracks=String(r.maxTracks||0);
      if(document.activeElement!==inputs[i])inputs[i].value=r.tracks||'';
    }
  }
  const sumTracks=rows.reduce((s,r)=>s+r.tracks,0);
  const sumArea=rows.reduce((s,r)=>s+r.area,0);
  document.getElementById('sumTracks').textContent=String(sumTracks);
  document.getElementById('sumHalfArea').textContent=format(sumArea,4);
  const active=rows.reduce((last,r,i)=>r.tracks>0?i:last,-1)+1;
  document.getElementById('activeWheelsOut').textContent=String(active);
  document.getElementById('halfAreaOut').textContent=format(sumArea,3);
  document.getElementById('totalAreaOut').textContent=format(snap.area,3);
  renderPlanting();renderHarvest();renderNeeds();
}
function autoFillMain(){
  const snap=appSnapshot();
  const per=Math.max(1,snap.tracksPerWheel||roundInt(BRANDS.zimmatic.length/snap.spanWidth));
  setManualTracks(buildStandardCounts(snap.totalTracksRounded,per),'auto');
  ensureVisibleRows();
  renderAll();
}
function clearMain(){setManualTracks(Array(MIN_VISIBLE_WHEELS).fill(0),'manual');renderAll()}
function addWheel(){ensureVisibleRows();window.pivotcalcManualTracks.push(0);setManualTracks(window.pivotcalcManualTracks,'manual');renderAll()}
function removeEmptyWheels(){ensureVisibleRows();let a=window.pivotcalcManualTracks.slice();while(a.length>MIN_VISIBLE_WHEELS&&a[a.length-1]===0)a.pop();setManualTracks(a,'manual');renderAll()}

function renderPlanting(){const r=plantingResults();const a=document.getElementById("seedQtyOut"),b=document.getElementById("plantRateOut");if(a)a.textContent=format(r.qty,3);if(b)b.textContent=format(r.rate,3)}
function renderHarvest(){const r=harvestResults();const e=document.getElementById("harvestRateOut");if(e)e.textContent=format(r.rate,3)}
function renderNeeds(){
  const p=plantingNeedsResults(),h=harvestNeedsResults();
  const a=document.getElementById("needPlantJumbos"),b=document.getElementById("needPlantTons"),c=document.getElementById("needHarvestJumbos"),d=document.getElementById("needTrucks"),e=document.getElementById("needHarvestTons"),f=document.getElementById("needHarvestAreaOut");
  if(a)a.textContent=format(p.jumbos,2);
  if(b)b.textContent=`${format(p.tons,3)} ${t("ton")}`;
  if(c)c.textContent=format(h.jumbos,2);
  if(d)d.textContent=format(h.trucks,2);
  if(e)e.textContent=`${format(h.tons,3)} ${t("ton")}`;
  if(f)f.textContent=format(h.area,2);
  const mode=document.getElementById("harvestTargetMode")?.value||"jumbos";
  document.getElementById("targetJumbosGroup")?.classList.toggle("hidden",mode!=="jumbos");
  document.getElementById("targetTrucksGroup")?.classList.toggle("hidden",mode!=="trucks");
  document.getElementById("truckCapacityGroup")?.classList.toggle("hidden",mode!=="trucks");
}

function loadSavedDesigns(){try{return JSON.parse(localStorage.getItem("pivotcalc-designs")||"[]")||[]}catch(e){return[]}}
function saveSavedDesigns(list){try{localStorage.setItem("pivotcalc-designs",JSON.stringify(list))}catch(e){}}
function saveCurrentDesign(){
  const name=document.getElementById("designName")?.value.trim();
  if(!name){document.getElementById("designName")?.focus();return alert(currentLang==="ar"?"اكتب اسم التصميم أولًا.":"Enter a design name first.")}
  const snap=appSnapshot();
  const counts=(window.pivotcalcManualTracks||snap.counts||[]).map(v=>Math.max(0,roundInt(n(v))));
  const list=loadSavedDesigns();
  const id=editingDesignId||("d"+Date.now().toString(36));
  const record={id,name,area:snap.area,spanWidth:snap.spanWidth,brandId:previousBrand,counts,updatedAt:new Date().toISOString()};
  const idx=list.findIndex(x=>x.id===id);
  if(idx>=0) list[idx]=record;
  else {
    if(list.length>=50){ alert(currentLang==="ar"?"يمكن حفظ حتى 50 تصميمًا. احذف تصميمًا قديمًا أولًا.":"You can save up to 50 designs. Delete an old design first."); return; }
    list.unshift(record);
  }
  saveSavedDesigns(list);
  editingDesignId=id;
  localStorage.setItem("pivotcalc-editing-design",id);
  document.getElementById("editingDesignLabel").textContent=`${t("editingNow")} ${name}`;
  alert(t("savedOk"));
  renderSavedDesigns();
}
function loadDesign(id){
  const d=loadSavedDesigns().find(x=>x.id===id);
  if(!d)return;
  const area=document.getElementById("pivotArea"), span=document.getElementById("spanWidth"), name=document.getElementById("designName");
  if(area)area.value=d.area;
  if(span)span.value=d.spanWidth||DEFAULT_SPAN_WIDTH;
  previousBrand=d.brandId||"zimmatic";
  localStorage.setItem("pivotcalc-brand",previousBrand);
  renderBrandOptions();
  const brandSelect=document.getElementById("brandSelect");
  if(brandSelect && [...brandSelect.options].some(o=>o.value===previousBrand)) brandSelect.value=previousBrand;
  setManualTracks(Array.isArray(d.counts)?d.counts.slice():[]);
  editingDesignId=d.id;
  localStorage.setItem("pivotcalc-editing-design",d.id);
  if(name)name.value=d.name;
  const label=document.getElementById("editingDesignLabel");
  if(label)label.textContent=`${t("editingNow")} ${d.name}`;
  persistInputValues();
  renderAll();
  renderSavedDesigns();
  window.scrollTo({top:0,behavior:"smooth"});
}
function startNewDesign(){
  editingDesignId=null;
  localStorage.removeItem("pivotcalc-editing-design");
  const name=document.getElementById("designName");
  if(name)name.value="";
  const label=document.getElementById("editingDesignLabel");
  if(label)label.textContent="";
  setManualTracks(buildStandardCounts(appSnapshot().totalTracksRounded,appSnapshot().tracksPerWheel||1));
  renderAll();
  document.getElementById("designName")?.focus();
}
function deleteDesign(id){if(!confirm(t("confirmDeleteDesign")))return;saveSavedDesigns(loadSavedDesigns().filter(x=>x.id!==id));if(editingDesignId===id){editingDesignId=null;localStorage.removeItem("pivotcalc-editing-design");document.getElementById("designName").value="";document.getElementById("editingDesignLabel").textContent=""}renderSavedDesigns()}
function editDesign(id){loadDesign(id)}
function renderSavedDesigns(){
  const box=document.getElementById("savedDesignsList");if(!box)return;const list=loadSavedDesigns();box.innerHTML="";
  if(!list.length){box.innerHTML=`<div class="empty-state">${t("noSavedDesigns")}</div>`;return}
  list.forEach(d=>{const item=document.createElement("div");item.className="saved-design-item";const date=d.updatedAt?new Date(d.updatedAt).toLocaleString(currentLang==="ar"?"ar-EG":"en-US",{dateStyle:"short",timeStyle:"short"}):"";item.innerHTML=`<div class="saved-main"><strong>${escapeHtml(d.name)}</strong><span>${format(n(d.area),2)} ${currentLang==="ar"?"فدان":"Feddan"} · ${(d.counts||[]).reduce((a,b)=>a+n(b),0)} ${t("trackUnit")}</span><small>${t("savedAt")}: ${date}</small></div><div class="saved-actions"><button class="btn tiny primary" data-load="${d.id}">↗ ${t("loadDesign")}</button><button class="btn tiny" data-edit="${d.id}">✏️ ${t("editDesign")}</button><button class="btn tiny danger" data-delete="${d.id}">🗑 ${t("deleteDesign")}</button></div>`;box.appendChild(item)});
  box.querySelectorAll("[data-edit]").forEach(b=>b.addEventListener("click",()=>editDesign(b.dataset.edit)));box.querySelectorAll("[data-load]").forEach(b=>b.addEventListener("click",()=>loadDesign(b.dataset.load)));box.querySelectorAll("[data-delete]").forEach(b=>b.addEventListener("click",()=>deleteDesign(b.dataset.delete)));
}
function escapeHtml(v){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

function showInfo(){document.getElementById("infoTitle").textContent=t("infoTitle");document.getElementById("infoBody").innerHTML=I18N[currentLang].infoBody;openModal("infoOverlay")}
function deleteSavedBrand(id){
  const brand=loadSavedBrand(id);
  if(!brand || !confirm(t("confirmDelete"))) return;
  saveSavedBrands(loadSavedBrands().filter(x=>x.id!==id));
  if(previousBrand==="saved:"+id){previousBrand="zimmatic";localStorage.setItem("pivotcalc-brand",previousBrand);setManualTracks(buildStandardCounts(appSnapshot().totalTracksRounded,Math.max(1,roundInt(BRANDS.zimmatic.length/n(document.getElementById("spanWidth")?.value)||DEFAULT_SPAN_WIDTH))),'auto');}
  renderBrandOptions();
  const sel=document.getElementById("brandSelect");if(sel)sel.value=previousBrand;
  autoFillMain();
}

function openCustom(editId=null){customEditId=editId;const saved=editId?loadSavedBrands().find(x=>x.id===editId):null;document.getElementById("customName").value=saved?saved.name:"";customMode=saved?.mode||"tracks";document.getElementById("customMode").value=customMode;customDraftTracks=saved?saved.userTracks.slice():[];openModal("customOverlay");renderCustomGrid();if(!saved)customAutoFill();document.getElementById("deleteCustomBtn").classList.toggle("hidden",!saved)}
function customActiveCount(){const total=appSnapshot().totalTracksRounded;let used=0,count=0;for(const v of customDraftTracks){const x=Math.max(0,roundInt(n(v)));if(x<=0)break;used+=x;count++;if(used>=total)break}const rem=Math.max(0,total-used);return rem>0?count+1:Math.max(1,count)}
function getCustomUserRows(){const total=appSnapshot().totalTracksRounded;const out=[];let used=0;for(let i=0;i<Math.max(0,customDraftTracks.length-1);i++){const x=Math.max(0,roundInt(n(customDraftTracks[i])));if(x<=0)break;const take=Math.min(x,Math.max(0,total-used));if(take<=0)break;out.push(take);used+=take;if(used>=total)break}return out}
function customRemainder(){const total=appSnapshot().totalTracksRounded;return Math.max(0,total-getCustomUserRows().reduce((a,b)=>a+b,0))}
function renderCustomGrid(){
  const grid=document.getElementById("customGrid");if(!grid)return;
  const active=Math.max(1,customActiveCount()),visible=Math.max(MIN_VISIBLE_WHEELS,active),user=getCustomUserRows(),rem=customRemainder();
  grid.innerHTML="";
  for(let i=0;i<visible;i++){
    const isLast=i===active-1,item=document.createElement("div");
    item.className="custom-item"+(isLast?" last":"")+(i>=active?" disabled":"");
    const val=isLast?(customMode==="length"?rem*appSnapshot().spanWidth:rem):(user[i]||"");
    item.innerHTML=`<label>${t("wheelNo")} ${i+1}</label><input type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" ${isLast?"readonly":""} value="${val!==""?Number(val).toFixed(customMode==="length"?2:0):""}" data-index="${i}"><span class="unit">${customMode==="length"?"m":t("trackUnit")}</span>`;
    const input=item.querySelector("input");
    if(!isLast&&i<active){
      input.addEventListener("focus",()=>{try{input.select()}catch(e){}});
      input.addEventListener("input",onCustomInput);
    }
    grid.appendChild(item);
  }
}
function onCustomInput(e){
  const input=e.currentTarget,index=Number(input.dataset.index);
  const raw=String(input.value||"").replace(/[^0-9]/g,"");
  // Do not rebuild the grid during typing: Android keyboards can lose focus after the first digit.
  input.value=raw;
  customDraftTracks[index]=customMode==="length"?roundInt(n(raw)/appSnapshot().spanWidth):roundInt(n(raw));
  updateCustomRemainderOnly();
}
function updateCustomRemainderOnly(){
  const grid=document.getElementById("customGrid");if(!grid)return;
  const user=getCustomUserRows(),rem=customRemainder();
  const items=grid.querySelectorAll(".custom-item");
  const lastIndex=Math.max(0,user.length);
  items.forEach((item,i)=>{
    const input=item.querySelector("input");if(!input)return;
    const isLast=i===lastIndex;
    item.classList.toggle("last",isLast);
    if(isLast && input!==document.activeElement){input.value=customMode==="length"?Number(rem*appSnapshot().spanWidth).toFixed(2):String(rem);}
  });
}

function updateCustomGridInPlace(){
  const grid=document.getElementById("customGrid");if(!grid)return;
  const active=Math.max(1,customActiveCount()),visible=Math.max(MIN_VISIBLE_WHEELS,active),user=getCustomUserRows(),rem=customRemainder();
  const items=grid.querySelectorAll(".custom-item");
  if(items.length<visible){
    const oldFocus=document.activeElement;
    for(let i=items.length;i<visible;i++){
      const item=document.createElement("div");
      item.className="custom-item disabled";
      item.innerHTML=`<label>${t("wheelNo")} ${i+1}</label><input type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" value="" data-index="${i}"><span class="unit">${customMode==="length"?"m":t("trackUnit")}</span>`;
      const input=item.querySelector("input");
      input.addEventListener("focus",()=>{try{input.select()}catch(e){}});
      input.addEventListener("input",onCustomInput);
      grid.appendChild(item);
    }
    if(oldFocus && oldFocus.isConnected) oldFocus.focus();
  }
  const currentItems=grid.querySelectorAll(".custom-item");
  currentItems.forEach((item,i)=>{
    const isLast=i===active-1;
    item.classList.toggle("last",isLast);item.classList.toggle("disabled",i>=active);
    const input=item.querySelector("input");if(!input)return;
    input.readOnly=isLast;
    const val=isLast?(customMode==="length"?rem*appSnapshot().spanWidth:rem):(user[i]||"");
    if(document.activeElement!==input) input.value=val!==""?Number(val).toFixed(customMode==="length"?2:0):"";
  });
}
function customAutoFill(){const snap=appSnapshot();const saved=customEditId?loadSavedBrand(customEditId):null;const per=Math.max(1,(saved?.tracksPerWheel)||roundInt(BRANDS.zimmatic.length/snap.spanWidth));customDraftTracks=buildStandardCounts(snap.totalTracksRounded,per);renderCustomGrid()}
function customClear(){customDraftTracks=[];renderCustomGrid()}
function saveCustom(){
  const name=document.getElementById("customName").value.trim();
  if(!name)return alert(t("customNameRequired"));
  const snap=appSnapshot(),tracks=normalizeCustomCounts(customDraftTracks,snap.totalTracksRounded);
  if(!tracks.length)return alert(t("noTracks"));
  const span=snap.spanWidth;
  const userValues=customDraftTracks.filter((v,i)=>i<tracks.length-1 && n(v)>0).map(v=>n(v));
  let tracksPerWheel=customMode==="tracks" ? (userValues[0]||tracks[0]||1) : null;
  let towerLength=customMode==="length" ? (userValues[0]||0) : (tracksPerWheel*span);
  tracksPerWheel=Math.max(1,roundInt(tracksPerWheel||towerLength/span));
  const list=loadSavedBrands(),id=customEditId||("b"+Date.now().toString(36));
  const record={id,name,userTracks:tracks,mode:customMode,towerLength:towerLength||null,tracksPerWheel,updatedAt:new Date().toISOString()};
  const idx=list.findIndex(x=>x.id===id);
  if(idx>=0)list[idx]=record;else list.push(record);
  saveSavedBrands(list);
  previousBrand="saved:"+id;localStorage.setItem("pivotcalc-brand",previousBrand);
  renderBrandOptions();document.getElementById("brandSelect").value=previousBrand;
  setManualTracks(buildStandardCounts(snap.totalTracksRounded,tracksPerWheel),'auto');
  closeModal("customOverlay");renderAll();
}
function deleteCustom(){if(!customEditId)return;if(!confirm(t("confirmDelete")))return;saveSavedBrands(loadSavedBrands().filter(x=>x.id!==customEditId));previousBrand="zimmatic";localStorage.setItem("pivotcalc-brand",previousBrand);renderBrandOptions();document.getElementById("brandSelect").value=previousBrand;closeModal("customOverlay");autoFillMain()}

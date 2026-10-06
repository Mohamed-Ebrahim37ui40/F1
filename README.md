# PivotCalc

## جدول المحتويات

1. [نبذة](#نبذة)
2. [ما تم تنفيذه](#ما-تم-تنفيذه)
3. [المعادلات ومصدرها](#المعادلات-ومصدرها)
4. [ماركات البيفوت](#ماركات-البيفوت)
5. [العمل دون اتصال والتثبيت](#العمل-دون-اتصال-والتثبيت)
6. [هيكل الملفات](#هيكل-الملفات)
7. [التشغيل محليًا](#التشغيل-محليًا)
8. [النشر على الإنترنت](#النشر-على-الإنترنت)
9. [التواصل](#التواصل)
10. [مراجعة ملف Excel المرجعي](#مراجعة-ملف-excel-المرجعي)

## نبذة

**PivotCalc** هو تطبيق ويب تقدمي (PWA) لحساب مساحة أجهزة الري المحوري، توزيع الجرر على العجلات، معدل الزراعة، معدل الحصاد، واحتياجات الزراعة والحصاد.

التطبيق لا يعتمد على مكتبات أو خطوط أو صور خارجية أثناء التشغيل، لذلك يمكنه العمل دون اتصال بعد تحميله وتثبيت ملفات التطبيق محليًا.

> ملاحظة مهمة: تثبيت PWA كـ"تطبيق" يحتاج إلى فتحه من أصل آمن HTTPS (أو localhost أثناء التطوير). فتح `index.html` مباشرة من `file://` يسمح بتشغيل الواجهة والحسابات، لكنه لا يفعّل Service Worker ولا يحقق تثبيت PWA الكامل.

## ما تم تنفيذه

- العربية RTL هي اللغة الافتراضية.
- الإنجليزية LTR متاحة بزر واحد.
- الوضع النهاري افتراضيًا مع وضع داكن.
- مساحة البيفوت هي المدخل الأساسي لحساب المساحة.
- عدد الجرر الإجمالي لنصف البيفوت يُحسب تلقائيًا.
- عدد العجلات الفعلية ديناميكي، مع عرض 9 صفوف على الأقل كما في المتطلب.
- آخر عجلة تحتوي على المتبقي من جرر نصف البيفوت.
- مساحة كل عجلة تُحسب من الفرق بين المساحات التراكمية باستخدام صيغة Excel المرجعية.
- إجمالي مساحة نصف البيفوت وإجمالي مساحة البيفوت الكاملة يظهران منفصلين لتجنب الخلط بينهما.
- ماركات Valley وZimmatic وWestern.
- Zimmatic هو الافتراضي للملء التلقائي.
- صفحة "اختيار آخر" داخل نافذة منفصلة تسمح بالإدخال بعدد الجرر أو طول البرج.
- حفظ الماركات المخصصة محليًا عبر `localStorage`.
- تبويب معدل الزراعة.
- تبويب معدل الحصاد.
- تبويب احتياجات الزراعة والحصاد.
- المدخلات اليدوية الخاصة بالزراعة والحصاد محفوظة عند إعادة حساب المساحة.
- روابط البريد والاتصال وروابط الشبكات الاجتماعية.
- Service Worker للتخزين المؤقت والعمل دون اتصال.
- Manifest و192px و512px من نفس صورة الشعار المرفقة.
- لا توجد إعلانات ولا خدمات تحليل خارجية.

## المعادلات ومصدرها

### 1. نصف القطر

المعادلة الأساسية الظاهرة في ملف Excel:

`R = √(Area × 4200 ÷ π)`

حيث 4200 متر مربع لكل فدان.

### 2. إجمالي جرر نصف البيفوت

`Total tracks = R ÷ Track width`

ثم يُقرب العدد لأقرب عدد صحيح قبل توزيع الجرر على العجلات.

### 3. الجرر لكل عجلة

للماركات القياسية:

`Tracks/wheel = Common tower length ÷ Track width`

ثم التقريب لأقرب عدد صحيح.

القيم المضمنة:

- Valley = 52 m
- Zimmatic = 54 m
- Western = 55 m

### 4. معادلة بيرو / المساحة التراكمية

تم نقل البنية الحسابية من ورقة **الجور** في ملف Excel:

`Cumulative area = (2 × θ × Area ÷ 360) + (G × D ÷ 4200)`

حيث:

- `θ = asin(D / R)` بالدرجات.
- `G = cos(θ) × R` طالما أن D داخل نصف القطر.
- `D` هو البعد التراكمي عن السنتر.

بعد ذلك:

`Wheel area = Current cumulative area − Previous cumulative area`

هذه الطريقة هي التي تجعل مساحة العجلات تقل تدريجيًا مع الابتعاد عن مركز البيفوت.

### 5. معدل الزراعة

`Seed quantity (ton) = Total jumbos × Average jumbo weight`

`Planting rate = Seed quantity ÷ Total pivot area`

### 6. معدل الحصاد

`Harvest rate = Harvested jumbos ÷ Total pivot area`

### 7. احتياجات الزراعة

`Jumbos = (Planting rate × Area) ÷ Average jumbo weight`

`Quantity (ton) = Jumbos × Average jumbo weight`

### 8. احتياجات الحصاد

`Harvested jumbos = Harvest rate × Area`

`Trucks = Jumbos ÷ Truck capacity`

## ماركات البيفوت

القيم الحالية مبنية على المواصفات المكتوبة في طلب التطوير ومرجع HTML:

| الماركة | طول البرج الشائع |
|---|---:|
| Valley | 52 m |
| Zimmatic | 54 m |
| Western | 55 m |

يمكن إنشاء ماركة جديدة من **اختيار آخر** وحفظها محليًا.

## العمل دون اتصال والتثبيت

### Android

1. ارفع المجلد إلى استضافة HTTPS.
2. افتح الموقع في Chrome.
3. استخدم أمر **تثبيت التطبيق / Add to Home screen** عندما يظهر.
4. بعد أول تحميل ناجح، يمكن تشغيل PivotCalc دون اتصال.

### iPhone / iPad

1. افتح الموقع من Safari أو متصفح يدعم إضافة مواقع الويب إلى الشاشة الرئيسية.
2. اختر **Share → Add to Home Screen**.
3. شغّل التطبيق من الأيقونة.

### Windows

يمكن تثبيته من Chrome أو Edge عند استضافة الموقع عبر HTTPS، وسيظهر كتطبيق مستقل.

### macOS

يمكن استخدام خيارات تثبيت الموقع/إضافته كتطبيق التي يوفرها المتصفح المتوافق.

> التوافق النهائي وطريقة ظهور زر التثبيت تختلف حسب نظام التشغيل والمتصفح. PWA هي تقنية ويب واحدة وليست ملف APK أو IPA أو EXE.

## هيكل الملفات

```text
PivotCalc/
├── index.html
├── style.css
├── calc.js
├── ui.js
├── main.js
├── sw.js
├── manifest.json
├── icon-192.png
├── icon-512.png
└── README.md
```

### وظيفة كل ملف

- `index.html`: الهيكل والواجهات والتبويبات.
- `style.css`: التصميم، RTL/LTR، الوضع الداكن والاستجابة للشاشات.
- `calc.js`: المعادلات والحسابات.
- `ui.js`: اللغة، عرض النتائج، الجداول، والنافذة المخصصة.
- `main.js`: ربط الأحداث وحفظ المدخلات وتسجيل Service Worker.
- `sw.js`: التخزين المؤقت وتشغيل التطبيق أوفلاين.
- `manifest.json`: تعريف التطبيق وتثبيته.
- `icon-192.png` و`icon-512.png`: نسختان من صورة الشعار المرفقة، للاستخدام على الأنظمة المختلفة.

## التشغيل محليًا

من داخل مجلد التطبيق:

### Python

```bash
python -m http.server 8080
```

ثم افتح:

```text
http://localhost:8080
```

أو استخدم أي خادم ملفات ثابت يدعم localhost.

## النشر على الإنترنت

يمكن رفع الملفات كما هي إلى أي استضافة ملفات ثابتة تعمل عبر HTTPS، مثل GitHub Pages أو استضافة ويب ثابتة أخرى.

لا توجد قاعدة بيانات أو خادم حسابات مطلوب؛ الحسابات كلها تتم في المتصفح.

## التواصل

- Email: mohamed.ibrahim11617@gmail.com
- LinkedIn: https://www.linkedin.com/in/mohamed-ebrahim-771b0540a
- Facebook: https://www.facebook.com/share/1JHu4fGCXa/
- X: https://x.com/Firmo13MH
- WhatsApp: https://wa.me/qr/QIZ446FGUAGGD1
- Telegram: https://t.me/FR6060ME

## مراجعة ملف Excel المرجعي

تمت مراجعة أوراق الملف المرفق:

- `الجور`: تحتوي على معادلة نصف القطر، عرض الجرة، توزيع الجرر، والمساحة التراكمية وصيغة المساحة المستخدمة في التطبيق.
- `Sheet1`: تحتوي على معادلات معدل/كمية الزراعة وبعض إجماليات الجامبوهات.
- `الامتار`: تحتوي على معادلات مساندة لنصف القطر والمساحة وعدد الجرر وبعض حسابات الأبراج.
- `ورقة3`: لا تحتوي على معادلات تشغيلية واضحة في الخلايا المستخدمة.

### ملاحظة تدقيق

يوجد في ملف Excel المرجعي بعض الخلايا المساعدة أو الصيغ غير المكتملة/غير الصالحة، ومنها صيغة غير معتادة في `الجور!C17` ونتيجة `#VALUE!` في إحدى الخلايا التجميعية. لم يتم نقل هذه الأخطاء إلى التطبيق.

تم الاعتماد بدلًا من ذلك على المعادلات التشغيلية المتسقة التي تنتج توزيع الجرر ومساحات العجلات، وعلى معادلات `Sheet1` الخاصة بالزراعة. أي قيمة أو متغير إضافي في ورقة `الامتار` يحتاج إلى مدخلات غير مذكورة في مواصفات الواجهة لم يتم اختراعه كمدخل جديد.

## ملاحظات الدقة

- الحسابات الداخلية تستخدم أرقامًا كاملة/عشرية قبل العرض.
- مساحة العجلة تعرض 4 منازل عشرية في الجدول للحفاظ على الدقة، بدلًا من تقليلها مبكرًا.
- نصف القطر يعرض 3 منازل عشرية.
- إجمالي مساحة البيفوت يعرض 3 منازل عشرية.
- لا يتم تقريب نتيجة المساحة قبل إجراء العمليات التالية.
- التقريب إلى عدد صحيح يُستخدم فقط في إجمالي الجرر وتوزيع الجرر، وفق متطلبات التطبيق ومرجع Excel.

## الترخيص

هذا المشروع مُنشأ خصيصًا لـ PivotCalc بناءً على الملفات والمواصفات المرفقة.

## 10. Android-first update
- الواجهة الرئيسية أصبحت عمودية ومناسبة للشاشات الصغيرة.
- تم تحويل منطقة المساحة إلى **3 جداول متتابعة**: ملخص الحساب، جدول الجرر القابل للتعديل، والتصميمات المحفوظة.
- كل خلية «عدد الجرر» في جدول العجلات قابلة للمسح والكتابة المباشرة، وتُعاد حسابات المساحة والبعد والتوتال فورًا.
- زر **ملء تلقائي** يعيد التوزيع القياسي حسب الماركة وعرض الجرة.
- زر **مسح الجرر** يفرغ خلايا الجرر دون حذف مساحة البيفوت.
- يمكن إضافة عجلة جديدة يدويًا وحذف العجلات الفارغة الزائدة.
- يمكن حفظ أي تصميم باسم، ثم فتحه وتعديله وإعادة حفظه، أو حذفه نهائيًا. الحفظ محليًا داخل الجهاز عبر `localStorage` ويعمل دون إنترنت.
- ملفات الحسابات الأساسية (`calc.js`) وواجهة المستخدم (`ui.js`) والحركة (`main.js`) تظل منفصلة.


## v1.2 updates
- Added the supplied logo image as `logo.png` and regenerated the PWA icon sizes from it.
- Saved designs are capped at 10, with edit/open/delete support retained.
- Fixed Other / Custom numeric entry so Android keyboard focus remains stable while typing multi-digit values.
- Harvest requirements now support manual planning from a harvest rate in ton/Feddan and either a target jumbo count or a target truck count with truck capacity, returning the required harvest area.

## v1.4 updates

- Wheel area is now calculated from the **same wheel's standard area per track**. Example for 125 feddan / 1.8 m / Zimmatic: wheel 1 is 0.3493 feddan per track, so 10 tracks = 3.493 feddan; wheel 6 is 0.2399 per track, so 10 tracks = 2.399 feddan. A full wheel retains the exact Biro wheel area.
- Track entry is capped at the selected brand's standard tracks per wheel; a saved custom brand supplies its own saved `tracksPerWheel`.
- Saved custom brands now retain their autofill settings and have edit/delete controls.
- Auto-fill recalculates from the **current pivot area**, including after changing the area.
- PWA install/update handling was strengthened: relative `start_url`, versioned service-worker cache, fresh navigation update, Android install prompt, and iOS Add to Home Screen guidance.

## PWA installation compatibility

PivotCalc is a web PWA and can run from one codebase across Android, iOS/iPadOS, Windows and macOS browsers. Installation availability and UI are browser/platform dependent. It must be served from HTTPS (or localhost during development). Android Chrome/Samsung Internet can install as a PWA where supported; iOS uses the browser's Add to Home Screen flow; desktop Chromium browsers provide an install flow. Firefox does not provide the same manifest-based PWA installation flow.

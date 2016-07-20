﻿define(
	 ({
		builder: {
			layouts: {
				mainStage: "תצוגה ראשית",
				sideTitle: "פנאל צדדי",
				sideDescr: "תצוגת סיפור המיועדת לשימוש נרחב בטקסט בשילוב וידאו, תמונות ומפות בצורה ברורה וממוקדת.",
				floatTitle: "פאנל צף",
				floatDescr: "תצוגת מפה שמדגישה את הקרטוגרפיה ובמקביל לוח טקסט שקוף המסייע לספר סיפור."
			},
			common: {
				lblStatus1: "מפורסם",
				lblStatus2: "טיוטה",
				lblStatus3: "מוסתר"
			},
			settingsLayoutOptions: {
				title: "אפשרויות עימוד",
				cfgLeft: "שמאל",
				cfgRight: "ימין",
				cfgSmall: "קטן",
				cfgMedium: "בינוני",
				cfgLarge: "גדול",
				socialLinksLabel: "הצג את הקישורים המשותפים בחלק התחתון של כל קטע",
				socialLinksDescr: "זה מאפשר לקוראים להפנות ולקדם מקטעים מסוימים של ה-%TPL_NAME% שלך. לדוגמה, אם אתה משתמש בסמל שיתוף מקטעים, הקוראים יגיעו למקטע ספציפי ב-%TPL_NAME% במקום להגיע לתחילת הסיפור. הקוראים שלך יוכלו להשתמש בקישור המדיה החברתית במקטע הכותרת כדי לקדם את כל ה-%TPL_NAME% (לשונית הכותרת) ולהגיע לתחילת ה-%TPL_NAME%."
			},
			settingsLayoutFonts: {
				title: "גופנים",
				defaultLbl: "ברירת מחדל",
				sectionTitleLbl: "כותרת מקטע",
				sectionContentLbl: "תוכן מקטע"
			},
			initPopup: {
				title: "ברוכים הבאים אל"
			},
			addEditPopup: {
				disabled: "לא ניתן להוסיף חלק חדש כיוון שמספר החלקים הגיע למספר המרבי המותר.",
				titleAdd: "הוסף חלק",
				titleAddHome: "הוסף חלק דף הבית",
				titleEdit: "ערוך חלק",
				step: "צעד",
				stepMainStageExplain: "תוכן התצוגה הראשית",
				stepPanelExplain: "תוכן",
				stepMainStageNextTooltip: "הכנס את כותרת החלק ובחר את תכולת התצוגה הראשית",
				stepMainStageNextTooltip2: "בחר את תוכן התצוגה הראשית",
				step2NextTooltip: "הכנס את כותרת החלק ותכולת ה%LAYOUT-TYPE%",
				stepNextTooltipNext: "התקדם לשלב הבא",
				stepNextTooltipAdd: "להוספת החלק",
				firstAddExplain: "החלק הראשון הוא דף הבית שלך, חשוב על זה כעל דף ראשי לסיפור שלך. הכותרת שהגדרת כעת תוצג בגופן גדול.",
				firstAddLeanMore: "לימוד נוסף",
				titlePlaceholder: "כותרת החלק..."
			},
			addEditViewText: {
				editorPlaceholder: "הוסף כאן טקסט, קישורים וכמות מוגבלת של גרפיקה",
				editorActionsTitle: "פעולות תצוגה ראשית",
				editorActionsHelpDescr: "השתמש בפקדים הללו ליצור קישורים שישנו את התצוגה הראשית. לדוגמא, כאשר הקורא לוחץ על קישור אתה תרצה להתמקד במפה על מיקום ספציפי, להציג web map אחר או להציג תמונה.",
				mainStageDisabled: "פעולות תצוגה ראשית אינן זמינות כאשר העורך בגודל המרבי"
			},
			organizePopup: {
				title: "ארגן",
				lblHeader: "גרור ושחרר קטעים כדי לארגן את הסיפור שלך.",
				lblColTitle: "כותרת",
				lblColPubDate: "תאריך הפצה",
				lblColStatus: "סטטוס",
				checkDisplayReverse: "הצג חלקים בסדר הפוך",
				btnApplyWarning: "אשר מחיקה של %NB% חלקים.",
				deleteTooltip: "מחק",
				firstSectionExplain: "(לא ניתן להזיז את חלק דף הבית)",
				exportMainStage: "תוכן התצוגה הראשית",
				exportPanel: "תוכן לוח",
				exportActions: "פעולות תצוגה ראשית"
			},
			exportData: {
				btn: "יצוא תוכן",
				tooltip: "יצוא התוכן שלך מאפשר לך לצפות וליצור גיבוי של התוכן שלך במקרה ותמחק אותו בטעות. פשוט העתק והדבק את התוכן מהדף לכל מעבד תמלילים."
			},
			help: {
				lblHelp: "עזרה",
				lblAdd: "הוסף חלק",
				lblSettings: "הגדרות",
				lblOrga: "ארגן תוכן",
				lblEdit: "עריכה",
				lblPublish: "שתף",
				lblTips: "טיפים",
				lblMore: "רוצה עוד?",
				lblLink: "בקר באתר מפות סיפור של Esri.",
				content1Div1: "ניתן לשלב מגוון סגנונות בעת בניית הסיפור שלך. ה- <strong>%LAYOUT_TITLE%</strong> בדרך כלל כולל את הטקסט שלך, וידאו ותמונות בזמן שהמפות שלך מתחלפות <strong>בתצוגה הראשית</strong>. עם זאת, ה- %TPL_NAME%  מאפשר לך להוסיף תמונות, וידאו ותרשימים גם בתוך התצוגה הראשית.",
				content1Div2: "הוספת חלקים מאפשרת לך להתאים אישית את חויית הסיפור שלך. כאשר הקוראים גוללים את הטקסט בתוך ה%LAYOUT_TITLE% המפה בתצוגה הראשית יכולה להתמקד לנקודות מפתח, ומפות ותמונות יכולות להתחלף באופן אוטומטי כדי לתמוך במסר שלך.",
				content2Div1: "תיבת הדו-שיח \'הגדרות\' היא המקום שבו תוכל לשנות את המראה של %TPL_NAME%. תוכל לשנות את הפריסה, לבחור סכמת צבעים אחרת, לשנות את הגופן ועוד.",
				content2Div2: "תוכל גם להחליף את הלוגו של Esri עם לוגו משלך כדי לשקף את המותג שלך. בנוסף, תוכל לציין איזה אתר אינטרנט יופעל אם הקוראים לוחצים על הלוגו שלך, כדי שיוכלו לקבל מידע נוסף.",
				content3Div1: "התוכן שלך מאורגן בחלקים. אתה יכול להגדיר חלקים רבים ככל שתרצה (חשוב עליהם כמו פרקים קטנים). המעבר בין הפרקים חשוב; בעזרת כלי זה באפשרותך לסדר מחדש או למחוק חלקים כרצונך.",
				content4Div1: "מצאת שגיאה או רוצה לשנות את התוכן שלך? אל דאגה. חפש את סמל העריכה באפליקציה כדי לבצע שינויים בתוכן שלך. אתה יכול להשתמש ביכולות העריכה פעמים רבות בעת שאתה מפתח את ה-  %TPL_NAME% שלך!",
				content5Div1: "בתחילה בעת שמירה ה- %TPL_NAME%, הוא פרטי. השתמש בלחצן \'שתף\' כדי לשתף אותו עם אחרים. תוכל לשתף את %TPL_NAME% באופן ציבורי, כדי שכל אחד יוכל לגשת אליו.",
				content5Div2: "בהתאם לחשבון שלך, ייתכן שתהיה לך גם אפשרות לשתף את ה- %TPL_NAME% רק לאנשים בארגון שלך, כדי שאנשים אחרים לא יוכלו לגשת אליו.",
				content6Div1: "כותרת חלק דף הבית שלך היא גם כותרת החוברת; חשוב על חלק דף הבית שלך כעל העמוד הראשי של הסיפור שלך. כותרת חלק דף הבית שלך תוצג גם כאשר הקוראים ינווטו לחוברת.",
				content6Div2: "ה%LAYOUT_TITLE% שלך לא חייב להכיל רק טקסט. שקול לכלול בתוכו גם וידאו ותמונות כדי להחיות את הסיפור ולגוון חלקי טקסט ארוכים."
			},
			landing: {
				lblAdd: "כיצד אתה רוצה לקרוא לחוברת המפות שלך?",
				phAdd: "הכנס את הכותרת שלך...",
				lblOR: "או",
				lblHelp: "סייר"
			},
			firstAddSplash: {
				thisis: "זהו",
				lblMain: "זוהי התצוגה הראשית %BR%"
			}
        }
    })
);

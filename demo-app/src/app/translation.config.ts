/*tslint:disable:completed-docs*/
/// import { DateAdapter } from "@angular/material/core";
import { TranslateService } from "@ngx-translate/core";

const translationsEn: object = require("../assets/translations/en.json");
const translationsFr: object = require("../assets/translations/fr.json");
const translationsNl: object = require("../assets/translations/nl.json");

export function initializeTranslation(translateService: TranslateService /*dateAdapter: DateAdapter<any>*/): void {
	translateService.addLangs(["en", "fr", "nl"]);
	translateService.setDefaultLang("en");
	translateService.use("en");

	/// dateAdapter.setLocale("en-us");

	translateService.setTranslation("en", translationsEn);
	translateService.setTranslation("fr", translationsFr);
	translateService.setTranslation("nl", translationsNl);
}

"use client";

import React from "react";
import "survey-core/survey-core.css"; // is this the default theme?
import "./progressBar.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import surveyJson from "./surveyJson.json";
import { Serializer } from "survey-core";
import { ReactSurveyElement, ReactElementFactory } from "survey-react-ui";
import { PlainLightPanelless } from "survey-core/themes";
import { StylesManager } from "survey-react-ui"; // or survey-react
import surveyTheme from "./surveyTheme.json";
import { useCallback } from "react";
import surveySubmitHandler from "./surveySubmitHandler";

Serializer.addProperty("survey", "progressTitle");

// were in json:
//   "showProgressBar": true,
//   "progressBarLocation": "top",
//   "progressBarType": "pages",

class PercentageProgressBar extends ReactSurveyElement {
  render() {
    console.log("props", this.props.model);

    // this is just to make the progress bar show at least a little bit even if only on page 1
    //! ORIG const progressValue = !this.props.model.progressValue ? 3 : this.props.model.progressValue;

    //TODO redoing to replicate original site survey progress bar
    const numOfPages = this.props.model.pages.length;
    const currentPage = this.props.model.currentPageNo;
    // NOTE: This currentPage value is one behind, for some reason...  (e.g. step 1 is page: 0)

    let progressValue = ((currentPage + 1) / numOfPages) * 100; // this * 100 gets the percentage value

    // just to make sure
    if (progressValue > 100) progressValue = 100;

    return (
      <>
        <span className="text-gray-700 text-sm font-semibold mb-1">{this.props.model.progressText.replace("Page", "Step")}</span>
        <div className="sv-progressbar-percentage">
          {/* <div className="sv-progressbar-percentage__title">
          <span>{this.props.model.progressTitle}</span>
        </div>  NO TITLE SO COMMENTING OUT */}
          <div className="sv-progressbar-percentage__indicator">{progressValue >= 0 && <div className="sv-progressbar-percentage__value-bar" style={{ width: progressValue + "%" }}></div>}</div>
          {/* <div className="sv-progressbar-percentage__value">
            <span>{progressValue + "%"}</span>
          </div> */}{" "}
          {/* //!THIS IS ORIG FOR % BIT */}
        </div>
      </>
    );
  }
}

ReactElementFactory.Instance.registerElement("sv-progressbar-percentage", (props) => {
  return React.createElement(PercentageProgressBar, props);
});

// StylesManager.ThemeColors["modern"]["$main-color"] = "#newColor"; // does not work

const SurveyComponent = () => {
  const survey = new Model(surveyJson);
  survey.applyTheme(PlainLightPanelless);
  survey.applyTheme(surveyTheme);
  // survey.onComplete.add((sender, options) => {
  //   console.log(JSON.stringify(sender.data, null, 3));
  // });
  survey.addLayoutElement({
    id: "progressbar-percentage",
    component: "sv-progressbar-percentage",
    container: "contentTop",
    data: survey,
  });

  //!TESTING
  // const alertResults = useCallback((survey) => {
  //   surveySubmitHandler
  // }, []);

  survey.onComplete.add((sender, options) => {
    surveySubmitHandler(sender.data);
  });

  return <Survey model={survey} />;
};

export default SurveyComponent;

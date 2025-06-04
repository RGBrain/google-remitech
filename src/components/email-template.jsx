import * as React from "react";

export const EmailTemplate = ({ surveyData }) => {
  // surveryJSON already stringified in surveySubmitHandler.js

  const surveyObject = JSON.parse(surveyData);

  return (
    <div>
      <h1>Survey submitted</h1>
      <h2>JSON:</h2>
      <table>
        <tbody>
          {Object.keys(surveyObject).map((keyName, i) => (
            <tr key={i}>
              <th style={{ textAlign: "left", verticalAlign: "top" }}>{keyName}</th>
              <td style={{ paddingLeft: "40px", textAlign: "left", verticalAlign: "top" }}>
                {typeof surveyObject[keyName] == "string"
                  ? surveyObject[keyName]
                  : surveyObject[keyName].map((value, i) => (
                      <React.Fragment key={i}>
                        {value}
                        {i < surveyObject[keyName] - 1 ? <br /> : ""}
                        <br />
                      </React.Fragment>
                    ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

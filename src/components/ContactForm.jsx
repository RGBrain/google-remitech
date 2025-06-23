"use client";

import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import emailCSV from "@/lib/emailCSV";
import { track } from "@vercel/analytics";

const ContactForm = () => {
  const [cmsForm, setCmsForm] = useState(null);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

  //Get form from payload

  const formId = 1;

  useEffect(() => {
    // Fetch form configuration
    fetch(`/api/forms/${formId}`)
      .then((res) => res.json())
      .then((data) => {
        setCmsForm(data);
      })
      .catch((err) => setError("Error loading form"));
  }, [formId]);

  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    // first add vercel analytics 'custom event'
    track("ContactFormSubmit");

    const formData = new FormData(e.currentTarget);

    // Convert form data to a JSON object, for fields that are not files
    const dataToSend = Array.from(formData.entries()).map(([name, value]) => ({
      field: name,
      value: value.toString(),
    }));

    // Send the form data to payload
    const response = await fetch("/api/form-submissions", {
      method: "POST",
      body: JSON.stringify({
        form: formId,
        submissionData: dataToSend,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
    if (response.ok) {
      setSuccess(true);
    } else {
      setError("Form submission failed");
      setSuccess(false);
    }

    // Reset form
    formRef.current?.reset();

    emailCSV();
  };

  if (!cmsForm) return <div>Loading...</div>;

  if (success && cmsForm.confirmationMessage) {
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
    return (
      <span className="mx-auto block pt-4 pb-8 text-center text-xl font-bold">
        <RichText data={cmsForm.confirmationMessage} />
      </span>
    );
  }

  // Render the form based on field types
  console.log(cmsForm.fields);
  return (
    <>
      <div className="text-remitech-turquoise rounded-lg bg-white px-8 pt-2 pb-8 text-sm lg:px-12">
        <h3
          id="FormRegisterInterest"
          className="mt-8 mb-8 text-4xl text-gray-900"
        >
          Register Interest
        </h3>
        <form onSubmit={handleSubmit} ref={formRef}>
          {/* <label htmlFor={field.name}>{field.label}</label> */}
          <div className="flex flex-col items-start space-y-2">
            {cmsForm.fields.map((field, i) => {
              if (field.blockType === "checkbox") {
                return (
                  <div key={i} className="mt-2 flex items-start">
                    <input
                      type={field.blockType}
                      name={field.name}
                      id={field.name}
                      className="rounded-md bg-white p-5 py-4"
                      placeholder={field.label}
                      required={field.required}
                    />
                    <label className="-mt-[2px] ml-3 inline-block pl-0 text-xs text-gray-900">
                      I agree to my data being handled in line with
                      <a
                        href="https://remitech.com/privacy/"
                        className="whitespace-nowrap"
                        target="_blank"
                      >
                        &nbsp;Remitech's privacy policy
                      </a>
                    </label>
                  </div>
                );
              } else if (field.blockType === "select") {
                return (
                  <select
                    key={i}
                    name={field.name}
                    id={field.name}
                    defaultValue=""
                    required={field.required}
                    className="bg-btn hover:bg-remitech-purple mb-6 cursor-pointer rounded-md px-4 py-2 text-white"
                  >
                    <option hidden disabled value="">
                      Select Event
                    </option>
                    {field.options.map((eventObj, i) => (
                      <option key={i} value={eventObj.value}>
                        {eventObj.label}
                      </option>
                    ))}
                  </select>
                );
              } else {
                return (
                  <input
                    key={i}
                    type={field.blockType}
                    name={field.name}
                    id={field.name}
                    className="h-6 w-full rounded-md bg-white p-5 py-[18px] text-gray-900"
                    style={{
                      borderOpacity: "0.2",
                      border: "solid 1px #7fa6fb",
                    }}
                    placeholder={field.label}
                    // REACT INSERTS 'REQUIRED' IF REQUIRED=TRUE
                    required={field.required}
                  />
                );
              }
            })}
          </div>

          <button
            className="bg-btn hover:bg-remitech-purple mt-5 transform cursor-pointer rounded-md p-1 px-5 text-base font-bold text-white transition duration-200 ease-in hover:scale-101"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

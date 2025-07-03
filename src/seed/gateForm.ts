import { RequiredDataFromCollectionSlug } from "payload";

export const gateForm: RequiredDataFromCollectionSlug<"forms"> = {
  title: "Gate Form",

  fields: [
    {
      id: "6861f967f6964e3c47b4c5fa",
      name: "fullName",
      label: "Full Name",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },
    {
      id: "6861f978f6964e3c47b4c5fb",
      name: "organisation",
      label: "Organisation",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },
    {
      id: "6861f98bf6964e3c47b4c5fc",
      name: "jobTitle",
      label: "Job Title",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },
    {
      id: "6861f9a5f6964e3c47b4c5fd",
      name: "email",
      label: "Email",
      width: null,
      required: true,
      blockName: null,
      blockType: "email",
    },
    {
      id: "6861f9aef6964e3c47b4c5fe",
      name: "contactNumber",
      label: "Contact Number",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },
    {
      id: "6861f9dbf6964e3c47b4c5ff",
      name: "country",
      label: "Country",
      width: null,
      required: false,
      blockName: null,
      blockType: "country",
    },

    {
      id: "6861fa81f6964e3c47b4c600",
      name: "agreement",
      label:
        "I agree to my data being handled in line with Remitech's privacy policy",
      width: null,
      required: true,
      defaultValue: null,
      blockName: null,
      blockType: "checkbox",
    },
  ],
  submitButtonLabel: "Submit",
  confirmationType: "message",
  confirmationMessage: {
    root: {
      type: "root",
      format: "",
      indent: 0,
      version: 1,

      children: [
        {
          type: "paragraph",
          format: "",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Thank you for downloading Prompting Guide PDF",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textStyle: "",
          textFormat: 0,
        },
      ],
      direction: "ltr",
    },
  },

  redirect: {
    url: null,
  },
  emails: [],
  updatedAt: "2025-06-30T02:46:39.885Z",
  createdAt: "2025-06-30T02:44:53.631Z",
};

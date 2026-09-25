// sanity/structure.js

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("homepage").title("Homepage"),
      S.documentTypeListItem("property").title("Properties"),
      S.divider(),

      S.listItem()
        .title("Calculator Settings")
        .child(
          S.document()
            .schemaType("calculatorSettings")
            .documentId("calculatorSettings")
            .title("Calculator Settings")
        ),
    ]);
/* eslint-disable */
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const outputPath = path.resolve(__dirname, '..', 'public/data/candidates.json');

(async () => {
  const { data } = await axios.get(
    'https://api.airtable.com/v0/appcugpyE5rF7q0vP/candidates?api_key=keydg4dT0FMPwkNZT'
  );

  console.log(data);

  const json = data.records.map((d) => {
    return {
      ...d.fields,
      Nachname: d.fields.Nachname.trim(),
      Vorname: d.fields.Vorname.trim(),
    };
  });

  fs.writeFile(outputPath, JSON.stringify(json), (err) => {
    if (err) {
      throw err;
    }
  });
})();

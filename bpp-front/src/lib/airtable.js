const airtable = require( 'airtable' );

// Key: keyUatuYQPhRYSJEK
// Base:  appQOTOWNdmjL5TuL

const base = new airtable( { apiKey: `keyUatuYQPhRYSJEK` } ).base( `appQOTOWNdmjL5TuL` );
const table = base( `Sheet1` );

const minifyRecords = async (records) => {
  if ( records ) {
    return records.map( (record) => getMinifiedRecord( record ) );
  }
};
const getMinifiedRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields
  };
};

export { table, getMinifiedRecord, minifyRecords };

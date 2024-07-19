/** function for fetching API */
async function getAPI(apidata:{url:string, error:string}) {
  const res = await fetch(apidata.url)
  if (!res.ok) {
      throw new Error(apidata.error)
  }
  return res.json()
}

/** returns the number index from the API url for the character */
  const returnIndex = (url: string) : string =>{
    const urlArray = url.split('/');
    return urlArray[urlArray.length-1]
 }

/** reformatting the date */
const dateStringFormat = (date: string, year: string = ''): string =>{
  const dateArr = date.split(/[-T:]/);
  const dateFormat = dateArr[1]+'-'+dateArr[2]+'-'+dateArr[0];

  // if year, return only the year. else return full date
  return(
  year === 'YEAR'
  ?  dateArr[0]
  :  dateFormat)
}

export {getAPI, returnIndex, dateStringFormat}
import { BibleInfo } from "../model/bible/bible"

type BibleDataType = {
  bible_code: number,
  bible_name: string,
  bible_name_eng: string,
  short_name: string,
  short_name_eng: string,
  chapter: number,
}

const bibleDataToDomain = (data:Array<BibleDataType>) => {
  return data.map(item => new BibleInfo(
    item.bible_code,
    item.bible_name,
    item.bible_name_eng,
    item.short_name,
    item.short_name_eng,
    item.chapter
  ))
}
const BibleDataMapper = {
  bibleDataToDomain
}
export default BibleDataMapper;
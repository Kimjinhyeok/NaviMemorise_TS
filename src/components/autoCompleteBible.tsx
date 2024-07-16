import React, { FocusEventHandler, SyntheticEvent, useMemo, useState } from 'react'
import { AutocompleteChangeReason, AutocompleteRenderInputParams, TextField } from '@mui/material';

import {Autocomplete} from '@mui/material'; 
import MetaBibleData from '../meta/bible';
import { BibleInfo } from '../domain/model/bible/bible';
import BibleDataMapper from '../domain/mapper/bible';

interface AutoCompleteBibleProps {
  onChange?:(event:SyntheticEvent, value:BibleInfo)=>void,
  onFocus?:FocusEventHandler,
  fullWidth?:boolean,
  validator?:boolean,
  defaultValue?:number,
  className?:string,
  disabled?:boolean,
  id?:string,
  renderOption?:JSX.Element,
  autocompleteTextfieldRender?:(params:AutocompleteRenderInputParams)=>(React.ReactElement),
}

const DefaultRenderOption = ((params:{[key: string]:string}) => (<><span className={'mr-2'}>{params.short_name}</span>{params.bible_name}</>));
const DefaultAutoCompleteTextRender = (validator:boolean, onFocus:FocusEventHandler) => (params:AutocompleteRenderInputParams) => {
  return (
    <TextField 
      // key={params.bible_code} 
      label="성경"
      variant="outlined" 
      required
      error={validator}
      helperText={validator ? '성경을 선택해주세요' : ''}
      onFocus={ onFocus }
      {...params} 
    />
  )
}
export default function AutoCompleteBible(props:AutoCompleteBibleProps) {


  const { 
    onChange = (event, value)=>{}, 
    onFocus = (event)=>{}, 
    fullWidth = false, 
    validator = false, 
    defaultValue = 1, 
    className, 
    id = "autoCompleteBible",
    disabled = false,
    renderOption = DefaultRenderOption,

  } = props;

  const autocompleteTextfieldRender = props.autocompleteTextfieldRender ?? DefaultAutoCompleteTextRender(validator, onFocus);
  const [value, setValue] = useState<BibleInfo|null>(null);

  const BibleOptions = useMemo(() => {
    const bibleInfoList = BibleDataMapper.bibleDataToDomain(MetaBibleData);
    return bibleInfoList;
  }, [MetaBibleData])

  React.useEffect(() => {
    const bibleValue = defaultValue ? BibleOptions.find(item => item.bibleCode == defaultValue) : BibleOptions[0];
    setValue(bibleValue ?? null);
  }, [BibleOptions])
  
  const onHandleChange = (event:React.SyntheticEvent, newValue:BibleInfo|null, reason:AutocompleteChangeReason) => {
    if(!newValue) return;
    setValue(newValue);
    onChange(event, newValue);
  }
  const optionLabelFnc = (params:BibleInfo) => {
    return params.bibleName
  };
  return (
    <Autocomplete
      id={id}
      options={BibleOptions}
      getOptionLabel={optionLabelFnc}
      onChange={onHandleChange}
      disabled={disabled}
      fullWidth={fullWidth}
      renderInput={autocompleteTextfieldRender}
      value={value}
    ></Autocomplete>
  )
}
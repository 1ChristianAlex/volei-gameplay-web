import { Component } from 'solid-js';
import { TextFieldTypeMap } from '@suid/material/TextField';
import { RoundedInputStyled } from './styled';

const RoundedInput: Component<TextFieldTypeMap['props']> = (props) => (
  <RoundedInputStyled {...props} />
);

export default RoundedInput;

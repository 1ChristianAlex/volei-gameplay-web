import { Component } from 'solid-js';
import { RoundedButton } from './styled';
import ButtonProps from '@suid/material/Button/ButtonProps';

const RoudedButton: Component<ButtonProps> = (props) => (
  <RoundedButton {...props} disableElevation />
);

export default RoudedButton;

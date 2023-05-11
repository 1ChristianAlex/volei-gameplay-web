import { Component, JSX } from 'solid-js';
import { TitleStyled } from './styled';

interface PageTitleProps {
  children: JSX.Element;
  ref?: HTMLHeadingElement | ((el: HTMLHeadingElement) => void);
}

const PageTitle: Component<PageTitleProps> = (props) => (
  <TitleStyled ref={props.ref}>{props.children}</TitleStyled>
);

export default PageTitle;

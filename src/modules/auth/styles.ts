import styled from '@suid/system/styled';
import { Paper } from '@suid/material';

const PaperContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '500px',
  margin: '0 auto',
});

const PaperForm = styled(Paper)((props) => ({
  padding: 16,
  backgroundColor: props.theme.palette.background.paper,
  width: '100%',
}));

export { PaperContainer, PaperForm };

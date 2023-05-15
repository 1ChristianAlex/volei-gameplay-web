import { Component, createSignal } from 'solid-js';
import { FixedButtonContainer, FixedButton, AbsoluteTransitionButton } from './styled';
import CalendarMonthOutlinedIcon from '@suid/icons-material/CalendarMonthOutlined';
import CheckCircleOutlineOutlinedIcon from '@suid/icons-material/CheckCircleOutlineOutlined';
import { Grid, useTheme } from '@suid/material';

interface SwitchButtonProps {
  onSwitchChange: (isSwithOn: boolean) => void;
  defaultIsSwitchOn?: boolean;
}

const SwitchButton: Component<SwitchButtonProps> = ({
  onSwitchChange,
  defaultIsSwitchOn,
}) => {
  const [alignPosition, setAlignPosition] = createSignal(defaultIsSwitchOn ?? true);
  const theme = useTheme();

  const handleSwitchChange = () => {
    setAlignPosition((current) => !current);
    onSwitchChange(alignPosition());
  };

  return (
    <FixedButtonContainer>
      <FixedButton
        color="primary"
        variant="text"
        onClick={handleSwitchChange}
        disableRipple
        disableFocusRipple
        disableTouchRipple
      >
        <Grid container justifyContent="space-around" alignItems="center" direction="row">
          <Grid item>
            <CalendarMonthOutlinedIcon
              class="icon-high-index"
              htmlColor={theme.palette.primary.contrastText}
              display="flex"
            />
          </Grid>

          <Grid item>
            <CheckCircleOutlineOutlinedIcon
              class="icon-high-index"
              htmlColor={theme.palette.primary.contrastText}
              display="flex"
            />
          </Grid>
        </Grid>
        <AbsoluteTransitionButton
          style={{
            right: alignPosition() ? '50%' : '0',
            left: alignPosition() ? '0' : '50%',
          }}
        />
      </FixedButton>
    </FixedButtonContainer>
  );
};

export default SwitchButton;
